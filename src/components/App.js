[8:55 pm, 12/09/2022] +91 88816 18384: import React, { Component, useState, useEffect, useCallback } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const start = () => {
    setRenderBall(!renderBall);
  };

  const keyHandler = (event) => {
    let ballPositionClone = { ...ballPosition };

    if (event.keyCode === 37) {
      ballPositionClone.left =
        Number(ballPosition.left.slice(0, ballPosition.left.indexOf("p"))) -
        5 +
        "px";
    } else if (event.keyCode === 39) {
      ballPositionClone.left =
        Number(ballPosition.left.slice(0, ballP…
[8:56 pm, 12/09/2022] +91 88816 18384: Ye golf part 2 ka hai issko app.js mai paste kardena
