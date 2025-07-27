"use client";

import Image from 'next/image';
import React from 'react';
import booking_sucess from "@/public/related_assets/modal/journey_success.svg";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const JourneySuccessModal = ({ setIsModal }) => {

    const router = useRouter();

    const backFunc = () => {
        router.push("/dashboard/journey");
    }

    return (
        <div className="success-modal-wrapper" onClick={() => backFunc()}>
            <div className="success-modal-wrapper-inner" onClick={(e) => e.stopPropagation()}>
                <div className="success-modal-wrapper-image">
                    <Image
                        src={booking_sucess}
                        height={100}
                        width={100}
                        alt="modal"
                        unoptimized
                    />
                </div>
                <div className="success-modal-wrapper-content">
                    <h3>BOOSTING SUCCESSFUL</h3>
                    <p>Your Boosting has been successfully submitted</p>
                    <div className="close-modal">
                        <Link href="/dashboard/journey">
                            <button className='btn1' onClick={() => setIsModal(false)}>CLOSE</button>
                        </Link>
                        {/* <Link href="/dashboard/journey">
                            <button className='btn2' onClick={() => setIsModal(false)}>TRY AGAIN </button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneySuccessModal;