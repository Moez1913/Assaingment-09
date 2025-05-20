import { useContext } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../public/assest/navLogo.png';
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext)
    const location = useLocation();
   const navigate=useNavigate()

    const handelSignOut = () => {
        userSignOut()
            .then(() => {
                console.log('sign out')
                 toast.info('You are SignOut!')
               
            })
            .catch(error => {
                console.log(error)
            })
             navigate('/')
    }
    const links =(
    <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold underline" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blog"
                className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold underline" : ""
                }
            >
                Blogs
            </NavLink>
        </li>
    </>
);
    return (
        <div className="navbar bg-blue-400 my-4 max-w-7xl mx-auto rounded-lg shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    < img className='h-12 w-12' src={logo} alt="" />
                    <h1 className="text-2xl font-bold mb-2">CareerGuidePro</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
    user ? (
        <div className="navbar-end flex items-center gap-3">
            {/* User Photo with Tooltip */}
            <div className="relative group">
                <img
                    src={user.photoURL}
                 
                    className="h-10 w-10 rounded-full border-2 border-blue-600 cursor-pointer"
                    title={user.displayName}
                />
                {/* Tooltip on hover */}
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                    {user.displayName || user.email}
                </span>
            </div>
            <button onClick={handelSignOut} className="btn btn-outline btn-primary flex items-center gap-1">
                <CgProfile /> Signout
            </button>
        </div>
    ) : (
        <div className="navbar-end">
            <button>
                <Link to="/login" className="btn btn-outline btn-primary">Login</Link>
            </button>
        </div>
    )
}
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Navbar;