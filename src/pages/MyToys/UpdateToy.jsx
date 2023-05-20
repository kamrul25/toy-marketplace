import { useForm } from "react-hook-form";
import {  useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    useTitle("Update ")
    const toy = useLoaderData()

    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname;
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://toy-marketplace-server-gamma.vercel.app/allToy/${toy._id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result)
        navigate(from, { replace: true })
    })
  };

  console.log(toy)
  return (
    <div>
        <img src={toy.image} alt="" className="w-16 h-16" />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-20">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("price")}
                  type="number"
                  placeholder="toy price"
                  defaultValue={toy.price}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  {...register("quantity")}
                  type="number"
                  placeholder="available quantity of your toy"
                  defaultValue={toy.quantity}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Detail description</span>
                </label>
                <input
                  {...register("description")}
                  type="text"
                  placeholder="write a description about your toy"
                  defaultValue={toy.description}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">For your update </span>
                </label>
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-outline btn-primary"
                />
              </div>
            </div>
          </form>
    </div>
  );
};

export default UpdateToy;
