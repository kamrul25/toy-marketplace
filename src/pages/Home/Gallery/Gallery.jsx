import img1 from "../../../assets/fireTruck/ft1.png";
import img2 from "../../../assets/fireTruck/ft2.png";
import img3 from "../../../assets/fireTruck/ft3.png";
import img4 from "../../../assets/fireTruck/ft4.png";
import img5 from "../../../assets/policeCar/pc1.png";
import img6 from "../../../assets/policeCar/pc2.png";
import img7 from "../../../assets/policeCar/pc3.png";
import img8 from "../../../assets/policeCar/pc4.png";
import img9 from "../../../assets/regularCar/rc1.png";
import img10 from "../../../assets/regularCar/rc2.png";
import img11 from "../../../assets/regularCar/rc3.png";
import img12 from "../../../assets/remoteCar/remote1.png";
import img13 from "../../../assets/remoteCar/remote2.png";
import img14 from "../../../assets/remoteCar/remote3.png";
import img15 from "../../../assets/sportsCar/sp1.png";
import img16 from "../../../assets/sportsCar/sp2.png";
import img17 from "../../../assets/sportsCar/sp3.png";
import img18 from "../../../assets/truck/t4.png";
import img19 from "../../../assets/truck/t5.png";
import img20 from "../../../assets/truck/t6.png";

const Gallery = () => {
  const images = [
    `${img1}`,
    `${img12}`,
    `${img17}`,
    `${img4}`,
    `${img14}`,
    `${img6}`,
    `${img19}`,
    `${img16}`,
    `${img9}`,
    `${img10}`,
    `${img11}`,
    `${img2}`,
    `${img13}`,
    `${img5}`,
    `${img15}`,
    `${img8}`,
    `${img18}`,
    `${img20}`,
    `${img7}`,
    `${img3}`,
  ];

  return (
    <div  data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
      <h1 className="text-center text-3xl font-semibold lg:text-5xl uppercase text-gray-600 mt-10">
        Gallery of Car Toy
      </h1>
      <p className="text-center text-xl text-gray-500 mt-3 mb-10">See our collections of toy car </p>
      <div
        className="overflow-hidden h-96 hover:overflow-y-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 border-2 rounded-xl">
          {images.map((image, index) => (
            <img key={index} src={image} className="w-full border rounded-xl"   />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
