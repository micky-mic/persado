"use client";

import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sponser1 from "@/public/new/dashboard/sponser1.png"
import sponser2 from "@/public/new/dashboard/sponser2.png"
import sponser3 from "@/public/new/dashboard/sponser3.png"
import sponser4 from "@/public/new/dashboard/sponser4.png"
import sponser5 from "@/public/new/dashboard/sponser5.png"

const Properties = () => {

    const settings = {
        dots: false,  // Enables navigation dots at the bottom
        infinite: false, // Enables infinite scrolling
        speed: 500,  // Transition speed in milliseconds
        slidesToShow: 2,  // Number of cards to show at a time
        slidesToScroll: 1,  // Number of cards to scroll at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
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