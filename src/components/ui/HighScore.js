import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseButton from "./CloseButton";
import { setHighScore, setScores, setNewName } from "../../reducers/gameSlice";

import app from "../firebase/FirebaseConfig";
import {
  doc,
  setDoc,
  getDocs,
  getFirestore,
  collection,
  query,
  where,
} from "firebase/firestore";

const db = getFirestore(app);

// Component that takes users name when a new high scored is set
const HighScore = () => {
  const dispatch = useDispatch();
  const newName = useSelector((state) => state.game.newName);
  const scores = useSelector((state) => state.game.scores);
  const counter = useSelector((state) => state.counter);
  const nameInputRef = useRef();
  let newArray = [...scores];

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    dispatch(setNewName(enteredName));
  };

  useEffect(() => {
    const changeData = async () => {
      if (newName) {
        for (let i = 0; i < newArray.length; i++) {
          if (counter < newArray[i].score) {
            const lastScore = newArray[2].score;

            newArray.splice(i, 0, { name: newName, score: counter });

            //Change the new score with the last score at the database
            const scoresRef = collection(db, "scores");
            const q = query(scoresRef, where("score", "==", lastScore));
            const querySnapshot = await getDocs(q);

            let docId;
            querySnapshot.forEach((doc) => {
              docId = doc.id;
            });
            await setDoc(doc(db, "scores", docId), {
              name: newName,
              score: counter,
            });

            break;
          }
        }
        // If there are more than 3 scores in the array, delete the last one
        if (newArray.length > 3) {
          newArray.pop();
        }

        dispatch(setScores(newArray));
        dispatch(setHighScore(false));
      }
    };
    changeData();
  }, [newName]);

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col p-10
  min-w-[350px] min-h-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl z-[30] justify-center items-center"
    >
      <CloseButton />
      <div className="text-[30px] font-bold p-5">New High Score!</div>
      <form
        onSubmit={handleSubmit}
        className={"flex flex-col justify-center items-center"}
      >
        <label htmlFor="name" className="font-medium mb-2">
          Enter your name:
        </label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          className={
            "rounded-lg p-2 border-2 border-solid border-black outline-none"
          }
          required
        ></input>
        <button
          className="flex px-5 py-2 mt-10 border border-y-[2px] border-x-0 rounded-md w-[130px] active:translate-y-[3px] 
    active:shadow-[inset_0_0_8px_rgba(0,0,0,0.3)] border-b-[#7b8512] border-t-[#c7d25e] bg-[#B0BF1A] 
    justify-center items-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HighScore;
