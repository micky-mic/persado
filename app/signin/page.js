import Image from "next/image";
import logo from "@/public/related_assets/logo/white_logo.svg";

import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const Signin = dynamic(() => import("@/components/auth/Signin"), {
    loading: () => <GlobalProgress />
});

const page = () => {
    return (
        <section className="auth-section page_animation">
            <div className="bg-video-wrapper">
                <video className="backgroundVideo" muted autoPlay loop playsInline>
                    <source src="/related_assets/welcome_video.mp4" type="video/mp4" />
                </video>
                <div className="auth-login-logo">
                    <Image
                        src={logo}
                        height={100}
                        width={100}
                        alt="logo"
                        unoptimized
                    />
                </div>
                <div className="auth-wrapper">
                    <Signin />
                </div>
            </div>
        </section>
    )
}

export default page