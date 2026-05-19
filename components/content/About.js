"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import dashimg1 from "@/public/new/dashboard/dashcenterimg1.png"
import dashimg2 from "@/public/new/dashboard/dashcenterimg2.png"
import dashimagecenter from "@/public/new/dashboard/dash_image_center.png"
import men from "@/public/new/dashboard/men.png"
import joinimg1 from "@/public/new/dashboard/joinimg1.png"
import Image from 'next/image';
import Footer from '../footer/Footer';
import TeamSlider from '../sliders/TeamSlider';



const About = ({ data }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "about")[0];
        setInfo(infoData);
    }, []);

    const sections = [
        {
            title: "Meet Nexos.ai",
            description1:
                "Nexos.ai gives businesses unified access to today’s leading Large Language Models and allows to centralize AI operations with a single secure AI platform — manage AI workloads, enforce policies, and maintain control over organization’s AI ecosystem.",
            description2:
                "With one simple workspace, your team can collaborate with AI, save time on repetitive work, and turn ideas into results faster. Easy, efficient, and built for modern marketing teams.",
            image: dashimg1,
        },
        {
            title: "Powering the next generation of AI in business",
            description1:
                "We believe AI-powered marketing should be simple and accessible for businesses of every size. Our goal is clear — eliminate the friction in content creation, campaign management, and daily marketing operations, so companies can focus on growth, creativity, and performance instead of wasting time on repetitive tasks and disconnected systems.",
            image: dashimg2,
        },
    ];


    return (
        <>
            <div className='background-color'>
                <Breadcrumb
                    title={"About Us"}
                    link="/dashboard"
                    isColor="#fff"
                    bg="#000"
                />
                {/* <div className='about-page-wrapper'>
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
                </div> */}
                <div className="dashboard-wrapper-inner-wrapper">
                    <div className="dashboard-center-wrapper">
                        <div className="dash-center-wrapper">
                            {sections.map((item, index) => (
                                <div className="dash-center-parent" key={index}>
                                    <div className="dash-center-child">
                                        <div className="dash-center-title">
                                            <h2>{item.title}</h2>
                                        </div>

                                        <p>{item.description1}</p>
                                        <br />

                                        <p>{item.description2}</p>
                                    </div>

                                    <div className="dash-center-child">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="dash-img-center-parent">
                        <div className="heading-parent">
                            <div className="heading-child">
                                <h1>Marketing in the age of AI</h1>
                                <p>Marketing in the AI era should be simpler, faster, and more accessible for every business. At nexos.ai, we help companies increase exposure, improve performance, and grow revenue through one unified AI marketing platform.</p><br />
                                <p>By reducing manual work and simplifying execution, nexos.ai gives businesses the tools to market smarter, reach more people, and unlock stronger results with greater efficiency.</p>
                            </div>
                        </div>
                        <div className="dash-img-center-child">
                            <Image
                                src={dashimagecenter}
                                alt="img"
                                width={100}
                                height={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="dash-container-wrapper">
                        <div className="dash-container-parent">
                            <h1>Don’t just take our word for it. Take theirs.</h1>
                            <p>Real teams. Real AI challenges. Real results with nexos.ai.</p>
                            <div className="dash-container-child">
                                <h1>Handling a big user load while scaling AI operations is no small task</h1>
                                <p>If we tried building an AI gateway ourselves, it would have taken months and a huge dev budget. With nexos.ai, we had access to the best models in a plug-and-play API — reducing the complexity of scaling,
                                    and complete with performance observability. Setting up teams and adding users was a smooth process, while adjustable security guardrails
                                    ensured data stayed protected at every step. T
                                    heir team was hands-on, and when we hit an edge case,
                                    they were right there, figuring it out with us. Passionate,
                                    reliable, and exactly the kind of partner you want in AI.</p>
                                <div className="container-inner-parent">
                                    <div className="container-inner-child">
                                        <Image
                                            src={men}
                                            alt="img"
                                            width={100}
                                            height={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="container-inner-child">
                                        <p>Dainius Kavoliūnas</p>
                                        <p>Head of product @Hostinger Horizons</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashborad-slider-wrapper">
                        <div className="dashborad-slider-parent">
                            <h1>Meet the team</h1>
                            <div className="dasboard-slider-child">
                                <p>We’re a team of builders, engineers,
                                    and operators solving one of the biggest challenges in AI today — how businesses can actually use it,
                                    safely and at scale.</p>
                                <TeamSlider />
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-join-wrapper">
                        <div className="dashboard-join-parent">
                            <div className="dashboard-join-child">
                                <Image
                                    src={joinimg1}
                                    alt="img"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <h2>Join the nexos.ai program</h2>
                                <p>Earn money by promoting nexos.ai – an all-in-one AI platform for teams’ best work, powered by Agents and intelligent automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default About