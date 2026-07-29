"use client";

import { useState } from "react";

export default function OptimizeCard({ onComplete }) {

    const [startOptimize, setStartOptimize] = useState(false);
    const [completed, setCompleted] = useState(false);

    // Which progress video is currently playing
    const [activeStep, setActiveStep] = useState(-1);

    // Completed text under each progress
    const [progressStatus, setProgressStatus] = useState([
        "",
        "",
        "",
        ""
    ]);


    const steps = [
        "Input Matrix Analysis",
        "Commission Logic Mapping",
        "Neural Sync Interface",
        "System Integrity Check",
    ];


    const statusText = [
        "Verified",
        "Stabilized",
        "Established",
        "Confirmed",
    ];



    const handleOptimize = () => {

        if (startOptimize) return;


        setStartOptimize(true);

        // Start first progress video
        setActiveStep(0);

    };



    const handleVideoEnd = (index) => {


        // Add completed status
        setProgressStatus((prev) => {

            const updated = [...prev];

            updated[index] = statusText[index];

            return updated;

        });



        // Start next progress video
        if (index < steps.length - 1) {

            setActiveStep(index + 1);

        } else {

            // All completed
            setCompleted(true);

            if (onComplete) {

                onComplete(true);

            }

        }

    };



    return (

        <div className="optimize-card">


            <div className="top-section">


                <div className="title-row">


                    <div className="icon">

                        <video
                            src="/new2/optimizevid.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                    </div>


                    <h2>
                        Optimize Assistant Panel
                    </h2>


                </div>



                <button
                    className={`primary-btn ${startOptimize ? "disabled" : ""
                        }`}
                    onClick={handleOptimize}
                >

                    {
                        completed
                            ? "Verified, Ready to Submit"
                            : startOptimize
                                ? "Optimizing..."
                                : "Start Optimize"
                    }

                </button>


            </div>





            <div className="content-section2">


                <div className="ai-core">


                    <h3>

                        {
                            completed
                                ? "AI CORE // SYNCHRONIZED"
                                : startOptimize
                                    ? "AI CORE // SYNCHRONIZING"
                                    : "AI CORE // INITIALIZING"
                        }

                    </h3>



                    <p>
                        Establishing secure link…
                        <br />
                        Engaging optimization protocols…
                    </p>


                </div>





                <div className="steps">


                    {
                        steps.map((step, index) => (


                            <div
                                className="step-row"
                                key={index}
                            >


                                <div className="step-name">


                                    <span>
                                        [{`0${index + 1}`}]
                                    </span>


                                    <p>
                                        {step}
                                    </p>


                                </div>





                                <div className="progress-box">


                                    <div className="progress">

                                        {
                                            !completed && activeStep === index && (

                                                <video
                                                    key={index}
                                                    className="progressVideo"
                                                    src="/new2/progress.mp4"
                                                    autoPlay
                                                    muted
                                                    playsInline
                                                    onEnded={() => handleVideoEnd(index)}
                                                />

                                            )
                                        }

                                    </div>




                                    {
                                        progressStatus[index] && (

                                            <p className="progress-status">

                                                {progressStatus[index]}

                                            </p>

                                        )
                                    }



                                </div>



                            </div>


                        ))
                    }



                </div>





                <div className="status-section">


                    <p>

                        Status:

                        <span>

                            {
                                completed
                                    ? " Completed"
                                    : startOptimize
                                        ? " Processing..."
                                        : " Waiting"
                            }

                        </span>

                    </p>



                    <p>

                        AI State:

                        <span>

                            {
                                completed
                                    ? " Ready"
                                    : startOptimize
                                        ? " Active"
                                        : " Idle"
                            }

                        </span>

                    </p>


                </div>



            </div>



        </div>

    );

}