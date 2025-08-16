"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import ConfirmModal from '../successModal/ConfirmModal';
import user_profile from "@/public/related_assets/user_profile.jpg"
// import membership_bg from "@/public/related_assets/vector/sidebar-card-vector.svg"

// import vip1 from "@/public/related_assets/icons/beginnerIcon.png";
// import vip2 from "@/public/related_assets/icons/silverIcon.png";
// import vip3 from "@/public/related_assets/icons/goldIcon.png";
// import vip4 from "@/public/related_assets/icons/platinumIcon.png";
import Pop from '../notification/Pop';

const Sidebar = ({ session, authenticatedUser, userCommission, allCommission, pop }) => {
    const [isNav, setIsNav] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);

    const [userMembership, setUserMembership] = useState({});

    const openConfirm = () => {
        setIsConfirm(true);
        setIsNav(false);
    }

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    useEffect(() => {
        const data = allCommission?.filter((item) => {
            return item?.membership_name === userCommission
        })
        setUserMembership(data[0] || {});

    }, [userCommission, allCommission]);

    return (
        <>
            {
                isConfirm
                    ?
                    <ConfirmModal setIsModal={setIsConfirm} />
                    :
                    <></>
            }
            <div className="dashboard-navigation-childs">
                <Pop
                    pop={JSON.parse(JSON.stringify(pop))}
                />
                <svg onClick={() => setIsNav(true)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="6"
                    fill="none"
                    viewBox="0 0 26 6"
                >
                    <path
                        fill="#fff"
                        d="M2.6 5.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2M13 5.2A2.6 2.6 0 1 0 13 0a2.6 2.6 0 0 0 0 5.2M23.4 5.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2"
                    ></path>
                </svg>
                {
                    isNav ? <div className="sidebar-overlay" onClick={() => setIsNav(false)}></div> : <></>
                }
                {
                    isNav
                        ?
                        <>
                            <div className="sidebar-weapper">
                                <div className={isNav ? "sidebar-inner-wrapper rightVal" : "sidebar-inner-wrapper"}>
                                    <div className="sidebar-close-btn">
                                        <i onClick={() => setIsNav(false)} className="fa fa-arrow-left"></i>
                                        <h3 className="playfair-font">Back to Homepage</h3>
                                    </div>
                                    <div className="sidebar-user-detail-parent">
                                        <div className="sidebar-user-detail-childs">
                                            {
                                                authenticatedUser?.url === null
                                                    ?
                                                    <Link href="/dashboard/profile">
                                                        <Image
                                                            src={user_profile}
                                                            alt="logo"
                                                            height={100}
                                                            width={100}
                                                        />
                                                    </Link>
                                                    :
                                                    <Link href="/dashboard/profile">
                                                        <Image
                                                            src={authenticatedUser?.url ?? ""}
                                                            alt="logo"
                                                            height={100}
                                                            width={100}
                                                        />
                                                    </Link>
                                            }
                                        </div>
                                        <div className="sidebar-user-detail-childs">
                                            <h3 className="playfair-font">{session?.username}</h3>
                                            <p onClick={() => copyToClipboard(session?.invitation_code ?? "")}>{session?.invitation_code ?? ""}</p>
                                        </div>
                                    </div>
                                    <div className="credibility-wrapper">
                                        <div className="credibility-wrapper-wrapper">
                                            <div className="credibility-wrapper-childs" style={{ width: `${session?.credibility}%` }}>
                                                <p>{session?.credibility}%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            authenticatedUser?.username === "Arelated25"
                                                ?
                                                <>
                                                </>
                                                :
                                                <Link href="/dashboard/profile">
                                                    <li><h2 className='playfair-font'>Profile</h2></li>
                                                </Link>
                                        }
                                        <Link href="/dashboard/withdrawal">
                                            <li><h2 className='playfair-font'>Withdraw</h2></li>
                                        </Link>
                                        <Link href="/dashboard/recharge">
                                            <li><h2 className='playfair-font'>Recharge</h2></li>
                                        </Link>
                                        <Link href="/dashboard/withdrawal/linkwallet">
                                            <li><h2 className='playfair-font'>Link Wallet</h2></li>
                                        </Link>
                                        <Link href="/dashboard/content/about">
                                            <li><h2 className='playfair-font'>About Us</h2></li>
                                        </Link>
                                        <Link href="/dashboard/content/tc">
                                            <li><h2 className='playfair-font'>Terms & Conditions</h2></li>
                                        </Link>
                                        <Link href="/dashboard/content/faq">
                                            <li><h2 className='playfair-font'>FAQ</h2></li>
                                        </Link>
                                        <Link href="/dashboard/invite">
                                            <li><h2 className='playfair-font'>Invitation</h2></li>
                                        </Link>
                                        <Link href="/dashboard/recovery/changePassword">
                                            <li><h2 className='playfair-font'>Security</h2></li>
                                        </Link>
                                        <Link href="/dashboard/support">
                                            <li><h2 className='playfair-font'>Support</h2></li>
                                        </Link>
                                        <Link href="/dashboard/certificate">
                                            <li><h2 className='playfair-font'>Certificate</h2></li>
                                        </Link>
                                    </ul>
                                    {/* <div className='membership-status-wrapper'>
                                        <p className="my-membership">My Membership</p>
                                        <div className='staus-background'>
                                            <Image
                                                src={membership_bg}
                                                alt='bg'
                                                height={100}
                                                width={100}
                                                unoptimized
                                                className="staus-background-image"
                                            />
                                            <div className='status-details'>
                                                <h3>{userMembership?.membership_name ?? "Loading..."}</h3>
                                                <p>{(userMembership?.commission_rate) * 100 ?? "Loading..."}%</p>
                                            </div>
                                            <div className='level-image'>
                                                <Image
                                                    src={
                                                        userMembership?.membership_name === "Basic Tour"
                                                            ?
                                                            vip1
                                                            :
                                                            userMembership?.membership_name === "Silver Tour"
                                                                ?
                                                                vip2
                                                                :
                                                                userMembership?.membership_name === "Gold Tour"
                                                                    ?
                                                                    vip3
                                                                    :
                                                                    vip4

                                                    }
                                                    alt='icon'
                                                    height={100}
                                                    width={100}
                                                    unoptimized
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className='logout-button'>
                                        <button onClick={() => openConfirm()}>Logout</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                }

            </div>
        </>
    )
}

export default Sidebar