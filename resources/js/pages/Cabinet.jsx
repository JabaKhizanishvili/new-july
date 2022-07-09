import React from "react";
import { courses } from "../components/Data";
// import doc from "/assets/images/other/6.png";
// import dl from "/assets/images/other/7.png";

const Cabinet = () => {
    return (
        <div className="pt-32 md:pt-40 pb-40 wrapper">
            <div className="mb-10 font-bold">
                <div className="text-violet-700">Cabinet</div>
                <div className="text-2xl">Hello, Name Surname</div>
            </div>
            <div className="mb-5 text-lg font-semibold">Courses</div>
            {courses.map((item, index) => {
                return (
                    <div key={index} className="flex items-center lg:mb-3 mb-6">
                        <span className="font-bold lg:inline-block hidden">
                            {index + 1}
                        </span>
                        <div className="flex items-center justify-start lg:w-1/4 w-52 lg:ml-5 ">
                            <img src={'/assets/images/other/6.png'} alt="" className="shrink-0 lg:w-auto w-8" />
                            <div className="font-semibold lgtext-sm text-xs ml-3">
                                <p>{item.title}</p>
                                <p>
                                    Status:{" "}
                                    <span
                                        className={item.paid ? "text-green-600" : "text-red-500"}
                                    >
                                        {item.paid ? "Paid" : "Not paid"}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="lg:text-2xl lg:mx-10 mx-5 font-bold lg:w-32 w-16">
                            £{item.price}
                        </div>
                        <button
                            disabled={!item.paid}
                            className={`lg:bg-zinc-100 rounded-lg lg:py-2 lg:px-5 text-center ${!item.paid && "grayscale"
                                }`}
                        >
                            <img src={'/assets/images/other/7.png'} alt="" className="m-auto" />
                            <div className="underline lg:text-md text-xs">
                                Download course
                            </div>
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cabinet;
