import { useDispatch } from "react-redux";
import { setMenu } from "../../reducers/menuSlice";

// This component creaes a reusable close button.
const CloseButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="absolute flex right-[4px] top-[4px] h-[21px] w-[21px] justify-center items-center border-2
  border-red-800 bg-red-600 rounded-full font-medium text-white"
      onClick={() => dispatch(setMenu(false))}
    >
      ✕
    </button>
  );
};

export default CloseButton;
