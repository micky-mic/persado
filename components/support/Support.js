"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import bgdesign from "@/public/new/bgdesign.svg"
import support from "@/public/new/support.svg"

const Support = ({ authUser, isLink, authenticatedUser, allCommission, userCommission }) => {

  const handleAddFundsClick = () => {
        if (window.LC_API && typeof window.LC_API.open_chat_window === 'function') {
            window.LC_API.open_chat_window();
        } else {
            console.error("Live Chat widget not initialized or method not found.");
        }
    };

    return (
        <>
            <section className='support-page-section' style={{
                backgroundImage: `url(${bgdesign.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
            }}>
                {
                    isLink
                        ?
                        <Breadcrumb
                            authUser={authUser}
                            title="Support"
                            link=""
                            isLink={isLink}
                            isColor="#ffffff"
                        />
                        :
                        <Breadcrumb
                            authUser={authUser}
                            title="Support"
                            link="/dashboard"
                            authenticatedUser={authenticatedUser}
                            allCommission={allCommission}
                            userCommission={userCommission}
                            isColor="#ffffff"
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
                        <h1>FACING TROUBLE</h1>
                        <h3 className="playfair-font">No need to worry! we’re here to help you through this</h3>
                    </div>
                    <div className="working-hrs">
                        <p>Service Hour</p>
                        <h3>11:00 AM - 11:00 PM</h3>
                    </div>
                    <button className="btn global-primary-btn mt2" onClick={() => handleAddFundsClick()}>Contact Us</button>
                </div>
            </section>
        </>
    )
}

export default Support