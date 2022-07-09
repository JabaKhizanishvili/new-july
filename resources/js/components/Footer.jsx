// import img1 from "/assets/images/footer/1.png";
// import img2 from "/assets/images/footer/2.png";
// import img3 from "/assets/images/footer/3.png";
// import img4 from "/assets/images/footer/4.png";
// import img5 from "/assets/images/footer/5.png";
import React from "react"

const Footer = () => {
    return (
        <div className="wrapper py-10">
            <div className="flex items-start justify-between mb-10 flex-col md:flex-row">
                <form className="max-w-xs mr-0 md:mr-5 md:mb-0 mb-10">
                    <div className="text-2xl mb-6">Ready to get started?</div>
                    <input
                        type="text"
                        className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                        placeholder="Enter Name"
                    />
                    <input
                        type="text"
                        className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-10 pl-3"
                        placeholder="Enter Email"
                    />
                    <textarea
                        className="bg-zinc-100 text-sm rounded mb-3 w-full outline-0 h-32 pl-3 pt-2 "
                        placeholder="Message"
                    ></textarea>
                    <button className="py-2 px-8 rounded-full text  border font-bold flex mt-2 transition bg-violet-700 text-white">
                        Send message
                    </button>
                </form>
                <div>
                    <div className="text-2xl mb-6">Contact us</div>
                    <div className="flex items-center justify-start text-sm font-semibold mb-5">
                        <div className="w-10 h-10 rounded-full shrink-0 border-violet-700 border flex items-center justify-center mr-2 ">
                            <img src={'/assets/images/footer/1.png'} alt="" />
                        </div>
                        <div>
                            Company location <br />
                            100 Richmond ave, Long beach, United State, 13420
                        </div>
                    </div>
                    <div className="flex items-center justify-start text-sm font-semibold mb-10">
                        <div className="w-10 h-10 rounded-full shrink-0 border-violet-700 border flex items-center justify-center mr-2 ">
                            <img src={'/assets/images/footer/2.png'} alt="" />
                        </div>
                        <div>
                            Email Address
                            <br />
                            randommail@companycontact.com
                        </div>
                    </div>
                    <div className="text-2xl mb-6">We accept</div>
                    <div>
                        <img
                            src={'/assets/images/footer/3.png'}
                            alt=""
                            className="inline-block mx-2 h-7 lg:h-auto"
                        />
                        <img
                            src={'/assets/images/footer/4.png'}
                            alt=""
                            className="inline-block mx-2 h-7 lg:h-auto"
                        />
                        <img
                            src={'/assets/images/footer/5.png'}
                            alt=""
                            className="inline-block mx-2 h-7 lg:h-auto"
                        />
                    </div>
                </div>
            </div>
            <p className="mb-5 md:text-sm text-xs text-justify ">
                © 2022 Spot Education Center brand is owned and operated by CHARTA
                LIMITED 13612609 registered at 2 Frederick Street, Kings Cross, London,
                United Kingdom, WC1X 0ND.
            </p>
            <p className="mb-5 md:text-sm text-xs text-justify ">
                The material on this website is for general educational purposes only
                and comprises personal opinions and ideas. It should not be interpreted
                as containing any type of financial advice. The material does not
                suggest purchasing financial services, nor does it guarantee the
                performance or outcome of future transactions. Operations mentioned in
                this material can be considered high-risk transactions and it is
                possible that by trading you may sustain significant investment losses,
                possibly including the loss of money in your account. When trading, you
                must always take into consideration your level of experience and seek
                independent financial advice if necessary. The accuracy, validity, or
                completeness of this information is not guaranteed and no liability is
                assumed for any direct or indirect loss related to any investment based
                on the material.
            </p>
            <p className=" md:text-sm text-xs text-justify ">
                The information on this site is not directed at residents of any
                particular country outside the company base country and is not intended
                for distribution to, or use by, any person in any country or
                jurisdiction where such distribution or use would be contrary to local
                law or regulation.
            </p>
        </div>
    );
};

export default Footer;
