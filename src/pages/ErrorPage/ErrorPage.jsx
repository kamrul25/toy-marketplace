import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Error Page");
  return (
    <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-4 rounded-xl pt-20">
      <img
        src={error}
        className="w-96 h-96 rounded-xl "
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      />
      <div
        className="text-center"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
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
