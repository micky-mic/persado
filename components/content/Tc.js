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
            title: "",
            points: [
                "Please read the following updated Terms and Conditions carefully. By using our platform, you agree to abide by these terms. Thank you for your cooperation.",
            ],
        },
        {
            title: "Account Usage and Withdrawals",
            points: [
                "All applications must be fully completed prior to initiating a withdrawal or resetting your account.",
            ],
        },
        {
            title: "Account Registration",
            points: [
                "Each phone number is permitted to register only one account. Any multiple accounts associated with the same phone number will be deactivated.",
            ],
        },
        {
            title: "Wallet Address Binding",
            points: [
                "Binding the same wallet address to multiple accounts is strictly prohibited. Detected violations will result in account freezing.",
            ],
        },
        {
            title: "Account Security",
            points: [
                "Safeguard your account and withdrawal passwords by not sharing them with others. The platform assumes no responsibility for damages caused by unauthorized access.",
            ],
        },
        {
            title: "Application Set",
            points: [
                "Application Sets are randomly assigned by the system, with each set containing 1 to 3 premium applications. The number of Application Sets per allocation ranges from 1 to 3. Once assigned, modifications, cancellations, or abandonment of an Application Set are not permitted.",
            ],
        },
        {
            title: "Inappropriate Account Usage",
            points: [
                "The platform reserves the right to take legal action against any inappropriate use of accounts.",
            ],
        },
        {
            title: "Deposit Confirmation",
            points: [
                "Confirm the deposit address with customer service before transferring funds to ensure accuracy.",
            ],
        },
        {
            title: "Wrong Deposit Address",
            points: [
                "The platform is not liable for deposits sent to incorrect addresses. Always verify the address before making a deposit.",
            ],
        },
        {
            title: "Minimum Balance Requirement",
            points: [
                "A minimum balance of $80 is required before initiating a enhancing process. enhancing with a balance below this threshold is not permitted.",
            ],
        },
        {
            title: "Optimization Completion",
            points: [
                "Optimization must be completed within one day of initiation. If you are unable to complete it within the timeframe, inform customer service immediately.",
            ],
        },
        {
            title: "Dear Freelancers,",
            points: [
                "Please ensure you thoroughly review and understand these updated Terms and Conditions. Your adherence is essential and greatly appreciated.",
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