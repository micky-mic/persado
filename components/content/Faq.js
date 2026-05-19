"use client";

import React, { useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import bgdesign from "@/public/new/bgdesign.svg"
import logo from "@/public/new/logo.png"
import Link from "next/link";
import Image from "next/image";

const faqData = [
    {
        title: "NOTICE",
        content: `Kindly do not use the same personal bank card information to register repeatedly, 
repeated registration will take action to specific account if found.

Personal multi-account driving sales will lead to the suspension of the seller's store, 
affect the seller's credibility and the invalidation of sales.

The platform prohibits one card bound to multiple accounts, please do not use individual 
multiple account, card bound to multiple accounts, will all be lead to funds freeze, 
90 days account permanently blocked processing.

The platform is designed to prevent people from maliciously laundering money or cashing out 
a series of improper behavior.`,
    },

    {
        title: "DEPOSIT",
        content: `Each deposit are required to redirect to the agency service to assist in remittance deposit.
         Once remitting the funds according to the account provided by the platform's agency service, kindly provide a screenshot of the successful transfer to the account.
          In sales to ensure that the deposit is made instant, please make sure that the name of the person you are transferring to and the amount you are transferring are the
          same as the one being provided. If you encounter any unsolvable problems during the deposit process, please contact the deposit agency service in Ame. Due to a large amount of information,
          please make sure to check the account card number of this platform carefully before deposit. The platform occasionally changes the account number. Any inquiries kindly refer to platform online agency service for consultation!`,
    },

    {
        title: "CREATE DATA",
        content: `Once deposited your account, you may Create Data, click
"Create Data" to redirect to the relevant page and "START Create Data".
 Wait for the system to drive a sales, submit the
sales once sales submission pops up to complete the sales.
Complete 40 sales per day to perform a withdrawal`,
    },

    {
        title: "WITHDRAW",
        content: `Before proceed to withdrawal, kindly bind your withdrawal information on the platform. Withdraw
your funds on the home page "Withdrawal"
interface. Click the "Withdraw" button after
entering the amount you want to withdraw and
your withdrawal password to withdraw. The
specific arrival time is subject to the bank's arrival
time. Withdrawal time is from 09:30 to 23:00 every
day.`,
    },

    {
        title: "PLATFORM AGENT MODE",
        content: `Users can become platform agents by
recommending new users, and they can get
extra dynamic rewards. The reward is 20% of the
daily commission for referrals`,
    },

    {
        title: "SALES DRIVING TIME",
        content: `Users can become platform agents by recommending new users, and they can get extra
dynamic rewards. The reward is 20% of the daily
commission for referrals`,
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page-wrapper" style={{
            backgroundImage: `url(${bgdesign.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
        }}>
            <Breadcrumb title={"FAQ"} link="/dashboard" isColor="#fff" />

            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div className="faq-card" key={index}>
                        <div
                            className="faq-header"
                            onClick={() => toggleFaq(index)}
                        >
                            <h3>{item.title}</h3>

                            <span className="faq-icon">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-content">
                                <p>{item.content}</p>
                            </div>
                        )}
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
    );
};

export default Faq;