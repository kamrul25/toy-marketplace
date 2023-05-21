import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";


const ToyDetails = () => {
  useTitle("Toy Details");
  const details = useLoaderData();
  const {
    image,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = details;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl relative">
      <figure className="w-1/2 h-1/2">
        <img
          src={image}
          alt="Album"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        />
      </figure>
      <div
        className=" mx-auto my-auto space-y-4"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h2 className="card-title">Name: {toyName}</h2>
        <p>Description: {description}</p>
        <div className="flex justify-between items-center gap-5">
          <p>Available Quantity: {quantity}</p>
          <p>Price: ${price}</p>
          <p className="flex">
            Ratings: {rating}{" "}
            <FaStar className="text-yellow-400 ml-2 text-xl" />{" "}
          </p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <p>Seller: {sellerName}</p>
          <p>Email: {sellerEmail}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
