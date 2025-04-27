import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");

  const images = [
    "https://theimperialindia.com/wp-content/uploads/2023/09/Luxury-Suite-lamp-1024x682.jpg",
    "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2017/09/18/Pictures/_b95ae4a2-9c70-11e7-9c3b-8e901839ece0.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/582730640.jpg?k=d6032370f68ac50d3f8499b0a8f975fd5be9bb46d43080aebd70e59f2eca0987&o=&hp=1",
    "https://oimages.elitehavens.com/images/gallery/lowres/P00530/Listing.jpg",
    "https://www.visitmysmokies.com/wp-content/uploads/2019/12/09122019110535_thumb.JPG"
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
