import React, { useEffect, useState } from 'react';
import { Client, Databases } from 'appwrite';
import { project_id, database_id, collection_id } from '../lib/appwrite';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const EditProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
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
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(project_id); 

  const databases = new Databases(client);

  const fetchProfile = async () => {
    try {
      const response = await databases.getDocument(database_id, collection_id, id);
      const { $id, $databaseId, $collectionId, $createdAt, $updatedAt, ...userData } = response;
      setProfile(response);
      setFormData(userData); 
      toast.success('Profile loaded successfully!');
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast.error('Failed to load profile!');
    } finally {
      setLoading(false);
    }
  };

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
      // Update profile with only user-related fields
      await databases.updateDocument(database_id, collection_id, id, formData);
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error('Failed to update profile!');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [id]);

  return (
    <div className="container mt-4">
      <ToastContainer />
      <h2 className="text-white">Edit Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Gender:</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Age:</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Country:</label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Religion:</label>
            <input
              type="text"
              className="form-control"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Caste:</label>
            <input
              type="text"
              className="form-control"
              name="caste"
              value={formData.caste}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Physic:</label>
            <input
              type="text"
              className="form-control"
              name="physic"
              value={formData.physic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Race:</label>
            <input
              type="text"
              className="form-control"
              name="race"
              value={formData.race}
              onChange={handleChange}
              required
            />
          <div className="mb-3">
            <label className="form-label text-white">Parents:</label>
            <input
              type="text"
              className="form-control"
              name="parents"
              value={formData.parents}
              onChange={handleChange}
              required
            />
          </div>              
          </div>
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;