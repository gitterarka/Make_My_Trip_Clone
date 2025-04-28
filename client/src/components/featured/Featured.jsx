import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=New Delhi,Kolkata,Mumbai");
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait" 
      ) : (  
      <>
      <div className="featuredItem">
        <img
          src="https://digital.ihg.com/is/image/ihg/holiday-inn-new-delhi-3492356108-2x1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/185/567/537/cculr-exterior-9259_Classic-Hor_O.jpg?tr=w-1200%2Cfo-auto"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/103703163.jpg?k=760f615013b8331e247fcd22e5a6c98be3a2dc24f664c74021c28dc820acbaaf&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>
    )}
    </div>
  );
};

export default Featured;
