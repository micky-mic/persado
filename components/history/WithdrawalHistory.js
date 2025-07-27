"use client";

import React, { useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import data_not_found from "@/public/not_found.png";
import Image from 'next/image';
import moment from 'moment';
import 'moment-timezone';

const WithdrawalHistory = ({ withdrawal, authUser }) => {

    const [allProducts, setAllProducts] = useState(withdrawal || []);
    const [statusType, setStatusType] = useState("all");


    const handleFilter = (filterType) => {
        if (filterType === "all") {
            setAllProducts(withdrawal)
            setStatusType("all");
        } else if (filterType === "pending") {
            const pendingProducts = withdrawal?.filter(product => product.status === "pending");
            setAllProducts(pendingProducts);
            setStatusType("pending");
        } else if (filterType === "completed") {
            const completedProducts = withdrawal?.filter(product => product.status === "approved");
            setAllProducts(completedProducts);
            setStatusType("completed");
        } else if (filterType === "freezed") {
            const completedProducts = withdrawal?.filter(product => product.status === "rejected");
            setAllProducts(completedProducts);
            setStatusType("freezed");
        }
    }

    return (
        <>
            <div className='background-color' style={{ minHeight: "100vh", paddingBottom: "100px" }}>
                <Breadcrumb
                    authUser={authUser}
                    title="Withdraw History"
                    link="/dashboard/withdrawal"
                    isColor="#FFF"
                />
                <div className="history-filter">
                    <ul>
                        <li><button onClick={() => handleFilter("all")} className={statusType === "all" ? "history-active" : ""}> View All</button></li>
                        <li><button onClick={() => handleFilter("pending")} className={statusType === "pending" ? "history-active" : ""}>Pending</button></li>
                        <li><button onClick={() => handleFilter("completed")} className={statusType === "completed" ? "history-active" : ""}>Completed</button></li>
                        <li><button onClick={() => handleFilter("freezed")} className={statusType === "freezed" ? "history-active" : ""}>Rejected</button></li>
                    </ul>
                </div >
                <section className="withdrawal-history-section-wrapper">
                    <section className="withdrawal-hostory-section">
                        {
                            allProducts?.length === 0
                                ?
                                <div className="data-not-found">
                                    <Image
                                        src={data_not_found}
                                        height={100}
                                        width={100}
                                        alt="logo"
                                        unoptimized
                                    />
                                </div>
                                :
                                allProducts?.map((data, index) => (
                                    <div className="withdraw-history-info-card" key={index}>
                                        <div className="withdraw-history-info-card-amount">
                                            <div className="withdraw-history-info-card-amount-parent">
                                                <div className="withdraw-history-info-card-amount-childs">
                                                    {
                                                        data?.status === "pending"
                                                            ?
                                                            <>
                                                                <button className='pending'>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="11"
                                                                        height="11"
                                                                        fill="none"
                                                                        viewBox="0 0 11 11"
                                                                    >
                                                                        <path
                                                                            fill="#001B38"
                                                                            d="M5.5 0c-.33 0-.55.22-.55.55V2.2c0 .33.22.55.55.55s.55-.22.55-.55V.55C6.05.22 5.83 0 5.5 0M6.875 3.135c.11.055.165.055.275.055.165 0 .385-.11.495-.275l.825-1.43c.165-.275.055-.605-.22-.77s-.605-.055-.77.22l-.825 1.43c-.11.275-.055.605.22.77M7.865 4.125c.11.165.275.275.495.275.11 0 .165 0 .275-.055l1.43-.825c.275-.165.33-.495.22-.77-.165-.275-.495-.33-.77-.22l-1.43.825c-.275.165-.33.495-.22.77M10.45 4.95H8.8c-.33 0-.55.22-.55.55s.22.55.55.55h1.65c.33 0 .55-.22.55-.55 0-.275-.22-.55-.55-.55M10.065 7.535l-1.43-.825c-.275-.165-.605-.055-.77.22s-.055.605.22.77l1.43.825c.11.055.165.055.275.055.165 0 .385-.11.495-.275.11-.33.055-.66-.22-.77M7.59 8.085c-.165-.275-.495-.33-.77-.22-.275.165-.33.495-.22.77l.825 1.43c.11.165.275.275.495.275.11 0 .165 0 .275-.055.275-.165.33-.495.22-.77zM5.5 8.25c-.275 0-.55.22-.55.55v1.65c0 .33.22.55.55.55.275 0 .55-.22.55-.55V8.8c0-.275-.275-.55-.55-.55M4.125 7.865c-.275-.165-.605-.055-.77.22l-.825 1.43c-.165.275-.055.605.22.77.11.055.165.055.275.055.165 0 .385-.11.495-.275l.825-1.43c.11-.275.055-.605-.22-.77M3.135 6.875c-.165-.275-.495-.33-.77-.22l-1.43.825c-.275.165-.33.495-.22.77.11.165.275.275.495.275.11 0 .165 0 .275-.055l1.43-.825c.275-.165.33-.495.22-.77M2.2 6.05c.275 0 .55-.22.55-.55s-.22-.55-.55-.55H.55c-.275 0-.55.22-.55.55s.22.55.55.55zM.935 3.465l1.43.825c.11.055.22.11.275.11.165 0 .385-.11.495-.275.165-.275.055-.605-.22-.77l-1.43-.825c-.22-.165-.55-.055-.715.165-.165.275-.055.605.165.77"
                                                                        ></path>
                                                                    </svg>
                                                                    <span>Pending</span></button>
                                                                <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D/MM/YYYY, HH:mm:ss ')}</p>
                                                            </>
                                                            :
                                                            data?.status === "approved"
                                                                ?
                                                                <>
                                                                    <button className='complete'>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="10"
                                                                            height="8"
                                                                            fill="none"
                                                                            viewBox="0 0 10 8"
                                                                        >
                                                                            <path
                                                                                fill="#001B38"
                                                                                d="M10 .8c0 .205-.07.41-.21.565l-5.714 6.4A.67.67 0 0 1 3.571 8a.67.67 0 0 1-.504-.234l-2.858-3.2A.85.85 0 0 1 0 4c0-.457.334-.8.714-.8.183 0 .366.078.505.234L3.571 6.07 8.781.235A.67.67 0 0 1 9.286 0c.381 0 .714.343.714.8"
                                                                            ></path>
                                                                        </svg>
                                                                        <span>Completed</span>
                                                                    </button>
                                                                    <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D/MM/YYYY, HH:mm:ss ')}</p>
                                                                </>
                                                                :
                                                                <>
                                                                    <button className='freeze'>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="11"
                                                                            height="9"
                                                                            fill="none"
                                                                            viewBox="0 0 11 9"
                                                                        >
                                                                            <path
                                                                                fill="#001B38"
                                                                                d="M10.415 6.725 7.078.758C6.825.253 6.319 0 5.763 0S4.701.253 4.45.758L1.11 6.725a1.61 1.61 0 0 0 0 1.517c.253.455.759.758 1.315.758H9.1c.556 0 1.011-.303 1.315-.758.303-.455.253-1.012 0-1.517m-.86 1.011c-.05.05-.151.253-.455.253H2.426a.5.5 0 0 1-.455-.253c-.05-.101-.152-.253 0-.506l3.337-6.017c.152-.252.354-.252.455-.252s.304 0 .455.252L9.555 7.23c.101.253 0 .455 0 .506"
                                                                            ></path>
                                                                            <path
                                                                                fill="#001B38"
                                                                                d="M5.763 2.933c-.303 0-.506.202-.506.505v1.517c0 .303.203.506.506.506s.506-.203.506-.506V3.438c0-.303-.203-.505-.506-.505M5.763 6.978a.506.506 0 1 0 0-1.012.506.506 0 0 0 0 1.012"
                                                                            ></path>
                                                                        </svg>
                                                                        <span>Rejected</span>
                                                                    </button>
                                                                    <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D/MM/YYYY, HH:mm:ss ')}</p>
                                                                </>
                                                    }
                                                </div>
                                                <div className="withdraw-history-info-card-amount-childs">
                                                    <h3>$ {data?.withdrawal_amount}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="withdrawal-info">
                                            <div className='withdrawal-info-parent'>
                                                <div className="withdrawal-info-childs">
                                                    <p>Recipient</p>
                                                    <p>Phone Number</p>
                                                    <p>Wallet Address</p>
                                                    <p>Network</p>

                                                </div>
                                                <div className="withdrawal-info-childs">
                                                    <h4>{data?.username}</h4>
                                                    <h4>{data?.phone_number}</h4>
                                                    <h4>{data?.wallet_address}</h4>
                                                    <h4>{data?.network_type}, {data?.currency}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 style={{
                                            color: "#00aaff",
                                            fontSize: "1rem",
                                            textDecoration: "underline"

                                        }}>{data?.remark ?? ""}</h5>
                                    </div>
                                )).reverse()

                        }
                    </section>
                </section>
            </div>
        </>
    )
}

export default WithdrawalHistory