import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [allToy, setAllToy] = useState([]);
  useEffect(() => {
    fetch("https://toy-marketplace-server-gamma.vercel.app/allToy")
      .then((res) => res.json())
      .then((result) => {
        setAllToy(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
               {allToy.map(toy =>
               <tr key={toy._id}>
                <td>{toy.sellerName}</td>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                    <Link className="btn">Details</Link>
                </td>
               </tr> 
                
                )}
        </tbody>
      </table>

   {/* data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" */}
    </div>
  );
};

export default AllToys;
