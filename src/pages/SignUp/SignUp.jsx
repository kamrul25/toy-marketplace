import { Link, useLocation, useNavigate } from "react-router-dom";
import signUp from "../../assets/login.png";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [fold, setFold] = useState(false);
  const { createUser,} =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log({ name, photoURL, email, password });

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        updatedNameAndPhotURL(user, name, photoURL)
   
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });

    // form.reset()
  };

  const updatedNameAndPhotURL = ( currentUser,name, photoURL) =>{
    updateProfile(currentUser, {
        displayName: name, 
        photoURL: `${photoURL}`
      })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: `${currentUser.displayName} your successfully login`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Can not update name and photo",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
}


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
