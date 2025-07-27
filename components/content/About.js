"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import Image from 'next/image';
import aboutImg1 from "@/public/related_assets/Images/aboutImg1.jpeg"
import aboutImg2 from "@/public/related_assets/Images/aboutImg2.jpeg"
import aboutImg3 from "@/public/related_assets/Images/aboutImg3.jpeg"
import aboutImg4 from "@/public/related_assets/Images/aboutImg4.jpeg"
import aboutImg5 from "@/public/related_assets/Images/aboutImg5.jpeg"
import aboutImg6 from "@/public/related_assets/Images/aboutImg6.jpeg"
import aboutImg7 from "@/public/related_assets/Images/aboutImg7.jpeg"
import aboutImg8 from "@/public/related_assets/Images/aboutImg8.jpeg"
import Footer from '../footer/Footer';


const About = ({ data }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "about")[0];
        setInfo(infoData);
    }, []);

    return (
        <>
            <div className='background-color'>
                <Breadcrumb
                    title={"About Us"}
                    link="/dashboard"
                    isColor="#fff"
                />
                <div className='about-page-wrapper'>
                    <div className='about-page-inner-wrapper'>
                        <div className='main-img-dlts'>
                            <h1 className='playfair-font'>Dare to transform</h1>
                            <p>Transforming urban life is about pushing limits and creating cutting-edge spaces and experiences.</p>
                            <Image
                                src={aboutImg1}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='img-title-dlts'>
                            <h3>WHO WE ARE</h3>
                            <Image
                                src={aboutImg2}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='img-title-dlts'>
                            <h1 className='playfair-font'>We Are Reshaping Cities <br />
                                With Vision</h1>
                            <p>We strive to propel cities forward.
                                Our developments are inclusive, tech-forward
                                and sustainable, and serve as economic
                                and creative engines for their communities.</p>
                            <Image
                                src={aboutImg3}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='img-title-dlts'>
                            <h1 className='playfair-font'>We Are Supporting <br />
                                Thriving Communities</h1>
                            <p>From large-scale engineering and infrastructure projects to
                                forward thinking affordable housing solutions, we are committed to growing thriving neighborhoods wherever we work.</p>
                            <Image
                                src={aboutImg4}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='img-title-dlts'>
                            <h1 className='playfair-font'>We Are Committed to Innovation <br />
                                and Entrepreneurship</h1>
                            <p>We relentlessly pursue innovation. By empowering our talented team, we promote entrepreneurship
                                and new ideas to bring our ambitions to life.</p>
                            <Image
                                src={aboutImg5}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='img-title-dlts'>
                            <h1 className='playfair-font'>We Are a Home <br />
                                for Culture
                            </h1>
                            <p>We create unique cultural experiences.
                                We work to bring inspiring arts, entertainment
                                and culinary offerings to life to make
                                memorable moments.</p>
                            <Image
                                src={aboutImg6}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='img-title-dlts'>
                            <h1 className='playfair-font'>We Are Wellness for People  <br />
                                and Planet</h1>
                            <p>We offer unrivaled wellness. Our properties encourage active,
                                healthy lifestyles through integrated fitness and sustainable design to support the health of people and our planet.</p>
                            <Image
                                src={aboutImg7}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='img-title-dlts'>
                            <h1 className='playfair-font'>Hospitality Is <br />
                                in Our DNA</h1>
                            <p>We offer unrivaled wellness. Our properties encourage active,
                                healthy lifestyles through integrated fitness and sustainable design to support the health of people and our planet.</p>
                        </div>
                        <div className='ceo-words'>
                            <h1 className='playfair-font'><span>“</span> Over more than 45 years, we’ve sought to redefine the real estate industry by thinking
                                beyond physical assets to propel cities forward with innovations for how people live. <span>”</span></h1>
                            <h2 className='playfair-font'>-Jeff T. Blau</h2>
                            <p>CEO, Related Companies</p>
                        </div>
                        <div className='img-title-dlts' style={{
                            marginBottom: "3rem"
                        }}>
                            <h3>OUR VISION</h3>
                            <Image
                                src={aboutImg8}
                                alt='about'
                                height={100}
                                width={100}
                                unoptimized
                            />
                            <h1 className='playfair-font mt2'>We strive to transform urban life by creating innovative neighborhoods and supporting nurturing communities.
                            </h1>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default About