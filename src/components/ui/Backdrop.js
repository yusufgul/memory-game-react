import React from "react";
import { setMenu } from "../../reducers/menuSlice";
import { useDispatch } from "react-redux";

const Backdrop = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 h-screen w-screen bg-black opacity-[.8] z-[30]"
      onClick={() => dispatch(setMenu(false))}
    ></div>
  );
};

export default Backdrop;
