"use client";

import { useState } from 'react';
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Link from 'next/link';
import Image from "next/image";
import securityImage from "@/public/related_assets/vector/security.svg";
import bg_texture from "@/public/related_assets/vector/bg_texture.svg";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <>Please wait<i className="fa fa-circle-notch rotating-spinner"></i></> : "CHANGE PASSWORD"}</button>
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
            const response = await resetPin(formData);

            if (response.status === 201) {
                toast.success(response.message);
                push('/dashboard');
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
            <div className="top-deco-image">
                <Image
                    src={bg_texture}
                    height={100}
                    width={100}
                    alt="deco"
                />
            </div>
            <Breadcrumb
                title="Security"
                link="/dashboard"
                isColor="#001B38"
            />
            <div className="linkwallet-section page_animation">
                <div className="linkwallet-image-wrapper">
                    <Image
                        src={securityImage}
                        height={100}
                        width={100}
                        alt="deco"
                    />
                </div>
                <div className="app-global-form">
                    <form action={handleForm}>
                        <div className="security-tab">
                            <Link href="/dashboard/recovery/changePassword">
                                <button>Login Password</button>
                            </Link>
                            <Link href="/dashboard/recovery/changePin">
                                <button className="security-tab-active">Withdrawal Password</button>
                            </Link>
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type={isShow ? "text" : "password"}
                                placeholder="Current Password"
                                name="old_pin"
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                className="wallet_input"
                            />
                            <svg
                                className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="18"
                                fill="none"
                                viewBox="0 0 17 18"
                            >
                                <path
                                    fill="#AE9570"
                                    d="M14.727 18H1.637C.736 18 0 17.264 0 16.364V9c0-.9.736-1.636 1.636-1.636h13.091c.9 0 1.637.736 1.637 1.636v7.364c0 .9-.737 1.636-1.637 1.636M1.637 9v7.364h13.09V9z"
                                ></path>
                                <path
                                    fill="#AE9570"
                                    d="M12.273 9a.82.82 0 0 1-.818-.818V4.909a3.272 3.272 0 1 0-6.546 0v3.273A.82.82 0 0 1 4.091 9a.82.82 0 0 1-.818-.818V4.909C3.273 2.201 5.473 0 8.182 0s4.909 2.2 4.909 4.91v3.272a.82.82 0 0 1-.818.818M8.182 14.727a.82.82 0 0 1-.818-.818v-2.455a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.818v2.455a.82.82 0 0 1-.818.818"
                                ></path>
                            </svg>
                            {
                                isShow
                                    ?
                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="12"
                                        fill="none"
                                        viewBox="0 0 18 12"
                                    >
                                        <path
                                            fill="#AE9570"
                                            d="M9 11.452c-4.875 0-8.679-5.023-8.834-5.235a.81.81 0 0 1 0-.982C.32 5.022 4.133 0 9 0s8.679 5.022 8.834 5.235a.81.81 0 0 1 0 .982c-.155.212-3.967 5.235-8.834 5.235M1.875 5.726C2.898 6.904 5.753 9.816 9 9.816s6.094-2.912 7.125-4.09C15.102 4.548 12.247 1.636 9 1.636S2.898 4.54 1.875 5.726"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M9 8.589a2.866 2.866 0 0 1-2.863-2.863A2.866 2.866 0 0 1 9 2.863a2.866 2.866 0 0 1 2.863 2.863A2.866 2.866 0 0 1 9 8.589m0-4.09c-.679 0-1.227.548-1.227 1.227S8.321 6.953 9 6.953s1.227-.548 1.227-1.227c0-.68-.548-1.227-1.227-1.227"
                                        ></path>
                                    </svg>
                                    :
                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="17"
                                        fill="none"
                                        viewBox="0 0 18 17"
                                    >
                                        <path
                                            fill="#AE9570"
                                            d="M9 13.908c-4.875 0-8.679-5.022-8.834-5.235a.81.81 0 0 1 0-.982c.04-.049.99-1.317 2.527-2.593a.825.825 0 0 1 1.154.107.826.826 0 0 1-.107 1.153 16 16 0 0 0-1.857 1.824c1.023 1.178 3.878 4.09 7.125 4.09a6.4 6.4 0 0 0 1.44-.18.817.817 0 0 1 .393 1.587 7.5 7.5 0 0 1-1.833.229zm5.783-2.454a.81.81 0 0 1-.63-.295.825.825 0 0 1 .107-1.153 16 16 0 0 0 1.857-1.824c-1.023-1.178-3.878-4.09-7.125-4.09-.466 0-.94.057-1.423.18a.817.817 0 0 1-.393-1.587A7.4 7.4 0 0 1 9 2.456c4.875 0 8.679 5.023 8.834 5.235a.81.81 0 0 1 0 .982c-.04.049-.99 1.317-2.527 2.593a.84.84 0 0 1-.524.188"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M9 11.045a2.866 2.866 0 0 1-2.863-2.863c0-.72.27-1.407.753-1.93a.81.81 0 0 1 1.153-.05c.335.303.36.827.049 1.154A1.225 1.225 0 0 0 9 9.409a1.2 1.2 0 0 0 .859-.352.815.815 0 1 1 1.145 1.162A2.84 2.84 0 0 1 9 11.037z"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M16.362 16.362a.84.84 0 0 1-.58-.237L1.056 1.393A.815.815 0 1 1 2.211.239l14.724 14.724a.815.815 0 0 1-.581 1.39z"
                                        ></path>
                                    </svg>
                            }
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type={isShow2 ? "text" : "password"}
                                placeholder="New Password"
                                name="old_pin"
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                className="wallet_input"
                            />
                            <svg
                                className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="18"
                                fill="none"
                                viewBox="0 0 17 18"
                            >
                                <path
                                    fill="#AE9570"
                                    d="M14.727 18H1.637C.736 18 0 17.264 0 16.364V9c0-.9.736-1.636 1.636-1.636h13.091c.9 0 1.637.736 1.637 1.636v7.364c0 .9-.737 1.636-1.637 1.636M1.637 9v7.364h13.09V9z"
                                ></path>
                                <path
                                    fill="#AE9570"
                                    d="M12.273 9a.82.82 0 0 1-.818-.818V4.909a3.272 3.272 0 1 0-6.546 0v3.273A.82.82 0 0 1 4.091 9a.82.82 0 0 1-.818-.818V4.909C3.273 2.201 5.473 0 8.182 0s4.909 2.2 4.909 4.91v3.272a.82.82 0 0 1-.818.818M8.182 14.727a.82.82 0 0 1-.818-.818v-2.455a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.818v2.455a.82.82 0 0 1-.818.818"
                                ></path>
                            </svg>
                            {
                                isShow2
                                    ?
                                    <svg onClick={() => setIsShow2(!isShow2)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="12"
                                        fill="none"
                                        viewBox="0 0 18 12"
                                    >
                                        <path
                                            fill="#AE9570"
                                            d="M9 11.452c-4.875 0-8.679-5.023-8.834-5.235a.81.81 0 0 1 0-.982C.32 5.022 4.133 0 9 0s8.679 5.022 8.834 5.235a.81.81 0 0 1 0 .982c-.155.212-3.967 5.235-8.834 5.235M1.875 5.726C2.898 6.904 5.753 9.816 9 9.816s6.094-2.912 7.125-4.09C15.102 4.548 12.247 1.636 9 1.636S2.898 4.54 1.875 5.726"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M9 8.589a2.866 2.866 0 0 1-2.863-2.863A2.866 2.866 0 0 1 9 2.863a2.866 2.866 0 0 1 2.863 2.863A2.866 2.866 0 0 1 9 8.589m0-4.09c-.679 0-1.227.548-1.227 1.227S8.321 6.953 9 6.953s1.227-.548 1.227-1.227c0-.68-.548-1.227-1.227-1.227"
                                        ></path>
                                    </svg>
                                    :
                                    <svg onClick={() => setIsShow2(!isShow2)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="17"
                                        fill="none"
                                        viewBox="0 0 18 17"
                                    >
                                        <path
                                            fill="#AE9570"
                                            d="M9 13.908c-4.875 0-8.679-5.022-8.834-5.235a.81.81 0 0 1 0-.982c.04-.049.99-1.317 2.527-2.593a.825.825 0 0 1 1.154.107.826.826 0 0 1-.107 1.153 16 16 0 0 0-1.857 1.824c1.023 1.178 3.878 4.09 7.125 4.09a6.4 6.4 0 0 0 1.44-.18.817.817 0 0 1 .393 1.587 7.5 7.5 0 0 1-1.833.229zm5.783-2.454a.81.81 0 0 1-.63-.295.825.825 0 0 1 .107-1.153 16 16 0 0 0 1.857-1.824c-1.023-1.178-3.878-4.09-7.125-4.09-.466 0-.94.057-1.423.18a.817.817 0 0 1-.393-1.587A7.4 7.4 0 0 1 9 2.456c4.875 0 8.679 5.023 8.834 5.235a.81.81 0 0 1 0 .982c-.04.049-.99 1.317-2.527 2.593a.84.84 0 0 1-.524.188"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M9 11.045a2.866 2.866 0 0 1-2.863-2.863c0-.72.27-1.407.753-1.93a.81.81 0 0 1 1.153-.05c.335.303.36.827.049 1.154A1.225 1.225 0 0 0 9 9.409a1.2 1.2 0 0 0 .859-.352.815.815 0 1 1 1.145 1.162A2.84 2.84 0 0 1 9 11.037z"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M16.362 16.362a.84.84 0 0 1-.58-.237L1.056 1.393A.815.815 0 1 1 2.211.239l14.724 14.724a.815.815 0 0 1-.581 1.39z"
                                        ></path>
                                    </svg>
                            }
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type={isShow3 ? "text" : "password"}
                                placeholder="Confirm Password"
                                name="confirm_pin"
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                className="wallet_input"
                            />
                            <svg
                                className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="18"
                                fill="none"
                                viewBox="0 0 17 18"
                            >
                                <path
                                    fill="#AE9570"
                                    d="M14.727 18H1.637C.736 18 0 17.264 0 16.364V9c0-.9.736-1.636 1.636-1.636h13.091c.9 0 1.637.736 1.637 1.636v7.364c0 .9-.737 1.636-1.637 1.636M1.637 9v7.364h13.09V9z"
                                ></path>
                                <path
                                    fill="#AE9570"
                                    d="M12.273 9a.82.82 0 0 1-.818-.818V4.909a3.272 3.272 0 1 0-6.546 0v3.273A.82.82 0 0 1 4.091 9a.82.82 0 0 1-.818-.818V4.909C3.273 2.201 5.473 0 8.182 0s4.909 2.2 4.909 4.91v3.272a.82.82 0 0 1-.818.818M8.182 14.727a.82.82 0 0 1-.818-.818v-2.455a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.818v2.455a.82.82 0 0 1-.818.818"
                                ></path>
                            </svg>
                            {
                                isShow3
                                    ?
                                    <svg onClick={() => setIsShow3(!isShow3)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="12"
                                        fill="none"
                                        viewBox="0 0 18 12"
                                    >
                                        <path
                                            fill="#AE9570"
                                            d="M9 11.452c-4.875 0-8.679-5.023-8.834-5.235a.81.81 0 0 1 0-.982C.32 5.022 4.133 0 9 0s8.679 5.022 8.834 5.235a.81.81 0 0 1 0 .982c-.155.212-3.967 5.235-8.834 5.235M1.875 5.726C2.898 6.904 5.753 9.816 9 9.816s6.094-2.912 7.125-4.09C15.102 4.548 12.247 1.636 9 1.636S2.898 4.54 1.875 5.726"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M9 8.589a2.866 2.866 0 0 1-2.863-2.863A2.866 2.866 0 0 1 9 2.863a2.866 2.866 0 0 1 2.863 2.863A2.866 2.866 0 0 1 9 8.589m0-4.09c-.679 0-1.227.548-1.227 1.227S8.321 6.953 9 6.953s1.227-.548 1.227-1.227c0-.68-.548-1.227-1.227-1.227"
                                        ></path>
                                    </svg>
                                    :
                                    <svg onClick={() => setIsShow3(!isShow3)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="17"
                                        fill="none"
                                        viewBox="0 0 18 17"
                                    >
                                        <path
                                            fill="#AE9570"
                                            d="M9 13.908c-4.875 0-8.679-5.022-8.834-5.235a.81.81 0 0 1 0-.982c.04-.049.99-1.317 2.527-2.593a.825.825 0 0 1 1.154.107.826.826 0 0 1-.107 1.153 16 16 0 0 0-1.857 1.824c1.023 1.178 3.878 4.09 7.125 4.09a6.4 6.4 0 0 0 1.44-.18.817.817 0 0 1 .393 1.587 7.5 7.5 0 0 1-1.833.229zm5.783-2.454a.81.81 0 0 1-.63-.295.825.825 0 0 1 .107-1.153 16 16 0 0 0 1.857-1.824c-1.023-1.178-3.878-4.09-7.125-4.09-.466 0-.94.057-1.423.18a.817.817 0 0 1-.393-1.587A7.4 7.4 0 0 1 9 2.456c4.875 0 8.679 5.023 8.834 5.235a.81.81 0 0 1 0 .982c-.04.049-.99 1.317-2.527 2.593a.84.84 0 0 1-.524.188"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M9 11.045a2.866 2.866 0 0 1-2.863-2.863c0-.72.27-1.407.753-1.93a.81.81 0 0 1 1.153-.05c.335.303.36.827.049 1.154A1.225 1.225 0 0 0 9 9.409a1.2 1.2 0 0 0 .859-.352.815.815 0 1 1 1.145 1.162A2.84 2.84 0 0 1 9 11.037z"
                                        ></path>
                                        <path
                                            fill="#AE9570"
                                            d="M16.362 16.362a.84.84 0 0 1-.58-.237L1.056 1.393A.815.815 0 1 1 2.211.239l14.724 14.724a.815.815 0 0 1-.581 1.39z"
                                        ></path>
                                    </svg>
                            }
                        </div>
                        <div className="app-form-group">
                            <Submit />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;