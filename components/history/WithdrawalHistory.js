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
                    bg="#000"
                />
                <div className="history-filter">
                    <ul>
                        <li><button onClick={() => handleFilter("all")} className={statusType === "all" ? "history-active" : ""}>All</button></li>
                        <li><button onClick={() => handleFilter("pending")} className={statusType === "pending" ? "history-active" : ""}>Pending</button></li>
                        <li><button onClick={() => handleFilter("completed")} className={statusType === "completed" ? "history-active" : ""}>Completed</button></li>
                        <li><button onClick={() => handleFilter("freezed")} className={statusType === "freezed" ? "history-active" : ""}>On Hold</button></li>
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
                                                                    <span>Pending</span></button>                                                
                                                            </>
                                                            :
                                                            data?.status === "approved"
                                                                ?
                                                                <>
                                                                    <button className='complete'>
                                                                        <span>Completed</span>
                                                                    </button>
                                                                </>
                                                                :
                                                                <>
                                                                    <button className='freeze'>
                                                                        <span>Rejected</span>
                                                                    </button>
                                                                </>
                                                    }
                                                </div>
                                                <div className="withdraw-history-info-card-amount-childs">
                                                    {/* <h3>$ {data?.withdrawal_amount}</h3> */}
                                                    <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D/MM/YYYY, HH:mm:ss ')}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="withdrawal-info">
                                            <h1>Withdraw in Progress</h1>
                                            <div className='withdrawal-info-parent'>
                                                <div className="withdrawal-info-childs">
                                                    <p>Recipient</p>
                                                    <h3>{data?.username}</h3>
                                                </div>
                                                <div className="withdrawal-info-childs">
                                                    <p>Currency</p>
                                                    <h3>{data?.currency}</h3>
                                                </div>
                                                <div className="withdrawal-info-childs">
                                                    <p>Network</p>
                                                    <h3>{data?.network_type}</h3>
                                                </div>
                                                {/* <div className="withdrawal-info-childs">
                                                    <h4>{data?.username}</h4>
                                                    <h4>{data?.phone_number}</h4>
                                                    <h4>{data?.wallet_address}</h4>
                                                    <h4>{data?.network_type}, {data?.currency}</h4>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className='withdraw-wallet-parent'>
                                            <div className='withdraw-wallet-child'>
                                                <p>Wallet Address</p>
                                                <h2>ghjk2l13jh4g53hjk245jh6g4h3jk2k4j5h6gf43hj2k4j5htyvc</h2>
                                            </div>
                                        </div>
                                        {/* <h5 style={{
                                            color: "#00aaff",
                                            fontSize: "1rem",
                                            textDecoration: "underline"

                                        }}>{data?.remark ?? ""}</h5> */}
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