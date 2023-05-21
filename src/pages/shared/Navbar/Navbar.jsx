import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import logo from "../../../assets/images.jpg";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You successfully logout",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  const menu = (
    <>
      <li>
        <Link
          to="/"
          className="link link-hover hover:bg-white hover:text-primary text-2xl text-gray-600"
        >
          Home
        </Link>{" "}
      </li>
      <li>
        <Link
          to="/allToys"
          className="link link-hover hover:bg-white hover:text-primary text-2xl text-gray-600"
        >
          All Toys
        </Link>{" "}
      </li>
      {user && (
        <>
          <li>
            <Link
              to="/myToys"
              className="link link-hover hover:bg-white hover:text-primary text-2xl text-gray-600"
            >
              My Toys
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/addToy"
              className="link link-hover hover:bg-white hover:text-primary text-2xl text-gray-600"
            >
              Add A Toy
            </Link>{" "}
          </li>
        </>
      )}
      <li>
        <Link
          to="/blogs"
          className="link link-hover hover:bg-white hover:text-primary text-2xl text-gray-600"
        >
          Blogs
        </Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar  mt-4 rounded-xl   ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
            {user && (
              <button
                className="btn btn-outline btn-error"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="w-32 h-auto mx-5 md:mx-0 md:w-20 md:h-auto rounded-full"
          />
        </Link>
        <Link
          to="/"
          className=" normal-case text-2xl text-blue-300 ml-5 md:ml-1"
        >
          <span className="text-blue-400">car</span>
          <span className="text-gray-500">T</span>
          <span className="text-blue-600">oys</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-hover dropdown-left mr-4">
              <div className=" btn btn-ghost btn-circle avatar">
                <img src={user.photoURL} className="w-10 rounded-full" />
              </div>
              <ul
                tabIndex={0}
                className="shadow menu menu-compact dropdown-content bg-base-content text-base-200 rounded-box w-52"
              >
                <li>
                  <h3>{user.displayName}</h3>
                </li>
                <li>
                  <h3>{user.email}</h3>
                </li>
              </ul>
            </div>
            <button
              className="btn btn-outline btn-error hidden md:block"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline btn-warning">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
