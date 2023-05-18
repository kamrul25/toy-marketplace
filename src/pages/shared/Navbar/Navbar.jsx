import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogout = () =>{
        navigate('/')
    }
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>{" "}
      </li>
      <li>
        <Link to="/myToys">My Toys</Link>{" "}
      </li>
      <li>
        <Link to="/addToy">Add A Toy</Link>{" "}
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 border  mt-4 rounded-xl">
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
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl">
          ToyMarketPlace
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline btn-warning">Login</Link>
        {user && (
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <h3>{user.displayName}</h3>
              </li>
              <li>
                <button className="btn btn-block btn-outline bnt-error"
                onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
