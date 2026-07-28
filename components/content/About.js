"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import bgdesign from "@/public/new2/lines.png"
import about1 from "@/public/new2/about1.png"
import Footer from '../footer/Footer';
import Image from 'next/image'



const About = ({ data }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "about")[0];
        setInfo(infoData);
    }, []);

    return (
        <>
            <div className='background-color'
            style={{
                        backgroundImage: `url(${bgdesign.src})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "100vh",
                    }}>
                <Breadcrumb
                    title={"About Us"}
                    link="/dashboard"
                    isColor="#000000"
                    // bg="#000"
                />
               
               <div className='main_about'>
                     <Image
                                            src={about1}
                                            alt="white"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
               </div>
               
                <Footer/>
            </div>
        </>
    )
}

export default About