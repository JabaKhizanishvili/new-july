import { Link } from "react-router-dom";
// import bg from "/assets/images/bg/2.png";
// import img from "/assets/images/other/5.png";

const SignUp = () => {
    return (
        <div className="min-h-screen" style={{ backgroundImage: `url('/assets/images/bg/2.png')` }}>
            <div className="wrapper md:pt-40 pt-20 text-center flex items-center">
                <form className="max-w-lg lg:border rounded-xl border-violet-700 lg:bg-white lg:p-20 m-auto">
                    <div className="max-w-xs m-auto">
                        <div className="text-2xl mb-6 text-violet-700 font-semibold ">
                            Sign in
                        </div>
                        <input
                            type="text"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="First name"
                        />
                        <input
                            type="text"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Last name"
                        />
                        <input
                            type="tel"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Phone number"
                        />
                        <input
                            type="text"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Email address"
                        />
                        <input
                            type="password"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Password"
                        />
                        <input
                            type="password"
                            className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                            placeholder="Repeat password"
                        />
                        <div className="flex mb-5">
                            <input type="checkbox" name="" id="checkbox" />
                            <label htmlFor="checkbox" className="text-sm ml-2 font-semibold">
                                Check to accept terms and conditions
                            </label>
                        </div>
                        <button className="py-2 w-full rounded-full text-center  border font-bold  mt-2 transition bg-violet-700 text-white">
                            Register
                        </button>
                        <div className="font-bold mt-5">
                            Already have an account?
                            <Link to="/login" className="underline">
                                {" "}
                                Log in
                            </Link>
                        </div>
                    </div>
                </form>
                <img
                    src={'/assets/images/other/5.png'}
                    alt=""
                    className="mb-5 inline-block lg:inline-block hidden"
                />
            </div>
        </div>
    );
};

export default SignUp;
