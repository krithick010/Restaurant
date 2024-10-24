import React, { useEffect, useState } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: '', description: '' });
  const [editItemId, setEditItemId] = useState(null);
  const [editItemData, setEditItemData] = useState({ name: '', price: '', description: '' });

  // GET Menu Items
  useEffect(() => {
    fetch('http://localhost:3000/menuItems')
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  // POST New Menu Item
  const addMenuItem = () => {
    fetch('http://localhost:3000/menuItems', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setMenuItems([...menuItems, data]);
        setNewItem({ name: '', price: '', description: '' });
      });
  };

  // PUT (Update) Menu Item
  const updateMenuItem = (id) => {
    fetch(`http://localhost:3000/menuItems/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editItemData),
    })
      .then((response) => response.json())
      .then(() => {
        const updatedItems = menuItems.map((item) =>
          item.id === id ? { ...item, ...editItemData } : item
        );
        setMenuItems(updatedItems);
        setEditItemId(null); // Close edit form
      });
  };

  // DELETE Menu Item
  const deleteMenuItem = (id) => {
    fetch(`http://localhost:3000/menuItems/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const filteredItems = menuItems.filter((item) => item.id !== id);
      setMenuItems(filteredItems);
    });
  };

  return (
    <div>
      <h1>Menu Items</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => setEditItemId(item.id)}>Edit</button>
            <button onClick={() => deleteMenuItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add New Menu Item Form */}
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
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
        />
        <button onClick={addMenuItem}>Add Item</button>
      </div>

      {/* Edit Menu Item Form */}
      {editItemId && (
        <div>
          <h2>Edit Item</h2>
          <input
            type="text"
            placeholder="Name"
            value={editItemData.name}
            onChange={(e) => setEditItemData({ ...editItemData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Price"
            value={editItemData.price}
            onChange={(e) => setEditItemData({ ...editItemData, price: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={editItemData.description}
            onChange={(e) => setEditItemData({ ...editItemData, description: e.target.value })}
          />
          <button onClick={() => updateMenuItem(editItemId)}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
