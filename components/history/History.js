"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import data_not_found from "@/public/not_found.png";
import Link from "next/link";
import moment from 'moment';
import 'moment-timezone';
import money1 from "@/public/new2/money1.png"
import money2 from "@/public/new2/money2.png"
import money3 from "@/public/new2/money3.png"

const History = ({ data, membership }) => {

    const [allProducts, setAllProducts] = useState(data || []);
    const [statusType, setStatusType] = useState("all");


    const handleFilter = (filterType) => {
        if (filterType === "all") {
            setAllProducts(data)
            setStatusType("all");
        } else if (filterType === "pending") {
            const pendingProducts = data?.filter(product => product.status === "pending");
            setAllProducts(pendingProducts);
            setStatusType("pending");
        } else if (filterType === "completed") {
            const completedProducts = data?.filter(product => product.status === "completed");
            setAllProducts(completedProducts);
            setStatusType("completed");
        } else if (filterType === "freezed") {
            const completedProducts = data?.filter(product => product.status === "freezed");
            setAllProducts(completedProducts);
            setStatusType("freezed");
        }
    }

    useEffect(() => {
        setAllProducts(data);
    }, []);

    return (
        <>
            <div className='background-color' style={{ minHeight: "100vh", paddingBottom: "100px" }}>
                <div className="history-section">
                    <Breadcrumb
                        link="/dashboard"
                        title="Optimize History"
                        isColor="#000"
                        bg="#FFF"
                    />
                    <div className="history-filter">
                        <ul>
                            <li><button onClick={() => handleFilter("all")} className={statusType === "all" ? "history-active" : ""}>All</button></li>
                            <li><button onClick={() => handleFilter("pending")} className={statusType === "pending" ? "history-active" : ""}>Pending</button></li>
                            <li><button onClick={() => handleFilter("completed")} className={statusType === "completed" ? "history-active" : ""}>Completed</button></li>
                            <li><button onClick={() => handleFilter("freezed")} className={statusType === "freezed" ? "history-active" : ""}>On Hold</button></li>
                        </ul>
                    </div >
                    <div className="journey-history-card-wrapper">
                        {
                            data?.length === 0
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
                                    <div className="dealing-record-card-wrapper" key={index}>
                                        <div className="dealing-record-status-wrapper">
                                            <div className="dealing-record-status-parent">

                                                <div className="dealing-record-status-child">
                                                    {
                                                        data?.status === "completed"
                                                            ?
                                                            <button className="complete">
                                                                <span>Completed</span>
                                                            </button>
                                                            :
                                                            <button className="pending">
                                                                <span>Pending</span>
                                                            </button>
                                                    }
                                                </div>
                                                <div className="dealing-record-status-child">
                                                    <h3>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D/MM/YYYY, HH:mm:ss')}</h3>
                                                </div>
                                            </div>
                                            <div className="tracking-image">
                                                {
                                                    data && data.url && (
                                                        <Image
                                                            src={data.url}
                                                            height={100}
                                                            width={100}
                                                            alt="logo"
                                                            sizes="(max-width: 768px) 50vw, 100px"
                                                            quality={90}
                                                        />
                                                    )
                                                }
                                            </div>
                                            <h2>{data?.productName}</h2>
                                            <div className="tracking-details">

                                                <div className="tracking-row">
                                                    <div className="left">
                                                        <Image
                                                            src={money1}
                                                            alt="icon"
                                                            width={100}
                                                            height={100}
                                                            unoptimized
                                                        />
                                                        <span>Value</span>
                                                    </div>

                                                    <h4>$ {data?.productPrice?.toFixed(2)}</h4>
                                                </div>

                                                <div className="tracking-row">
                                                    <div className="left">
                                                        <Image
                                                            src={money2}
                                                            alt="icon"
                                                            width={100}
                                                            height={100}
                                                            unoptimized
                                                        />
                                                        <span>Commission</span>
                                                    </div>

                                                    <h4> {
                                                        data?.isJourneyProduct
                                                            ?
                                                            <h4>$ {(data?.productPrice * membership?.ticket_commission)?.toFixed(2)}</h4>
                                                            :
                                                            <h4>$ {(data?.productPrice * membership?.commission_rate)?.toFixed(2)}</h4>

                                                    }</h4>
                                                </div>

                                                <div className="tracking-row">
                                                    <div className="left">
                                                        <Image
                                                            src={money3}
                                                            alt="icon"
                                                            width={100}
                                                            height={100}
                                                            unoptimized
                                                        />
                                                        <span>Total Value</span>
                                                    </div>

                                                    <h4>$  {(
                                                        Number(data?.productPrice || 0) +
                                                        (
                                                            data?.isJourneyProduct
                                                                ? Number(data?.productPrice || 0) * Number(membership?.ticket_commission || 0)
                                                                : Number(data?.productPrice || 0) * Number(membership?.commission_rate || 0)
                                                        )
                                                    ).toFixed(2)}</h4>
                                                </div>

                                            </div>
                                        </div>
                                        {
                                            data?.status == "pending"
                                                ?
                                                <div className="pending-submit-btn">
                                                    <Link href="/dashboard/journey/submitJourney">
                                                        <button className="btn global-white-btn mt1">SUBMIT</button>
                                                    </Link>
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default History
