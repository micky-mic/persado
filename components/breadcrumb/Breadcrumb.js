"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Breadcrumb = ({
    link,
    title,
    bg,
    isColor,
}) => {

    const router = useRouter();

    const backFunc = () => {
        return router.back();
    }

    return (
        <div className="breadcrumb-wrapper" style={{ background: bg !== "" ? bg : "" }}>
            <div className="breadcrumb-wrapper-parent">
                <div className="breadcrumb-wrapper-childs">
                    {
                        link === ""
                            ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="20"
                                fill="none"
                                viewBox="0 0 19 20"
                                onClick={() => backFunc()}
                            >
                                <path
                                    fill={isColor}
                                    d="M18.967 10.942a7.41 7.41 0 0 0-7.468-6.577H1.91l2.053-2.9a.63.63 0 0 0-.158-.89.63.63 0 0 0-.878.151L.108 4.675a.55.55 0 0 0 0 .631l2.824 3.955a.632.632 0 0 0 1.03-.72L1.91 5.63h9.59a6.147 6.147 0 0 1 6.204 5.59 6.01 6.01 0 0 1-5.989 6.413H.645a.632.632 0 0 0 0 1.264h11.056a7.27 7.27 0 0 0 7.266-7.954"
                                ></path>
                                <path
                                    fill={isColor}
                                    d="M2.92 9.533.096 5.578a.57.57 0 0 1 0-.632L2.92.98a.632.632 0 0 1 1.054.035.63.63 0 0 1-.024.704L1.423 5.256 3.95 8.794a.632.632 0 0 1-.37.987.63.63 0 0 1-.66-.248"
                                ></path>
                                <path
                                    fill={isColor}
                                    d="M11.487 4.624H.645a.632.632 0 1 0 0 1.264h10.842a6.147 6.147 0 0 1 6.216 5.59 6.01 6.01 0 0 1-6.002 6.413H.645a.632.632 0 0 0 0 1.264h11.056a7.27 7.27 0 0 0 7.266-7.967 7.404 7.404 0 0 0-7.48-6.564"
                                ></path>
                            </svg>
                            :
                            <Link href={link}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 19 20"
                                >
                                    <path
                                        fill={isColor}
                                        d="M18.967 10.942a7.41 7.41 0 0 0-7.468-6.577H1.91l2.053-2.9a.63.63 0 0 0-.158-.89.63.63 0 0 0-.878.151L.108 4.675a.55.55 0 0 0 0 .631l2.824 3.955a.632.632 0 0 0 1.03-.72L1.91 5.63h9.59a6.147 6.147 0 0 1 6.204 5.59 6.01 6.01 0 0 1-5.989 6.413H.645a.632.632 0 0 0 0 1.264h11.056a7.27 7.27 0 0 0 7.266-7.954"
                                    ></path>
                                    <path
                                        fill={isColor}
                                        d="M2.92 9.533.096 5.578a.57.57 0 0 1 0-.632L2.92.98a.632.632 0 0 1 1.054.035.63.63 0 0 1-.024.704L1.423 5.256 3.95 8.794a.632.632 0 0 1-.37.987.63.63 0 0 1-.66-.248"
                                    ></path>
                                    <path
                                        fill={isColor}
                                        d="M11.487 4.624H.645a.632.632 0 1 0 0 1.264h10.842a6.147 6.147 0 0 1 6.216 5.59 6.01 6.01 0 0 1-6.002 6.413H.645a.632.632 0 0 0 0 1.264h11.056a7.27 7.27 0 0 0 7.266-7.967 7.404 7.404 0 0 0-7.48-6.564"
                                    ></path>
                                </svg>
                            </Link>
                    }
                </div>
                <div className="breadcrumb-wrapper-childs">
                    <h3 style={{ color: isColor }}>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb;