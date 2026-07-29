"use client";

import { useState } from 'react';
import { useFormStatus } from "react-dom";
import { logout, resetPassword } from "@/app/actions/user/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Link from 'next/link';
import Image from "next/image";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="primary-btn">{pending ? <>Please wait<i className="fa fa-circle-notch rotating-spinner"></i></> : "Change Now"}</button>
        </>
    )
}

const ChangePassword = () => {
    const { push } = useRouter();

    const [isShow, setIsShow] = useState(false);
    const [isShow2, setIsShow2] = useState(false);
    const [isShow3, setIsShow3] = useState(false);

    const handleForm = async (formData) => {
        try {
            const response = await resetPassword(formData);

            if (response.status === 201) {
                toast.success(response.message);
                await logout();
                push('/signin');
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
            <div className="security-background"  style={{
                    backgroundImage: `url(${bgdesign.src})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh",
                }}>
                <Breadcrumb
                    title="Security"
                    link="/dashboard"
                    isColor="#000"

                />
                <div className="security-tab">
                    <Link href="/dashboard/recovery/changePassword">
                        <button className="security-tab-active">Login Password</button>
                    </Link>
                    <Link href="/dashboard/recovery/changePin">
                        <button>Withdrawal Password</button>
                    </Link>
                </div>
                <div className="linkwallet-section security-linkwallet page_animation">
                    <div className="linkwallet-image-wrapper">
                        <Image
                            src={securityImage}
                            height={100}
                            width={100}
                            alt="deco"
                        />
                    </div>
                    <div className="app-global-form">
                        <span className="corner top-left"></span>
                        <span className="corner top-right"></span>
                        <span className="corner bottom-left"></span>
                        <span className="corner bottom-right"></span>
                        <form action={handleForm}>
                            <div className="app-form-group app-form-group-include-conf">
                                <label>Old Password</label>
                                <input
                                    type={isShow ? "text" : "password"}
                                    placeholder="Current Password"
                                    name="old_password"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                // className="wallet_input"
                                />
                                {
                                    isShow
                                        ?
                                        <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg' width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 2C3.8 2 1.2 4.1 0 6C1.2 7.9 3.8 10 7 10C10.2 10 12.8 7.9 14 6C12.8 4.1 10.2 2 7 2Z"
                                                fill="#B8B8D2"
                                            />
                                            <circle cx="7" cy="6" r="2" fill="white" />

                                            <circle cx="7" cy="6" r="1" fill="#B8B8D2" />
                                        </svg>
                                        :
                                        <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="#B8B8D2" />
                                            <path d="M10.1937 12.0798L9.3337 11.1865L9.28704 11.1398L8.44037 10.2931C8.30601 10.3167 8.17007 10.33 8.0337 10.3331C7.72449 10.3375 7.41749 10.2805 7.13054 10.1652C6.84359 10.0499 6.58241 9.87872 6.3622 9.66161C6.14198 9.4445 5.96713 9.18578 5.84779 8.90049C5.72845 8.61521 5.66701 8.30904 5.66704 7.9998C5.67013 7.86343 5.6835 7.72749 5.70704 7.59313L4.3737 6.2598L3.3337 5.24646C2.58125 5.95545 1.93664 6.77075 1.42037 7.66646C1.36186 7.76781 1.33105 7.88277 1.33105 7.9998C1.33105 8.11682 1.36186 8.23179 1.42037 8.33313C1.84037 9.0598 4.08704 12.6665 8.01371 12.6665H8.18037C8.91874 12.6446 9.64755 12.4934 10.3337 12.2198L10.1937 12.0798ZM5.72704 3.8398L7.59371 5.70647C7.72806 5.68293 7.864 5.66956 8.00037 5.66646C8.61921 5.66646 9.2127 5.9123 9.65029 6.34988C10.0879 6.78747 10.3337 7.38096 10.3337 7.9998C10.3306 8.13617 10.3172 8.27211 10.2937 8.40647L12.0804 10.1931L12.6404 10.7531C13.4023 10.046 14.0559 9.23061 14.5804 8.33313C14.6389 8.23179 14.6697 8.11682 14.6697 7.9998C14.6697 7.88277 14.6389 7.76781 14.5804 7.66646C14.1537 6.92646 11.807 3.21313 7.82037 3.33313C7.08201 3.35503 6.3532 3.50621 5.66704 3.7798L5.72704 3.8398ZM13.807 12.8598L12.9404 11.9998L11.607 10.6665L5.26037 4.31313L4.28037 3.33313L3.14037 2.19313C3.07821 2.13097 3.00442 2.08167 2.9232 2.04802C2.84199 2.01438 2.75494 1.99707 2.66704 1.99707C2.57913 1.99707 2.49209 2.01438 2.41087 2.04802C2.32966 2.08167 2.25586 2.13097 2.1937 2.19313C2.06817 2.31867 1.99764 2.48893 1.99764 2.66646C1.99764 2.844 2.06817 3.01426 2.1937 3.1398L3.68704 4.66646L4.8537 5.7998L9.72704 10.6665L9.7737 10.7131L10.667 11.6065L11.0604 11.9998L12.8604 13.8065C12.9223 13.8689 12.9961 13.9185 13.0773 13.9524C13.1586 13.9862 13.2457 14.0037 13.3337 14.0037C13.4217 14.0037 13.5089 13.9862 13.5901 13.9524C13.6713 13.9185 13.7451 13.8689 13.807 13.8065C13.8695 13.7445 13.9191 13.6708 13.953 13.5895C13.9868 13.5083 14.0042 13.4211 14.0042 13.3331C14.0042 13.2451 13.9868 13.158 13.953 13.0767C13.9191 12.9955 13.8695 12.9218 13.807 12.8598Z" fill="#B8B8D2" />
                                        </svg>
                                }
                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <label>New Password</label>
                                <input
                                    type={isShow2 ? "text" : "password"}
                                    placeholder="New Password"
                                    name="new_password"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                                {
                                    isShow2
                                        ?
                                        <svg onClick={() => setIsShow2(!isShow2)} className='input-secondary-svg' width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 2C3.8 2 1.2 4.1 0 6C1.2 7.9 3.8 10 7 10C10.2 10 12.8 7.9 14 6C12.8 4.1 10.2 2 7 2Z"
                                                fill="#B8B8D2"
                                            />
                                            <circle cx="7" cy="6" r="2" fill="white" />

                                            <circle cx="7" cy="6" r="1" fill="#B8B8D2" />
                                        </svg>
                                        :
                                        <svg onClick={() => setIsShow2(!isShow2)} className='input-secondary-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="#B8B8D2" />
                                            <path d="M10.1937 12.0798L9.3337 11.1865L9.28704 11.1398L8.44037 10.2931C8.30601 10.3167 8.17007 10.33 8.0337 10.3331C7.72449 10.3375 7.41749 10.2805 7.13054 10.1652C6.84359 10.0499 6.58241 9.87872 6.3622 9.66161C6.14198 9.4445 5.96713 9.18578 5.84779 8.90049C5.72845 8.61521 5.66701 8.30904 5.66704 7.9998C5.67013 7.86343 5.6835 7.72749 5.70704 7.59313L4.3737 6.2598L3.3337 5.24646C2.58125 5.95545 1.93664 6.77075 1.42037 7.66646C1.36186 7.76781 1.33105 7.88277 1.33105 7.9998C1.33105 8.11682 1.36186 8.23179 1.42037 8.33313C1.84037 9.0598 4.08704 12.6665 8.01371 12.6665H8.18037C8.91874 12.6446 9.64755 12.4934 10.3337 12.2198L10.1937 12.0798ZM5.72704 3.8398L7.59371 5.70647C7.72806 5.68293 7.864 5.66956 8.00037 5.66646C8.61921 5.66646 9.2127 5.9123 9.65029 6.34988C10.0879 6.78747 10.3337 7.38096 10.3337 7.9998C10.3306 8.13617 10.3172 8.27211 10.2937 8.40647L12.0804 10.1931L12.6404 10.7531C13.4023 10.046 14.0559 9.23061 14.5804 8.33313C14.6389 8.23179 14.6697 8.11682 14.6697 7.9998C14.6697 7.88277 14.6389 7.76781 14.5804 7.66646C14.1537 6.92646 11.807 3.21313 7.82037 3.33313C7.08201 3.35503 6.3532 3.50621 5.66704 3.7798L5.72704 3.8398ZM13.807 12.8598L12.9404 11.9998L11.607 10.6665L5.26037 4.31313L4.28037 3.33313L3.14037 2.19313C3.07821 2.13097 3.00442 2.08167 2.9232 2.04802C2.84199 2.01438 2.75494 1.99707 2.66704 1.99707C2.57913 1.99707 2.49209 2.01438 2.41087 2.04802C2.32966 2.08167 2.25586 2.13097 2.1937 2.19313C2.06817 2.31867 1.99764 2.48893 1.99764 2.66646C1.99764 2.844 2.06817 3.01426 2.1937 3.1398L3.68704 4.66646L4.8537 5.7998L9.72704 10.6665L9.7737 10.7131L10.667 11.6065L11.0604 11.9998L12.8604 13.8065C12.9223 13.8689 12.9961 13.9185 13.0773 13.9524C13.1586 13.9862 13.2457 14.0037 13.3337 14.0037C13.4217 14.0037 13.5089 13.9862 13.5901 13.9524C13.6713 13.9185 13.7451 13.8689 13.807 13.8065C13.8695 13.7445 13.9191 13.6708 13.953 13.5895C13.9868 13.5083 14.0042 13.4211 14.0042 13.3331C14.0042 13.2451 13.9868 13.158 13.953 13.0767C13.9191 12.9955 13.8695 12.9218 13.807 12.8598Z" fill="#B8B8D2" />
                                        </svg>
                                }
                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <label>Confirm Password</label>
                                <input
                                    type={isShow3 ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    name="confirm_password"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                                {
                                    isShow3
                                        ?
                                        <svg onClick={() => setIsShow3(!isShow3)} className='input-secondary-svg' width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 2C3.8 2 1.2 4.1 0 6C1.2 7.9 3.8 10 7 10C10.2 10 12.8 7.9 14 6C12.8 4.1 10.2 2 7 2Z"
                                                fill="#B8B8D2"
                                            />
                                            <circle cx="7" cy="6" r="2" fill="white" />

                                            <circle cx="7" cy="6" r="1" fill="#B8B8D2" />
                                        </svg>
                                        :
                                        <svg onClick={() => setIsShow3(!isShow3)} className='input-secondary-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9Z" fill="#B8B8D2" />
                                            <path d="M10.1937 12.0798L9.3337 11.1865L9.28704 11.1398L8.44037 10.2931C8.30601 10.3167 8.17007 10.33 8.0337 10.3331C7.72449 10.3375 7.41749 10.2805 7.13054 10.1652C6.84359 10.0499 6.58241 9.87872 6.3622 9.66161C6.14198 9.4445 5.96713 9.18578 5.84779 8.90049C5.72845 8.61521 5.66701 8.30904 5.66704 7.9998C5.67013 7.86343 5.6835 7.72749 5.70704 7.59313L4.3737 6.2598L3.3337 5.24646C2.58125 5.95545 1.93664 6.77075 1.42037 7.66646C1.36186 7.76781 1.33105 7.88277 1.33105 7.9998C1.33105 8.11682 1.36186 8.23179 1.42037 8.33313C1.84037 9.0598 4.08704 12.6665 8.01371 12.6665H8.18037C8.91874 12.6446 9.64755 12.4934 10.3337 12.2198L10.1937 12.0798ZM5.72704 3.8398L7.59371 5.70647C7.72806 5.68293 7.864 5.66956 8.00037 5.66646C8.61921 5.66646 9.2127 5.9123 9.65029 6.34988C10.0879 6.78747 10.3337 7.38096 10.3337 7.9998C10.3306 8.13617 10.3172 8.27211 10.2937 8.40647L12.0804 10.1931L12.6404 10.7531C13.4023 10.046 14.0559 9.23061 14.5804 8.33313C14.6389 8.23179 14.6697 8.11682 14.6697 7.9998C14.6697 7.88277 14.6389 7.76781 14.5804 7.66646C14.1537 6.92646 11.807 3.21313 7.82037 3.33313C7.08201 3.35503 6.3532 3.50621 5.66704 3.7798L5.72704 3.8398ZM13.807 12.8598L12.9404 11.9998L11.607 10.6665L5.26037 4.31313L4.28037 3.33313L3.14037 2.19313C3.07821 2.13097 3.00442 2.08167 2.9232 2.04802C2.84199 2.01438 2.75494 1.99707 2.66704 1.99707C2.57913 1.99707 2.49209 2.01438 2.41087 2.04802C2.32966 2.08167 2.25586 2.13097 2.1937 2.19313C2.06817 2.31867 1.99764 2.48893 1.99764 2.66646C1.99764 2.844 2.06817 3.01426 2.1937 3.1398L3.68704 4.66646L4.8537 5.7998L9.72704 10.6665L9.7737 10.7131L10.667 11.6065L11.0604 11.9998L12.8604 13.8065C12.9223 13.8689 12.9961 13.9185 13.0773 13.9524C13.1586 13.9862 13.2457 14.0037 13.3337 14.0037C13.4217 14.0037 13.5089 13.9862 13.5901 13.9524C13.6713 13.9185 13.7451 13.8689 13.807 13.8065C13.8695 13.7445 13.9191 13.6708 13.953 13.5895C13.9868 13.5083 14.0042 13.4211 14.0042 13.3331C14.0042 13.2451 13.9868 13.158 13.953 13.0767C13.9191 12.9955 13.8695 12.9218 13.807 12.8598Z" fill="#B8B8D2" />
                                        </svg>

                                }
                            </div>
                            <div className="app-form-group">
                                <Submit />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='lastext'>
                    <h3>Security Notice: </h3>
                    <p>Please do not disclose your password to any third party. Our team and authorized agents will never request your password under any circumstances. We shall not be held liable for any loss, damage, or unauthorized access resulting from the disclosure of your password. Thank you for your cooperation.</p>
                </div>
            </div>

        </>
    )
}

export default ChangePassword;