// src/components/PricingTable.js
import React, { useState } from "react";

const PricingTable = ({ data, onUpdate }) => {
  const [editedData, setEditedData] = useState({});

  const handleEdit = (recordId, field, value) => {
    setEditedData({
      ...editedData,
      [recordId]: { ...editedData[recordId], [field]: value },
    });
  };

  const handleSave = (recordId) => {
    onUpdate(recordId, editedData[recordId]);
    setEditedData({ ...editedData, [recordId]: {} });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Store ID</th>
          <th>SKU</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={record._id}>
            <td>{record.storeId}</td>
            <td>{record.SKU}</td>
            <td>{record.productName}</td>
            <td>
              <input
                type="text"
                value={editedData[record._id]?.price || record.price}
                onChange={(e) =>
                  handleEdit(record._id, "price", e.target.value)
                }
              />
            </td>
            <td>{new Date(record.date).toLocaleDateString()}</td>
            <td>
              <button onClick={() => handleSave(record._id)}>Save</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PricingTable;
