"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const caseStudies = [
    {
        id: 1,
        theme: "teal",
        image: "/new2/case1.png",
        logo: "/new2/caselogo1.png",
        company: "ALLY FINANCIAL",
        title: "Motivation AI doubled CTRs and drove +57% new accounts.",
        stats: [
            {
                value: "+57%",
                label: "NEW ACCOUNTS",
            },
            {
                value: "2×",
                label: "CTR LIFT",
            },
            {
                value: "+16%",
                label: "AVG CONVERSIONS",
            },
        ],
    },
    {
        id: 2,
        theme: "red",
        image: "/new2/case2.png",
        logo: "/new2/caselogo2.png",
        company: "VODAFONE ITALY",
        title: "+42% conversion lift across 2,000+ campaigns.",
        stats: [
            {
                value: "+42%",
                label: "CONVERSION LIFT",
            },
            {
                value: "+60%",
                label: "REDEMPTION RATE",
            },
            {
                value: "2,000+",
                label: "CAMPAIGNS",
            },
        ],
    },
];

export default function CaseStudies() {
    return (
        <section className="caseStudies">

            <div className="container">

                <div className="heading">

                    <div className="tag">
                        <span>[</span>
                        <p>MORE CASE STUDIES</p>
                        <span>]</span>
                    </div>


                    <h2>
                        See What Persado Does for
                        <br />
                        Other Brands
                    </h2>

                </div>



                <Swiper
                    modules={[Pagination]}
                    className="cards"
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                >

                    {caseStudies.map((item) => (

                        <SwiperSlide key={item.id}>

                            <div className={`studyCard ${item.theme}`}>

                                <span className="corner topLeft"></span>
                                <span className="corner topRight"></span>
                                <span className="corner bottomLeft"></span>
                                <span className="corner bottomRight"></span>



                                <div className="cardInner">


                                    <div className="imageBox">

                                        <img
                                            src={item.image}
                                            alt={item.company}
                                        />

                                    </div>




                                    <div className="content">


                                        <div className="info">


                                            <div className="brand">

                                                <img
                                                    src={item.logo}
                                                    alt={item.company}
                                                />

                                                <p>
                                                    {item.company}
                                                </p>

                                            </div>



                                            <h3>
                                                {item.title}
                                            </h3>


                                        </div>




                                        <div className="divider"></div>




                                        <div className="stats">

                                            {item.stats.map((stat, index) => (

                                                <div
                                                    className="stat"
                                                    key={index}
                                                >

                                                    <h4>
                                                        {stat.value}
                                                    </h4>


                                                    <p>
                                                        {stat.label}
                                                    </p>


                                                </div>

                                            ))}


                                        </div>



                                    </div>


                                </div>



                            </div>


                        </SwiperSlide>


                    ))}


                </Swiper>


            </div>


        </section>
    );
}