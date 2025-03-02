import Sidebar from "../components/sidebar/Sidebar";
import Timeline from "../components/home/Timeline";

const Home = () => {
  return (
    <div className="home-container w-full max-w-4xl mx-auto flex">
      <Sidebar />
      <Timeline />
    </div>
  );
};

export default Home;
