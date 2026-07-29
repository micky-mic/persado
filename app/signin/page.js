import Image from "next/image";
import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import lines from "@/public/new2/lines.png";

const Signin = dynamic(() => import("@/components/auth/Signin"), {
    loading: () => <GlobalProgress />
});

const page = () => {
    return (
        <section className="auth-section page_animation">
            <div className="bg-video-wrapper">
                <div className="authbg">
                    <Image
                        src={lines}
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