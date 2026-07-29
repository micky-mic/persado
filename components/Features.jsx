"use client";

const features = [
    {
        title: "120K+ campaigns powering every score",
        description:
            "Every campaign compounds into a shared performance model. Persado doesn't start from scratch — it starts from everything your industry has already learned, and scores every variant against it.",
        color: "red",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M17.1001 4.77539C20.6027 4.77541 23.7529 5.24952 26.0103 6.00195C27.1416 6.37906 28.0216 6.8172 28.6079 7.2793C29.1997 7.74574 29.4253 8.17946 29.4253 8.55078C29.4251 8.922 29.1994 9.35503 28.6079 9.82129C28.0216 10.2834 27.1416 10.7215 26.0103 11.0986C23.7529 11.8511 20.6027 12.3252 17.1001 12.3252C13.5974 12.3252 10.4464 11.8511 8.18896 11.0986C7.05787 10.7216 6.17856 10.2833 5.59229 9.82129C5.00063 9.35496 4.77506 8.92205 4.7749 8.55078C4.7749 8.17941 5.00035 7.74582 5.59229 7.2793C6.17857 6.81725 7.05784 6.37903 8.18896 6.00195C10.4464 5.24948 13.5974 4.77539 17.1001 4.77539Z" stroke="#C02424" />
                <path d="M4.98755 8.5498V17.0998C4.98755 19.4653 9.97505 21.3748 17.1 21.3748C24.225 21.3748 29.2126 19.4653 29.2126 17.0998V8.5498" stroke="#C02424" />
                <path d="M4.98755 17.0996V25.6496C4.98755 28.0151 9.97507 29.9246 17.1001 29.9246C24.2251 29.9246 29.2126 28.0151 29.2126 25.6496V17.0996" stroke="#C02424" />
            </svg>
        ),
    },
    {
        title: "Compliant at the point of creation",
        description:
            "Regulatory validation is embedded in generation, not bolted on after. Content clears legal the first time — across 20+ financial services frameworks.",
        color: "green",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M27.8809 7.53418V17.0996C27.8809 21.0913 25.2091 24.5033 22.377 26.9814C20.976 28.2073 19.5712 29.1723 18.5156 29.832C17.9888 30.1613 17.5508 30.4133 17.2461 30.582C17.1935 30.6112 17.144 30.637 17.0996 30.6611C17.0553 30.6371 17.0066 30.6111 16.9541 30.582C16.6493 30.4133 16.2106 30.1614 15.6836 29.832C14.6282 29.1724 13.2239 28.207 11.8232 26.9814C8.99113 24.5033 6.31836 21.0913 6.31836 17.0996V7.53418L17.0996 3.49121L27.8809 7.53418Z" stroke="#0A8F8F" stroke-width="1.43753" />
                <path d="M12.7874 17.0997L15.6624 19.9747L21.4125 14.2246" stroke="#0A8F8F" stroke-width="1.43753" />
            </svg>
        ),
    },
    {
        title: "From 12 weeks to 72 hours",
        description:
            "The entire content supply chain — create, optimize, deploy — compressed into a single platform. Your team stops assembling and starts accelerating.",
        color: "blue",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.5039 9.9375L11.4336 10.5H19.9326L11.707 20.3691L12.4961 14.0625L12.5664 13.5H4.06738L12.292 3.62988L11.5039 9.9375Z" stroke="#2563EB" />
            </svg>
        ),
    },
];

export default function Features() {
    return (
        <section className="features">
            <div className="container">
                {features.map((item, index) => (
                    <div key={index} className={`feature ${item.color}`}>
                        <span className="corner tl" />
                        <span className="corner tr" />
                        <span className="corner bl" />
                        <span className="corner br" />

                        <div className="icon">{item.icon}</div>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}