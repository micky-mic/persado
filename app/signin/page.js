import Image from "next/image";
import logo from "@/public/related_assets/logo/white_logo.svg";
import authbg1 from "@/public/new/authbg1.png";

import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const Signin = dynamic(() => import("@/components/auth/Signin"), {
    loading: () => <GlobalProgress />
});

const page = () => {
    return (
        <section className="auth-section page_animation">
            <div className="bg-video-wrapper">
                <div className="authbg">
                    <Image
                        src={authbg1}
                        height={100}
                        width={100}
                        alt="logo"
                        unoptimized
                    />
                </div>
                <div className="breadcrumb-contain">
                    <Breadcrumb link="" isColor="#fff" />
                </div>
                <div className="auth-wrapper">
                    <Signin />
                </div>
            </div>
        </section>
    )
}

export default page