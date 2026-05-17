"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import ConfirmModal from '../successModal/ConfirmModal';
import user_profile from "@/public/related_assets/user_profile.jpg"
import Pop from '../notification/Pop';
import logo from '@/public/new/logo.png'
import sidelogo from '@/public/new/sidelogo.png'
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

    console.log(membershipName);
    console.log(membershipRate);


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