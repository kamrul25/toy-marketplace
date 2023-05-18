import { Link } from "react-router-dom";
import signUp from "../../assets/login.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [fold, setFold] = useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photoURL, email, password });
    // form.reset()
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-4">
        <div className="rounded-xl w-full">
          <img src={signUp} alt="" className="rounded-xl" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className=" text-2xl md:text-4xl font-bold">Sign Up now!</h1>
            <form onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phot URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="http://img.png"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={fold ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  required
                  className="input input-bordered"
                />
                {fold ? (
                  <button
                    className="absolute top-[43%] right-2 text-xl"
                    onClick={() => setFold(!fold)}
                  >
                    <FaEyeSlash />
                  </button>
                ) : (
                  <button
                    className="absolute top-[43%] right-2 text-xl"
                    onClick={() => setFold(!fold)}
                  >
                   <FaEye />
                  </button>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
              <div className="divider">Or Sign Up With</div>
              <div className="form-control mt-6">
                <button className="btn btn-block btn-outline  hover:bg-white hover:text-black">
                  <FcGoogle className="text-2xl mr-3" />{" "}
                  <span className="text-sm ">Google</span>
                </button>
              </div>
              <p className="mt-6 text-gray-400">
                Already have an account. Please{" "}
                <Link to="/login" className="text-orange-400 link-hover">
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
