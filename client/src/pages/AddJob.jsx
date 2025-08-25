import React, { useContext, useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Make sure this is imported
import { JobCategories, JobLocations } from '../assets/assets';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

const AddJob = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Beginner level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const {backendUrl, companyToken} = useContext(AppContext)

  const onSubmitHandler = async(e)=>{
    e.preventDefault();

    try {
      
      const description = quillRef.current.root.innerHTML

      const {data} = await axios.post(backendUrl+'/api/company/post-job', 
        {title,description,location,salary,category,level},
        {headers: {token : companyToken}}
      )

      if(data.success){
        toast.success(data.message)
        setTitle('')
        setSalary(0)
        quillRef.current.root.innerHTML = ""

      }
      else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
      
    }

  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <form onSubmit={onSubmitHandler} className="max-w-4xl mx-auto p-6 bg-white rounded-xl mt-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Add New Job</h2>

      {/* Job Title */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Job Title</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Job Description</label>
        <div
          ref={editorRef}
          className="bg-white h-40 rounded-md border border-gray-300 overflow-y-auto"
        ></div>
      </div>

      {/* Dropdowns: Category, Location, Level */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium text-gray-700 mb-2">Job Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobCategories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Job Location</label>
          <select
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobLocations.map((location, index) => (
              <option value={location} key={index}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Job Level</label>
          <select
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>

      {/* Salary */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Job Salary (₹)</label>
        <input
          onChange={(e) => setSalary(e.target.value)}
          type="number"
          
          placeholder="2500"
          value={salary}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        ADD
      </button>
    </form>
  );
};

export default AddJob;
