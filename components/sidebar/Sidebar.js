"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import ConfirmModal from '../successModal/ConfirmModal';
import Pop from '../notification/Pop';
import logo from '@/public/new2/logo.png'
import menubar from '@/public/new2/sidebar/cancel.svg'
import sidelogo from '@/public/new2/sidelogo.png'
import vip1 from '@/public/new2/vip1.png'
import vip2 from '@/public/new2/vip2.png'
import vip3 from '@/public/new2/vip3.png'
import vip4 from '@/public/new2/vip4.png'

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


    const membershipName = allCommission?.map((item) => ({
        membership_name: item.membership_name
    }));
    const membershipRate = allCommission?.map((item) => ({
        ticket_commission: item.ticket_commission
    }));

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
                <svg onClick={() => setIsNav(true)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4.80005 7.20039C4.80005 6.98822 4.88433 6.78473 5.03436 6.63471C5.18439 6.48468 5.38788 6.40039 5.60005 6.40039H26.4C26.6053 6.41066 26.7988 6.49942 26.9404 6.64833C27.082 6.79723 27.161 6.99488 27.161 7.20039C27.161 7.4059 27.082 7.60355 26.9404 7.75246C26.7988 7.90136 26.6053 7.99012 26.4 8.00039H5.60005C5.38788 8.00039 5.18439 7.91611 5.03436 7.76608C4.88433 7.61605 4.80005 7.41256 4.80005 7.20039ZM4.80005 15.2004C4.80005 14.7604 5.15805 14.4004 5.60005 14.4004H26.4C26.84 14.4004 27.2001 14.7604 27.2001 15.2004C27.2001 15.6404 26.84 16.0004 26.4 16.0004H5.60005C5.15805 16.0004 4.80005 15.6404 4.80005 15.2004ZM26.4 24.0004H5.60005C5.39479 23.9901 5.20134 23.9014 5.05969 23.7525C4.91805 23.6036 4.83906 23.4059 4.83906 23.2004C4.83906 22.9949 4.91805 22.7972 5.05969 22.6483C5.20134 22.4994 5.39479 22.4107 5.60005 22.4004H26.4C26.84 22.4004 27.2001 22.7604 27.2001 23.2004C27.2001 23.6404 26.84 24.0004 26.4 24.0004Z" fill="#010916" />
                </svg>
                {/* <Image className="menubar" onClick={() => setIsNav(true)}
                    src={menubar}
                    alt='menu'
                    width={100}
                    height={100}
                    unoptimized
                /> */}
                {
                    isNav ? <div className="sidebar-overlay" onClick={() => setIsNav(false)}></div> : <></>
                }
                {
                    isNav
                        ?
                        <>
                            <div className="sidebar-weapper">
                                <div className={isNav ? "mobile-menu rightVal" : "mobile-menu"}>
                                    <div className="mobile-menu__wrapper">

                                        {/* Header */}
                                        <div className="mobile-menu__header">
                                            <Image
                                                src={logo}
                                                alt="logo"
                                                height={100}
                                                width={100}
                                                unoptimized
                                                className="mobile-menu__logo"
                                            />

                                            <button onClick={() => setIsNav(false)} className="mobile-menu__close">
                                                <Image
                                                    src={menubar}
                                                    alt="logo"
                                                    height={100}
                                                    width={100}
                                                    unoptimized
                                                />

                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="mobile-menu__content">

                                            {/* Profile Card */}
                                            <div className="profile-card">
                                                <div className="profile-card__top">
                                                    <div>
                                                        <p className="profile-card__code">
                                                            Referral Code : {session?.invitation_code ?? ""}
                                                        </p>

                                                        <h3 className="profile-card__name">
                                                            {session?.username ?? ""}
                                                        </h3>
                                                    </div>

                                                    <div className="profile-card__avatar">
                                                        <Image
                                                            src={sidelogo}
                                                            alt="logo"
                                                            height={100}
                                                            width={100}
                                                            unoptimized
                                                        />
                                                    </div>
                                                </div>

                                                <div className="profile-card__divider"></div>

                                                <div className="membership">
                                                    <div className="membership__icon">
                                                        <Image
                                                            src={
                                                                membershipName[0] === userCommission
                                                                    ? vip1
                                                                    : membershipName[1] === userCommission
                                                                        ? vip2
                                                                        : membershipName[2] === userCommission
                                                                            ? vip3
                                                                            : membershipName[3] === userCommission
                                                                                ? vip4
                                                                                : vip1
                                                            }
                                                            alt="logo"
                                                            height={100}
                                                            width={100}
                                                            unoptimized
                                                        />
                                                    </div>

                                                    <div className="membership__details">
                                                        <p className="membership__title">
                                                            Membership :{" "}
                                                            {(
                                                                allCommission?.find(
                                                                    (item) => item.membership_name === userCommission
                                                                )?.commission_rate * 100
                                                            ).toFixed(2)}
                                                            %
                                                        </p>

                                                        <div className="membership__progress">
                                                            <div className="membership__progress-fill" style={{ width: `${session?.credibility}%` }}></div>
                                                        </div>

                                                        <div className="membership__footer">
                                                            <span>Credit score</span>
                                                            <span>{session?.credibility}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu */}
                                            <div className="mobile-menu__nav">

                                                <Link href="/" className="menu-item active">
                                                    Home
                                                </Link>

                                                <Link href="/dashboard/journey" className="menu-item">
                                                    Start Your Career
                                                </Link>

                                                <Link href="/dashboard/history" className="menu-item">
                                                    Optimize History
                                                </Link>

                                                <Link href="/dashboard/invite" className="menu-item">
                                                    Referral
                                                </Link>

                                                <Link href="/dashboard/support" className="menu-item">
                                                    Live Support
                                                </Link>
                                                <Link href="/dashboard/profile" className="menu-item">
                                                    Profile
                                                </Link>
                                                <Link href="/dashboard/event" className="menu-item">
                                                    Event
                                                </Link>

                                                <div className="mobile-menu__line"></div>


                                                {/* <Link href="/dashboard/event" className="menu-item">
                                                    Event
                                                </Link> */}



                                                <Link href="/dashboard/withdrawal/linkwallet" className="menu-item">
                                                    Funding Credentials
                                                </Link>

                                                <Link href="/dashboard/withdrawal" className="menu-item">
                                                    Withdraw
                                                </Link>

                                                <Link href="/dashboard/recharge" className="menu-item">
                                                    Deposit
                                                </Link>
                                                <Link href="/dashboard/content/about" className="menu-item">
                                                    About Us
                                                </Link>

                                                <Link href="/dashboard/content/faq" className="menu-item">
                                                    FAQ
                                                </Link>

                                                <Link href="/dashboard/content/tc" className="menu-item">
                                                    T&C
                                                </Link>

                                                <Link
                                                    href="/dashboard/recovery/changePassword"
                                                    className="menu-item"
                                                >
                                                    Security
                                                </Link>

                                                <Link href="/dashboard/certificate" className="menu-item">
                                                    Certificate
                                                </Link>
                                                <Link href="/dashboard/membership" className="menu-item">
                                                    Membership
                                                </Link>

                                            </div>

                                            {/* Logout */}
                                            <button
                                                className="logout-btn"
                                                onClick={() => openConfirm()}
                                            >
                                                Logout
                                            </button>

                                        </div>
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