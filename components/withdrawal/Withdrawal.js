"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Link from 'next/link';
import { useState } from 'react';
import { withdrawal } from '@/app/actions/user/action';
import toast from 'react-hot-toast';
import { useFormStatus } from "react-dom";
import balance_card from "@/public/related_assets/Images/balance_circle.svg"
import Image from 'next/image';
import WithdrawalSuccessModal from '../successModal/WithdrawalSuccessModal';
import link_wallet from "@/public/related_assets/Images/link_wallet.svg"
import WithdrawalFailModal from '../successModal/WithdrawalFailModal';
import PointError from '../successModal/PointError';

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            {
                <button type="submit" disabled={pending} className="btn global-white-btn">{pending ? <>Please wait <i className="fa fa-circle-notch rotating-spinner"></i></> : "WITHDRAW"}</button>
            }
        </>
    )
}

const Withdrawal = ({ user }) => {

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isShow, setIsShow] = useState(false);

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
    const [isPointError, setIsPointError] = useState(false);

    const handleClick = (index, numericValue) => {
        setActiveIndex(index);
        setAmountData(numericValue);
    };

    const handleInputChange = (event) => {
        setAmountData(Number(event.target.value));
        setActiveIndex(null);
    };

    const handleForm = async (formData) => {
        try {
            const response = await withdrawal(formData);

            if (response.status === 201) {
                toast.success(response.message);
                setIsSuccess(true);
                return;
            } else if (response.status === 505) {
                toast.error(response.message);
                setIsPointError(true);
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='background-color overflowHide'>
                {
                    isSuccess
                        ?
                        <WithdrawalSuccessModal setIsModal={setIsSuccess} />
                        :
                        <></>
                }
                {
                    isError
                        ?
                        <WithdrawalFailModal setIsModal={setIsError} />
                        :
                        <></>
                }
                {
                    isPointError
                        ?
                        <PointError setIsModal={setIsPointError} />
                        :
                        <></>
                }
                <section className="journey-section transaction-pages page_animation">
                    <Breadcrumb
                        link="/dashboard"
                        title="Withdraw"
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
                            <Link href="/dashboard/withdrawalHistory">
                                <p>Withdrawal History</p>
                            </Link>
                        </div>

                        {
                            user?.network_type === null
                                ?
                                <>
                                    <div className="link-wallet-wrapper">
                                        <div className='deposit-boder'>
                                            <div className="deposit">
                                                <h3 className='playfair-font'>Wallet</h3>
                                            </div>
                                        </div>
                                        <div className="link-wallet mt2">
                                            <div className='wallet-image'>
                                                <Image
                                                    src={link_wallet}
                                                    alt='wallet'
                                                    height={100}
                                                    width={100}
                                                    unoptimized
                                                />
                                            </div>
                                            <div className="link-wallet-info">
                                                <h3>Seem like you haven’t link your wallet...</h3>
                                                <p>Would you like to link wallet now?</p>
                                            </div>
                                        </div>
                                        <div className="amount-submit-btn mt2">
                                            <Link href="/dashboard/withdrawal/linkwallet">
                                                <button className="btn global-white-btn">Link Wallet now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                                :
                                <form action={handleForm}>
                                    <div className="withdrawal-details">
                                        <div className='withdrawal-to-boder'>
                                            <div className="withdrawal-to">
                                                <h3 className='playfair-font'>Withdraw To</h3>
                                            </div>
                                        </div>
                                        <div className='withdrawal-details-wrapper'>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Recipient</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.wallet_name}</h3>
                                                </div>
                                            </div>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Phone Number</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.wallet_phone}</h3>
                                                </div>
                                            </div>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Wallet Address</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.wallet_address}</h3>
                                                </div>
                                            </div>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Network</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.network_type}, {user?.currency}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="transaction-amount">
                                        <h3>Withdraw Amount</h3>
                                        <input
                                            type="number"
                                            placeholder="Enter the withdrawal amount"
                                            value={amountData === 0 ? "" : amountData}
                                            onChange={handleInputChange}
                                            name="amount"
                                            step="any"
                                            required
                                        />
                                    </div>
                                    <div className="amount-options">
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
                                    </div>
                                    <div className="transaction-amount mt2">
                                        <h3>Withdraw Password</h3>
                                        <svg className='input-primary-svg'
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="18"
                                            fill="none"
                                            viewBox="0 0 17 18"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M14.727 18H1.637C.736 18 0 17.264 0 16.364V9c0-.9.736-1.636 1.636-1.636h13.091c.9 0 1.637.736 1.637 1.636v7.364c0 .9-.737 1.636-1.637 1.636M1.637 9v7.364h13.09V9z"
                                            ></path>
                                            <path
                                                fill="#fff"
                                                d="M12.273 9a.82.82 0 0 1-.818-.818V4.909a3.272 3.272 0 1 0-6.546 0v3.273A.82.82 0 0 1 4.091 9a.82.82 0 0 1-.818-.818V4.909C3.273 2.201 5.473 0 8.182 0s4.91 2.2 4.91 4.91v3.272a.82.82 0 0 1-.82.818M8.182 14.727a.82.82 0 0 1-.818-.818v-2.455a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.819v2.454a.82.82 0 0 1-.818.818"
                                            ></path>
                                        </svg>
                                        <input
                                            type={isShow ? "text" : "password"}
                                            placeholder="Enter the withdrawal password"
                                            name="withdrawal_pin"
                                            required
                                            pattern="[0-9]{4,6}"
                                            title="Password must be between 4 and 6 digits"
                                            inputMode="numeric"
                                            minLength="4"
                                            maxLength="6"
                                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                            autoComplete="off"
                                        />
                                        {
                                            isShow
                                                ?
                                                <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="12"
                                                    fill="none"
                                                    viewBox="0 0 18 12"
                                                >
                                                    <path
                                                        fill="#fff"
                                                        d="M9 11.452c-4.875 0-8.679-5.023-8.834-5.235a.81.81 0 0 1 0-.982C.32 5.022 4.133 0 9 0s8.679 5.022 8.834 5.235a.81.81 0 0 1 0 .982c-.155.212-3.967 5.235-8.834 5.235M1.875 5.726C2.898 6.904 5.753 9.816 9 9.816s6.094-2.912 7.125-4.09C15.102 4.548 12.247 1.636 9 1.636S2.898 4.54 1.875 5.726"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M9 8.589a2.866 2.866 0 0 1-2.863-2.863A2.866 2.866 0 0 1 9 2.863a2.866 2.866 0 0 1 2.863 2.863A2.866 2.866 0 0 1 9 8.589m0-4.09c-.679 0-1.227.548-1.227 1.227S8.321 6.953 9 6.953s1.227-.548 1.227-1.227S9.679 4.499 9 4.499"
                                                    ></path>
                                                </svg>
                                                :
                                                <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="17"
                                                    fill="none"
                                                    viewBox="0 0 18 17"
                                                >
                                                    <path
                                                        fill="#fff"
                                                        d="M9 13.908c-4.875 0-8.679-5.022-8.834-5.235a.81.81 0 0 1 0-.982c.04-.049.99-1.317 2.527-2.593a.825.825 0 0 1 1.154.107.826.826 0 0 1-.107 1.153 16 16 0 0 0-1.857 1.824c1.023 1.178 3.878 4.09 7.125 4.09a6.4 6.4 0 0 0 1.44-.18.817.817 0 0 1 .393 1.587 7.5 7.5 0 0 1-1.833.229zm5.783-2.454a.81.81 0 0 1-.63-.295.825.825 0 0 1 .107-1.153 16 16 0 0 0 1.857-1.824c-1.023-1.178-3.878-4.09-7.125-4.09-.466 0-.94.057-1.423.18a.817.817 0 0 1-.393-1.587A7.4 7.4 0 0 1 9 2.456c4.875 0 8.679 5.023 8.834 5.235a.81.81 0 0 1 0 .982c-.04.049-.99 1.317-2.527 2.593a.84.84 0 0 1-.524.188"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M9 11.045a2.866 2.866 0 0 1-2.863-2.863c0-.72.27-1.407.753-1.93a.81.81 0 0 1 1.153-.05c.335.303.36.827.049 1.154A1.225 1.225 0 0 0 9 9.409a1.2 1.2 0 0 0 .859-.352.815.815 0 1 1 1.145 1.162A2.84 2.84 0 0 1 9 11.037z"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M16.362 16.362a.84.84 0 0 1-.58-.237L1.056 1.393A.815.815 0 1 1 2.211.239l14.724 14.724a.815.815 0 0 1-.581 1.39z"
                                                    ></path>
                                                </svg>

                                        }
                                    </div>
                                    {

                                        <div className="amount-submit-btn">
                                            {
                                                user?.allow_rob_order
                                                    ?
                                                    <Submit />
                                                    :
                                                    < div className="fake-btn">
                                                        WITHDRAW
                                                    </div>
                                            }
                                        </div>
                                    }
                                </form>
                        }
                    </div>
                </section >
            </div >
        </>
    )
}

export default Withdrawal