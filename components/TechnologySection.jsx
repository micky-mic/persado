"use client";

import {
    BookOpen,
    Share2,
    Boxes,
} from "lucide-react";

const technologies = [
    {
        icon: <BookOpen size={30} strokeWidth={2} />,
        title: "Performance Knowledge Base",
        description:
            "100,000+ message elements. A proprietary taxonomy of proven language components categorized by emotional drivers, CTA types, and performance attributes.",
    },
    {
        icon: <Share2 size={30} strokeWidth={2} />,
        title: "Causal Language Intelligence",
        description:
            "1M+ A/B tests mapped into a network of causal relationships between message elements, audience segments, and outcomes. Not correlation — causation.",
    },
    {
        icon: <Boxes size={30} strokeWidth={2} />,
        title: "Multi-Agent Orchestration",
        description:
            "Specialized agents for performance, compliance, and brand — each with domain-specific constraints, regulatory rules, and brand guidelines. Generated content is both creative and compliant.",
    },
];

export default function TechnologySection() {
    return (
        <section className="technology">

            <div className="technology-container">

                <div className="technology-header">

                    <div className="technology-label">

                        <span>[</span>

                        <p>THE TECHNOLOGY</p>

                        <span>]</span>

                    </div>

                    <h2>
                        What's Under the Hood
                    </h2>

                    <p className="technology-description">
                        Purpose-built AI for regulated industries.
                        Not a generic LLM with a compliance checkbox.
                    </p>

                </div>

                <div className="technology-grid">

                    {technologies.map((item, index) => (

                        <div
                            className="technology-item"
                            key={index}
                        >

                            <div className="technology-card">

                                <div className="corner top-left"></div>
                                <div className="corner top-right"></div>
                                <div className="corner bottom-left"></div>
                                <div className="corner bottom-right"></div>

                                <div className="technology-icon">

                                    <div className="icon-circle">

                                        {item.icon}

                                    </div>

                                </div>

                                <div className="technology-content">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                            {index !== technologies.length - 1 && (

                                <div className="technology-connector">

                                    <span></span>

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}