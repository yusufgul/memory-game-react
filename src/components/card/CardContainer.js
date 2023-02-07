import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FlippingCard from "./FlippingCard";
import GeneratePattern from "../utility/GeneratePattern";
import { setMenu } from "../../reducers/menuSlice";
import { setCardsList } from "../../reducers/cardSlice";

// Randomly shuffle array
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CardContainer = ({ number }) => {
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.card.cardsList);
  const counter = useSelector((state) => state.counter);

  // Function that generates the pattern at the back of the cards and stores it in pattern state
  GeneratePattern();

  useEffect(() => {
    // Create an array of letters
    const alphabet = Array.from({ length: number / 2 }, (_, i) =>
      String.fromCharCode(i + 65)
    );

    // Set the cards array with two cards for each letter and shuffle it
    dispatch(
      setCardsList(shuffle(alphabet.flatMap((letter) => [letter, letter])))
    );
  }, []);

  return (
    <div
      className="relative flex flex-row flex-wrap gap-3 md:gap-6 pt-5 lg:pt-0 h-full w-full lg:w-[80%] lg:h-[80%]
    justify-center items-start lg:items-center place-content-center"
    >
      {cardsList.map((variable, index) => (
        <FlippingCard id={index} key={index} variable={variable} />
      ))}
      <button
        className="absolute top-[20px] lg:top-0 text-white text-[25px] border border-slate-50 rounded-xl px-2"
        onClick={() => dispatch(setMenu(true))}
      >
        ‒ {counter} ‒
      </button>
    </div>
  );
};

export default CardContainer;
