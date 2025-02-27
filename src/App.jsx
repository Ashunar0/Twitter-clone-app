import "./App.css";
import Sidebar from "./components/Sidebar";
import Tweets from "./components/Tweets";

const App = () => {
  return (
    <div className="container w-full max-w-4xl mx-auto flex">
      <Sidebar />
      <Tweets />
    </div>
  );
};

export default App;
