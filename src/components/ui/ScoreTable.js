import React from "react";
import { useSelector } from "react-redux";
import CloseButton from "./CloseButton";

// Component that displays the scores
const ScoreTable = () => {
  const counter = useSelector((state) => state.counter);
  const scores = useSelector((state) => state.game.scores);

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col p-10
        min-w-[350px] min-h-[400px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl z-[30] justify-center items-center"
    >
      <CloseButton />
      <div className="text-[30px] font-bold p-5 text-white">
        Your Score: {counter}
      </div>
      <div className="flex flex-col justify-center items-center text-[15px] font-medium gap-5 w-full">
        <div
          className="flex px-5 py-2 border border-y-[2px] border-x-0 rounded-md  w-full
          border-b-[#b29600] border-t-[#ffe34c] bg-[#ffd700] justify-center items-center"
        >
          {scores[0]?.name}-{scores[0]?.score}
        </div>
        <div
          className="flex px-5 py-2 border border-y-[2px] border-x-0 rounded-md  w-full
           border-b-[#868686] border-t-[#d2d2d2] bg-[#c0c0c0] justify-center items-center"
        >
          {scores[1]?.name}-{scores[1]?.score}
        </div>
        <div
          className="flex px-5 py-2 border border-y-[2px] border-x-0 rounded-md  w-full
          border-b-[#8f5823] border-t-[#dca56f] bg-[#cd7f32] justify-center items-center"
        >
          {scores[2]?.name}-{scores[2]?.score}
        </div>
      </div>
      <button
        className="flex px-5 py-2 mt-10 border border-y-[2px] border-x-0 rounded-md w-[130px] active:translate-y-[3px] 
          active:shadow-[inset_0_0_8px_rgba(0,0,0,0.3)] border-b-[#7b8512] border-t-[#c7d25e] bg-[#B0BF1A] 
          justify-center items-center font-medium"
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
};

export default ScoreTable;
