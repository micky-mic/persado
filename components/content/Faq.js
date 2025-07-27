"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb';

const Faq = ({ data, authenticatedUser, allCommission, userCommission }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "faqs")[0];
        setInfo(infoData);
    }, []);

    return (
        <>
            <div className='faq-page-wrapper'>
                <Breadcrumb
                    title={"FAQ"}
                    link="/dashboard"
                    isColor="#fff"
                />
                {/* <div className="certificates">
                    <Image
                        src={certificate}
                        alt="certificate"
                        unoptimized
                    />
                </div> */}
                <div className='faq-details-wrapper'>
                    <div className='faq-details-parent'>
                        <div className='faq-details-child'>
                            <h3>REGISTRATION</h3>
                        </div>
                        <div className='faq-details-child'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path fill="#fff" d="M9.512 19.915V9.53H20V0H0v19.915z"></path>
                                <path fill="#fff" d="M20 11.151h-8.877v8.764H20z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='faq-paragraph'>
                        <p>
                            Booster must register an account to browse and start boosting.
                            Boosters must provide accurate, complete and current information.
                        </p>
                    </div>
                    <div className='faq-details-parent'>
                        <div className='faq-details-child'>
                            <h3>ACCOUNT SECURITY</h3>
                        </div>
                        <div className='faq-details-child'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path fill="#fff" d="M9.512 19.915V9.53H20V0H0v19.915z"></path>
                                <path fill="#fff" d="M20 11.151h-8.877v8.764H20z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='faq-paragraph'>
                        <p>
                            Booster are responsible for maintaining account confidentiality. Any unauthorized use of an
                            account must be reported immediately.
                        </p>
                    </div>
                    <div className='faq-details-parent'>
                        <div className='faq-details-child'>
                            <h3>RECHARGE</h3>
                        </div>
                        <div className='faq-details-child'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path fill="#fff" d="M9.512 19.915V9.53H20V0H0v19.915z"></path>
                                <path fill="#fff" d="M20 11.151h-8.877v8.764H20z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='faq-paragraph'>
                        <p>
                            For each recharge, please redirect to the Live Support for assistance.
                            <br /><br />
                            We accept recharges via cryptocurrencies and other methods listed at the time of recharge
                            <br /><br />
                            We are not responsible for recharge processing delays cause by financial institutions
                            <br /><br />
                            Once you remit the funds to the account provided by the platform's Live Support, kindly provide
                            a screenshot of the successful transfer. To ensure immediate recharge recognition, please verify
                            the wallet address be matched with the provided details.
                            <br /><br />
                            If you encounter any issues during the recharge process , contact the Live Support recharge service. Due to frequent  updates , always check the platform's recharge details before proceed to recharge.
                            <br /><br />
                            For more inquiries, please refer to the platform's Live Support.
                        </p>
                    </div>
                    <div className='faq-details-parent'>
                        <div className='faq-details-child'>
                            <h3>LOT BOOSTING</h3>
                        </div>
                        <div className='faq-details-child'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path fill="#fff" d="M9.512 19.915V9.53H20V0H0v19.915z"></path>
                                <path fill="#fff" d="M20 11.151h-8.877v8.764H20z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='faq-paragraph'>
                        <p>
                            Once recharged your account, you may start boosting, click 'Lot Boosting' to redirect to the
                            relevant page to start
                            <br /><br />
                            Wait for the system to drive a boost, submit the boost once review submission pops up to
                            complete the boosting
                            Once the booster received the lot, the system automatically confirms and cannot cancel any
                            pending lot
                        </p>
                    </div>
                    <div className='faq-details-parent'>
                        <div className='faq-details-child'>
                            <h3>WITHDRAWAL</h3>
                        </div>
                        <div className='faq-details-child'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path fill="#fff" d="M9.512 19.915V9.53H20V0H0v19.915z"></path>
                                <path fill="#fff" d="M20 11.151h-8.877v8.764H20z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='faq-paragraph'>
                        <p>
                            Before proceed to withdrawal, kindly bind your withdrawal information on the platform.
                            Withdraw your funds by clicking"Withdraw' button, enter the amount you wish to withdraw and
                            key in your withdrawal password to proceed. Withdrawal time is from 11:00 to 22:45 daily.
                        </p>
                    </div>
                    <div className='faq-details-parent'>
                        <div className='faq-details-child'>
                            <h3>AGENT</h3>
                        </div>
                        <div className='faq-details-child'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path fill="#fff" d="M9.512 19.915V9.53H20V0H0v19.915z"></path>
                                <path fill="#fff" d="M20 11.151h-8.877v8.764H20z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className='faq-paragraph'>
                        <p>Users can become platform agents by recommending new users,and will be entitled to dynamic
                            reward of daily 30% commission for referrals.</p>
                    </div>
                </div>

                {/* <div dangerouslySetInnerHTML={{ __html: info?.description }}></div> */}
            </div>
        </>
    )
}

export default Faq