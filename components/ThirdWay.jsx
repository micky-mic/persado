import {
    FiFileText,
    FiBarChart2,
    FiPenTool,
    FiShield,
} from "react-icons/fi";

const agents = [
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 33.3337V16.667" stroke="#D92B2B" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30 33.3337V6.66699" stroke="#D92B2B" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10 33.333V23.333" stroke="#D92B2B" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>),
        title: "Performance Agent",
        text: "Scores every message variant against 150B+ customer interactions to predict engagement before you go live.",
        color: "red",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M22.5 12.083C23.1904 12.083 23.75 11.5234 23.75 10.833C23.75 10.1427 23.1904 9.58301 22.5 9.58301C21.8096 9.58301 21.25 10.1427 21.25 10.833C21.25 11.5234 21.8096 12.083 22.5 12.083Z" fill="#2563EB" stroke="#2563EB" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M29.1667 18.75C29.8571 18.75 30.4167 18.1904 30.4167 17.5C30.4167 16.8096 29.8571 16.25 29.1667 16.25C28.4764 16.25 27.9167 16.8096 27.9167 17.5C27.9167 18.1904 28.4764 18.75 29.1667 18.75Z" fill="#2563EB" stroke="#2563EB" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.1667 13.75C14.8571 13.75 15.4167 13.1904 15.4167 12.5C15.4167 11.8096 14.8571 11.25 14.1667 11.25C13.4764 11.25 12.9167 11.8096 12.9167 12.5C12.9167 13.1904 13.4764 13.75 14.1667 13.75Z" fill="#2563EB" stroke="#2563EB" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.8333 22.083C11.5236 22.083 12.0833 21.5234 12.0833 20.833C12.0833 20.1427 11.5236 19.583 10.8333 19.583C10.1429 19.583 9.58325 20.1427 9.58325 20.833C9.58325 21.5234 10.1429 22.083 10.8333 22.083Z" fill="#2563EB" stroke="#2563EB" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.9999 3.33301C10.8333 3.33301 3.33325 10.833 3.33325 19.9997C3.33325 29.1663 10.8333 36.6663 19.9999 36.6663C21.5433 36.6663 22.7466 35.423 22.7466 33.853C22.7466 33.1247 22.4466 32.4613 22.0183 31.978C21.5349 31.4963 21.2883 30.8913 21.2883 30.103C21.2819 29.7362 21.3495 29.3719 21.487 29.0317C21.6245 28.6916 21.829 28.3826 22.0884 28.1232C22.3478 27.8638 22.6568 27.6592 22.997 27.5218C23.3371 27.3843 23.7014 27.3167 24.0683 27.323H27.3949C32.4799 27.323 36.6533 23.1513 36.6533 18.0663C36.6083 10.0197 29.1016 3.33301 19.9999 3.33301Z" stroke="#2563EB" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>),
        title: "Brand Agent",
        text: "Enforces tone, terminology, and style guidelines across every variant — so content always sounds like your brand, not a machine.",
        color: "blue",
    },
    {
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20.0001 36.6663C20.0001 36.6663 33.3334 29.9997 33.3334 19.9997V8.33301L20.0001 3.33301L6.66675 8.33301V19.9997C6.66675 29.9997 20.0001 36.6663 20.0001 36.6663Z" stroke="#0A8F8F" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 20.0003L18.3333 23.3337L25 16.667" stroke="#0A8F8F" stroke-width="2.91667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>),
        title: "Compliance Agent",
        text: "Automatically checks content against your regulatory frameworks — UDAAP, TCPA, GDPR, and industry-specific rules — before anything goes live.",
        color: "green",
    },
];

export default function ThirdWay() {
    return (
        <section className="thirdWay">
            <div className="container">
                <div className="heading">
                    <span>
                        <b>[</b>
                        THE THIRD WAY
                        <b>]</b>
                    </span>

                    <h2>
                        Persado <strong>dissolves</strong> the trade-off.
                    </h2>

                    <p>
                        Persado's content intelligence stack scores every variant for
                        performance, validates it against your regulatory framework,
                        and locks in your brand voice — so what reaches the customer
                        is a new asset that's compliant, on-brand, and proven to convert.
                    </p>
                </div>

                <div className="contentCard">
                    <span className="corner tl" />
                    <span className="corner tr" />
                    <span className="corner bl" />
                    <span className="corner br" />

                    <FiFileText />

                    <h3>Your Content</h3>
                </div>

                <div className="agents">
                    {agents.map((item, index) => (
                        <div className={`agent ${item.color}`} key={index}>
                            <span className="corner tl" />
                            <span className="corner tr" />
                            <span className="corner bl" />
                            <span className="corner br" />

                            <div className="icon">{item.icon}</div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}