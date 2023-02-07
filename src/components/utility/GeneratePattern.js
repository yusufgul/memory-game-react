import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPattern } from "../../reducers/patternSlice";

// Component that generates the backpattern of the cards
const GeneratePattern = () => {
  const cardWidth = useSelector((state) => state.card.cardWidth);
  const cardHeight = useSelector((state) => state.card.cardHeight);
  const dispatch = useDispatch();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = cardWidth;
    canvas.height = cardHeight;
    const ctx = canvas.getContext("2d");

    // Use thinner lines for smaller cards
    ctx.strokeStyle = "black";
    if (cardWidth < 150 || cardHeight < 150) {
      ctx.lineWidth = 3;
    } else {
      ctx.lineWidth = 6;
    }

    var grd = ctx.createLinearGradient(0, 0, cardWidth, cardHeight);
    grd.addColorStop(0, "#246bce");
    grd.addColorStop(1, "#24c0ce");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, cardWidth, cardHeight);

    // Upper and bottom eye lines
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.bezierCurveTo(
      canvas.width / 4,
      canvas.height / 2,
      (3 * canvas.width) / 8,
      canvas.height / 4,
      canvas.width / 2,
      canvas.height / 4
    );
    ctx.bezierCurveTo(
      (5 * canvas.width) / 8,
      canvas.height / 4,
      (3 * canvas.width) / 4,
      canvas.height / 2,
      canvas.width,
      canvas.height / 2
    );
    ctx.bezierCurveTo(
      (3 * canvas.width) / 4,
      canvas.height / 2,
      (5 * canvas.width) / 8,
      (3 * canvas.height) / 4,
      canvas.width / 2,
      (3 * canvas.height) / 4
    );
    ctx.bezierCurveTo(
      (3 * canvas.width) / 8,
      (3 * canvas.height) / 4,
      canvas.width / 4,
      canvas.height / 2,
      0,
      canvas.height / 2
    );
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    // Iris of the eye
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + canvas.height / 6, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.height / 6,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "#ACD1EE";
    ctx.fill();
    ctx.stroke();

    // Macular hole of the eye
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 + canvas.height / 18, canvas.height / 2);
    ctx.arc(
      canvas.width / 2,
      canvas.height / 2,
      canvas.height / 18,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();

    dispatch(setPattern(canvas.toDataURL()));
  }, [cardWidth, cardHeight]);

  return null;
};

export default GeneratePattern;
