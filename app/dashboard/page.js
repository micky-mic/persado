import { auth } from "../auth";
import { fetchAuthenticatedUser, fetchCommission } from "../actions/user/data";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/new/logo.png"
import Footer from "@/components/footer/Footer";
import welbg from "@/public/new/dashboard/dash_back.svg"
import dashimg1 from "@/public/new/dashboard/dashcenterimg1.png"
import dashimg2 from "@/public/new/dashboard/dashcenterimg2.png"
import dashimagecenter from "@/public/new/dashboard/dash_image_center.png"
import men from "@/public/new/dashboard/men.png"
import joinimg1 from "@/public/new/dashboard/joinimg1.png"
import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";
import { fetchPop } from "../actions/notice/data";
import Alert from "@/components/alert/Alert";


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


const sections = [
    {
        title: "Meet Nexos.ai",
        description1:
            "Nexos.ai gives businesses unified access to today’s leading Large Language Models and allows to centralize AI operations with a single secure AI platform — manage AI workloads, enforce policies, and maintain control over organization’s AI ecosystem.",
        description2:
            "With one simple workspace, your team can collaborate with AI, save time on repetitive work, and turn ideas into results faster. Easy, efficient, and built for modern marketing teams.",
        image: dashimg1,
    },
    {
        title: "Powering the next generation of AI in business",
        description1:
            "We believe AI-powered marketing should be simple and accessible for businesses of every size. Our goal is clear — eliminate the friction in content creation, campaign management, and daily marketing operations, so companies can focus on growth, creativity, and performance instead of wasting time on repetitive tasks and disconnected systems.",
        image: dashimg2,
    },
];

const page = async () => {

    const { user } = await auth();

    const authenticatedUser = await fetchAuthenticatedUser() || {};
    const { allCommission, userCommission } = await fetchCommission();

    const pop = await fetchPop() || {};

    return (
        <>
            <Alert user={JSON.parse(JSON.stringify(authenticatedUser))}/>
            <div className="dashboard-wrapper page_animation">
                <div className="dashboard-page-wrapper" >

                </div>
                <div className="dashboard-top-navbar"
                    style={{
                        backgroundImage: `url(${welbg.src})`,
                    }}>
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
                    <div className="dash-heading-parent">
                        <div className="dash-heading-child">
                            <div className="dash-heading-subchild">
                                <h1>All-in-one AI platform for limitless you</h1>
                            </div>
                            <div className="dash-heading-subchild">
                                <p>Keep work moving with AI Agents and no-code automation. Manage everything from one AI platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-wrapper-inner-wrapper">
                    <div className="dashboard-center-wrapper">
                        <Properties />
                        <div className="dash-center-wrapper">
                            {sections.map((item, index) => (
                                <div className="dash-center-parent" key={index}>
                                    <div className="dash-center-child">
                                        <div className="dash-center-title">
                                            <h2>{item.title}</h2>
                                        </div>

                                        <p>{item.description1}</p>
                                        <br />

                                        <p>{item.description2}</p>
                                    </div>

                                    <div className="dash-center-child">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="dash-img-center-parent">
                        <div className="heading-parent">
                            <div className="heading-child">
                                <h1>Marketing in the age of AI</h1>
                                <p>Marketing in the AI era should be simpler, faster, and more accessible for every business. At nexos.ai, we help companies increase exposure, improve performance, and grow revenue through one unified AI marketing platform.</p><br />
                                <p>By reducing manual work and simplifying execution, nexos.ai gives businesses the tools to market smarter, reach more people, and unlock stronger results with greater efficiency.</p>
                            </div>
                        </div>
                        <div className="dash-img-center-child">
                            <Image
                                src={dashimagecenter}
                                alt="img"
                                width={100}
                                height={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="dash-container-wrapper">
                        <div className="dash-container-parent">
                            <h1>Don’t just take our word for it. Take theirs.</h1>
                            <p>Real teams. Real AI challenges. Real results with nexos.ai.</p>
                            <div className="dash-container-child">
                                <h1>Handling a big user load while scaling AI operations is no small task</h1>
                                <p>If we tried building an AI gateway ourselves, it would have taken months and a huge dev budget. With nexos.ai, we had access to the best models in a plug-and-play API — reducing the complexity of scaling,
                                    and complete with performance observability. Setting up teams and adding users was a smooth process, while adjustable security guardrails
                                    ensured data stayed protected at every step. T
                                    heir team was hands-on, and when we hit an edge case,
                                    they were right there, figuring it out with us. Passionate,
                                    reliable, and exactly the kind of partner you want in AI.</p>
                                <div className="container-inner-parent">
                                    <div className="container-inner-child">
                                        <Image
                                            src={men}
                                            alt="img"
                                            width={100}
                                            height={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="container-inner-child">
                                        <p>Dainius Kavoliūnas</p>
                                        <p>Head of product @Hostinger Horizons</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashborad-slider-wrapper">
                        <div className="dashborad-slider-parent">
                            <h1>Meet the team</h1>
                            <div className="dasboard-slider-child">
                                <p>We’re a team of builders, engineers,
                                    and operators solving one of the biggest challenges in AI today — how businesses can actually use it,
                                    safely and at scale.</p>
                                <TeamSlider />
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-join-wrapper">
                        <div className="dashboard-join-parent">
                            <div className="dashboard-join-child">
                                <Image
                                src={joinimg1}
                                alt="img"
                                width={100}
                                height={100}
                                unoptimized
                                />
                                <h2>Join the nexos.ai program</h2>
                                <p>Earn money by promoting nexos.ai – an all-in-one AI platform for teams’ best work, powered by Agents and intelligent automation.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
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