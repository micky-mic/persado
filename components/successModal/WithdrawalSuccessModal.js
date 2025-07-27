"use client";

import Image from 'next/image';
import React from 'react';
import withdrawal_success from "@/public/related_assets/modal/withdrawal_success.svg"
import Link from 'next/link';

const WithdrawalSuccessModal = ({ setIsModal }) => {

    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-wrapper-inner">
                <div className="success-modal-wrapper-image">
                    <Image
                        src={withdrawal_success}
                        height={100}
                        width={100}
                        alt="modal"
                        unoptimized
                    />
                </div>
                <div className="success-modal-wrapper-content">
                    <h3>WITHDRAW SUCCESSFUL</h3>
                    <p>Your fund has been successfully withdraw change Your withdrawal request has been submitted!</p>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>CLOSE</button>
                        <Link href="/dashboard/withdrawalHistory">
                            <button className='btn2'>OKAY</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawalSuccessModal