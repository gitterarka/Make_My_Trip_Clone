import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <h2 style={{ margin: "20px" }}>Welcome to the Admin Dashboard</h2>
      </div>
    </div>
  );
};

export default Home;
