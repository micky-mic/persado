"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import toast from 'react-hot-toast';
import bgdesign from "@/public/new2/lines.png"
import invite from "@/public/new2/invite.svg"

const Invite = ({ user }) => {

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    return (
        <>
            <section className='invite-page-section' style={{
                backgroundImage: `url(${bgdesign.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
            }}>



                {/* <div className="top-deco-image">
                <Image
                    src={bg_texture}
                    height={100}
                    width={100}
                    alt="deco"
                />
            </div> */}
                <Breadcrumb
                    title="Invite"
                    link="/dashboard"
                    isColor="#000"
                />
                <div className="support-wrapper page_animation">
                    <div className="support-wrapper-image">
                        <Image
                            src={invite}
                            height={100}
                            width={100}
                            alt="deco"
                        />
                    </div>
                    <div className="support-txt">
                        <h1>REFER A FRIEND</h1>
                        <h3 className="playfair-font">Invite friend and
                            get rewards together</h3>
                    </div>
                    <div className="working-hrs">
                        <p>Referral Code</p>
                        <h3 onClick={() => copyToClipboard(user?.invitation_code ?? "")}>
                            <span className="bracket">[ </span>
                            {user?.invitation_code}
                            <span className="bracket"> ]</span>
                        </h3>
                    </div>
                    <button className="btn global-primary-btn mt2" onClick={() => copyToClipboard(user?.invitation_code)}>Refer now</button>
                </div>
            </section>
        </>
    )
}

export default Invite;