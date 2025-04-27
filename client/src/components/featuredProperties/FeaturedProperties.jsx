return (
  <div className="fp">
    {loading ? (
      "Loading..."
    ) : error ? (
      "Something went wrong!"
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
