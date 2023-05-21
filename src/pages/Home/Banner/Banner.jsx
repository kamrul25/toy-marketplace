import img1 from "../../../assets/remoteCar/remote1.png";
import img2 from "../../../assets/sportsCar/sp3.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-3">
      <div
        className="text-center"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h1 className="text-3xl md:text-4xl font-bold uppercase">
          It's good time <br /> for car toy lover <br /> at the car toys house
        </h1>
        <p className="text-sm font-medium mt-5">
          Here you can find various kind of toy car
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 rounded-xl"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <img
          src={img1}
          alt=""
          className="w-auto h-48 md:w-96 md:h-96 rounded-xl hidden md:block"
        />
        <img
          src={img2}
          alt=""
          className="w-auto h-48 md:w-96 md:h-96 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
