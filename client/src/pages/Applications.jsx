import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)

  return (
    <>
      <Navbar />
      <div className="container px-4 2xl:px-20 mx-auto my-10 min-h-[65vh]">
        {/* Resume Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Your Resume</h2>
          <div className="flex items-center gap-4 mt-4">
            {isEdit ? (
              <>
                <label
                  htmlFor="resumeUpload"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer transition"
                >
                  <span>Select Resume</span>
                  <img
                    src={assets.profile_upload_icon}
                    alt="upload"
                    className="w-5 h-5 ml-2"
                  />
                  <input
                    id="resumeUpload"
                    onChange={(e) => setResume(e.target.files[0])}
                    type="file"
                    accept="application/pdf"
                    hidden
                  />
                </label>
                <button
                  onClick={() => setIsEdit(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition shadow-md"
                >
                  Save
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                <a
                  href="#"
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition"
                >
                  View Resume
                </a>
                <button
                  onClick={() => setIsEdit(true)}
                  className="border border-gray-300 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Jobs Applied Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Jobs Applied</h2>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="min-w-full bg-white border border-gray-200 text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Job Title</th>
                  <th className="py-3 px-4 text-left max-sm:hidden">Location</th>
                  <th className="py-3 px-4 text-left max-sm:hidden">Date</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {jobsApplied.map((job, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-3 px-4 flex items-center gap-2">
                      <img src={job.logo} className="w-8 h-8 rounded" alt="logo" />
                      <span>{job.company}</span>
                    </td>
                    <td className="py-3 px-4">{job.title}</td>
                    <td className="py-3 px-4 max-sm:hidden">{job.location}</td>
                    <td className="py-3 px-4 max-sm:hidden">
                      {moment(job.date).format('ll')}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                          job.status === 'Accepted'
                            ? 'bg-green-100 text-green-700'
                            : job.status === 'Rejected'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Applications
