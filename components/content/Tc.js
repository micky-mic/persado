"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb';



const Tc = ({ data, authenticatedUser, allCommission, userCommission }) => {

    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "tc")[0];
        setInfo(infoData);
    }, []);

    return (
        <>
            <div className='term-condition-page-wrapper'>
                <Breadcrumb
                    title={"TERMS & CONDITIONS"}
                    link="/dashboard"
                    isColor="#FFF"
                />
                <div className='tAndc-lists-wrapper'>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                The Platform will keep all Booster's information confidential in accordance with the Privacy Policy
                                and Applicable Data Protection Law, and strictly comply with local personal information
                                protection laws.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Every new Lot Booster needs to add $30 to authenticate their account.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Please do not disclose your account password and withdrawal password to others. Our platform
                                will not be held responsible for any losses caused.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Deluxe lot are randomly allocated by the system and once lot boosting has been accepted and
                                allocated by the system, any changes, cancellations or abandonment of Lot boosting are strictly
                                not allowed.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Any attempt to disrupt the operation of the platform and it's peaceful working environment will
                                not be tolerated. We will pursue legal responsibility, claim compensation for all losses and defend
                                the reputation and interests of the platform to eliminate any potential dangers on the platform.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Please confirm the recharge address with the Live Support agent before transferring the money
                                to avoid any loss to boosters.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                All current withdrawal requests will be canceled when a booster receives the Newcomer's
                                Reward
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                When making a deposit, it's crucial to double-check the recipient address and ensure that it is
                                correct before initiating the transaction. Transactions made to incorrect addresses are often
                                irreversible, and the funds may be lost permanently.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Once a booster's application applied for extension, it may affect the reputation points of your
                                account.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Once a booster's account is frozen , the platform will decide the eligibility for unfreezing.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                A balance of less than $ 50 is not allowed to start Lot boosting, boosters should ensure that they
                                have a balance of $ 50 before starting a Lot boosting.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Bank withdraw is only available for Authority boosters.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                To provide you with a higher quality of service, when your account balance reaches the specified
                                amount, the system will automatically upgrade your membership level.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                If a boosters fails to provide compliant information or complete verification within the specified
                                time, the withdrawal request will be rejected outright.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Boosters need to complete 30 Lot to be eligible for withdrawal.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Boosters must take responsibility for the confidentiality of their platform account and password.
                                The platform will not compensate for any losses caused by booster's negligence.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                Lot boosters must reconfirm withdrawal information with Customer Support after submitting a
                                withdrawal request and should receive the total withdrawal amount in the same day after the
                                withdrawal request is approved.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                The platform will implement identity verification procedures as mandated by local government
                                anti-money laundering and anti-terrorism financing regulations, prohibiting any booster's
                                fraudulent and abusive account activities, and booster must strictly comply with local and
                                international laws, including tax and foreign exchange regulations.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                If a booster fails to complete boosting of all property lots in the account on time and does not
                                provide a reasonable explanation or notify the Live Support in time, the platform reserves the
                                right to take necessary measures, including temporary account freezing, demanding a security deposit,
                                or taking legal action to pursue personal negligence responsibility.
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                If you need to turn off membership upgrade privileges, you must go to Live Support and request
                                that this privilege be turned off before you begin lot boosting
                            </p>
                        </div>
                    </div>
                    <div className='tAndc-lists-parent'>
                        <div className='tAndc-lists-child'>
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
                        <div className='tAndc-lists-child'>
                            <p>
                                The platform reserves the right to update these rules as necessary to ensure compliance with
                                legal regulations and market practices. Any changes will be notified to booster in advance
                                through announcements and email.
                            </p>
                        </div>
                    </div>
                    <p className="tandc_request">
                        Dear Booster, Kindly read our rules declaration carefully and thank you for your cooperation. If
                        you do not understand anything, please contact Live Support for information.
                    </p>
                </div>
            </div>
            {/* <section className="content-section">
                <div dangerouslySetInnerHTML={{ __html: info?.description }}></div>
            </section> */}
        </>
    )
}

export default Tc