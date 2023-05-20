import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import useTitle from "../../hooks/useTitle";

// import Toy from "./Toy";
// import UpdateToy from "./UpdateToy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [navigate, setNavigate] = useState(false);
  const location = useLocation();
  useTitle("My Toys");
  
  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-gamma.vercel.app/allToy?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-gamma.vercel.app/allToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id === id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
    <>
      {/* overflow-x-auto */}
      {myToys ? (
        <div className=" w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Picture</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Quantity</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy, index) => (
                <tr key={toy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toy.image} />
                      </div>
                    </div>
                  </td>
                  <td>{toy.toyName}</td>
                  <td>{toy.subCategory}</td>
                  <td>${toy.price}</td>
                  <td>
                    <div className="flex items-center">
                      <p>{toy.rating}</p>{" "}
                      <FaStar className="text-yellow-400 ml-2 text-xl" />
                    </div>
                  </td>
                  <td>{toy.quantity}</td>
                  <td>
                    {navigate && (
                      <Navigate
                        to={`${toy._id}`}
                        state={{ from: location }}
                        replace
                      ></Navigate>
                    )}

                    <Link
                      to={`${toy._id}`}
                      className="btn btn-primary"
                      onClick={() => setNavigate(true)}
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-circle btn-error"
                      onClick={() => handleDelete(toy._id)}
                    >
                      {" "}
                      <HiX className="text-xl text-white" />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="my-20 mx-10">
          <h1 className="text-3xl font-bold my-5">Please! Add some toy </h1>
          <Link to="/addToy" className="btn btn-outline btn-primary">
            Add Toy{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default MyToys;
