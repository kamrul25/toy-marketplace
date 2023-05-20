import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error Page")
  return (
    <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-4 rounded-xl pt-20">
      <img src={error} alt="" className="w-96 h-96 rounded-xl " />
      <div className="text-center">
        <h1 className=" text-red-400 text-3xl font-bold  m-4">
          Page Not Found!
        </h1>
        <p className="text-red-400 font-medium m-4">
          Sorry, an unexpected error has occurred.
        </p>
        <Link to="/" className="btn btn-outline btn-primary mx-24">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
