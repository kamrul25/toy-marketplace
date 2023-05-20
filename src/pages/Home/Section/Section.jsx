import img1 from "../../../assets/fireTruck/ft1.png";
import img2 from "../../../assets/fireTruck/ft3.png";
import img3 from "../../../assets/policeCar/pc1.png";
import img4 from "../../../assets/policeCar/pc4.png";
import img5 from "../../../assets/regularCar/rc4.png";
import img6 from "../../../assets/remoteCar/remote3.png";
import img7 from "../../../assets/sportsCar/sp2.png";
import img8 from "../../../assets/sportsCar/sp5.png";

const Section = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mx-3">
      <div className=" card  bg-white shadow image-full">
        <img src={img6} alt="" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="card  bg-white shadow  image-full">
        <img src={img2} alt="" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="card  bg-white shadow  image-full">
        <img src={img3} alt="" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="card  bg-white shadow  image-full">
        <img src={img8} alt="" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="card  bg-white shadow  image-full">
        <img src={img7} alt="" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="card  bg-white shadow  image-full">
        <img src={img1} alt="" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="card  bg-white shadow  image-full">
        <img src={img5} alt="" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="card  bg-white shadow  image-full">
        <img src={img4} alt="" className="w-40 h-40 rounded-xl" />
      </div>
    </div>
  );
};

export default Section;
