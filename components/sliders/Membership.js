"use client";

import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import beginnerIcon from "@/public/related_assets/icons/beginnerIcon.png"
import silverIcon from "@/public/related_assets/icons/silverIcon.png"
import goldIcon from "@/public/related_assets/icons/goldIcon.png"
import platinumIcon from "@/public/related_assets/icons/platinumIcon.png"

const Membership = ({ allCommission, userCommission }) => {
    const imgs = [beginnerIcon, silverIcon, goldIcon, platinumIcon]
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
            <div className='membership-level-wrapper'>
                <div className='membership-title'>
                    <h1 className='playfair-font'>Related Membership Benefits</h1>
                </div>
                <Slider {...settings}>
                    {
                        allCommission?.map((data, index) => (
                            <div className='membership-type-parent' key={index}>
                                <div className='membership-type-child'>
                                    <Image
                                        src={imgs[index]}
                                        alt='membership'
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <div className='membership-type-child'>
                                    <h3 className='playfair-font'>{data?.membership_name}</h3>
                                    <p>{(data?.commission_rate * 100)?.toFixed(2)}%</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default Membership;