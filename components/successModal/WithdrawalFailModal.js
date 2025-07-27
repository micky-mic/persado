"use client";

import Image from 'next/image';
import React from 'react';
import withdrawal_success from "@/public/related_assets/modal/withdrawal_fail.svg"

const WithdrawalFailModal = ({ setIsModal }) => {

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
                    <h3>WITHDRAW FAILED</h3>
                    <p>We couldn’t proceed the withdraw...</p>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>CLOSE</button>
                        <button className='btn2' onClick={() => setIsModal(false)}>TRY AGAIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WithdrawalFailModal