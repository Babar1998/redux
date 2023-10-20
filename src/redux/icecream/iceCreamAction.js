const buyIceCream = (num) => {
    return {
      type: "BUY_ICE",
      payload: num,
    };
  };
  export default buyIceCream;
  
  export const refundIceCream = (num) => {
    return {
      type: "REFUND_ICE",
      payload: num,
    };
  };
  