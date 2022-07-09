import React from "react";
// import { Link } from "react-router-dom";
import { Link, usePage } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";


// import bg from "/assets/images/bg/2.png";
// import img from "/assets/images/other/4.png";

const SignIn = (page, seo) => {
    return (
        <Layout seo={seo}>
            <div className="min-h-screen" style={{ backgroundImage: `url('/assets/images/bg/2.png')` }}>
                <div className="wrapper md:pt-40 pt-20 text-center">
                    <img src={'/assets/images/other/4.png'} alt="" className="m-auto mb-5" />
                    <form className="max-w-xs m-auto">
                        <div className="text-2xl mb-6 text-violet-700 font-semibold ">
                            Sign in
                        </div>
                        <input
                            type="text"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Enter Name"
                        />
                        <input
                            type="password"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Enter Email"
                        />
                        <div className="flex mb-5">
                            <input type="checkbox" name="" id="checkbox" />
                            <label htmlFor="checkbox" className="text-sm ml-2 font-semibold">
                                Remember me
                            </label>
                        </div>

                        <button className="py-2 w-full rounded-full text-center  border font-bold  mt-2 transition bg-violet-700 text-white">
                            Log in
                        </button>
                        <div className="font-bold mt-5">
                            don't have an account yet?{" "}
                            <Link to="/signup" className="underline">
                                {" "}
                                sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default SignIn;
