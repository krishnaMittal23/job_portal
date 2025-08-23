import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router'

const ManageJobs = () => {

  const navigate = useNavigate();

  return (
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
            {manageJobsData.map((job, index) => (
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
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
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
  )
}

export default ManageJobs
