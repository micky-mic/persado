"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import bg_texture from "@/public/related_assets/vector/bg_texture.svg";
import support from "@/public/related_assets/vector/invite.svg";
import toast from 'react-hot-toast';

const Invite = ({ authenticatedUser }) => {

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
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
                title="Invite"
                link="/dashboard"
                isColor="#001B38"
            />
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
                    <h3 className="playfair-font">Refer a friend</h3>
                    <div className="ref-code-wrapper" onClick={() => copyToClipboard(authenticatedUser?.invitation_code ?? "")}>{authenticatedUser?.invitation_code ?? ""}</div>
                    <p>
                        Invite your friends <br />
                        and earn together now
                    </p>
                </div>
                <button className="btn global-primary-btn mt2" onClick={() => copyToClipboard(authenticatedUser?.invitation_code ?? "")}>Copy & Share</button>
            </div>
        </>
    )
}

export default Invite;