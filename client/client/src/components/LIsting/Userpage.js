import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Userpage = () => {
  const [userData, setUserData] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/AllItem'); // Corrected URL
        setUserData(response.data); // Assuming response.data is an array of user data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <h1>Hello {userName}</h1>
      {userData.length > 0 ? (
        userData.map((item) => (
          <div className="card" key={item._id}>
            <div className="card-header">
              {item.name} {/* Display the name */}
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">{item.description}</p> {/* Display the description */}
            </div>
          </div>
        ))
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  );
}

export default Userpage;
