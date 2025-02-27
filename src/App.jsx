import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="container w-full max-w-4xl mx-auto flex">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
