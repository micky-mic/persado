"use client";

const industryCards = [
    {
        color: "teal",
        metric: "+45%",
        label: "CLICK LIFT",
        title: "Card Acquisition",
        description:
            "Rate-sensitive offers expire before your agency delivers.",
        icon: "/images/industry/card-acquisition.svg",
    },
    {
        color: "red",
        metric: "+36%",
        label: "CONVERSION",
        title: "Co-Brand Programs",
        description:
            "Dual approval cycles double production timelines.",
        icon: "/images/industry/co-brand.svg",
    },
    {
        color: "blue",
        metric: "72hr",
        label: "DEPLOYMENT",
        title: "Mortgage & Lending",
        description:
            "UDAAP, FTC Section 5, TILA, and others on every asset — funded loans, not just clicks.",
        icon: "/images/industry/mortgage.svg",
    },
    {
        color: "teal",
        metric: "96%",
        label: "WIN RATE",
        title: "Consumer Banking",
        description:
            "Product launches compete for the same production queue.",
        icon: "/images/industry/banking.svg",
    },
    {
        color: "red",
        metric: "100%",
        label: "COMPLIANT",
        title: "Insurance & Wealth",
        description:
            "Suitability language that converts without triggering compliance.",
        icon: "/images/industry/insurance.svg",
    },
    {
        color: "blue",
        metric: "4×",
        label: "FASTER",
        title: "Fintech",
        description:
            "Move-fast culture hitting regulatory reality.",
        icon: "/images/industry/fintech.svg",
    },
];

const testimonials = [
    {
        tag: "FINTECH — LENDINGCLUB",
        quote:
            "Persado helps us unlock personalized language and content that's driving incremental activity, which is good for the company and — given the nature of our products — it's also good for the customer.",
        author: "Scott Sanborn",
        role: "CEO, LendingClub",
    },
    {
        tag: "STRATEGY — CAPITAL ONE",
        quote:
            "The biggest drag on marketing performance in banking isn't bad creative — it's the six weeks it takes to get anything to market. Persado compresses that to days, without cutting corners on compliance.",
        author: "Stephen Mugford",
        role: "Former EVP, Strategy & Customer Experience, Capital One",
    },
    {
        tag: "DIGITAL TRANSFORMATION — MCKINSEY",
        quote:
            "I've led digital transformations at some of the world's largest banks. The ones that win aren't just faster at adopting AI — they're faster at turning AI into production-ready customer experiences.",
        author: "Somesh Khanna",
        role: "Former Co-Leader, Global Banking Practice, McKinsey & Company",
    },
    {
        tag: "MORTGAGE — NATIONAL LENDER",
        quote:
            "During the last rate drop, we had compliant campaigns live in 72 hours. Our competitors were still in legal review.",
        author: "CMO",
        role: "Top-10 National Lender",
    },
];

export default function IndustrySolutions() {
    return (
        <section className="industrySolutions">
            <div className="container">

                <div className="heading">

                    <div className="tag">
                        <span>[</span>
                        <p>Industry Solutions</p>
                        <span>]</span>
                    </div>

                    <h2>
                        Built for the Nuances <span>That Matter</span>
                    </h2>

                    <p className="description">
                        Vertical specificity beats generic messaging. Every regulated
                        vertical has distinct pain points, compliance requirements, and
                        performance benchmarks.
                    </p>

                </div>

                <div className="cards">

                    <div className="card teal">

                        <span className="cornerTopLeft"></span>
                        <span className="cornerTopRight"></span>
                        <span className="cornerBottomLeft"></span>
                        <span className="cornerBottomRight"></span>

                        <div className="top">

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M18.3333 4.58398H3.66659C2.65406 4.58398 1.83325 5.4048 1.83325 6.41732V15.584C1.83325 16.5965 2.65406 17.4173 3.66659 17.4173H18.3333C19.3458 17.4173 20.1666 16.5965 20.1666 15.584V6.41732C20.1666 5.4048 19.3458 4.58398 18.3333 4.58398Z" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.83325 9.16602H20.1666" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="metric">
                                <h3>+45%</h3>
                                <small>CLICK LIFT</small>
                            </div>

                        </div>

                        <div className="content">
                            <h4>Card Acquisition</h4>
                            <p>
                                Rate-sensitive offers expire before your agency delivers.
                            </p>
                        </div>

                    </div>

                    <div className="card red">

                        <span className="cornerTopLeft"></span>
                        <span className="cornerTopRight"></span>
                        <span className="cornerBottomLeft"></span>
                        <span className="cornerBottomRight"></span>

                        <div className="top">

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M14.6666 19.25V17.4167C14.6666 16.4442 14.2803 15.5116 13.5926 14.8239C12.905 14.1363 11.9724 13.75 10.9999 13.75H5.49992C4.52746 13.75 3.59483 14.1363 2.90719 14.8239C2.21956 15.5116 1.83325 16.4442 1.83325 17.4167V19.25" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.24992 10.0833C10.275 10.0833 11.9166 8.44171 11.9166 6.41667C11.9166 4.39162 10.275 2.75 8.24992 2.75C6.22487 2.75 4.58325 4.39162 4.58325 6.41667C4.58325 8.44171 6.22487 10.0833 8.24992 10.0833Z" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.1667 19.25V17.4166C20.1661 16.6042 19.8957 15.815 19.398 15.1729C18.9003 14.5308 18.2034 14.0722 17.4167 13.8691" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.6667 2.86914C15.4555 3.07108 16.1545 3.52978 16.6538 4.17293C17.153 4.81607 17.4239 5.60707 17.4239 6.42122C17.4239 7.23538 17.153 8.02638 16.6538 8.66952C16.1545 9.31266 15.4555 9.77136 14.6667 9.97331" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="metric">
                                <h3>+36%</h3>
                                <small>CONVERSION</small>
                            </div>

                        </div>

                        <div className="content">
                            <h4>Co-Brand Programs</h4>
                            <p>
                                Dual approval cycles double production timelines.
                            </p>
                        </div>

                    </div>

                    <div className="card blue">

                        <span className="cornerTopLeft"></span>
                        <span className="cornerTopRight"></span>
                        <span className="cornerBottomLeft"></span>
                        <span className="cornerBottomRight"></span>

                        <div className="top">

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M2.75 8.25065L11 1.83398L19.25 8.25065V18.334C19.25 18.8202 19.0568 19.2865 18.713 19.6303C18.3692 19.9742 17.9029 20.1673 17.4167 20.1673H4.58333C4.0971 20.1673 3.63079 19.9742 3.28697 19.6303C2.94315 19.2865 2.75 18.8202 2.75 18.334V8.25065Z" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.25 20.1667V11H13.75V20.1667" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="metric">
                                <h3>72hr</h3>
                                <small>DEPLOYMENT</small>
                            </div>

                        </div>

                        <div className="content">
                            <h4>Mortgage &amp; Lending</h4>
                            <p>
                                UDAAP, FTC Section 5, TILA, and others on every asset —
                                funded loans, not just clicks.
                            </p>
                        </div>

                    </div>

                    <div className="card teal">

                        <span className="cornerTopLeft"></span>
                        <span className="cornerTopRight"></span>
                        <span className="cornerBottomLeft"></span>
                        <span className="cornerBottomRight"></span>

                        <div className="top">

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M18.3333 2.75H3.66659C2.65406 2.75 1.83325 3.57081 1.83325 4.58333V17.4167C1.83325 18.4292 2.65406 19.25 3.66659 19.25H18.3333C19.3458 19.25 20.1666 18.4292 20.1666 17.4167V4.58333C20.1666 3.57081 19.3458 2.75 18.3333 2.75Z" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.33325 6.41602H14.6666" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.33325 10.084H14.6666" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7.33325 13.75H10.9999" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="metric">
                                <h3>96%</h3>
                                <small>WIN RATE</small>
                            </div>

                        </div>

                        <div className="content">
                            <h4>Consumer Banking</h4>
                            <p>
                                Product launches compete for the same production queue.
                            </p>
                        </div>

                    </div>

                    <div className="card red">

                        <span className="cornerTopLeft"></span>
                        <span className="cornerTopRight"></span>
                        <span className="cornerBottomLeft"></span>
                        <span className="cornerBottomRight"></span>

                        <div className="top">

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M11.0001 20.1673C11.0001 20.1673 18.3334 16.5007 18.3334 11.0007V4.58398L11.0001 1.83398L3.66675 4.58398V11.0007C3.66675 16.5007 11.0001 20.1673 11.0001 20.1673Z" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="metric">
                                <h3>100%</h3>
                                <small>COMPLIANT</small>
                            </div>

                        </div>

                        <div className="content">
                            <h4>Insurance &amp; Wealth</h4>
                            <p>
                                Suitability language that converts without triggering compliance.
                            </p>
                        </div>

                    </div>

                    <div className="card blue">

                        <span className="cornerTopLeft"></span>
                        <span className="cornerTopRight"></span>
                        <span className="cornerBottomLeft"></span>
                        <span className="cornerBottomRight"></span>

                        <div className="top">

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M11.9167 1.83398L2.75 12.834H11L10.0833 20.1673L19.25 9.16732H11L11.9167 1.83398Z" stroke="#888888" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>

                            <div className="metric">
                                <h3>4×</h3>
                                <small>FASTER</small>
                            </div>

                        </div>

                        <div className="content">
                            <h4>Fintech</h4>
                            <p>
                                Move-fast culture hitting regulatory reality.
                            </p>
                        </div>

                    </div>

                </div>

                <div className="quote red">

                    <span className="cornerTopLeft"></span>
                    <span className="cornerTopRight"></span>
                    <span className="cornerBottomLeft"></span>
                    <span className="cornerBottomRight"></span>

                    <div className="quoteTag">
                        <span>[</span>
                        <p>FINTECH — LENDINGCLUB</p>
                        <span>]</span>
                    </div>

                    <p className="quoteText">
                        “Persado helps us unlock personalized language and content that's
                        driving incremental activity, which is good for the company and —
                        given the nature of our products — it's also good for the customer.”
                    </p>

                    <div className="author">
                        <strong>Scott Sanborn</strong>
                        <span>CEO, LendingClub</span>
                    </div>

                </div>

            </div>
        </section>
    );
}