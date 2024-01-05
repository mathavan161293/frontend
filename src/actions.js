import axios from "axios";

export const fetchPricingRecords = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/pricing");
      dispatch({ type: "FETCH_PRICING_RECORDS", payload: response.data });
    } catch (error) {
      console.error("Error fetching pricing records:", error);
    }
  };
};

export const updatePricingRecord = (recordId, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/pricing/${recordId}`,
        updatedData
      );
      dispatch({ type: "UPDATE_PRICING_RECORD", payload: response.data });
    } catch (error) {
      console.error("Error updating pricing record:", error);
    }
  };
};
