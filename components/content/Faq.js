"use client";

import React, { useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import bgdesign from "@/public/new2/lines.png"
import Footer from "@/components/footer/Footer";


const faqData = [
    {
        title: "IMPORTANT NOTICES",
        content: `Members are strictly prohibited from registering multiple accounts and repeatedlyusing the same wallet address for enhance application. If such activity is detected,the account will be frozen by the system. For more information, please contact our customer service.

All forms of malicious money laundering are strictly prohibited. If any such activity is found, the platform will freeze the associated account and take necessary legal action.`,


    },

    {
        title: "DEPOSIT",
        content: `For each deposit, you are required to contact our customer service for assistance with the remittance deposit process. After remitting the funds to the account provided by the platform's customer service, please provide a screenshot of the successful transfer. To ensure instant deposit processing, ensure that the wallet address match the details provided. If you encounter any issues during the deposit process, please contact our deposit customer service promptly. Note that the platform occasionally changes wallet address, so please carefully check the wallet address before making a deposit. For any inquiries, kindly seek assistance from our live customer service.`,
    },

    {
        title: "Withdrawal",
        content: `Before proceeding with a withdrawal, please ensure that you have bound your withdrawal address on the platform. To withdraw funds, go to the home page and click on the "Withdrawal" interface. Enter the desired withdrawal amount and your withdrawal password to initiate the withdrawal. Withdrawal processing time is within one hour, following the platform's operating hours.`,
    },

    {
        title: "Application Set",
        content: `Each Application Set may consist of 1-3 premium applications. The allocation of Application Set is based on our decentralized system algorithm. In the case of a negative balance, please contact our customer service for assistance with the remittance deposit. As a reward for completing the Application Set, your account will receive 5%-8% Commission.`,
    },

    {
        title: "Freelancers",
        content: `Freelancers of this platform have the opportunity to earn additional dynamic commissions by referring new freelancers. The system will automatically grant you a 25% commission based on your downline's earnings.`,
    },

    {
        title: "Operating Hours",
        content: `The platform operates daily from 11:00 AM to 11:00 PM EST. Freelancers can enhance applications exclusively during these operating hours.`,
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
            <Breadcrumb title={"FAQ"} link="/dashboard" isColor="#000000" />

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
                                <p style={{ whiteSpace: "pre-line" }}>
                                    {item.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </div>

    );
};

export default Faq;