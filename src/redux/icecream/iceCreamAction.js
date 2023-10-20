const buyIce = (num) => {
    return {
      type: "BUY_ICE",
      payload: num,
    };
  };
  export default buyIce;
  
  export const refundIce = (num) => {
    return {
      type: "REFUND_CAKE",
      payload: num,
    };
  };
  