import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../../redux/cakes/cakesAction";
import { refundCake } from "../../redux/cakes/cakesAction";

const Home = () => {
  const dispatch = useDispatch();
  const selectorState = useSelector((state) => state);
  const [quantity, setQuantity] = useState();

  const buyCakeClickHandler = () => {
    if (quantity > 0) {
      dispatch(buyCake(quantity));
    }
  };

  const refundCakeClickHandler = () => {
    if (quantity > 0) {
      dispatch(refundCake(quantity));
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <h1>Home Page</h1>

      <label>Enter quantity: </label>
      <input type="number" value={quantity} onChange={handleQuantityChange} />

      <button onClick={buyCakeClickHandler}>Buy Cake</button>
      <h2>Num of cakes bought: {selectorState.totalNumOfCakesBought}</h2>
      <button onClick={refundCakeClickHandler}>Return Cake</button>
    </>
  );
};

export default Home;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import buyCake from "../../redux/cakes/cakesAction";
// import { refundCake } from "../../redux/cakes/cakesAction";

// const Home = () => {
//   const [numOfCakesToBuy, setNumOfCakesToBuy] = useState(1);
//   const dispatch = useDispatch();
//   const selectorState = useSelector((state) => {
//     console.log("SELECTOR STATE: ", state);
//     return state;
//   });

//   const buyCakeClickHandler = () => {
//     dispatch(buyCake()); // Pass the number of cakes to buy
//   };

//   const refundCakeClickHandler = () => {
//     dispatch(refundCake());
//   };

//   return (
//     <>
//       <h1>Home Page</h1>

//       <label htmlFor="numOfCakesToBuy">Number of Cakes to Buy:</label>
//       <input
//         type="number"
//         id="numOfCakesToBuy"
//         name="numOfCakesToBuy"
//         value={numOfCakesToBuy}
//         onChange={(e) => setNumOfCakesToBuy(e.target.value)}
//         min="1"
//       />
//       <button onClick={buyCakeClickHandler}>Buy Cake</button>
//       <h2>Num of cakes bought: {selectorState.totalNumOfCakesBought}</h2>
//       <button onClick={refundCakeClickHandler}>Return Cake</button>
//     </>
//   );
// };

// export default Home;

// // import { useDispatch, useSelector } from "react-redux";
// // import buyCake from "../../redux/cakes/cakesAction";
// // import { refundCake } from "../../redux/cakes/cakesAction";
// // import { useEffect, useState } from "react";

// // const Home = () => {
// //   const dispatch = useDispatch();
// //   const selectorState = useSelector((state) => {
// //     console.log("SELECTOR STATE: ", state);
// //     return state;
// //   });

// //   const buyCakeClickHandler = () => {
// //     dispatch(buyCake());
// //   };
// //   const refundCakeClickHandler = () => {
// //     dispatch(refundCake());
// //   };

// //   return (
// //     <>
// //       <h1>Home Page</h1>

// //       <button onClick={buyCakeClickHandler}>Buy Cake</button>
// //       <h2>Num of cakes bought: {selectorState.totalNumOfCakesBought}</h2>
// //       <button onClick={buyCakeClickHandler}>Buy Cake</button>
// //       <button onClick={refundCakeClickHandler}>Return Cake</button>
// //     </>
// //   );
// // };

// // export default Home;
