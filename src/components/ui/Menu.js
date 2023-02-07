import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Backdrop from "./Backdrop";
import ScoreTable from "./ScoreTable";
import HighScore from "./HighScore";

const Menu = () => {
  const highScore = useSelector((state) => state.game.highScore);

  return (
    <Fragment>
      <Backdrop />
      {!highScore && <ScoreTable />}
      {highScore && <HighScore />}
    </Fragment>
  );
};

export default Menu;
