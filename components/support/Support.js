"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import bg_texture from "@/public/related_assets/vector/bg_texture.svg";
import support from "@/public/related_assets/vector/support.svg";

const Support = ({ authUser, isLink, authenticatedUser, allCommission, userCommission }) => {

    const handleAddFundsClick = () => {
         if (typeof window !== "undefined" && window.Tawk_API?.maximize) {
            window.Tawk_API.maximize();
        } else {
            console.error("Live Chat widget not initialized or method not found.");
        }
    };

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
            {
                isLink
                    ?
                    <Breadcrumb
                        authUser={authUser}
                        title="Support"
                        link=""
                        isLink={isLink}
                        isColor="#001B38"
                    />
                    :
                    <Breadcrumb
                        authUser={authUser}
                        title="Support"
                        link="/dashboard"
                        authenticatedUser={authenticatedUser}
                        allCommission={allCommission}
                        userCommission={userCommission}
                        isColor="#001B38"
                    />
            }
            <div className="support-wrapper page_animation">
                <div className="support-wrapper-image">
                    <Image
                        src={support}
                        height={100}
                        width={100}
                        alt="deco"
                    />
                </div>
                <div className="support-txt">
                    <h3 className="playfair-font">Facing any issue?</h3>
                    <p className="playfair-font">
                        Don’t panic! We got your back.
                        Feel free to reach out to us.
                    </p>
                </div>
                <div className="working-hrs">
                    <p>Working Hour</p>
                    <h3>11:00 - 22:45</h3>
                </div>
                <button className="btn global-primary-btn mt2" onClick={() => handleAddFundsClick()}>Contact Us</button>
            </div>
        </>
    )
}

export default Support