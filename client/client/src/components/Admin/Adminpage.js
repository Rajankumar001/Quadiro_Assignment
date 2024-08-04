import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [editItem, setEditItem] = useState({ id: '', name: '', description: '' });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/AllItem');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleAddItem = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/AddItem', newItem, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setItems([...items, response.data]);
      setNewItem({ name: '', description: '' });
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/admin/UpdateItem/${editItem.id}`, editItem, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setItems(items.map(item => item._id === editItem.id ? response.data : item));
      setEditItem({ id: '', name: '', description: '' });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/DeleteItem/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setItems(items.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditItem(prev => ({ ...prev, [name]: value }));
//   };

  return (
    <>
      <h1>Admin Page</h1>
      <div>
        <h2>Add New Item</h2>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div>
        {/* <h2>Edit Item</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={editItem.name}
          onChange={handleEditChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={editItem.description}
          onChange={handleEditChange}
        /> */}
        <button onClick={handleUpdateItem}>Update Item</button>
      </div>
      {items.length > 0 ? (
        items.map(item => (
          <div className="card" key={item._id}>
            <div className="card-header">
              {item.name}
            </div>
            <div className="card-body">
              <p className="card-text">{item.description}</p>
              {/* <button onClick={() => setEditItem({ id: item._id, name: item.name, description: item.description })}>Edit</button> */}
              <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading items...</p>
      )}
    </>
  );
};

export default AdminPage;
