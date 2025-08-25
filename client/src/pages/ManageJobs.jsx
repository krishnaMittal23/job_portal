import React, { useContext, useEffect, useState } from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import ShimmerUI from '../components/Shimmer'

const ManageJobs = () => {

  const navigate = useNavigate();

  const [jobs, setJobs] = useState(false)

  const {backendUrl,companyToken} = useContext(AppContext)

  // function to fetch company job application data

  const fetchCompanyJobs = async()=>{

    try {

      const {data} = await axios.get(backendUrl+'/api/company/list-jobs',
        {headers: {token : companyToken}}
      )

      if(data.success){
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
        
      }
      else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
      
    }

  }

  // function to change job visibility
  const changeJobVisibility = async (id) => {
    try {

      const {data} = await axios.post(backendUrl+'/api/company/change-visiblity', {id}, {headers: {token:companyToken}})

      if(data.success){
        toast.success(data.message)
        fetchCompanyJobs();
      }
      else{
        toast.error(data.message)
      }
      
    } catch (error) {
      toast.error(error.message)
      
    }
  }

  useEffect(()=>{
    if(companyToken){
      fetchCompanyJobs()
    }
  },[companyToken])

  return jobs ? jobs.length===0 ? (<div className='flex items-center justify-center h-[70vh]'><p className='text-xl sm:text-2xl'>No jobs Available</p></div>) : (
    <div className="p-6  min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-4 px-6 border-b border-gray-300">#</th>
              <th className="py-4 px-6 border-b border-gray-300">Job Title</th>
              <th className="py-4 px-6 border-b border-gray-300">Date</th>
              <th className="py-4 px-6 border-b border-gray-300">Location</th>
              <th className="py-4 px-6 border-b border-gray-300">Applicants</th>
              <th className="py-4 px-6 border-b border-gray-300">Visible</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="py-4 px-6 font-medium text-gray-600">{index + 1}</td>
                <td className="py-4 px-6 text-gray-800">{job.title}</td>
                <td className="py-4 px-6 text-gray-700">{moment(job.date).format('ll')}</td>
                <td className="py-4 px-6 text-gray-700">{job.location}</td>
                <td className="py-4 px-6 text-gray-700">{job.applicants}</td>
                <td className="py-4 px-6">
                  <input onChange={()=>changeJobVisibility(job._id)} type="checkbox" checked={job.visible} className="form-checkbox h-4 w-4 text-blue-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button onClick={()=>navigate('/dashboard/add-job')} className='bg-black text-white py-2 px-4 rounded-lg cursor-pointer'>Add new job</button>
      </div>
    </div>
  ) : <ShimmerUI/>
}

export default ManageJobs
