import React, { useState } from "react";
import { Client, Databases, ID } from "appwrite";
import { project_id, database_id, collection_id } from "../lib/appwrite";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profiler.css';

const Profiler = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    country: "",
    religion: "",
    caste:"",
    physic: "",
    race: "",
    parents: "",
  });

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject(project_id); // Your Appwrite project ID

  const databases = new Databases(client);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await databases.createDocument(
        database_id,
        collection_id,
        ID.unique(),
        {
          Name: formData.name,
          Gender: formData.gender,
          Age: formData.age,
          Country: formData.country,
          Religion: formData.religion,
          Caste: formData.caste,
          Physic: formData.physic,
          Race: formData.race,
          Parents: formData.parents

        }
      );
      // Show success toast
      toast.success("Document created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Optionally clear the form after successful submission
      setFormData({
        name: "",
        gender: "",
        age: "",
        country: "",
        religion: "",
        caste:"",
        physic: "",
        race: "",
    parents: "",
      });
    } catch (error) {
      // Show error toast
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
  <div className="outer-container">
    <div className="d-flex justify-content-center align-items-center vh-100 pt-5">
      <div className="card p-4 pt-5" style={{ width: '400px' }}>
        <h2 className="mb-4 text-center">Create a Document</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <input
              type="text"
              name="gender"
              className="form-control"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              name="country"
              className="form-control"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Religion</label>
            <input
              type="text"
              name="religion"
              className="form-control"
              value={formData.religion}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Caste</label>
            <input
              type="text"
              name="caste"
              className="form-control"
              value={formData.caste}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Physic</label>
            <input
              type="text"
              name="physic"
              className="form-control"
              value={formData.physic}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Race</label>
            <input
              type="text"
              name="race"
              className="form-control"
              value={formData.race}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Parents</label>
            <input
              type="text"
              name="parents"
              className="form-control"
              value={formData.parents}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-100">
            Create Document
          </button>
        </form>

        {/* Toast container */}
        <ToastContainer />
      </div>
    </div>
  </div>

  );
};

export default Profiler;
