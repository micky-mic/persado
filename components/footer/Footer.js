import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/new2/logo1.png";

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">

                <div className="related-logo">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={180}
                        priority
                    />
                </div>

                <p className="footer-tagline">
                    The regulated-ready creative system
                </p>

                <div className="footer-links">
                    <Link href="/dashboard/content/about">
                        About Us
                    </Link>

                    <Link href="/dashboard/content/faq">
                        Frequently Asked Question(s)
                    </Link>

                    <Link href="/dashboard/content/tc">
                        Terms & Conditions
                    </Link>
                </div>

                <div className="footer-bottom">
                    © 2026 Persado Inc. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;