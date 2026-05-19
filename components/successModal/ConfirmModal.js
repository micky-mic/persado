import Image from 'next/image';
import React from 'react';
import { logout } from '@/app/actions/user/action';
import { useRouter } from 'next/navigation';

import qus from '@/public/new/qus.png'

const ConfirmModal = ({ setIsModal }) => {

    const router = useRouter();

    const logoutfunc = async () => {
        await logout();
        setIsModal(false)
        router.push("/");
    }

    return (
        <>
            <div className="success-modal-wrapper">
                <div className="success-modal-wrapper-inner">
                    <div className='newmodel'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 325" fill="none">
                            <path d="M0 20.8529V303C0 315.15 9.84973 325 22 325H305C317.15 325 327 315.15 327 303V70.8883C327 66.7358 325.906 62.5856 323.304 59.349C295.171 24.3476 233.273 35.5605 207.428 40.5605C167.401 48.3038 153.586 65.5903 122.715 56.5634C82.3577 44.7628 36.411 -23.2368 4.64613 8.24291C1.35157 11.5079 0 16.2146 0 20.8529Z" fill="url(#paint0_linear_52_5019)" />
                            <defs>
                                <linearGradient id="paint0_linear_52_5019" x1="163.5" y1="0" x2="164.033" y2="325" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#071013" />
                                    <stop offset="1" stop-color="#6E41FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='typeofimg'>
                            <Image
                                src={qus}
                                alt="img"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className='modelclosebtn' onClick={() => setIsModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <circle cx="14" cy="14" r="14" fill="white" />
                                <path d="M18.219 19.0002C18.0119 19.0002 17.8127 18.9182 17.6662 18.7717L14.0001 15.1056L10.334 18.7717C10.0293 19.0764 9.53322 19.0764 9.22852 18.7717C8.92383 18.467 8.92383 17.9709 9.22852 17.6662L12.8946 14.0001L9.22852 10.334C8.92383 10.0293 8.92383 9.53322 9.22852 9.22852C9.53322 8.92383 10.0293 8.92383 10.334 9.22852L14.0001 12.8946L17.6643 9.22852C17.969 8.92383 18.4651 8.92383 18.7698 9.22852C19.0745 9.53322 19.0745 10.0293 18.7698 10.334L15.1056 14.0001L18.7698 17.6643C19.0764 17.969 19.0764 18.4631 18.7717 18.7698C18.6272 18.9182 18.428 19.0002 18.219 19.0002Z" fill="url(#paint0_radial_52_5028)" />
                                <defs>
                                    <radialGradient id="paint0_radial_52_5028" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14 14.0001) scale(5 5.00012)">
                                        <stop stop-color="#8556FF" />
                                        <stop offset="1" stop-color="#6B3EFF" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="new-success-modal-wrapper-content">
                            <h3>READY TO LOGOUT?</h3>
                            <p>Leaving soon? We hope to see you soon</p>
                        </div>
                        <div className="close-modal">
                            <button className='primary-btn model-btn' onClick={() => setIsModal(false)}>Close</button>
                            <button className='primary-btn model-btn' onClick={() => logoutfunc()}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmModal