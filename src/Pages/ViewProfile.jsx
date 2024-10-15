import { Client, Databases } from 'appwrite';
import { project_id, database_id, collection_id } from '../lib/appwrite';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ViewProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject(project_id); // Your Appwrite project ID

  const databases = new Databases(client);

  const fetchProfiles = async () => {
    try {
      const response = await databases.listDocuments(database_id, collection_id);
      setProfiles(response.documents);
      toast.success('Profiles loaded successfully!');
    } catch (error) {
      console.error("Error fetching profiles:", error);
      toast.error('Failed to load profiles!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const filteredProfiles = profiles.filter(profile =>
    profile.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container mt-4'>
      <ToastContainer />
      <h2>View Profiles</h2>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="form-control mb-3"
      />
      {loading ? (
        <p>Loading...</p>
      ) : filteredProfiles.length > 0 ? (
        <div className="row">
          {filteredProfiles.map(profile => (
            <div className="col-md-4 mb-4" key={profile.$id}>
              <div className="card">
                <img src={`https://thispersondoesnotexist.com/`}/>
                <div className="card-body">
                  <h5 className="card-title">{profile.Name}</h5>
                  <p className="card-text"><strong>Gender:</strong> {profile.Gender}</p>
                  <p className="card-text"><strong>Age:</strong> {profile.Age}</p>
                  <p className="card-text"><strong>Country:</strong> {profile.Country}</p>
                  <p className="card-text"><strong>Religion:</strong> {profile.Religion}</p>
                  <Link to={`/edit-profile/${profile.$id}`} className="btn btn-primary">
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No profiles found.</p>
      )}
    </div>
  );
};

export default ViewProfiles;
