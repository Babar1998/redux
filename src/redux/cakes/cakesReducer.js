const initialState = {
  totalNumOfCakesBought: 0,
};

const cakeReducer = (state = initialState, action) => {
  if (action.type === "BUY_CAKE") {
    return {
      ...state,
      totalNumOfCakesBought: state.totalNumOfCakesBought + action.payload,
    };
  } else if (action.type === "REFUND_CAKE") {
    const newCount = state.totalNumOfCakesBought - action.payload;
    return {
      ...state,
      totalNumOfCakesBought: newCount >= 0 ? newCount : 0,
    };
  } else {
    return state;
  }
};

export default cakeReducer;
