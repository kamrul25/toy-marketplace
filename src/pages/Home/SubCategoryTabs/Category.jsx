import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ toy }) => {
  const { image, toyName, price, rating } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="w-96 h-96">
        <img src={image} alt="Shoes" className="w-full rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {toyName}</h2>
        <div className="flex justify-between">
          <p>Price: ${price}</p>
          <div className="flex justify-start items-center gap-1">
            <p>Ratings: {rating}</p>
            <FaStar className="text-yellow-400 text-xl" />
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/allToys/${toy._id}`} className="btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
