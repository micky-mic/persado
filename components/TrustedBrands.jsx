import Image from "next/image";

import logo2 from "@/public/new2/logos/logo2.png";
import logo1 from "@/public/new2/logos/logo1.png";
import logo3 from "@/public/new2/logos/logo3.png";
import logo4 from "@/public/new2/logos/logo4.png";
import logo5 from "@/public/new2/logos/logo5.png";
import logo6 from "@/public/new2/logos/logo6.png";
import logo7 from "@/public/new2/logos/logo7.png";

const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
];

export default function TrustedBrands() {
    return (
        <section className="trustedBrands">

            <div className="track">

                {[...logos, ...logos].map((logo, index) => (

                    <div
                        className="logo"
                        key={index}
                    >
                        <Image
                            src={logo}
                            alt="Brand Logo"
                        />
                    </div>

                ))}

            </div>

        </section>
    );
}