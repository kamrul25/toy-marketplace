// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";
import Swal from "sweetalert2";

const AllToys = () => {
  useTitle("All Toys");
  const loadedAllToy = useLoaderData();
  const [allToy, setAllToy] = useState(loadedAllToy);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(
      `https://toy-marketplace-server-gamma.vercel.app/getToyByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        Swal.fire({
          title: "Success!",
          text: `Searched Successfully`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setAllToy(data);
      });
  };
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
    <div>
      <h1 className="text-center text-2xl text-red-400">Search by Toy Name</h1>
      <div className="md:w-[20%] mx-5 md:mx-auto my-5">
        <form>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="btn btn-square" onClick={handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allToy.map((toy, index) => (
              <tr key={toy._id}>
                <td>{index + 1}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>
                <td>${toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  <Link to={`/allToys/${toy._id}`} className="btn">
                    <button onClick={handleDetails}>View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
