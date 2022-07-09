// import { Link } from "react-router-dom";
import React from "react"
import Layout from "../Layouts/Layout";
import { Link, usePage } from '@inertiajs/inertia-react'
// import bg1 from "/assets/images/bg/1.png";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
    currencyTabData,
    feedback,
    levels,
    partners,
    resources,
} from "../components/Data";
import { useState } from "react";
// import Team from "/assets/images/other/1.png";
// import Send from "/assets/images/other/3.png";

const Home = (page, seo) => {
    const [currencyTab, setCurrencyaTab] = useState(1);
    return (
        <Layout seo={seo}>
            <section
                className="md:pt-64 md:pb-32 pt-24 pb-12 text-white relative bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/images/bg/1.png')` }}
            >
                <div className="absolute left-0 top-0  opacity-50 bg-violet-700 w-full h-full"></div>
                <div className="wrapper relative z-10">
                    <div className="text-4xl font-bold">Start trading like a Pro.</div>
                    <div className="font-bold mt-5  mb-10 md:text-xl max-w-3xl">
                        $1.798+ Profit per week is our target for you simply register to get
                        access to 3 simple trading strategies for gfree
                    </div>
                    <Link
                        to="/"
                        className="bg-white rounded-full  text-violet-700 text-sm font-bold py-3 px-7"
                    >
                        <BsFillCollectionPlayFill className="inline-block -mt-1 mr-1" /> Get
                        free video lesson
                    </Link>
                </div>
            </section>
            <section className="bg-zinc-100 md:py-10 py-5">
                <div className="wrapper text-center">
                    {partners.map((item) => {
                        return (
                            <img
                                key={item}
                                src={item}
                                className="inline-block align-middle mx-1 mb-5 w-24 md:w-auto"
                                alt=""
                            />
                        );
                    })}
                </div>
            </section>
            <section className="py-10 wrapper">
                <div className="text-center text-3xl mb-8">
                    You will benefit from our courses if:
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
                    {levels.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-xl p-5 transition group hover:text-white hover:bg-violet-700"
                            >
                                {item.icon}
                                <div className="text-xl mb-2 font-bold mt-2">{item.title}</div>
                                <div className=" font-medium">{item.paragraph}</div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <section className="bg-zinc-100 py-10">
                <div className="wrapper">
                    <div className="text-center mb-10">
                        <div className="text-3xl mb-2">Resources</div>
                        <div className="font-medium">some words about resources we use</div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
                        {resources.map((item, index) => {
                            return (
                                <div key={index} className="bg-white rounded-lg shadow-xl p-5 ">
                                    <div className="text-xl mb-2 font-bold mt-2">
                                        {item.title}
                                    </div>
                                    <div className="flex items-start mt-5">
                                        <img src={item.icon} alt="" />
                                        <div className="ml-5">
                                            {item.checks.map((check) => {
                                                return (
                                                    <p key={check} className="font-medium mb-1">
                                                        <IoMdCheckmarkCircleOutline className="inline-block mr-1 -mt-1" />
                                                        {check}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-20 wrapper">
                <div className="text-center mb-5">
                    <div className="text-3xl mb-2">Packages</div>
                    <div className="font-medium">
                        Although you've been trading for some time, you can't seem to get{" "}
                        <br />
                        your profits to exceed your looses
                    </div>
                </div>
                <div
                    className={`currencyTab tab_${currencyTab} relative sflex items-center justify-center border-2 border-zinc-300 rounded-full w-fit m-auto`}
                >
                    {currencyTabData.map((item, index) => {
                        return (
                            <button
                                onClick={() => setCurrencyaTab(index + 1)}
                                key={index}
                                className={`py-1 px-4 transition font-medium ${currencyTab === index + 1 ? "text-white" : "text-black"
                                    }`}
                            >
                                {item.currency}
                            </button>
                        );
                    })}
                </div>
                {currencyTabData.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`${currencyTab === index + 1 ? "grid " : "hidden"
                                } md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 mb-10 `}
                        >
                            {item.boxes &&
                                item.boxes.map((box, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg border border-violet-200 shadow-lg p-5 transition duration-300 hover:shadow-violet-500 hover:shadow-md flex flex-col justify-between"
                                        >
                                            <div>
                                                <div className="mb-6 flex items-center justify-center">
                                                    <div className="text-4xl font-bold text-violet-700 mr-4 ">
                                                        {box.price}
                                                    </div>
                                                    <div className="text-slate-400 font-semibold line-through text-2xl">
                                                        {box.discount}
                                                    </div>
                                                </div>
                                                <div className="text-center text-2xl mb-6 font-bold">
                                                    {box.head}
                                                </div>
                                                {box.checks.map((check, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className="pl-5 relative text-sm mb-2 font-medium "
                                                        >
                                                            <IoMdCheckmarkCircleOutline className="inline-block mr-1 -mt-1 absolute left-0 top-2" />{" "}
                                                            <p className="mb-1">{check.title}</p>{" "}
                                                            <div className="opacity-50">{check.subtitle}</div>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <button className="py-2 px-8 rounded-full text-violet-700 border-violet-700 border font-bold flex mt-8 mx-auto mb-3 transition hover:bg-violet-700 hover:text-white">
                                                Purchase now
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}
            </section>
            <section className="bg-zinc-100 py-10">
                <div className="wrapper">
                    <div className="text-center mb-5">
                        <img src={'/assets/images/other/1.png'} alt="" className="m-auto" />
                        <div className="text-3xl mb-2">Customer Feedback</div>
                        <div className="font-medium">
                            Although you've been trading for some time, you can't seem to{" "}
                            <br />
                            get your profits to exceed your looses
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-10 mb-10">
                        {feedback.map((item, index) => {
                            return (
                                <div key={index} className="bg-white rounded-lg p-4">
                                    <div className="flex items-center  justify-start mb-3">
                                        <div className="flex items-center justify-center shadow-md w-10 h-10 rounded-lg shrink-0 mr-2">
                                            <img src={item.pic} alt="" />
                                        </div>
                                        <div className="font-bold">
                                            <div>{item.name}</div>
                                            <div className="opacity-50 -mt-1">@{item.position}</div>
                                        </div>
                                    </div>
                                    <p className="mb-5 text-sm">{item.comment}</p>
                                    <p className="opacity-40 text-xs font-bold">
                                        {item.date} - {item.time}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="bg-violet-700 py-10 text-white">
                <div className="wrapper flex justify-between items-center flex-col md:flex-row">
                    <div className="max-w-xl">
                        <div className="text-2xl">Subscribe our newsletter</div>
                        <div className="opacity-50 mt-2">
                            We're a team of non-cynics who truly care for our work.
                        </div>
                    </div>
                    <div className="bg-white rounded-full relative  w-80 h-12 overflow-hidden md:mt-0 mt-5">
                        <input
                            type="text"
                            className="w-full h-full text-black text-sm pl-3 outline-0  bg-none"
                            placeholder="Enter your email here"
                        />
                        <button className="absolute right-1 top-1 w-20 h-10 flex  items-center justify-center rounded-full bg-violet-700">
                            <img src={'/assets/images/other/3.png'} alt="" />
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
