import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";

const UpdateToy = ({ toy, handleUpdate }) => {
  useTitle("Update ");

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <input className="w-full hidden" {...register("_id")} value={toy?._id} />
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
