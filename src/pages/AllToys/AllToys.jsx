// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allToy = useLoaderData();
  
  useTitle("All Toys")
  return (
    <div className="overflow-x-auto">
      
      <table className="table w-full">
        <thead>
          <tr >
            <th></th>
            <th>Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody >
          {allToy.map((toy, index) => (
            <tr key={toy._id} >
              <td >{index + 1}</td>
              <td >{toy.sellerName}</td>
              <td >{toy.toyName}</td>
              <td >{toy.subCategory}</td>
              <td >${toy.price}</td>
              <td >{toy.quantity}</td>
              <td>
                <Link to={`/allToys/${toy._id}`} className="btn">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
