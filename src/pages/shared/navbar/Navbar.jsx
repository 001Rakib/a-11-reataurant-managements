import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOption = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/allFood"}>All Food Items</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-black bg-opacity-20 fixed text-white z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            EpicureEase
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>

        {user ? (
          <div className="navbar-end text-black">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Image" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to={"/my-profile/my-added-food"}
                    className="justify-between"
                  >
                    My Added Food Items
                  </Link>
                </li>
                <li>
                  <Link to={"/my-profile/add-food"} className="justify-between">
                    Add a Food Items
                  </Link>
                </li>
                <li>
                  <Link to={"/my-profile/my-orderer-food"}>
                    My Ordered Food Items
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to={"/login"}>
              <li className="btn btn-sm">Login</li>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
