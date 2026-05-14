
import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";
import Image from "next/image";
import authbg1 from "@/public/new/authbg1.png";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const SignUp = dynamic(() => import("@/components/auth/SignUp"), {
    loading: () => <GlobalProgress />
});

const page = () => {
    return (
        <>
            <section className="auth-section page_animation overflowHide">
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
                        <SignUp />
                    </div>
                </div>
            </section>
        </>
    )
}

export default page