"use client";

import Image from 'next/image';
import React from 'react';
import register_sucess from "@/public/related_assets/modal/register_sucess.svg";
import { useRouter } from 'next/navigation';

const SignUpSuccessModal = ({ setIsModal }) => {
    const router = useRouter()

    const sendToLogin = () => {
        return router.push("/signin")
    }
    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-wrapper-inner">
                <div className="success-modal-wrapper-image">
                    <Image
                        src={register_sucess}
                        height={100}
                        width={100}
                        alt="modal"
                        unoptimized
                    />
                </div>
                <div className="success-modal-wrapper-content">
                    <h3>SUCCESSFULLY REGISTERED</h3>
                    <p>Your account has been successfully created.</p>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>Close</button>
                        <button className='btn2' onClick={() => sendToLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpSuccessModal