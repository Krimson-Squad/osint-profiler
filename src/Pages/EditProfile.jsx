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
    Name: '',
    Gender: '',
    Age: '',
    Country: '',
    Religion: ''
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
      <h2>Edit Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender:</label>
            <input
              type="text"
              className="form-control"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input
              type="number"
              className="form-control"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Country:</label>
            <input
              type="text"
              className="form-control"
              name="Country"
              value={formData.Country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Religion:</label>
            <input
              type="text"
              className="form-control"
              name="Religion"
              value={formData.Religion}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;