"use client";

import { createUser } from "@/app/actions/user/action";
import { toast } from 'react-hot-toast';
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useState } from "react";
import SignUpSuccessModal from "../successModal/SignUpSuccessModal";
import SignUpFailModal from "../successModal/SignUpFailModal";
import Image from "next/image";
import logo from '@/public/new/logo.png'


function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="primary-btn">{pending ? <> Please wait <i className="fa fa-circle-notch rotating-spinner"></i></> : "SIGN UP"}</button>
        </>
    )
}

const SignUp = () => {

    const [isModal, setIsModal] = useState(false);
    const [isFailModal, setIsFailModal] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isShow2, setIsShow2] = useState(false);

    const [isAgree, setIsAgree] = useState(false);

    const handleForm = async (formData) => {

        if (!isAgree) {
            toast.error("Please accept Terms & Conditions");
            return;
        }

        try {

            const response = await createUser(formData);

            if (response?.status === 201) {

                toast.success("Account created successfully");

                setIsModal(true);

            } else {

                toast.error(response?.message || "Something went wrong");

                setIsFailModal(true);
            }

        } catch (error) {

            console.log(error);

            toast.error("Server Error");

            setIsFailModal(true);
        }
    };

    return (
        <>
            {
                isModal
                    ?
                    <SignUpSuccessModal
                        setIsModal={setIsModal}
                    />
                    :
                    <></>
            }
            {
                isFailModal
                    ?
                    <SignUpFailModal
                        setIsModal={setIsFailModal}
                    />
                    :
                    <></>
            }
            <div className="app-global-form white-background">
                <div className='welcome-msg'>
                    <Image
                        src={logo}
                        alt='logo'
                        height={100}
                        width={100}
                        unoptimized
                    />
                    <h1 className=''>Join Us!</h1>
                    <p className=''>Create your own account</p>
                </div>
                <form action={handleForm}>
                    <label>Username</label>
                    <div className="app-form-group app-form-group-include-conf">
                        <input
                            type="text"
                            placeholder="Create a username"
                            name="username"
                            required
                        />
                        <svg className="input-secondary-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                fill="#fff"
                                d="M9 9a3.272 3.272 0 1 1 0-6.545A3.272 3.272 0 1 1 9 9m0-4.909c-.9 0-1.636.736-1.636 1.636S8.1 7.364 9 7.364s1.636-.737 1.636-1.637S9.9 4.091 9 4.091"
                            ></path>
                            <path
                                fill="#fff"
                                d="M13.91 14.727a.82.82 0 0 1-.82-.818A4.09 4.09 0 0 0 9 9.82a4.09 4.09 0 0 0-4.09 4.09.82.82 0 0 1-.82.818.82.82 0 0 1-.817-.818A5.734 5.734 0 0 1 9 8.182a5.734 5.734 0 0 1 5.727 5.727.82.82 0 0 1-.818.818M17.182 4.91a.82.82 0 0 1-.818-.82V1.637h-2.455a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.818h3.273A.82.82 0 0 1 18 .818v3.273a.82.82 0 0 1-.818.818M.818 4.91A.82.82 0 0 1 0 4.09V.819A.82.82 0 0 1 .818 0h3.273a.82.82 0 0 1 .818.818.82.82 0 0 1-.818.818H1.636v2.455a.82.82 0 0 1-.818.818M17.182 18h-3.273a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.818h2.455v-2.455a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.818v3.273a.82.82 0 0 1-.818.818M4.09 18H.819A.82.82 0 0 1 0 17.182v-3.273a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.818v2.455h2.455a.82.82 0 0 1 .818.818.82.82 0 0 1-.818.818"
                            ></path>
                        </svg>
                        <input
                            type="hidden"
                            name="role"
                            value="user"
                        />
                    </div>
                    <label>Phone Number</label>
                    <div className="app-form-group app-form-group-include-conf">
                        <input
                            type="number"
                            placeholder="Phone Number"
                            name="phone_number"
                            required
                        />
                        <svg className="input-secondary-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="18"
                            fill="none"
                            viewBox="0 0 15 18"
                        >
                            <path
                                fill="#fff"
                                d="M13.09 18H1.637C.736 18 0 17.264 0 16.364v-4.91a.82.82 0 0 1 .818-.818H13.91a.82.82 0 0 1 .818.819v4.909c0 .9-.736 1.636-1.636 1.636M1.637 12.273v4.09h11.455v-4.09z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M14.727 11.455h-1.636V1.635H1.636v9.819H0V1.635C0 .736.736 0 1.636 0h11.455c.9 0 1.636.736 1.636 1.636zM8.182 15.136H6.545a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.818h1.637a.82.82 0 0 1 .818.818.82.82 0 0 1-.818.818"
                            ></path>
                        </svg>
                    </div>
                    {/* <div className="app-form-group app-form-group-include-conf">
                        <input
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            required
                        />
                        <svg
                            className="input-secondary-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="18"
                            height="12"
                            fill="#fff"
                        >
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0z"></path>
                        </svg>
                    </div> */}
                    <label>Password</label>
                    <div className="app-form-group app-form-group-include-conf">
                        <input
                            type={isShow ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            required
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
                        <svg className="input-secondary-svg"
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
                                d="M12.273 9a.82.82 0 0 1-.819-.818V4.909a3.272 3.272 0 1 0-6.545 0v3.273A.82.82 0 0 1 4.091 9a.82.82 0 0 1-.818-.818V4.909C3.273 2.201 5.473 0 8.182 0s4.909 2.2 4.909 4.91v3.272a.82.82 0 0 1-.818.818M8.182 14.727a.82.82 0 0 1-.818-.818v-2.455a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.819v2.454a.82.82 0 0 1-.818.818"
                            ></path>
                        </svg>
                    </div>
                    <label>Password</label>
                    <div className="app-form-group app-form-group-include-conf">
                        <input
                            type={isShow2 ? "text" : "password"}
                            placeholder="Password"
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
                            isShow2
                                ?
                                <svg onClick={() => setIsShow2(!isShow2)} className="input-secondary-svg"
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
                                <svg onClick={() => setIsShow2(!isShow2)} className="input-secondary-svg"
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
                        <svg className="input-secondary-svg"
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
                                d="M12.273 9a.82.82 0 0 1-.819-.818V4.909a3.272 3.272 0 1 0-6.545 0v3.273A.82.82 0 0 1 4.091 9a.82.82 0 0 1-.818-.818V4.909C3.273 2.201 5.473 0 8.182 0s4.909 2.2 4.909 4.91v3.272a.82.82 0 0 1-.818.818M8.182 14.727a.82.82 0 0 1-.818-.818v-2.455a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.819v2.454a.82.82 0 0 1-.818.818"
                            ></path>
                        </svg>
                    </div>
                    <label>Referral ID</label>
                    <div className="app-form-group app-form-group-include-conf" style={{ marginBottom: "5rem" }}>
                        <input
                            type="text"
                            placeholder="Referral ID"
                            name="ref_code"
                            required
                        />
                        <svg className="input-secondary-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 18 18"
                        >
                            <path
                                fill="#fff"
                                d="M6.3 7.2H.9a.903.903 0 0 1-.9-.9V.9C0 .405.405 0 .9 0h5.4c.495 0 .9.405.9.9v5.4c0 .495-.405.9-.9.9M1.8 5.4h3.6V1.8H1.8zM6.3 18H.9a.903.903 0 0 1-.9-.9v-5.4c0-.495.405-.9.9-.9h5.4c.495 0 .9.405.9.9v5.4c0 .495-.405.9-.9.9m-4.5-1.8h3.6v-3.6H1.8zM17.1 7.2h-5.4a.903.903 0 0 1-.9-.9V.9c0-.495.405-.9.9-.9h5.4c.495 0 .9.405.9.9v5.4c0 .495-.405.9-.9.9m-4.5-1.8h3.6V1.8h-3.6zM9 7.2a.903.903 0 0 1-.9-.9V.9c0-.495.405-.9.9-.9s.9.405.9.9v5.4c0 .495-.405.9-.9.9M17.1 9.9H.9A.903.903 0 0 1 0 9c0-.495.405-.9.9-.9h16.2c.495 0 .9.405.9.9s-.405.9-.9.9M13.5 18a.903.903 0 0 1-.9-.9v-5.4c0-.495.405-.9.9-.9s.9.405.9.9v5.4c0 .495-.405.9-.9.9M17.1 18a.903.903 0 0 1-.9-.9v-5.4c0-.495.405-.9.9-.9s.9.405.9.9v5.4c0 .495-.405.9-.9.9M9.9 18a.903.903 0 0 1-.9-.9v-5.4c0-.495.405-.9.9-.9s.9.405.9.9v5.4c0 .495-.405.9-.9.9"
                            ></path>
                        </svg>
                    </div>
                    <div className="app-form-group">
                        <Submit />
                    </div>
                    <div className="form-copyright">
                        <div className="checkbox-container">

                            <input
                                type="checkbox"
                                checked={isAgree}
                                onChange={(e) => setIsAgree(e.target.checked)}
                            />

                            <p>
                                By creating an account or by logging into an account,,
                                ypu accept our <Link href="/tc">Terms & Conditions.</Link>
                            </p>

                        </div>
                    </div>
                    <div className="create-account">
                        <p>Already have an account?</p>
                        <Link href="/signin"><p className='primary-btn'>BACK TO SIGN IN</p></Link>
                    </div>
                </form>
            </div>
        </>
    )
}


export default SignUp