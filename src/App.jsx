import "./App.css";
import Sidebar from "./components/Sidebar";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <div className="container w-full max-w-4xl mx-auto flex">
      <Sidebar />
      <Timeline />
    </div>
  );
};

export default App;
