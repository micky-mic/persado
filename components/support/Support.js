"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import bgdesign from "@/public/new2/lines.png"
import support from "@/public/new2/support.svg"

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
                            isColor="#000"
                        />
                        :
                        <Breadcrumb
                            authUser={authUser}
                            title="Support"
                            link="/dashboard"
                            authenticatedUser={authenticatedUser}
                            allCommission={allCommission}
                            userCommission={userCommission}
                            isColor="#000"
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
                        <h3 className="playfair-font">No need to worry! Let
                            us help you out now</h3>
                    </div>
                    <div className="working-hrs">
                        <p>Service Hour</p>
                        <h3> <span className="bracket">[ </span>
                            09:00 AM - 23:00 PM
                            <span className="bracket"> ]</span></h3>

                    </div>
                    <button className="btn global-primary-btn mt2" onClick={() => handleAddFundsClick()}>Contact Us</button>
                </div>
            </section>
        </>
    )
}

export default Support