import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  const images = [
    "https://images.trvl-media.com/lodging/1000000/80000/75800/75755/038fdf7d.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/32092064.jpg?k=dd24bc3c456f4e487e5841a7beb32c25bb11b7ae676b0ddb566423682675bf0e&o=&hp=1",
    "https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/147/794/208/bomxr-great-hall-1524-hor-clsc_S.jpg",
    "https://www.ahstatic.com/photos/6937_ho_00_p_1024x768.jpg"
  ];

  return (
    <div className="fp">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data &&
            data.map((item, index) => (
              <div className="fpItem" key={item._id}>
                <img
                  src={images[index] || "https://via.placeholder.com/400"}
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ₹{item.cheapestPrice}</span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
