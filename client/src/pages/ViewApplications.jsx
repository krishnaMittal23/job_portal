import React from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';

const ViewApplications = () => {
  return (
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
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-300">
                <td className="py-4 px-6 font-medium text-gray-600">{index + 1}</td>
                <td className="py-4 px-6 flex items-center gap-3">
                  <img
                    src={applicant.imgSrc}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <span className="text-gray-800">{applicant.name}</span>
                </td>
                <td className="py-4 px-6 text-gray-700">{applicant.jobTitle}</td>
                <td className="py-4 px-6 text-gray-700">{applicant.location}</td>
                <td className="py-4 px-6">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    Resume
                    <img src={assets.resume_download_icon} alt="download" className="w-4 h-4" />
                  </a>
                </td>
                <td className="py-4 px-6 relative">
                  <div className="relative inline-block text-left group">
                    <button className="text-gray-500 action-button hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition">
                      ...
                    </button>
                    <div className="z-10 hidden absolute right-0 md:left-0 top-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow group-hover:block">
                      <button className="block w-full text-left px-4 py-2 hover:bg-green-50 text-green-600">
                        Accept
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-red-50 text-red-600">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
