import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyCake from "../../redux/cakes/cakesAction";
import { refundCake } from "../../redux/cakes/cakesAction";
import buyIceCream from "../../redux/icecream/iceCreamAction";
import { refundIceCream } from "../../redux/icecream/iceCreamAction";

const Home = () => {
  const dispatch = useDispatch();
  const cakeState = useSelector((state) => state.cake);
  const iceCreamState = useSelector((state) => state.iceCream);
  const [quantity, setQuantity] = useState();
  const [iceCreamQuantity, setIceCreamQuantity] = useState();

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

  const buyIceCreamClickHandler = () => {
    if (iceCreamQuantity > 0) {
      dispatch(buyIceCream(iceCreamQuantity));
    }
  };

  const refundIceCreamClickHandler = () => {
    if (iceCreamQuantity > 0) {
      dispatch(refundIceCream(iceCreamQuantity));
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    console.log(newQuantity);
    // if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    // }
  };

  const handleIceCreamQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setIceCreamQuantity(newQuantity);
    }
  };

  return (
    <>
      <h1>Cake</h1>

      <label>Enter quantity: </label>
      <input type="number" value={quantity} onChange={handleQuantityChange} />

      <button onClick={buyCakeClickHandler}>Buy Cake</button>
      <h2>Num of cakes bought: {cakeState.totalNumOfCakesBought}</h2>
      <button onClick={refundCakeClickHandler}>Return Cake</button>

      <h1>Ice Cream</h1>

      <label>Enter quantity: </label>
      <input type="number" value={iceCreamQuantity} onChange={handleIceCreamQuantityChange} />

      <button onClick={buyIceCreamClickHandler}>Buy Ice Cream</button>
      <h2>Num of Ice Creams bought: {iceCreamState.totalNumOfIceCreamBought}</h2>
      <button onClick={refundIceCreamClickHandler}>Return Ice Cream</button>
    </>
  );
};

export default Home;

