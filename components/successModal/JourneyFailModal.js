"use client";

import Image from 'next/image';
import React from 'react';
import booking_fail from "@/public/related_assets/modal/journey_fail.svg";

const JourneyFailModal = ({ setIsModal }) => {

    return (
        <div className="success-modal-wrapper" onClick={() => setIsModal(false)}>
            <div className="success-modal-wrapper-inner" onClick={(e) => e.stopPropagation()}>
                <div className="success-modal-wrapper-image">
                    <Image
                        src={booking_fail}
                        height={100}
                        width={100}
                        alt="modal"
                        unoptimized
                    />
                </div>
                <div className="success-modal-wrapper-content">
                    <h3>BOOKING FAILED</h3>
                    <p>There’s an issue... Please try again</p>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>CLOSE</button>
                        <button className='btn2' onClick={() => setIsModal(false)}>TRY AGAIN </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneyFailModal