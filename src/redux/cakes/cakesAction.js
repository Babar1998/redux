const buyCake = (num) => {
  return {
    type: "BUY_CAKE",
    payload: num,
  };
};
export default buyCake;

export const refundCake = (num) => {
  return {
    type: "REFUND_CAKE",
    payload: num,
  };
};
