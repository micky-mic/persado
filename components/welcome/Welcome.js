"use client";

import Image from "next/image";

// Placeholder imports
import logo from "@/public/new2/logo.png";
import lines from "@/public/new2/lines.png";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">

            {/* Background Lines */}

            <div className="lines">

                <Image
                    src={lines}
                    alt="Persado"
                    priority
                />

            </div>

            <div className="container">

                <div className="logo">

                    <Image
                        src={logo}
                        alt="Persado"
                        priority
                    />

                </div>

                <div className="content">

                    <div className="left">

                        <h1>

                            The Agentic
                            <br />
                            Creative Agency

                            <span>

                                for Regulated
                                <br />
                                Brands

                            </span>

                        </h1>

                        <p>

                            Faster to Market. Built for Compliance.
                            Proven to Perform. Persado supercharges
                            marketing campaigns in regulated industries
                            with specialized AI, deep industry expertise
                            and systemic learning.

                        </p>

                        <Link href="/signin">
                            <button>

                                Get Started

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_2_885)">
                                        <path d="M8 7.2V4.8L11.2 8L8 11.2V8.8H4.8V7.2H8ZM8 0C12.416 0 16 3.584 16 8C16 12.416 12.416 16 8 16C3.584 16 0 12.416 0 8C0 3.584 3.584 0 8 0ZM8 14.4C11.536 14.4 14.4 11.536 14.4 8C14.4 4.464 11.536 1.6 8 1.6C4.464 1.6 1.6 4.464 1.6 8C1.6 11.536 4.464 14.4 8 14.4Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_885">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    );
}