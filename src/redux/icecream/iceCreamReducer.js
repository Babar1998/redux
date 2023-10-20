const initialState = {
    totalNumOfIceCreamBought: 0,
  };
  
  const iceReducer = (state = initialState, action) => {
    if (action.type === "BUY_ICE") {
      return {
        ...state,
        totalNumOfIceCreamBought: state.totalNumOfIceCreamBought + action.payload,
      };
    } else if (action.type === "REFUND_ICE") {
      const newCount = state.totalNumOfIceCreamBought - action.payload;
      return {
        ...state,
        totalNumOfIceCreamBought: newCount >= 0 ? newCount : 0,
      };
    } else {
      return state;
    }
  };
  
  export default iceReducer;
  