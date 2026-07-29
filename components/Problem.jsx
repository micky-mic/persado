"use client";

const problems = [
    {
        title: "Record regulatory enforcement activity",
        description:
            "Fines and consent orders are accelerating across financial services, insurance, and telecom.",
        icon: "chart",
    },
    {
        title: "Content production costs keep climbing",
        description:
            "More channels, tighter rules, and shrinking teams are compounding the cost of every asset.",
        icon: "wallet",
    },
    {
        title: "Generic AI is creating new compliance risk",
        description:
            "Unspecialized tools generate plausible copy that fails legal review — adding cycles, not saving them.",
        icon: "shield",
    },
];

export default function Problem() {
    return (
        <section className="problem">

            <div className="container">

                <div className="heading">

                    <span>THE PROBLEM</span>

                    <h2>
                        Regulated Marketing Is Trapped
                    </h2>

                    <p>
                        Every team faces the same impossible choice — and the
                        market is making it worse.
                    </p>

                </div>

                <div className="cards">

                    {problems.map((item, index) => (

                        <div
                            key={index}
                            className="card"
                        >

                            <span className="corner topLeft" />
                            <span className="corner topRight" />
                            <span className="corner bottomLeft" />
                            <span className="corner bottomRight" />

                            <div className="icon">

                                {item.icon === "chart" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16 16L19 8L22 16C21.13 16.65 20.08 17 19 17C17.92 17 16.87 16.65 16 16Z" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 16L5 8L8 16C7.13 16.65 6.08 17 5 17C3.92 17 2.87 16.65 2 16Z" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7 21H17" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 3V21" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3 7H5C7 7 10 6 12 5C14 6 17 7 19 7H21" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                )}

                                {item.icon === "wallet" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6Z" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M12 12H12.01" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 12H17.01" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7 12H7.01" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                )}

                                {item.icon === "shield" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 9H9V15H15V9Z" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 2V4" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15 20V22" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 15H4" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2 9H4" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 15H22" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 9H22" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 2V4" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9 20V22" stroke="#8B6914" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                )}

                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}