import Image from "next/image"
import Link from "next/link";
import logo from "@/public/new/logo.png";
import welphone from "@/public/new/welphone.png";
import welbg from "@/public/new/welbg.png";

const Welcome = () => {
    return (
        <section className="welcome-page-section page_animation">
            <div
                className="welcome-page-wrapper"
                style={{ 
                    backgroundImage: `url(${welbg.src})`,
                }}
            >
                <div className="welcome-overlay"></div>

                <div className="welcome-inner">
                    <div className="welcome-img">
                        <Image
                            src={welphone}
                            alt="logo"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="welcome-logo">
                        <Image
                            src={logo}
                            alt="logo"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>

                    <div className="welcome-content">
                        <h3>
                            Nexos.ai an all-in-one AI marketing platform built to help businesses work faster and grow easier. Create content, manage campaigns, automate tasks, and keep your marketing operations in one streamlined system.
                        </h3>
                    </div>
                    <Link href="/signin">
                        <button className="primary-btn">Get Started</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Welcome