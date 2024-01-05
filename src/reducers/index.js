import { combineReducers } from "redux";

const pricingRecordsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRICING_RECORDS":
      return action.payload;
    case "UPDATE_PRICING_RECORD":
      return state.map((record) =>
        record._id === action.payload._id
          ? { ...record, ...action.payload }
          : record
      );
    default:
      return state;
  }
};

export default combineReducers({
  pricingRecords: pricingRecordsReducer,
});
