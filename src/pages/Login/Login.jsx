import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/login.png";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { loginUser, googleSignIn,} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [fold, setFold] = useState(false);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;

        console.log(email, password)

       loginUser(email, password)
       .then(result =>{
        const user = result.user;

        console.log(user)

        Swal.fire({
            title:"Success!",
            text:`${user.displayName} your successfully login`,
            icon:"success",
             showConfirmButton: false,
            timer: 1500
        })
       
        navigate(from, { replace: true });
    })
    .catch(error =>{
        Swal.fire({
            title: "Error!",
            text: `${ error.message}`,
            icon: 'error',
            confirmButtonText: 'Try Again'
          })
    })
    form.reset()
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user)
            Swal.fire({
                title:"Success!",
                text:`${user.displayName} your successfully login`,
                icon:"success",
                showConfirmButton: false,
                timer: 1500,
            })
            navigate(from, { replace: true });
        })
        .catch(error =>{
            Swal.fire({
                title: "Error!",
                text: `${ error.message}`,
                icon: 'error',
                confirmButtonText: 'Try Again'
              })
        })
    }
  return (
    <div className="hero ">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-4">
        <div className="rounded-xl w-full">
          <img src={login} alt="" className="rounded-xl"/>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-2xl md:text-4xl font-bold">Login now!</h1>
            <form onSubmit={handleFormSubmit}>
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
                   
                  >
                    <FaEyeSlash  onClick={() => setFold(!fold)}/>
                  </button>
                ) : (
                  <button
                    className="absolute top-[43%] right-2 text-xl"
                    
                  >
                   <FaEye onClick={() => setFold(!fold)}/>
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
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
              <div className="divider">Or Login With</div>
                <div className="form-control mt-6">
                    <button className="btn btn-block btn-outline hover:bg-white hover:text-black" onClick={handleGoogleSignIn}>
                        <FcGoogle className="text-2xl mr-3"/> <span className="text-sm ">Google</span>
                    </button>
                    </div>    
              <p className="mt-6 text-gray-400">If you are first time , please create an account!!! <Link to="/signUp" className="text-orange-400 link-hover">Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
