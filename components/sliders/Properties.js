"use client";

import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import properyImg1 from "@/public/related_assets/Images/properyImg1.jpeg"
import properyImg2 from "@/public/related_assets/Images/properyImg2.png"
import properyImg3 from "@/public/related_assets/Images/properyImg3.jpeg"
import properyImg4 from "@/public/related_assets/Images/properyImg4.jpeg"
import properyImg5 from "@/public/related_assets/Images/properyImg5.jpeg"
import properyImg6 from "@/public/related_assets/Images/properyImg6.jpeg"
import properyImg7 from "@/public/related_assets/Images/properyImg7.jpeg"
import properyImg8 from "@/public/related_assets/Images/properyImg8.jpeg"
import properyImg9 from "@/public/related_assets/Images/properyImg9.jpeg"
import properyImg10 from "@/public/related_assets/Images/properyImg10.jpeg"
import properyImg11 from "@/public/related_assets/Images/properyImg11.jpeg"
import properyImg12 from "@/public/related_assets/Images/properyImg12.jpeg"



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
                    <h1 className='playfair-font'>Explore What We Create</h1>
                </div>
                <Slider {...settings}>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg1}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Luxury
                                Condiminiums</h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg2}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Luxury
                                Rentals </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg3}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>City
                                Centers </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg4}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Mixed-Use </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg5}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h3>Office </h3>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
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
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Properties