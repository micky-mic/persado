"use client";

import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Properties = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <div className="destination-wrapper">
                <div className="destination-title">
                    <h1 className='playfair-font'>Featured in</h1>
                </div>
                <Slider {...settings}>
                    <div className="destination-details-wrapper">
                        <Image
                            src={sponser1}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={sponser2}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={sponser3}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={sponser4}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={sponser5}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                    </div>
                    {/* <div className="destination-details-wrapper">
                        <Image
                            src={properyImg6}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Retail </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg7}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Hotel </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg8}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Entertainment
                                & Culture Venues </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg9}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Lab </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg10}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Education
                                & Research </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg11}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Workforce
                                Housing </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg12}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Affordable
                                Housing </h3>
                        </div>
                    </div> */}
                </Slider>
            </div>
        </>
    )
}

export default Properties