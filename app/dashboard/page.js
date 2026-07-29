import { auth } from "../auth";
import { fetchAuthenticatedUser, fetchCommission } from "../actions/user/data";
import Image from "next/image";
import logo from "@/public/new2/logo.png"
import Footer from "@/components/footer/Footer";
import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";
import { fetchPop } from "../actions/notice/data";
import StatsSection from "@/components/StatsSection";
import TrustedBrands from "@/components/TrustedBrands";
import Features from "@/components/features";
import Problem from "@/components/Problem";
import ThirdWay from "@/components/ThirdWay";
import OnePlatform from "@/components/OnePlatform";
import PerformancePrediction from "@/components/PerformancePrediction";
import IndustrySolutions from "@/components/IndustrySolutions";
import CaseStudies from "@/components/CaseStudies";


const Properties = dynamic(() => import("@/components/sliders/Properties"), {
    loading: () => <GlobalProgress />,
});

const TeamSlider = dynamic(() => import("@/components/sliders/TeamSlider"), {
    loading: () => <GlobalProgress />,
});

const SecurityCheck = dynamic(() => import("@/components/checkSecurityCode/CheckSecurityCode"), {
    loading: () => <GlobalProgress />,
});

const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"), {
    loading: () => <GlobalProgress />,
});


const page = async () => {

    const { user } = await auth();

    const authenticatedUser = await fetchAuthenticatedUser() || {};
    const { allCommission, userCommission } = await fetchCommission();

    const pop = await fetchPop() || {};

    return (
        <>
            {/* <Alert user={JSON.parse(JSON.stringify(authenticatedUser))}/> */}
            <div className="dashboard-wrapper page_animation">
                <div className="dashboard-page-wrapper" >

                </div>
                <div className="dashboard-top-navbar"
                // style={{
                //     backgroundImage: `url(${welbg.src})`,
                // }}
                >
                    <div className="dashboard-top-navbar-parent">
                        <div className="dashboard-top-navbar-childs dash-logo">
                            <Image
                                src={logo}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                                className="lefticon"
                            />
                        </div>
                        <div className="dashboard-top-navbar-childs">
                            <Sidebar
                                session={JSON.parse(JSON.stringify(authenticatedUser))}
                                authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
                                allCommission={JSON.parse(JSON.stringify(allCommission))}
                                userCommission={JSON.parse(JSON.stringify(userCommission))}
                                pop={JSON.parse(JSON.stringify(pop))}
                            />
                        </div>
                    </div>
                </div>


                <div className="dashboard-wrapper-inner-wrapper">


                    <StatsSection />
                    <TrustedBrands />
                    <Features />
                    <Problem />
                    <ThirdWay />
                    <OnePlatform />
                    <PerformancePrediction />
                    <IndustrySolutions />
                    <CaseStudies />



                    <Footer />

                </div>

                <SecurityCheck
                    user={JSON.parse(JSON.stringify(user))}
                    authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
                />
            </div>
            <SecurityCheck
                user={JSON.parse(JSON.stringify(user))}
                authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
            />
        </>
    )
}

export default page