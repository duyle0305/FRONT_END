import logo from "./logo.svg";
import "./App.css";
import SplitComponent from "./page/SplitComponent";
import State from "./page/State";
import LegacySate from "./page/State/LegacyState";
import ModernState from "./page/State/ModernState";

function App() {
  return (
    <>
      {/* <SplitComponent /> */}
      {/* <State /> */}
      {/* <LegacySate /> */}
      <ModernState />
      <SplitComponent />
    </>
  );
}

export default App;
