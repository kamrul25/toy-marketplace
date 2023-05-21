import img1 from "../../../assets/gif/g1.gif";
import img2 from "../../../assets/gif/g2.gif";
import img3 from "../../../assets/gif/g3.gif";
import img4 from "../../../assets/gif/g5.webp";

const Section = () => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4  gap-2 mx-3"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className=" border rounded-xl shadow-xl image-full">
        <img src={img1} alt="" className="w-auto h-40 rounded-xl" />
      </div>
      <div className=" border rounded-xl shadow-xl image-full">
        <img src={img2} alt="" className="w-auto h-40 rounded-xl" />
      </div>
      <div className=" border rounded-xl shadow-xl image-full">
        <img src={img3} alt="" className="w-auto h-40 rounded-xl" />
      </div>
      <div className=" border rounded-xl shadow-xl image-full">
        <img src={img4} alt="" className="w-auto h-40 rounded-xl" />
      </div>

      
    </div>
  );
};

export default Section;
