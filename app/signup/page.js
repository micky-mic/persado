
import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const SignUp = dynamic(() => import("@/components/auth/SignUp"), {
    loading: () => <GlobalProgress />
});

const page = () => {
    return (
        <>
            <section className="auth-section page_animation overflowHide" style={{
                background: "linear-gradient(180deg, #174666 0%, #0E2237 100%)",
                minHeight: "100%"
            }}>
                <div className="auth-wrapper">
                    <SignUp />
                </div>
            </section>
        </>
    )
}

export default page