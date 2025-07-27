"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Link from 'next/link';
import { useState } from 'react';
import balance_card from "@/public/related_assets/Images/balance_circle.svg"
import Image from 'next/image';

const Recharge = ({ user }) => {
    const amounts = [
        { value: "$ 50.00", numericValue: 50 },
        { value: "$ 100.00", numericValue: 100 },
        { value: "$ 300.00", numericValue: 300 },
        { value: "$ 1000.00", numericValue: 1000 },
        { value: "$ 3000.00", numericValue: 3000 },
        { value: "Others", numericValue: 0 }
    ];

    const [amountData, setAmountData] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index, numericValue) => {
        setActiveIndex(index);
        setAmountData(numericValue);
    };

    const handleInputChange = (event) => {
        setAmountData(Number(event.target.value));
        setActiveIndex(null);
    };

    const handleAddFundsClick = () => {
        if (window.LC_API && typeof window.LC_API.open_chat_window === 'function') {
            window.LC_API.open_chat_window();
        } else {
            console.error("Live Chat widget not initialized or method not found.");
        }
    };

    return (
        <>
            <div className='background-color overflowHide'>
                <section className="journey-section transaction-pages">
                    <Breadcrumb
                        link="/dashboard"
                        title="Recharge"
                        isColor="#FFF"
                    />
                    <div className="journey-info-wrapper">
                        <div className='balance-card-img'>
                            <Image
                                src={balance_card}
                                alt='card'
                                height={100}
                                width={100}
                                unoptimized
                            />
                            <div className='acc-balance-info'>
                                <p>USD</p>
                                <h1>$ {user?.balance?.toFixed(2) ?? ""}</h1>
                                <h4>Total Balance</h4>
                            </div>
                        </div>
                        <div className="transaction-history">
                            <Link href="/dashboard/rechargeHistory">
                                <p>Recharge History</p>
                            </Link>
                        </div>

                        <div className='deposit-boder'>
                            <div className="deposit">
                                <h3 className='playfair-font'>Recharge</h3>
                            </div>
                        </div>
                        <div className="transaction-amount">
                            <h3>Recharge Amount</h3>
                            <input
                                type="number"
                                placeholder="Enter the Recharge amount"
                                value={amountData === 0 ? "" : amountData}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="amount-options" style={{paddingBottom: "8rem"}}>
                            <div className="amount-option-parent">
                                {amounts.map((amount, index) => (
                                    <div
                                        className={`amount-option-childs ${activeIndex === index ? 'active-deposit-btn' : ''}`}
                                        key={index}
                                        onClick={() => handleClick(index, amount.numericValue)}
                                    >
                                        <h3>{amount.value}</h3>
                                    </div>
                                ))}
                            </div>
                            <button className="btn global-white-btn mt2" onClick={() => handleAddFundsClick()}>RECHARGE</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Recharge;
