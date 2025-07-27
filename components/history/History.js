"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import data_not_found from "@/public/not_found.png";
import Link from "next/link";
import moment from 'moment';
import 'moment-timezone';

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
            <div className='background-color' style={{minHeight: "100vh", paddingBottom: "100px"}}>
                <div className="history-section">
                    <Breadcrumb
                        title="Lot Boosting"
                        link="/dashboard"
                        isColor="#fff"
                    />
                    <div className="history-filter">
                        <ul>
                            <li><button onClick={() => handleFilter("all")} className={statusType === "all" ? "history-active" : ""}>View All</button></li>
                            <li><button onClick={() => handleFilter("pending")} className={statusType === "pending" ? "history-active" : ""}>Pending</button></li>
                            <li><button onClick={() => handleFilter("completed")} className={statusType === "completed" ? "history-active" : ""}>Completed</button></li>
                            {/* <li><button onClick={() => handleFilter("freezed")} className={statusType === "freezed" ? "history-active" : ""}>Freezed</button></li> */}
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
                                                    <h3 className="playfair-font">{data?.productName}</h3>
                                                </div>
                                                <div className="dealing-record-status-child">
                                                    {
                                                        data?.status === "completed"
                                                            ?
                                                            <button className="complete">
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
                                                            :
                                                            <button className="pending">
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
                                                                <span>Pending</span>
                                                            </button>
                                                    }
                                                    <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D/MM/YYYY, HH:mm:ss')}</p>
                                                </div>
                                            </div>
                                            <div className="dealing-record-card-parent">
                                                <div className="dealing-record-card-childs">
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
                                                <div className="dealing-record-card-childs">
                                                    <div className="dealing-record-info-parent">
                                                        <div className="dealing-record-info-childs">
                                                            <p>Lot Price</p>
                                                        </div>
                                                        <div className="dealing-record-info-childs">
                                                            <h3>$ {data?.productPrice?.toFixed(2)}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dealing-record-info-parent">
                                                        <div className="dealing-record-info-childs">
                                                            <p>Dividends</p>
                                                        </div>
                                                        <div className="dealing-record-info-childs">
                                                            {
                                                                data?.isJourneyProduct
                                                                    ?
                                                                    <h3>$ {(data?.productPrice * membership?.ticket_commission)?.toFixed(2)}</h3>
                                                                    :
                                                                    <h3>$ {(data?.productPrice * membership?.commission_rate)?.toFixed(2)}</h3>

                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="dealing-record-info-parent">
                                                        <div className="dealing-record-info-childs">
                                                            <p>Packages Details</p>
                                                        </div>
                                                        <div className="dealing-record-info-childs">
                                                            <h3 style={{ textTransform: "uppercase" }}>CS{data?._id.slice(-4)}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            data?.status == "pending"
                                                ?
                                                <div className="pending-submit-btn">
                                                    <Link href="/dashboard/journey/submitJourney">
                                                        <button className="btn global-white-btn mt1">Boost <i className="fa fa-arrow-right"></i></button>
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
