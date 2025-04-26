import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext.js";
import Reserve from "../../components/reserve/Reserve.jsx";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; 
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { data, loading } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { dates, options } = useContext(SearchContext);

  const photos = [
    {
      src: "https://media.cntraveller.com/photos/6436a6ec2efa2c9e41603079/master/w_1920%2Cc_limit/Villa%2520Palladio%2520Jaipur_LEDE%2520%252014.jpg",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/626f764683a5462c5a4ac212/442fcf69-8ac4-4f17-9fde-fb33eeba6282/Bar-Palladio-Jaipur-Marie-Anne-Oudejans.jpg",
    },
    {
      src: "https://www.designpataki.com/wp-content/uploads/2023/02/Jaipur-Newest-Boutique-Hotel-Villa-Palladio-DP-Reviews-Design-Pataki-Feature-Image.jpg",
    },
    {
      src: "https://media.yatzer.com/10_s_villa_palladio_jaipur_photography_by_atul_pratap_chauhan_yatzer-1-1400x1867.jpg",
    },
    {
      src: "https://px-web-images.pixpa.com/KEub39KvHnIq_9MIj-sv5ABapiLeHByOVsoQQDw0rMM/rs:fit:1200:0/q:90/aHR0cHM6Ly9weC1zMy1pbWcucGl4cGEuY29tL2NvbS9sYXJnZS8xMzIzLzE2ODE4Mzk4ODEtOTQwNjY3LXRvcC1qYWlwdXItcGhvdG9ncmFwaGVycy12aWxsYS1wYWxsYWRpby1qYWlwdXIzNy5qcGc=",
    },
    {
      src: "https://assets.architecturaldigest.in/photos/635bf4d97bc5f778152ffaf9/master/w_1600%2Cc_limit/BikramB-190522-001Xcopy-branch-in-ad-2022-september-october-print-unknown.JPEG",
    },
  ];

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  
  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading..."
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ₹{data.cheapestPrice} at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  The hotel is known for its unique blend of Rococo and Indian styles, offering a boutique hotel experience.
                </span>
                <h2>
                  <b> ₹{days * data.cheapestPrice * options.room}</b> ({days} nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
