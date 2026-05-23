"use client";

import { useState } from "react";

export default function OptimizeCard({ onComplete }) {
    const [startOptimize, setStartOptimize] = useState(false);
    const [completed, setCompleted] = useState(false);

    const steps = [
        {
            title: "Input Matrix Analysis",
            status: "Verified",
        },
        {
            title: "Commission Logic Mapping",
            status: "Stabilized",
        },
        {
            title: "Neural Sync Interface",
            status: "Established",
        },
        {
            title: "System Integrity Check",
            status: "Confirmed",
        },
    ];

    // Total animation time = 2 seconds
    const totalDuration = 2;
    const stepDuration = totalDuration / steps.length;

    const handleOptimize = () => {
        if (!startOptimize) {
            setStartOptimize(true);

            setTimeout(() => {
                setCompleted(true);

                if (onComplete) {
                    onComplete(true);
                }
            }, totalDuration * 1000);
        }
    };

    return (
        <div className="optimize-card">
            <div className="top-section">
                <div className="title-row">
                    <div className="icon">
                        <video
                            src="/new/optimizevid.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>

                    <p>Optimize Assistant Panel</p>
                </div>

                <div
                    className={`optimize-btn ${
                        completed ? "optimized-btn" : ""
                    } ${startOptimize ? "disabled" : ""}`}
                    onClick={handleOptimize}
                >
                    <p>
                        {completed
                            ? "Verified, Ready to Submit"
                            : startOptimize
                            ? "Optimizing..."
                            : "Start Optimize"}
                    </p>
                </div>
            </div>

            <div className="bottom-section">
                <div className="ai-core">
                    <div className="core-wrapper">
                        <p className="title">
                            {completed
                                ? "AI CORE // SYNCHRONIZED"
                                : startOptimize
                                ? "AI CORE // SYNCHRONIZING"
                                : "AI CORE // INITIALIZING"}
                        </p>

                        <p className="desc">
                            {completed ? (
                                <>
                                    All protocols executed successfully.
                                </>
                            ) : (
                                <>
                                    Establishing secure link…
                                    <br />
                                    Engaging optimization protocols…
                                </>
                            )}
                        </p>
                    </div>
                </div>

                <div className="steps">
                    {steps.map((item, index) => (
                        <div
                            className="step-row"
                            key={index}
                        >
                            <p className="step-title">
                                <span>[{`0${index + 1}`}]</span>

                                <br />

                                {item.title}
                            </p>

                            <div className="progress-container">
                                <div className="progress">
                                    <div
                                        className={`progress-fill ${
                                            startOptimize ? "active" : ""
                                        }`}
                                        style={{
                                            animationDelay: `${
                                                index * stepDuration
                                            }s`,
                                        }}
                                    ></div>
                                </div>

                                <p
                                    className={`status ${
                                        startOptimize ? "show" : ""
                                    }`}
                                    style={{
                                        animationDelay: `${
                                            (index + 1) * stepDuration
                                        }s`,
                                    }}
                                >
                                    {item.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="status-section">
                    <p>
                        Status:
                        <span>
                            {completed
                                ? " Fully Operational"
                                : startOptimize
                                ? " Processing..."
                                : " Waiting"}
                        </span>
                    </p>

                    <p>
                        AI State:
                        <span>
                            {completed
                                ? " Ready for Execution"
                                : startOptimize
                                ? " Active"
                                : " Idle"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}