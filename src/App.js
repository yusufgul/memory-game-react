import { useSelector } from "react-redux";
import Menu from "./components/ui/Menu";
import GetScores from "./components/utility/GetScores";
import CardContainer from "./components/card/CardContainer";

const App = () => {
  const showMenu = useSelector((state) => state.menu);

  GetScores();

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#394859]">
      {showMenu && <Menu />}
      <CardContainer number={18} />
    </div>
  );
};

export default App;
