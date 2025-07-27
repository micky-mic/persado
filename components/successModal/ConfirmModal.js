import Image from 'next/image';
import React from 'react';
import logoutPic from "@/public/related_assets/modal/logout.svg";
import { logout } from '@/app/actions/user/action';
import { useRouter } from 'next/navigation';

const ConfirmModal = ({ setIsModal }) => {

    const router = useRouter();

    const logoutfunc = async () => {
        await logout();
        setIsModal(false)
        router.push("/");
    }

    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-wrapper-inner">
                <div className="success-modal-wrapper-image">
                    <Image
                        src={logoutPic}
                        height={100}
                        width={100}
                        alt="modal"
                        unoptimized
                    />
                </div>
                <div className="success-modal-wrapper-content">
                    <h3>READY TO LOGOUT?</h3>
                    <p>Leaving soon? We hope to see you soon</p>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>Close</button>
                        <button className='btn2' onClick={() => logoutfunc()}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal