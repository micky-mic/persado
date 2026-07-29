"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const teamMembers = [
  {
    image: img1,
    name: "Tomas Okmanas",
    role: "Co-founder, CEO",
  },
  {
    image: img2,
    name: "Emanuelis Norbutas",
    role: "Chief Technology Officer",
  },
  {
    image: img3,
    name: "Justas Morkūnas",
    role: "Chief Commercial Officer",
  },
  {
    image: img4,
    name: "Mykolas Dumčius",
    role: "Chief Product Officer",
  },
];

const TeamSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
    };

    return (
        <div className="dashborad-slider-wrapper">

            <div className="dashborad-slider-parent">
                {/* IMAGE SLIDER */}
                <Slider {...settings}>

                    {teamMembers.map((member, index) => (
                        <div key={index}>

                            <div className="dasboard-slider-child">

                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={500}
                                    height={600}
                                    unoptimized
                                />

                                <h2>{member.name}</h2>

                                <p>{member.role}</p>

                            </div>

                        </div>
                    ))}

                </Slider>

            </div>

        </div>
    );
};

export default TeamSlider;