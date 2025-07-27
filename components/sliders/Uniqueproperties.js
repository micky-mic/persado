"use client";

import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "@/public/related_assets/Images/interstedImg1.jpeg"
import Image2 from "@/public/related_assets/Images/interstedImg2.jpeg"
import Image3 from "@/public/related_assets/Images/interstedImg3.jpeg"
import Image4 from "@/public/related_assets/Images/interstedImg4.jpeg"
import Image5 from "@/public/related_assets/Images/interstedImg5.jpeg"
import Image6 from "@/public/related_assets/Images/interstedImg6.jpeg"
import Image7 from "@/public/related_assets/Images/interstedImg7.jpeg"
import Image8 from "@/public/related_assets/Images/interstedImg8.jpeg"
import Image9 from "@/public/related_assets/Images/interstedImg9.jpeg"
import Image10 from "@/public/related_assets/Images/interstedImg10.jpeg"
import Image11 from "@/public/related_assets/Images/interstedImg11.jpeg"
import Image12 from "@/public/related_assets/Images/interstedImg12.jpeg"
import Image13 from "@/public/related_assets/Images/interstedImg13.jpeg"
import Image14 from "@/public/related_assets/Images/interstedImg14.jpeg"
import Image15 from "@/public/related_assets/Images/interstedImg15.jpeg"
import Image16 from "@/public/related_assets/Images/interstedImg16.jpeg"
import Image17 from "@/public/related_assets/Images/interstedImg17.jpeg"
import Image18 from "@/public/related_assets/Images/interstedImg18.jpeg"



const UniqueProperties = () => {

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
            <div className="properties-wrapper">
                <div className="property-title">
                    <h1 className='playfair-font'>You might be interested </h1>
                </div>
                <Slider {...settings}>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image1}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>Hudson Yards</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 10,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image2}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>The Grand LA</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 8,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image3}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>The 78</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 12,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image4}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>The Row Fulton Market</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 15,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image5}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>The Cortland</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 15,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image6}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>South Flagler House</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 12,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image7}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>Brent Cross Town</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 10,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image8}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>The Grand by Genry</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 13,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image9}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>3 Copper Square</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 10,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image10} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>The Quinn</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 12,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image11} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>Conrad Los Angeles</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 15,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image12} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>575 Rosemary</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 19,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image13} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>Innovation Square III</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 12,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image14} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>King’s Cross</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 10,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image15} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>Fifteen Fifty</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 10,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image16} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>Channelside</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star empty-fullStar'></i>
                                        </li>
                                    </ui>
                                    <p>$ 12,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image17} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>The Avery</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 15,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image18} 
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3 className='playfair-font'>Argyle House</h3>
                                <div className="img-sub-details">
                                    <ui>
                                        <li>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className='fa fa-star'></i>
                                            <i className="fa-solid fa-star-half-stroke"></i>
                                        </li>
                                    </ui>
                                    <p>$ 10,000 /month</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    )
}

export default UniqueProperties;