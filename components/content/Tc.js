"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb';
import bgdesign from "@/public/new/bgdesign.svg"
import logo from "@/public/new/logo.png"
import Link from 'next/link';
import Image from 'next/image';



const Tc = ({ data, authenticatedUser, allCommission, userCommission }) => {

    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "tc")[0];
        setInfo(infoData);
    }, []);



    const tcData = [
        {
            title: "How We Work",
            points: [
                "Each account requires 40 sales completed driving and a minimum amount of USD 50 before performing withdrawal or reset.",
                "One cell phone number can only be registered once.",
            ],
        },
        {
            title: "Privacy",
            points: [
                "Do not disclose account password to anyone if any damage is caused, the platform will not be responsible.",
            ],
        },
        {
            title: "Finance Management",
            points: [
                "If you keep withdrawing money for a short period of game or the amount is large, the account will be frozen and you will have to pay to unfreeze the account.",
            ],
        },
        {
            title: "Optimization",
            points: [
                "All sales are randomly issued by the system, so it is not possible to change, cancel, control and skip, etc.",
                "Each sales comes from different seller’s, longer than 5 minutes without deposit and each deposit need to confirm with agency service and seller bank account if it is the same if the deposit to the wrong account, the platform has the right to hold responsible.",
                "Users required to complete 40 sales within 8 hours once started Create Data.",
            ],
        },
        {
            title: "Violation",
            points: [
                "Legal measures will be taken in the event of malicious misappropriate of an account.",
            ],
        },
    ];

    return (
        <>
            <div className='term-condition-page-wrapper'>
                <div className="tc-page" style={{
                    backgroundImage: `url(${bgdesign.src})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    // height: "170vh",
                }}>
                    <Breadcrumb
                        title={"TERMS & CONDITIONS"}
                        link="/dashboard"
                        isColor="#FFF"
                    />
                    {/* Cards */}
                    <div className="tc-wrapper">
                        {tcData.map((item, index) => (
                            <div className="tc-card" key={index}>

                                <h3>{item.title}</h3>

                                <ul>
                                    {item.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>

                    <div className="faq-footer">
                        <Image
                            src={logo}
                            alt="logo"
                            width={100}
                            height={100}
                            unoptimized
                        />

                        <h4>The Company</h4>

                        <ul>
                            <Link href={"/dashboard/content/about"}>
                                <li>About Us</li>
                            </Link>
                            <Link href={"/dashboard/content/faq"}>
                                <li>Frequently Asked Questions</li>
                            </Link>
                            <Link href={"/dashboard/content/tc"}>
                                <li>Terms & Conditions</li>
                            </Link>
                        </ul>

                        <p>© 2026. All Rights Reserved</p>
                    </div>
                </div>
            </div>
            {/* <section className="content-section">
                <div dangerouslySetInnerHTML={{ __html: info?.description }}></div>
            </section> */}
        </>
    )
}

export default Tc