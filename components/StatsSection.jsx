export default function StatsSection() {
    const stats = [
        {
            value: "4×",
            text: "Faster to Market",
        },
        {
            value: "8/10",
            text: "Largest U.S. Banks",
        },
        {
            value: "75%",
            text: "Lower Production Cost",
        },
        {
            value: "96%",
            text: "Outperforms Humans & Generic AI",
        },
        {
            value: "90%",
            text: "Fewer Compliance Rejections",
            full: true,
        },
    ];

    return (
        <section className="statsSection">

            <div className="container">

                <div className="tag">

                    <span>[</span>

                    <p>
                        BUILT FOR CREATIVE AND PERFORMANCE MARKETERS
                    </p>

                    <span>]</span>

                </div>

                <div className="heading">

                    <h2>
                        The Agentic Creative Agency
                        <span>for Regulated Brands</span>
                    </h2>

                    <p>
                        Faster to Market. Built for Compliance. Proven to Perform.
                        Persado supercharges marketing campaigns in regulated
                        industries with specialized AI, deep industry expertise
                        and systemic learning.
                    </p>

                </div>

                <div className="cards">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className={`card ${item.full ? "full" : ""}`}
                        >

                            <span className="corner topLeft" />
                            <span className="corner topRight" />
                            <span className="corner bottomLeft" />
                            <span className="corner bottomRight" />

                            <h3>{item.value}</h3>

                            <p>{item.text}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}