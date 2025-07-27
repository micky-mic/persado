"use client";

import { useFormStatus } from "react-dom";
import { createWallet } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import linkWalletImage from "@/public/related_assets/vector/link_wallet.svg"
import bg_texture from "@/public/related_assets/vector/bg_texture.svg";
import QRScanner from "../scanner/QRScanner";

function Submit({ user }) {
    const { pending } = useFormStatus();
    return (
        <>
            {
                user?.network_type !== null
                    ?
                    <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <> Please wait<i className="fa fa-circle-notch rotating-spinner"></i></> : "Update Details"}</button>
                    :
                    <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <> Please wait<i className="fa fa-circle-notch rotating-spinner"></i></> : "LINK WALLET"}</button>
            }
        </>
    )
}

const LinkWallet = ({ user }) => {

    const { push, refresh } = useRouter();

    const [selectedCurrencyOption, setSelectedCurrencyOption] = useState("USDT");
    const [selectedNetworkOption, setSelectedNetworkOption] = useState("TRC 20");
    const [walletAddress, setWalletAddress] = useState("");

    const [scanner, setScanner] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedCurrencyOption(e.target.value);
    };

    const handleNetworkOptionChange = (e) => {
        setSelectedNetworkOption(e.target.value);
    };

    const handleForm = async (formData) => {
        try {

            formData.append("id", user?._id);
            formData.append("currency", selectedCurrencyOption);
            formData.append("network_type", selectedNetworkOption);

            const response = await createWallet(formData);

            if (response.status === 201) {
                toast.success(response.message);
                push('/dashboard/withdrawal');
                refresh();
                return;
            } else {
                return toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setSelectedCurrencyOption(user?.currency ?? "USDT");
        setSelectedNetworkOption(user?.network_type ?? "TRC 20");
        setWalletAddress(user?.wallet_address ?? "");
    }, [])

    return (
        <>
            {
                scanner
                    ?
                    <QRScanner
                        setScanner={setScanner}
                        setWalletUserAddress={setWalletAddress}
                    />
                    :
                    <></>
            }
            <div className="top-deco-image">
                <Image
                    src={bg_texture}
                    height={100}
                    width={100}
                    alt="deco"
                />
            </div>
            <Breadcrumb
                authUser={user}
                title="Link Wallet"
                link="/dashboard/withdrawal"
                isColor="#001B38"
            />
            <div className="linkwallet-section page_animation">
                <div className="linkwallet-image-wrapper">
                    <Image
                        src={linkWalletImage}
                        height={100}
                        width={100}
                        alt="deco"
                    />
                </div>
                <div className="app-global-form">
                    <form action={handleForm}>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="wallet_name"
                                defaultValue={user?.wallet_name ?? ""}
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                className="wallet_input"
                            />
                            <svg
                                className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="none"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    fill="#AE9570"
                                    d="M9 9a3.272 3.272 0 1 1 0-6.545 3.27 3.27 0 0 1 3.273 3.272A3.27 3.27 0 0 1 9 9m0-4.909c-.9 0-1.636.736-1.636 1.636S8.1 7.364 9 7.364s1.636-.737 1.636-1.637S9.9 4.091 9 4.091"
                                ></path>
                                <path
                                    fill="#AE9570"
                                    d="M13.91 14.727a.82.82 0 0 1-.82-.818A4.09 4.09 0 0 0 9 9.82a4.09 4.09 0 0 0-4.09 4.09.82.82 0 0 1-.82.818.82.82 0 0 1-.817-.818A5.734 5.734 0 0 1 9 8.182a5.734 5.734 0 0 1 5.727 5.727.82.82 0 0 1-.818.818M17.182 4.91a.82.82 0 0 1-.819-.82V1.637H13.91a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.818h3.273A.82.82 0 0 1 18 .818v3.273a.82.82 0 0 1-.818.818M.818 4.91A.82.82 0 0 1 0 4.09V.819A.82.82 0 0 1 .818 0h3.273a.82.82 0 0 1 .818.818.82.82 0 0 1-.818.818H1.636v2.455a.82.82 0 0 1-.818.818M17.182 18h-3.273a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.818h2.454v-2.455a.82.82 0 0 1 .819-.818.82.82 0 0 1 .818.818v3.273a.82.82 0 0 1-.818.818M4.09 18H.819A.82.82 0 0 1 0 17.182v-3.273a.82.82 0 0 1 .818-.818.82.82 0 0 1 .818.818v2.455h2.455a.82.82 0 0 1 .818.818.82.82 0 0 1-.818.818"
                                ></path>
                            </svg>
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                name="wallet_phone"
                                defaultValue={user?.wallet_phone ?? ""}
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                className="wallet_input"
                            />
                            <svg
                                className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="18"
                                fill="none"
                                viewBox="0 0 15 18"
                            >
                                <path
                                    fill="#AE9570"
                                    d="M13.09 18H1.637C.736 18 0 17.264 0 16.364v-4.91a.82.82 0 0 1 .818-.818H13.91a.82.82 0 0 1 .818.819v4.909c0 .9-.736 1.636-1.636 1.636M1.637 12.273v4.09h11.455v-4.09z"
                                ></path>
                                <path
                                    fill="#AE9570"
                                    d="M14.727 11.455h-1.636V1.635H1.636v9.819H0V1.635C0 .736.736 0 1.636 0h11.455c.9 0 1.636.736 1.636 1.636zM8.182 15.136H6.545a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.818h1.637a.82.82 0 0 1 .818.818.82.82 0 0 1-.818.818"
                                ></path>
                            </svg>
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type="text"
                                placeholder="Enter wallet address"
                                name="wallet_address"
                                value={walletAddress}
                                onChange={(e) => setWalletAddress(e.target.value)}
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                className="wallet_input"
                            />
                            <svg
                                className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="16"
                                fill="none"
                                viewBox="0 0 18 16"
                            >
                                <path
                                    fill="#AE9570"
                                    fillRule="evenodd"
                                    d="M17.976 14.857c-.012.543-.338.925-.808 1.012-.185.084-.39.131-.608.131H1.44C.645 16 0 15.373 0 14.598V4.787c0-.774.645-1.402 1.44-1.402h1.189c.152 0 .276-.12.276-.267V1.061C2.905.31 3.5-.14 4.247.041l12.287 2.977c.517.126.977.52 1.231 1.001.149.22.235.484.235.768v9.811q0 .133-.024.259M4.574 3.385a.27.27 0 0 1-.277-.267V1.79c0-.174.17-.3.344-.259l7.105 1.723c.08.019.065.131-.017.131zm11.64 1.402a.34.34 0 0 1 .346.333v2.547h-2.368c-.707 0-1.288.262-1.685.692a2.17 2.17 0 0 0-.565 1.474c0 .517.178 1.056.565 1.474.397.431.978.693 1.685.693h2.368v2.265a.34.34 0 0 1-.346.333H1.786a.34.34 0 0 1-.346-.333V5.12a.34.34 0 0 1 .346-.333zm.346 5.88V9h-2.368c-.331 0-.529.113-.65.245a.87.87 0 0 0-.215.588c0 .233.081.444.214.589.122.132.32.245.651.245z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <div className="wallet-scanner" onClick={() => setScanner(true)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                >
                                    <image
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAmwSURBVHic7diBkeM2EABBrkv5p7zOwS5p/zndCWBJAqc5zPM8+/BauzvXMwB/p5nx+/Bi/1wPAAD8ngAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAATN8zx7sfDuzsW6APAnmZmT32E3AAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEGf6wEuzMxez8D77O5crHu1n2vPy7td7edLbgAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCPtcDlOzuXM9QMDNbWte++g3v+TeuzlGRGwAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAICgz+7O9RB818zsxbq1vXX1vL7vu/m+73f1rt0AAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABH2uB+D7dneuZwD+G+eXb3EDAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAEPS5HqBkZvZ6Bt5nd+d6hgLnl7dxAwAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABA0u3s9A/A/zMzJId7duVi3xvflW9wAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABH2uB7gwM3s9A++zu3M9wy85R79xta9q37d2fp/HDQAAJAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAEDQ7O71DHzZzJx85N2di3WveM98g33Ft7gBAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACPpcD1AyM3s9Q8HVe97duVj3iv38brXvWzu/z+MGAACSBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIOhzPcCFmdmLdXd3Lta9el5+w37+javnrfH36nfcAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAR9rgfgvWZmL9bd3blY98rV81593xrniG9xAwAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABD0uR7gwu7OxbozsxfrXrl6z1euvu/Ve3aOfqN2jvgdNwAAEPSp/dcCAH+Sq99hNwAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABA0Od6gAszsxfr7u5crHv1vFfr1tT28xX7mbdxAwAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABA0z/PsxcK7OxfrAsCfZGZOfofdAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAEDTP8+z1EHzP7s71DMDfaWb8PryYGwAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAICgfwHvrrwN070cZgAAAABJRU5ErkJggg=="
                                        id="qr-code"
                                        width="512"
                                        height="512"
                                    ></image>
                                </svg>
                            </div>
                        </div>
                        <div className="app-form-group app-form-group-radio">
                            <label>Currency</label>
                            <div className="app-form-group-radio-parent">
                                <div className="app-form-group-radio-childs">
                                    <p>USDT</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="USDT"
                                        checked={selectedCurrencyOption === "USDT"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>USDC</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="USDC"
                                        checked={selectedCurrencyOption === "USDC"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>ETH</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="ETH"
                                        checked={selectedCurrencyOption === "ETH"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>BTC</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="BTC"
                                        checked={selectedCurrencyOption === "BTC"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="app-form-group app-form-group-radio">
                            <label>Network</label>
                            <div className="app-form-group-radio-parent">
                                <div className="app-form-group-radio-childs">
                                    <p>TRC 20</p>
                                    <input
                                        type="radio"
                                        name="network_type"
                                        value="TRC 20"
                                        checked={selectedNetworkOption === "TRC 20"}
                                        onChange={(e) => handleNetworkOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>ERC 20</p>
                                    <input
                                        type="radio"
                                        name="network_type"
                                        value="ERC 20"
                                        checked={selectedNetworkOption === "ERC 20"}
                                        onChange={(e) => handleNetworkOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>BTC</p>
                                    <input
                                        type="radio"
                                        name="network_type"
                                        value="BTC"
                                        checked={selectedNetworkOption === "BTC"}
                                        onChange={(e) => handleNetworkOptionChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            user?.network_type !== null
                                ?
                                <></>
                                :
                                <div className="app-form-group">
                                    <Submit user={user} />
                                </div>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default LinkWallet