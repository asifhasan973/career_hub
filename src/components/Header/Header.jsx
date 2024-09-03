import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar w-11/12 mx-auto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/applied">Applied Jobs</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl italic">
          CareerHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-9 menu-horizontal px-1">
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/applied">Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blogs</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
          Button
        </a>
      </div>
    </div>
  );
};

export default Header;
