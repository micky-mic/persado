"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Link from 'next/link';
import { useState } from 'react';
import balance_card from "@/public/related_assets/Images/balance_circle.svg"
import Image from 'next/image';
import dollar from "@/public/new/dollar.png"


const Recharge = ({ user }) => {
    const amounts = [
        { value: "$ 50.00", numericValue: 50 },
        { value: "$ 100.00", numericValue: 100 },
        { value: "$ 300.00", numericValue: 300 },
        { value: "$ 1000.00", numericValue: 1000 },
        { value: "$ 3000.00", numericValue: 3000 },
        { value: "Others", numericValue: 0 }
    ];

    const [amountData, setAmountData] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index, numericValue) => {
        setActiveIndex(index);
        setAmountData(numericValue);
    };

    const handleInputChange = (event) => {
        setAmountData(Number(event.target.value));
        setActiveIndex(null);
    };

    const handleAddFundsClick = () => {
        if (window.LC_API && typeof window.LC_API.open_chat_window === 'function') {
            window.LC_API.open_chat_window();
        } else {
            console.error("Live Chat widget not initialized or method not found.");
        }
    };

    return (
        <>
            <div className='overflowHide'>
                <section className="journey-section transaction-pages">
                    <Breadcrumb
                        link="/dashboard"
                        title="Recharge"
                        isColor="#FFF"
                        bg="#000"
                    />
                    <div className="journey-info-wrapper">
                        <div className='withcard'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 327 129"
                            >
                                <g clipPath="url(#clip0_74_446)">
                                    <rect
                                        width="327"
                                        height="129"
                                        fill="url(#paint0_radial_74_446)"
                                        rx="10"
                                    ></rect>
                                    <text
                                        xmlSpace="preserve"
                                        fill="#fff"
                                        fontFamily="Poppins"
                                        fontSize="10"
                                        fontWeight="bold"
                                        letterSpacing="-0.5"
                                        style={{ whiteSpace: "pre" }}
                                    >
                                        <tspan x="20" y="35">
                                            AVAILABLE BALANCE
                                        </tspan>
                                    </text>
                                    <text
                                        xmlSpace="preserve"
                                        fill="#fff"
                                        fontFamily="Poppins"
                                        fontSize="30"
                                        fontWeight="bold"
                                        letterSpacing="-0.5"
                                        style={{ whiteSpace: "pre" }}
                                    >
                                        <tspan x="20" y="72">
                                            $ {user?.balance?.toFixed(2) ?? ""}
                                        </tspan>
                                    </text>

                                    <Link href="/dashboard/withdrawalHistory">

                                        <text
                                            x="20"
                                            y="107.2"
                                            fill="#fff"
                                            fontFamily="Poppins"
                                            fontSize="12"
                                            fontWeight="500"
                                            textDecoration="underline"
                                            style={{
                                                cursor: "pointer",
                                            }}
                                        >
                                            Transaction History
                                        </text>

                                    </Link>

                                    <g opacity="0.8">
                                        <mask
                                            id="mask0_74_446"
                                            width="233"
                                            height="233"
                                            x="163"
                                            y="-30"
                                            maskUnits="userSpaceOnUse"
                                            style={{ maskType: "alpha" }}
                                        >
                                            <path
                                                fill="url(#paint1_radial_74_446)"
                                                d="M0 0h232.681v232.681H0z"
                                                transform="translate(163.311 -30)"
                                            ></path>
                                        </mask>
                                        <g mask="url(#mask0_74_446)">
                                            <g clipPath="url(#clip1_74_446)">
                                                <g opacity="0.5">
                                                    <g
                                                        stroke="#fff"
                                                        strokeOpacity="0.73"
                                                        strokeWidth="0.182"
                                                        clipPath="url(#clip2_74_446)"
                                                    >
                                                        <path d="M163.401-30v232.681M177.944-30v232.681M192.486-30v232.681M207.029-30v232.681M221.571-30v232.681M236.114-30v232.681M250.657-30v232.681M265.199-30v232.681M279.742-30v232.681M294.284-30v232.681M308.827-30v232.681M323.37-30v232.681"></path>
                                                    </g>
                                                    <path
                                                        stroke="#1F242F"
                                                        strokeWidth="0.303"
                                                        d="M163.462-29.849H395.84v232.378H163.462z"
                                                    ></path>
                                                </g>
                                                <g opacity="0.5">
                                                    <g clipPath="url(#clip3_74_446)">
                                                        <path
                                                            stroke="#fff"
                                                            strokeOpacity="0.73"
                                                            strokeWidth="0.182"
                                                            d="M163.311 13.537h232.681M163.311 28.079h232.681M163.311 42.622h232.681M163.311 57.165h232.681M163.311 71.707h232.681"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            fillOpacity="0.15"
                                                            d="M163.311 86.341h14.845v14.543h-14.845z"
                                                        ></path>
                                                        <path
                                                            stroke="#fff"
                                                            strokeOpacity="0.73"
                                                            strokeWidth="0.182"
                                                            d="M163.311 115.335h232.681"
                                                        ></path>
                                                    </g>
                                                    <path
                                                        stroke="#1F242F"
                                                        strokeWidth="0.303"
                                                        d="M163.462-29.849H395.84v261.463H163.462z"
                                                    ></path>
                                                </g>
                                            </g>
                                            <path
                                                stroke="url(#paint2_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M279.651 53.62v7.271"
                                            ></path>
                                            <path
                                                stroke="url(#paint3_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M283.287 57.256h-7.271"
                                            ></path>
                                            <path
                                                stroke="url(#paint4_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M236.023 83.916v4.847"
                                            ></path>
                                            <path
                                                stroke="url(#paint5_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M239.659 86.34h-7.271"
                                            ></path>
                                            <path
                                                stroke="url(#paint6_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M221.784 112.699v5.454"
                                            ></path>
                                            <path
                                                stroke="url(#paint7_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M224.511 115.425h-5.454"
                                            ></path>
                                            <path
                                                stroke="url(#paint8_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M308.736 67.86v7.27"
                                            ></path>
                                            <path
                                                stroke="url(#paint9_linear_74_446)"
                                                strokeWidth="0.303"
                                                d="M312.372 71.495h-7.271"
                                            ></path>
                                            <circle
                                                cx="250.566"
                                                cy="71.797"
                                                r="0.606"
                                                fill="#fff"
                                                fillOpacity="0.73"
                                            ></circle>
                                            <circle
                                                cx="308.736"
                                                cy="42.712"
                                                r="0.606"
                                                fill="#fff"
                                                fillOpacity="0.73"
                                            ></circle>
                                            <circle
                                                cx="323.582"
                                                cy="100.883"
                                                r="0.606"
                                                fill="#fff"
                                                fillOpacity="0.73"
                                            ></circle>
                                            <circle
                                                cx="206.938"
                                                cy="86.34"
                                                r="0.606"
                                                fill="#fff"
                                                fillOpacity="0.73"
                                            ></circle>
                                            <path
                                                fill="#fff"
                                                fillOpacity="0.15"
                                                d="M323.279 57.256h14.845v14.543h-14.845zM192.396 100.883h14.845v14.543h-14.845z"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient
                                        id="paint2_linear_74_446"
                                        x1="279.651"
                                        x2="279.651"
                                        y1="60.891"
                                        y2="53.62"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_74_446"
                                        x1="276.016"
                                        x2="283.287"
                                        y1="57.256"
                                        y2="57.256"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint4_linear_74_446"
                                        x1="236.023"
                                        x2="236.023"
                                        y1="88.763"
                                        y2="83.916"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint5_linear_74_446"
                                        x1="232.388"
                                        x2="239.659"
                                        y1="86.341"
                                        y2="86.341"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint6_linear_74_446"
                                        x1="221.784"
                                        x2="221.784"
                                        y1="118.153"
                                        y2="112.699"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint7_linear_74_446"
                                        x1="219.057"
                                        x2="224.511"
                                        y1="115.425"
                                        y2="115.425"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint8_linear_74_446"
                                        x1="308.736"
                                        x2="308.736"
                                        y1="75.131"
                                        y2="67.859"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint9_linear_74_446"
                                        x1="305.101"
                                        x2="312.372"
                                        y1="71.495"
                                        y2="71.495"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#fff" stopOpacity="0"></stop>
                                        <stop offset="0.503" stopColor="#fff"></stop>
                                        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <clipPath id="clip0_74_446">
                                        <rect width="327" height="129" fill="#fff" rx="10"></rect>
                                    </clipPath>
                                    <clipPath id="clip1_74_446">
                                        <path fill="#fff" d="M163.311-30h232.681v232.681H163.311z"></path>
                                    </clipPath>
                                    <clipPath id="clip2_74_446">
                                        <path fill="#fff" d="M163.311-30h232.681v232.681H163.311z"></path>
                                    </clipPath>
                                    <clipPath id="clip3_74_446">
                                        <path fill="#fff" d="M163.311-30h232.681v261.766H163.311z"></path>
                                    </clipPath>
                                    <radialGradient
                                        id="paint0_radial_74_446"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="matrix(163.5 0 0 64.5 163.5 64.5)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#6B3EFF"></stop>
                                        <stop offset="1" stopColor="#6428FF"></stop>
                                    </radialGradient>
                                    <radialGradient
                                        id="paint1_radial_74_446"
                                        cx="0"
                                        cy="0"
                                        r="1"
                                        gradientTransform="rotate(90 0 116.341)scale(116.341)"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop></stop>
                                        <stop offset="1" stopOpacity="0"></stop>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <Image
                                src={dollar}
                                alt='dollar'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        {/* <div className='balance-card-img'>
                            <Image
                                src={balance_card}
                                alt='card'
                                height={100}
                                width={100}
                                unoptimized
                            />
                            <div className='acc-balance-info'>
                                <p>USD</p>
                                <h1>$ {user?.balance?.toFixed(2) ?? ""}</h1>
                                <h4>Total Balance</h4>
                            </div>
                        </div>
                        <div className="transaction-history">
                            <Link href="/dashboard/rechargeHistory">
                                <p>Recharge History</p>
                            </Link>
                        </div> */}

                        {/* <div className='deposit-boder'>
                            <div className="deposit">
                                <h3 className='playfair-font'>Recharge</h3>
                            </div>
                        </div> */}
                        {/* <div className="transaction-amount">
                            <h3>Recharge Amount</h3>
                            <input
                                type="number"
                                placeholder="Enter the Recharge amount"
                                value={amountData === 0 ? "" : amountData}
                                onChange={handleInputChange}
                            />
                        </div> */}
                        {/* <div className="amount-options" style={{ paddingBottom: "8rem" }}>
                            <div className="amount-option-parent">
                                {amounts.map((amount, index) => (
                                    <div
                                        className={`amount-option-childs ${activeIndex === index ? 'active-deposit-btn' : ''}`}
                                        key={index}
                                        onClick={() => handleClick(index, amount.numericValue)}
                                    >
                                        <h3>{amount.value}</h3>
                                    </div>
                                ))}
                            </div>
                            <button className="btn global-white-btn mt2" onClick={() => handleAddFundsClick()}>RECHARGE</button>
                        </div> */}
                        <div className="withdrawal-details">
                            <h3 className=''>Deposit Actions</h3>
                            <div className='withdrawal-details-wrapper'>
                                <div className="withdrawal-details-parent">
                                    <div className="withdrawal-details-child">
                                        <p>Deposit Amount</p>

                                        <input
                                            type="number"
                                            placeholder="Enter the Recharge amount"
                                            value={amountData === 0 ? "" : amountData}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="quick-choice">

                                <div className="line"></div>

                                <p>Or quick choice</p>

                                <div className="line"></div>

                            </div>
                            <div className="amount-options">
                                <div className="amount-option-parent">
                                    {amounts.map((amount, index) => (
                                        <div
                                            className={`amount-option-childs ${activeIndex === index ? 'active-deposit-btn' : ''}`}
                                            key={index}
                                            onClick={() => handleClick(index, amount.numericValue)}
                                        >
                                            <h3>{amount.value}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="amount-submit-btn">
                                <button className="primary-btn" onClick={() => handleAddFundsClick()}>Deposit</button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}

export default Recharge;
