import { Link } from "react-router-dom";
import sl1 from "../../../assets/slider/sl1.png";
import sl2 from "../../../assets/slider/sl2.png";
import sl3 from "../../../assets/slider/sl3.png";
import sl4 from "../../../assets/slider/sl4.png";

const Slider = () => {
  const sliderText = (
    <div className="absolute top-16 left-8">
      <h1 className="text-3xl lg:text-6xl font-bold">
        <span>Welcome To You</span> <br /> <span>Car Toys World</span>
      </h1>
      <p className="text-base text-gray-600 font-medium my-4">
        We have various type of car toy. <br />
        To see details about car toys click the below button.{" "}
      </p>
      <Link to="/allToys" className="btn btn-outline btn-primary">
        See All Toys
      </Link>
    </div>
  );

  return (
    <div
      className="carousel w-full h-[90vh] rounded-xl "
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div id="slide1" className="carousel-item relative w-full">
        <img src={sl1} className="w-full " />
        <div className="absolute flex justify-end gap-3 right-3 top-2">
          <a href="#slide4" className="btn btn-circle  hover:bg-red-500">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
        <div>{sliderText}</div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={sl2} className="w-full " />
        <div className="absolute flex justify-end gap-3 right-3 top-2">
          <a href="#slide1" className="btn btn-circle hover:bg-red-500">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
        <div>{sliderText}</div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={sl3} className="w-full " />
        <div className="absolute flex justify-end gap-3 right-3 top-2">
          <a href="#slide2" className="btn btn-circle hover:bg-red-500">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
        <div>{sliderText}</div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={sl4} className="w-full " />
        <div className="absolute flex justify-end gap-3 right-3 top-2">
          <a href="#slide3" className="btn btn-circle hover:bg-red-500">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-red-500">
            ❯
          </a>
        </div>
        <div>{sliderText}</div>
      </div>
    </div>
  );
};

export default Slider;
