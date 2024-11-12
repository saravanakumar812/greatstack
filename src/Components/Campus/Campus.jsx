import "./Campus.css";
import Gallery_img_1 from "../../assets/gallery-1.png";
import Gallery_img_2 from "../../assets/gallery-2.png";
import Gallery_img_3 from "../../assets/gallery-3.png";
import Gallery_img_4 from "../../assets/gallery-4.png";
import White_arrow from "../../assets/white-arrow.png";

function Campus() {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={Gallery_img_1} alt="Gallery_img_1" />
        <img src={Gallery_img_2} alt="Gallery_img_2" />
        <img src={Gallery_img_3} alt="Gallery_img_3" />
        <img src={Gallery_img_4} alt="Gallery_img_4" />
      </div>
      <button className="white-arrow-btn dark-btn">
        See more here
        <img src={White_arrow} alt="white-arrow" />
      </button>
    </div>
  );
}
export default Campus;
