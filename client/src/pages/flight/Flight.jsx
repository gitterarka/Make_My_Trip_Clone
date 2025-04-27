import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./flight.css";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Flight = () => {
  const navigate = useNavigate();

  // Function to navigate to the flights page
  const goToFlights = () => {
    navigate("/flights");
  };

  return (
    <div className="flights">
      <Navbar />
      <Header type="list" />
      <div className="flightsContainer">
        <h1 className="flightsTitle">Discover Your Dream Flight</h1>
        <p className="flightsDesc">
          Find the best flight deals for your next adventure. Whether you're
          looking for a quick getaway or a long vacation, we have options for
          every traveler.
        </p>

        <div className="flightsContent">
          <div className="flightsText">
            <h2 className="flightsSubtitle">Why Choose Moetours?</h2>
            <ul>
              <li>Global network with over 1000+ airlines</li>
              <li>24/7 customer support for a smooth experience</li>
              <li>Flexible payment options & easy cancellations</li>
              <li>Best price guarantee for your travel needs</li>
            </ul>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
            alt="Airplane"
            className="flightsImg"
          />
        </div>

        <div className="flightsHighlight">
          <h3>Start Your Adventure Today!</h3>
          <button
            onClick={goToFlights}
            className="flightsButton"
          >
            Explore All Flights
          </button>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Flight;
