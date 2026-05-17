import { auth } from "../auth";
import { fetchAuthenticatedUser, fetchCommission } from "../actions/user/data";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/new/logo.png"
import dash_img1 from "@/public/related_assets/Images/dashImg1.jpeg"
import dash_img2 from "@/public/related_assets/Images/dashImg2.jpeg"
import dash_img3 from "@/public/related_assets/Images/dashImg3.jpeg"
import dash_img4 from "@/public/related_assets/Images/dashImg4.jpeg"
import dash_img5 from "@/public/related_assets/Images/dashImg5.jpeg"
import homeIcon from "@/public/related_assets/icons/homeIcon.svg"
import dataOptimization from "@/public/related_assets/icons/dataOptimization.svg"
import dealingRecord from "@/public/related_assets/icons/dealingRecord.svg"
import profileIcon from "@/public/related_assets/icons/profileIcon.svg"
import user_profile from "@/public/related_assets/user_profile.jpg"
import Footer from "@/components/footer/Footer";
import welbg from "@/public/new/dashboard/dash_back.svg"
import dashimg1 from "@/public/new/dashboard/dashcenterimg1.png"
import dashimg2 from "@/public/new/dashboard/dashcenterimg2.png"
import dashimagecenter from "@/public/new/dashboard/dash_image_center.png"
import centerimagedash from "@/public/new/dashboard/centerimagedash.png"



import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";
import LuckyDraw from "@/components/draw/LuckyDraw";
import { fetchPop } from "../actions/notice/data";
import Alert from "@/components/alert/Alert";

const Properties = dynamic(() => import("@/components/sliders/Properties"), {
    loading: () => <GlobalProgress />,
});

const UniqueProperties = dynamic(() => import("@/components/sliders/Uniqueproperties"), {
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
        title: "Marketing in the age of AI",
        description1:
            "Marketing in the AI era should be simpler, faster, and more accessible for every business. At nexos.ai, we help companies increase exposure, improve performance, and grow revenue through one unified AI marketing platform.",
        description2:
            "By reducing manual work and simplifying execution, nexos.ai gives businesses the tools to market smarter, reach more people, and unlock stronger results with greater efficiency.",
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
            {/* <Alert user={JSON.parse(JSON.stringify(authenticatedUser))}/> */}
            <div className="dashboard-wrapper page_animation">
                <div className="dashboard-page-wrapper" >

                </div>
                <div className="dashboard-top-navbar"
                    style={{
                        backgroundImage: `url(${welbg.src})`,
                    }}>
                    <div className="dashboard-top-navbar-parent">
                        <div className="dashboard-top-navbar-childs">
                            <Image
                                src={logo}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
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
                {/* <div className="profile-welcome">
                    <div className="profile-child">
                        <h2 className="playfair-font">Welcome back,</h2>
                        <p>{authenticatedUser?.username ?? ""}</p>
                    </div>
                    <div className="profile-child">
                        <Link href="/dashboard/profile">
                            {
                                authenticatedUser?.url === null
                                    ?
                                    <Image
                                        src={user_profile}
                                        alt="logo"
                                        height={100}
                                        width={100}
                                    />
                                    :
                                    <Image
                                        src={authenticatedUser?.url ?? ""}
                                        alt="logo"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                            }
                        </Link>
                    </div>
                </div> */}
                <div className="dashboard-wrapper-inner-wrapper">
                    {/* <div className="dashboard-quick-actions">
                        <div className="dashboard-quick-actions-parent">
                            <Link href="/dashboard">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={homeIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Home</p>
                            </Link>
                            <Link href="/dashboard/journey">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={dataOptimization}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Lot Boosting</p>
                            </Link>
                            <Link href="/dashboard/history">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={dealingRecord}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Lot History</p>
                            </Link>
                            <Link href="/dashboard/profile">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={profileIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Profile</p>
                            </Link>
                        </div>
                    </div> */}
                    {/* <LuckyDraw user={JSON.parse(JSON.stringify(authenticatedUser))} /> */}
                    {/* <div className="dashboard-img-wrapper">
                        <div className="dash-heading-title">
                            <h1 className="playfair-font">Celebrating the communities <br />
                                who inspire and uplift us every day
                            </h1>
                            <p>We are dedicated to creating memorable experiences, supporting our neighbors and giving back for a better tomorrow.</p>
                            <Image
                                src={dash_img1}
                                alt="related"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div> */}
                    {/* <Membership
                        allCommission={JSON.parse(JSON.stringify(allCommission))}
                        userCommission={JSON.parse(JSON.stringify(userCommission))}
                    /> */}
                    {/* <div className="info-video-wrapper mt2">
                        <video width="100%" height="100%" muted autoPlay loop controls playsInline>
                            <source src="/related_assets/dash_video.mp4" type="video/mp4" />
                        </video>
                    </div> */}
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
                    {/* <UniqueProperties /> */}
                    {/* <div className="dashboard-img-info">
                        <div className="dash-info-title">
                            <h1 className="playfair-font">What’s Happening Around</h1>
                            <Image
                                src={dash_img2}
                                alt="related"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="dashboard-img-info">
                        <div className="dash-info-title">
                            <h1 className="playfair-font">Related Midwest to bring Advocate Trinity Hospital to 8080 DuSable Lake Shore</h1>
                            <p>Related Midwest is proud to welcome a new
                                state-of-the-art Advocate Trinity Hospital to 8080 DuSable Lake Shore on Chicago's Southeast Side.
                                <br /> <br />
                                Advocate’s investment and commitment will add
                                1,000 new employees and catalyze future investment that will bring complementary uses to the 8080 DuSable Lake Shore development, the 7th Ward
                                and the surrounding South Chicago neighborhoods.</p>
                            <Image
                                src={dash_img3}
                                alt="related"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="dashboard-img-info">
                        <div className="dash-info-title">
                            <h1 className="playfair-font">Related Affordable and St. Mary Development Corporation to preserve and restore five Ohio affordable residences</h1>
                            <p>On December 17, Related Affordable announced
                                a partnership with St. Mary Development
                                Corporation to preserve and rehabilitate five affordable communities in Ohio's Montgomery County: Northcrest Gardens (Eagle Ridge), Albright Apartments, Pinewood Gardens, Asbury Apartments and Mad River Manor. The initiative will revitalize 567 apartments for current residents—including seniors, families and individuals—providing much-needed renovations like exterior building repairs, common area improvements and residence upgrades.
                                <br /> <br />
                                Related Affordable takes pride in providing quality homes and services to our residents that enhance their lives and ensure long-term stability in their homes.</p>
                            <div className="border-line"></div>
                            <Image
                                src={dash_img4}
                                alt="related"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="dashboard-img-info">
                        <div className="dash-info-title">
                            <h1 className="playfair-font">Related and NYCFC commemorate Etihad Park stadium groundbreaking at Willets Point</h1>
                            <p>On December 4, Related Companies and development partner New York City Football Club (NYCFC) joined local elected officials
                                and community leaders at Willets Point for the groundbreaking of Etihad Park, New York City's
                                first-ever dedicated soccer stadium. Located at Willets Point, the city's largest all-affordable development
                                in 40 years, the world-class stadium will serve as
                                the new headquarters for NYCFC and will present
                                a premium viewing experience for visitors,
                                generating substantial economic activity and growth for the region.</p>
                            <div className="border-line"></div>
                            <Image
                                src={dash_img5}
                                alt="related"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="dashboard-img-info">
                        <div className="dash-info-title">
                            <h1 className="playfair-font">Related Beal's Nubian Square Affordable & Workforce Housing Project Phase 1 receives approval</h1>
                            <p>Related Beal announced that Phase 1 of Nubian Square Affordable & Workforce Housing Project
                                has received approval. On October 10, the Boston Planning and Redevelopment Authority (BPDA) approved the first 45 income-restricted condominium units located on the site of the Boston Water and Sewer Commission parking lots on Harrison Avenue in Roxbury.
                                <br /> <br />
                                Working in a 50/50 partnership with Dream Development, the project will bring a total of 402 income-restricted condos and apartments over 5 buildings, 20,000 square feet of retail and community space and more than one acre of public green space to the neighborhood. This milestone is a major step towards securing funding from the Massachusetts Office of Housing, which will help realize the project
                                in full.</p>
                        </div>
                    </div> */}

                    <div className="dash-img-center-parent">
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
                    <div className="img-center-dash">
                        <div className="img-center-child-dash">
                            <Image
                                src={centerimagedash}
                                alt="img"
                                width={100}
                                height={100}
                                unoptimized
                            />
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