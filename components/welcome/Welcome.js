import Image from "next/image"
import Link from "next/link";
import white_logo from "@/public/related_assets/logo/white_logo.svg";

const Welcome = () => {
    return (
        <section className="welcome-page-section page_animation">
            <div className="bg-video-wrapper">
                <video
                    className="backgroundVideo"
                    muted
                    autoPlay
                    loop
                    playsInline
                >
                    <source
                        src="/related_assets/welcome_video.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="welcome-logo">
                <Image
                    src={white_logo}
                    alt="logo"
                    height={100}
                    width={100}
                    unoptimized
                />
            </div>
            <div className="welcome-content">
                <h3 className="playfair-font">
                    Celebrating the communities who inspire and uplift us every day
                </h3>
            </div>
            <div className="start-btn">
                <Link href="/signin">
                    <button>LET’S GET STARTED</button>
                </Link>
            </div>
        </section>
    )
}

export default Welcome