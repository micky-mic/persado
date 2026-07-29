"use client";

import { useState } from "react";

const data = [
    {
        tab: "CREATE",
        role: "CMO / Creative Budget Owners",
        title: "Brief to Production-Ready in Days",
        description:
            "Go from brief to deployment-ready assets across every channel — without agencies, revisions, or compliance bottlenecks.",
        color: "red",
        points: [
            "Production-ready across email, direct mail, web, social, and SMS",
            "Outperforms human-written and generic AI content 96% of the time",
            "Built-in compliance validation — 90% fewer rejections",
            "Full audit trail and explainable rationale for every variant",
        ],
    },

    {
        tab: "OPTIMIZE",
        role: "Marketing Ops Leaders",
        title: "Safe Performance Refresh",
        description:
            "Lift performance across your entire portfolio without retriggering compliance cycles.",
        color: "green",
        points: [
            "Deep Market Scan — Upload your asset library and dual-score every piece for performance potential and compliance risk",
            "AI-Powered Refresh — Generate higher-performing alternatives within approved parameters, no re-approval needed",
            "Full audit trail and explainable rationale for every word choice",
        ],
    },

    {
        tab: "AUTOMATE",
        role: "CMO / Creative Budget Owners",
        title: "Real-Time CRM Optimization",
        description:
            "Set up once. AI selects the best-performing compliant variant for each segment at send time — across triggered and scheduled campaigns.",
        color: "blue",
        points: [
            "Real-time variant selection via AI at send time",
            "Compliance during generation, not after — zero incidents",
            "Self-refreshing content with automatic fatigue detection",
            "Integrates with SFMC, Adobe Campaign, AJO, Braze, Cordial",
            "87% reduction in campaign production hours",
        ],
    },
];


export default function OnePlatform() {

    const [active, setActive] = useState(0);

    const item = data[active];


    return (

        <section className="platform">


            <div className="heading">

                <h2>
                    One Platform =
                    <span>Your Entire Content Supply Chain</span>
                </h2>

                <p>
                    Start anywhere — from a blank brief, an underperforming asset,
                    or a high-volume CRM journey. Every output is performance-scored
                    and compliance-validated before it ships.
                </p>

            </div>



            <div className={`panel ${item.color}`}>


                <div className="tabs">

                    {data.map((tab,index)=>(

                        <button
                            key={tab.tab}
                            className={active === index ? "active" : ""}
                            onClick={() => setActive(index)}
                        >
                            {tab.tab}
                        </button>

                    ))}

                </div>



                <div className="content">


                    <div className="meta">

                        <span>
                            {item.tab}
                        </span>

                        <small>
                            {item.role}
                        </small>

                    </div>



                    <h3>
                        {item.title}
                    </h3>



                    <p className="description">
                        {item.description}
                    </p>



                    <ul>

                        {item.points.map((point,index)=>(

                            <li key={index}>
                                {point}
                            </li>

                        ))}

                    </ul>


                </div>


            </div>


        </section>

    );
}