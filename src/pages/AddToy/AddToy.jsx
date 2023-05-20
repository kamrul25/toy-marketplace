import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
   const {user} = useContext(AuthContext)
  useTitle("Add A Toy")   

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    fetch("https://toy-marketplace-server-gamma.vercel.app/allToy",{
        method:"POST",
        headers:{
            "Content-type" :"application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if (result?.insertedId) {
        // console.log(result)
          Swal.fire({
            title:"Success!",
            text:`Successfully added`,
            icon:"success",
            showConfirmButton: false,
            timer: 1500
        })
      }
    }).catch(error =>{
        console.error(error)
    })
};

  return (
    <div className="bg-base-200 ">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-20">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL of the toy</span>
            </label>
            <input
              {...register("image", { required: true })}
              placeholder="image link"
              type="url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              {...register("toyName", { required: true })}
              type="text"
              placeholder="toy name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              {...register("sellerName", { required: true })}
              type="text"
              placeholder="your name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              {...register("sellerEmail", { required: true })}
              type="email"
              placeholder="your email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category </span>
            </label>
            <select  {...register("subCategory", { required: true })} className="input input-bordered">
             <option value="regular ">regular </option>
             <option value="truck ">truck</option>
             <option value="police">police</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="toy price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating should be between zero to five</span>
            </label>
            <input
              {...register("rating", { required: true, min: 0, max: 5, message: "" })}
              type="number"
              placeholder="give rating your toy"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              {...register("quantity", { required: true })}
              type="number"
              placeholder="available quantity of your toy"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <input
              {...register("description", { required: true })}
              type="text"
              placeholder="write a description about your toy"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add your toy by click </span>
            </label>
            <input
              type="submit"
              value="Add"
              className="btn btn-outline btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
