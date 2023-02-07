import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPageWidth, setPageHeight } from "../../reducers/pageSlice";
import {
  setCardHeight,
  setCardWidth,
  setFlippedCards,
  setMatchedCards,
} from "../../reducers/cardSlice";
import { setCounter } from "../../reducers/counterSlice";
import { setEnd, setHighScore } from "../../reducers/gameSlice";
import { setMenu } from "../../reducers/menuSlice";
import Debounce from "../utility/Debounce";

const FlippingCard = ({ id, variable }) => {
  const dispatch = useDispatch();
  const pageWidth = useSelector((state) => state.page.pageWidth);
  const pageHeight = useSelector((state) => state.page.pageHeight);
  const pattern = useSelector((state) => state.pattern);
  const flippedCards = useSelector((state) => state.card.flippedCards);
  const matchedCards = useSelector((state) => state.card.matchedCards);
  const scores = useSelector((state) => state.game.scores);
  const counter = useSelector((state) => state.counter);

  const divRef = useRef(null);

  // Listen page size and card size
  useEffect(() => {
    const { current } = divRef;
    const { clientWidth, clientHeight } = current;
    dispatch(setCardWidth(clientWidth));
    dispatch(setCardHeight(clientHeight));
  }, [pageWidth, pageHeight]);

  useEffect(() => {
    const handleResize = Debounce(() => {
      dispatch(setPageWidth(window.innerWidth));
      dispatch(setPageHeight(window.innerHeight));
    }, 200);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle clicked cards
  const handleClick = () => {
    if (
      flippedCards.length !== 2 &&
      !matchedCards.find((card) => card === variable)
    ) {
      if (!flippedCards.find((card) => card.id === id)) {
        dispatch(setFlippedCards([...flippedCards, { id, variable }]));
        dispatch(setCounter());
      }
    }
  };

  // Check if selected two card matches
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (
        firstCard.variable === secondCard.variable &&
        !matchedCards.find((card) => card === firstCard.variable)
      ) {
        dispatch(setMatchedCards([...matchedCards, firstCard.variable]));
      }
      setTimeout(() => {
        dispatch(setFlippedCards([]));
      }, 800);
    }
  }, [flippedCards]);

  // End the game and check score when all cards are get matched
  useEffect(() => {
    if (matchedCards.length === 9) {
      let newArray = [...scores];
      for (let i = 0; i < newArray.length; i++) {
        if (counter < newArray[i].score) {
          dispatch(setHighScore(true));
          break;
        }
      }
      setTimeout(() => {
        dispatch(setEnd(true));
        dispatch(setMenu(true));
      }, 3000);
    }
  }, [matchedCards]);
  return (
    <div
      ref={divRef}
      className={`relative h-[12%] lg:h-[25%] w-[25%] md:w-[13%] rounded-lg overflow-hidden cursor-pointer 
      transition ease-in-out duration-[3000ms] ${
        matchedCards.length === 9
          ? "shadow-[0_0px_30px_30px_rgba(255,185,15,0.5)]"
          : ""
      }`}
      onClick={handleClick}
    >
      <div
        className="absolute flex flex-col justify-center items-center h-full w-full bg-white
        rounded-lg p-6 transition ease-out duration-700 z-10"
        style={{
          fontSize: "8vw",
          transform: `rotateY(${
            flippedCards.find((card) => card.id === id) ||
            matchedCards.find((card) => card === variable)
              ? 0
              : 180
          }deg)`,
          backfaceVisibility: "hidden",
        }}
      >
        {variable}
      </div>
      <div
        className="absolute h-full w-full p-6 transition ease-out duration-700 rounded-lg 
        bg-gradient-to-r from-[#9BA917] to-[#CDD48B] border-2 border-[#ffffff]"
        style={{
          background: `url(${pattern})`,
          transform: `rotateY(${
            flippedCards.find((card) => card.id === id) ||
            matchedCards.find((card) => card === variable)
              ? 180
              : 0
          }deg)`,
          backfaceVisibility: "hidden",
        }}
      ></div>
    </div>
  );
};

export default FlippingCard;
