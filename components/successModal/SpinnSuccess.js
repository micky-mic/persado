"use client";

import Image from "next/image";
import React from "react";

import success from "@/public/new/success.png";
import fail from "@/public/new/fail.png";

const SpinnSuccess = ({ amount }) => {

    const sendBack = () => {
        window.location.reload();
    };

    const isFail = amount === "Try Again" || amount === "0";

    return (

        <div className="success-modal-wrapper">

            <div className="success-modal-wrapper-inner">

                <div className="newmodel">

                    {/* Background */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 327 325"
                        fill="none"
                    >
                        <path
                            d="M0 20.8529V303C0 315.15 9.84973 325 22 325H305C317.15 325 327 315.15 327 303V70.8883C327 66.7358 325.906 62.5856 323.304 59.349C295.171 24.3476 233.273 35.5605 207.428 40.5605C167.401 48.3038 153.586 65.5903 122.715 56.5634C82.3577 44.7628 36.411 -23.2368 4.64613 8.24291C1.35157 11.5079 0 16.2146 0 20.8529Z"
                            fill="url(#paint0_linear_52_5019)"
                        />

                        <defs>
                            <linearGradient
                                id="paint0_linear_52_5019"
                                x1="163.5"
                                y1="0"
                                x2="164.033"
                                y2="325"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#071013" />
                                <stop offset="1" stopColor="#6E41FF" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Top Image */}
                    <div className="typeofimg">

                        <Image
                            src={isFail ? fail : success}
                            alt="img"
                            height={100}
                            width={100}
                            unoptimized
                        />

                    </div>

                    {/* Content */}
                    <div className="new-success-modal-wrapper-content">

                        {
                            isFail
                                ?
                                <>
                                    <h3>
                                        SORRY!
                                    </h3>

                                    <p>
                                        Please try again later
                                        <br />
                                        Better luck next time!
                                    </p>
                                </>
                                :
                                <>
                                    <h3>
                                        CONGRATULATIONS!
                                    </h3>

                                    <p>
                                        You won ${amount}
                                        <br />
                                        Amount credited successfully!
                                    </p>
                                </>
                        }

                    </div>

                    {/* Buttons */}
                    <div className="close-modal">

                        <button
                            className="primary-btn model-btn"
                            onClick={() => sendBack()}
                        >
                            CLOSE
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SpinnSuccess;