"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

import success from "@/public/new2/success.png";

const SignUpSuccessModal = ({ setIsModal }) => {

    const router = useRouter();

    const sendToLogin = () => {
        router.push("/signin");
    };

    return (

        <div
            className="success-modal-wrapper"
            onClick={() => setIsModal(false)}
        >

            <div
                className="success-modal-wrapper-inner"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="newmodel">

                    {/* Background */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 327 325"
                        fill="none"
                    >

                        <path
                            d="M0 20.8529V303C0 315.15 9.84973 325 22 325H305C317.15 325 327 315.15 327 303V70.8883C327 66.7358 325.906 62.5856 323.304 59.349C295.171 24.3476 233.273 35.5605 207.428 40.5605C167.401 48.3038 153.586 65.5903 122.715 56.5634C82.3577 44.7628 36.411 -23.2368 4.64613 8.24291C1.35157 11.5079 0 16.2146 0 20.8529Z"
                            fill="url(#signUpSuccessGradient)"
                        />

                        <defs>

                            <linearGradient
                                id="signUpSuccessGradient"
                                x1="163.5"
                                y1="0"
                                x2="164.033"
                                y2="325"
                                gradientUnits="userSpaceOnUse"
                            >

                                <stop stopColor="#f7f7f5" />

                                <stop
                                    offset="1"
                                    stopColor="#f7f7f5"
                                />

                            </linearGradient>

                        </defs>

                    </svg>

                    {/* Top Image */}
                    <div className="typeofimg">

                        <Image
                            src={success}
                            alt="success"
                            height={100}
                            width={100}
                            unoptimized
                        />

                    </div>

                    {/* Close Button */}
                    <div
                        className="modelclosebtn"
                        onClick={() => setIsModal(false)}
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                        >

                            <circle
                                cx="14"
                                cy="14"
                                r="14"
                                fill="white"
                            />

                            <path
                                d="M18.219 19.0002C18.0119 19.0002 17.8127 18.9182 17.6662 18.7717L14.0001 15.1056L10.334 18.7717C10.0293 19.0764 9.53322 19.0764 9.22852 18.7717C8.92383 18.467 8.92383 17.9709 9.22852 17.6662L12.8946 14.0001L9.22852 10.334C8.92383 10.0293 8.92383 9.53322 9.22852 9.22852C9.53322 8.92383 10.0293 8.92383 10.334 9.22852L14.0001 12.8946L17.6643 9.22852C17.969 8.92383 18.4651 8.92383 18.7698 9.22852C19.0745 9.53322 19.0745 10.0293 18.7698 10.334L15.1056 14.0001L18.7698 17.6643C19.0764 17.969 19.0764 18.4631 18.7717 18.7698C18.6272 18.9182 18.428 19.0002 18.219 19.0002Z"
                                fill="url(#signUpSuccessCloseGradient)"
                            />

                            <defs>

                                <radialGradient
                                    id="signUpSuccessCloseGradient"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(14 14.0001) scale(5 5.00012)"
                                >

                                    <stop stopColor="#8556FF" />

                                    <stop
                                        offset="1"
                                        stopColor="#6B3EFF"
                                    />

                                </radialGradient>

                            </defs>

                        </svg>

                    </div>

                    {/* Content */}
                    <div className="new-success-modal-wrapper-content">

                        <h3>
                            SUCCESSFULLY REGISTERED
                        </h3>

                        <p>
                            Your account has been successfully registered.<br/>
                            Start your journey now!
                        </p>

                    </div>

                    {/* Buttons */}
                    <div className="close-modal">

                        {/* <button
                            className="primary-btn model-btn"
                            onClick={() => setIsModal(false)}
                        >
                            CLOSE
                        </button> */}

                        <button
                            className="primary-btn model-btn"
                            onClick={sendToLogin}
                        >
                            LOGIN
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SignUpSuccessModal;