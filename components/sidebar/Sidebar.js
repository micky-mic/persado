"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import ConfirmModal from '../successModal/ConfirmModal';
import Pop from '../notification/Pop';
import logo from '@/public/new2/logo.png'
import sidelogo from '@/public/new2/sidelogo.png'
import vip1 from '@/public/new/vip1.png'
import vip2 from '@/public/new/vip2.png'
import vip3 from '@/public/new/vip3.png'
import vip4 from '@/public/new/vip4.png'

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
                <svg onClick={() => setIsNav(true)} xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                    <path d="M0 0.8C0 0.587826 0.0842853 0.384344 0.234314 0.234314C0.384344 0.0842853 0.587826 0 0.8 0H21.6C21.8053 0.010266 21.9987 0.0990314 22.1404 0.247935C22.282 0.396839 22.361 0.594488 22.361 0.8C22.361 1.00551 22.282 1.20316 22.1404 1.35206C21.9987 1.50097 21.8053 1.58973 21.6 1.6H0.8C0.587826 1.6 0.384344 1.51571 0.234314 1.36569C0.0842853 1.21566 0 1.01217 0 0.8ZM0 8.8C0 8.36 0.358 8 0.8 8H21.6C22.04 8 22.4 8.36 22.4 8.8C22.4 9.24 22.04 9.6 21.6 9.6H0.8C0.358 9.6 0 9.24 0 8.8ZM21.6 17.6H0.8C0.594745 17.5897 0.401288 17.501 0.259645 17.3521C0.118003 17.2032 0.0390124 17.0055 0.0390124 16.8C0.0390124 16.5945 0.118003 16.3968 0.259645 16.2479C0.401288 16.099 0.594745 16.0103 0.8 16H21.6C22.04 16 22.4 16.36 22.4 16.8C22.4 17.24 22.04 17.6 21.6 17.6Z" fill="white" />
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
                                                ✕
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
                                                  {/* <Link href="/dashboard/event" className="menu-item">
                                                    Event
                                                </Link> */}

                                                <div className="mobile-menu__line"></div>

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