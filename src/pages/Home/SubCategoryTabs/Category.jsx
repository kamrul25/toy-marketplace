import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Category = ({ toy }) => {
  const { image, toyName, price, rating } = toy;
  const handleDetails = () => {
    Swal.fire({
      title: "Success!",
      text: `Details Ready Successfully`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="card  lg:card-side bg-base-100 shadow-xl">
      <figure className="w-full  md:w-96 h-96">
        <img src={image} className="image-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <div className="flex flex-col justify-between gap-5">
          <p>Price: ${price}</p>
          <p className="flex">
            <span>Ratings: {rating}</span>
            <span>
              <FaStar className="text-yellow-400 text-xl" />
            </span>
          </p>
        </div>
        <div className="card-actions ">
          <Link to={`/allToys/${toy._id}`} >
            <button onClick={handleDetails} className="btn btn-outline btn-primary ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
