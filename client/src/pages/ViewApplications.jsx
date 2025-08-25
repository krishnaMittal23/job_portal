import React, { useContext, useEffect, useState } from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import ShimmerUI from '../components/Shimmer';

const ViewApplications = () => {

  const {backendUrl,companyToken} = useContext(AppContext)

  const [applicants, setApplicants] = useState(false)

  // fn to fetch company job applications data
  const fetchCompanyJobApplications = async() =>{

    try {
      
      const {data} = await axios.get(backendUrl+'/api/company/applicants',
        {headers: {token : companyToken}}
      );

      if(data.success){
        setApplicants(data.applications.reverse());
      }
      else{
        toast.error(data.message)
      }

      
    } catch (error) {
      toast.error(error.message)
      
    }
  }


  // update job application status
  const changeJobApplicationStatus = async(id,status)=>{
    try {

      const {data} = await axios.post(backendUrl+'/api/company/change-status',
        {id, status},
        {headers : {token: companyToken}}
      )

      if(data.success){
        fetchCompanyJobApplications();

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
      fetchCompanyJobApplications()
    }

  },[companyToken])


  return applicants ? applicants.length===0 ? (<div className='flex items-center justify-center h-[70vh]'><p className='text-xl sm:text-2xl'>No Applications Available</p></div>) : (
    <div className="p-6 max-w-8xl mx-auto">
      <div className=" bg-white rounded-xl shadow">
        <table className="min-w-full text-sm text-left border-collapse px-5">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              
              <th className="py-4 px-6 border-b border-gray-300">#</th>
              <th className="py-4 px-6 border-b border-gray-300">User Name</th>
              <th className="py-4 px-6 border-b border-gray-300">Job Title</th>
              <th className="py-4 px-6 border-b border-gray-300">Location</th>
              <th className="py-4 px-6 border-b border-gray-300">Resume</th>
              <th className="py-4 px-6 border-b border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicants.filter(item => item.jobId && item.userId).map((applicant, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-300">
                <td className="py-4 px-6 font-medium text-gray-600">{index + 1}</td>
                <td className="py-4 px-6 flex items-center gap-3">
                  <img
                    src={applicant.userId.image}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <span className="text-gray-800">{applicant.userId.name}</span>
                </td>
                <td className="py-4 px-6 text-gray-700">{applicant.jobId.jobTitle}</td>
                <td className="py-4 px-6 text-gray-700">{applicant.jobId.location}</td>
                <td className="py-4 px-6">
                  <a
                    href={applicant.userId.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    Resume
                    <img src={assets.resume_download_icon} alt="download" className="w-4 h-4" />
                  </a>
                </td>
                <td className="py-4 px-6 relative">
                    {applicant.status==="Pending" ? 
                    <div className="relative inline-block text-left group">
                    <button className="text-gray-500 action-button hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition">
                      ...
                    </button>
                    <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                      <button onClick={()=>changeJobApplicationStatus(applicant._id, 'Accepted')} className="block w-full cursor-pointer text-left px-4 py-2 hover:bg-green-50 text-green-600">
                        Accept
                      </button>
                      <button onClick={()=>changeJobApplicationStatus(applicant._id, 'Rejected')}  className="block w-full cursor-pointer text-left px-4 py-2 hover:bg-red-50 text-red-600">
                        Reject
                      </button>
                    </div>
                  </div>
                  :

                  <div>{applicant.status}</div>
                
                }
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : <ShimmerUI/>;
};

export default ViewApplications;
