// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import PricingTable from "./components/PricingTable";

function App() {
  const [pricingRecords, setPricingRecords] = useState([]);

  useEffect(() => {
    fetchPricingRecords();
  }, []);

  const fetchPricingRecords = async () => {
    try {
      const response = await axios.get("http://localhost:3001/pricing");
      setPricingRecords(response.data);
    } catch (error) {
      console.error("Error fetching pricing records:", error);
    }
  };

  const handleUpdate = async (recordId, updatedData) => {
    try {
      await axios.patch(
        `http://localhost:3001/pricing/${recordId}`,
        updatedData
      );
      // Assuming optimistic update: update UI before confirming success from the server
      setPricingRecords((prevRecords) =>
        prevRecords.map((record) =>
          record._id === recordId ? { ...record, ...updatedData } : record
        )
      );
    } catch (error) {
      console.error("Error updating pricing record:", error);
    }
  };

  return (
    <div>
      <h1>Pricing Management</h1>
      <PricingTable data={pricingRecords} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
