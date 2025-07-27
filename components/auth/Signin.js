"use client";

import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { authenticate } from '@/app/actions/user/action';
import { useFormStatus } from "react-dom";
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <>Please wait<i className="fa fa-circle-notch rotating-spinner"></i></> : "Sign In"}</button>
        </>
    )
}

const Signin = () => {

    const { push } = useRouter();
    const [isShow, setIsShow] = useState(false);

    const [defaultVal, setDefaultVal] = useState({
        username: "",
        password: ""
    });

    const [isAgree, setIsAgree] = useState(true);

    const saveLoginData = (data) => {

        const { username, password } = Object.fromEntries(data);

        const loginData = {
            username: username,
            password: password
        };

        localStorage.setItem("xjdeiuqx_history", JSON.stringify(loginData));
    };

    const handleForm = async (formData) => {
        try {
            const response = await authenticate(formData);

            if (response === undefined) {
                toast.success("Successfully logged In");
                push('/dashboard');
                saveLoginData(formData);
                return;
            } else {
                if (response.status === 501) {
                    toast.error(response.message);
                } else {
                    toast.error(response.message);
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fromHistory = localStorage.getItem("xjdeiuqx_history");

        if (fromHistory) {
            const parsedData = JSON.parse(fromHistory);
            setDefaultVal({
                username: parsedData?.username || "",
                password: parsedData?.password || ""
            });
        }

    }, []);

    return (
        <div className="app-global-form white-background">
            <div className='welcome-msg'>
                <h1 className='playfair-font'>Welcome Back</h1>
            </div>
            <form action={handleForm}>
                <div className="app-form-group app-form-group-include-conf">
                    <input
                        type="text"
                        placeholder="Username / Phone Number"
                        name="username"
                        defaultValue={defaultVal?.username}
                        required
                    />
                </div>
                <div className="app-form-group app-form-group-include-conf">
                    <input
                        type={isShow ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        defaultValue={defaultVal?.password}
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
                                    fill="#202020"
                                    d="M9 11.452c-4.875 0-8.679-5.023-8.834-5.235a.81.81 0 0 1 0-.982C.32 5.022 4.133 0 9 0s8.679 5.022 8.834 5.235a.81.81 0 0 1 0 .982c-.155.212-3.967 5.235-8.834 5.235M1.875 5.726C2.898 6.904 5.753 9.816 9 9.816s6.094-2.912 7.125-4.09C15.102 4.548 12.247 1.636 9 1.636S2.898 4.54 1.875 5.726"
                                ></path>
                                <path
                                    fill="#202020"
                                    d="M9 8.589a2.866 2.866 0 0 1-2.863-2.863A2.866 2.866 0 0 1 9 2.863a2.866 2.866 0 0 1 2.863 2.863A2.866 2.866 0 0 1 9 8.589m0-4.09c-.679 0-1.227.548-1.227 1.227S8.321 6.953 9 6.953s1.227-.548 1.227-1.227S9.679 4.499 9 4.499"
                                ></path>
                            </svg>
                            :
                            <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="17"
                                fill="#202020"
                                viewBox="0 0 18 17"
                            >
                                <path
                                    fill="#202020"
                                    d="M9 13.908c-4.875 0-8.679-5.022-8.834-5.235a.81.81 0 0 1 0-.982c.04-.049.99-1.317 2.527-2.593a.825.825 0 0 1 1.154.107.826.826 0 0 1-.107 1.153 16 16 0 0 0-1.857 1.824c1.023 1.178 3.878 4.09 7.125 4.09a6.4 6.4 0 0 0 1.44-.18.817.817 0 0 1 .393 1.587 7.5 7.5 0 0 1-1.833.229zm5.783-2.454a.81.81 0 0 1-.63-.295.825.825 0 0 1 .107-1.153 16 16 0 0 0 1.857-1.824c-1.023-1.178-3.878-4.09-7.125-4.09-.466 0-.94.057-1.423.18a.817.817 0 0 1-.393-1.587A7.4 7.4 0 0 1 9 2.456c4.875 0 8.679 5.023 8.834 5.235a.81.81 0 0 1 0 .982c-.04.049-.99 1.317-2.527 2.593a.84.84 0 0 1-.524.188"
                                ></path>
                                <path
                                    fill="#202020"
                                    d="M9 11.045a2.866 2.866 0 0 1-2.863-2.863c0-.72.27-1.407.753-1.93a.81.81 0 0 1 1.153-.05c.335.303.36.827.049 1.154A1.225 1.225 0 0 0 9 9.409a1.2 1.2 0 0 0 .859-.352.815.815 0 1 1 1.145 1.162A2.84 2.84 0 0 1 9 11.037z"
                                ></path>
                                <path
                                    fill="#202020"
                                    d="M16.362 16.362a.84.84 0 0 1-.58-.237L1.056 1.393A.815.815 0 1 1 2.211.239l14.724 14.724a.815.815 0 0 1-.581 1.39z"
                                ></path>
                            </svg>

                    }
                </div>
                <div className="forgetPassword">
                    <Link href="/forgotPassowrd"><p>RESET MY PASSWORD?</p></Link>
                </div>
                <div className="app-form-group mt2">
                    <Submit />
                    <div className="create-account">
                        <Link href="/signup"><p className='btn global-white-btn'>Create Account</p></Link>
                    </div>
                </div>
                <div className="form-copyright">
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            defaultChecked
                            onChange={() => setIsAgree(!isAgree)}
                        />
                        <p>By clicking Login or Sign Up button, I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span>. </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signin