import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { Link, usePage } from '@inertiajs/inertia-react'
import { CgMenuGridR, CgClose } from "react-icons/cg";
import { HiUser } from "react-icons/hi";
import { AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const { pathname } = usePage().props;
    let transparent = false;
    if (pathname === "/") {
        transparent = true;
    }
    return (
        <div
            className={`absolute w-full top-0 left-0  z-50 py-5 ${transparent ? "text-white" : "text-violet-700"
                }`}
        >
            <div className="wrapper flex items-center justify-between">
                <Link to="/">LOGO</Link>
                <div
                    className="flex items-center text-md fixed w-screen h-screen bg-slate-800 flex-col top-0 left-0 justify-center md:relative md:bg-transparent md:flex-row md:left-auto md:top-auto md:w-auto md:h-auto md:!transform-none transition duration-500 text-white md:text-inherit"
                    style={{
                        transform: showMenu ? "translateY(0)" : "translateY(-100%)",
                    }}
                >
                    <div className="md:mr-20 ">
                        <Link
                            to="/"
                            className="mx-5 font-bold block md:inline-block text-center mb-5 md:mb-0"
                        >
                            Home
                        </Link>
                        <a
                            href="#"
                            className="mx-5 font-bold block md:inline-block text-center mb-5 md:mb-0"
                        >
                            Courses
                        </a>
                        <a
                            href="#"
                            className="mx-5 font-bold block md:inline-block text-center mb-5 md:mb-0"
                        >
                            Packages
                        </a>
                        <a
                            href="#"
                            className="mx-5 font-bold block md:inline-block text-center mb-10 md:mb-0"
                        >
                            Testimonials
                        </a>
                    </div>
                    <div>
                        <Link
                            href={route("client.login")}
                            className={`p-2 rounded border font-bold mr-3 whitespace-nowrap ${transparent
                                ? "bg-white border-white text-gray-900"
                                : "bg-violet-700 border-violet-700 text-white"
                                } `}
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className={`p-2 rounded border font-bold whitespace-nowrap ${transparent ? "border-white " : "border-violet-700"
                                }`}
                        >
                            Sign up
                        </Link>

                        {/* when logged in */}

                        {/* <div className="relative group">
              <div className="relative flex items-center">
                <HiUser />
                <p className="ml-1 font-bold">Hi, name</p>
                <AiOutlineCaretDown className="transition -mt-3 group-hover:rotate-180" />
              </div>
              <div className="text-center absolute left-0 top-full bg-white rounded shadow p-5 text-black group-hover:opacity-100 opacity-0 invisible group-hover:visible transition">
                <Link to="/cabinet">Cabinet</Link>
                <button>Log out</button>
              </div>
            </div> */}
                    </div>
                </div>
                <div
                    className="z-50 text-4xl md:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    {showMenu ? <CgClose /> : <CgMenuGridR />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
