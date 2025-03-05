import { useEffect } from "react";

const FinisherHeader = ({ title }) => {
    useEffect(() => {
        if (window.FinisherHeader) {
            new window.FinisherHeader({
                count: 35,
                size: { min: 2, max: 8, pulse: 0 },
                speed: { x: { min: 0, max: 0.4 }, y: { min: 0, max: 0.6 } },
                colors: { background:["transparent"], particles: ["#fbfcca"] },
                blending: "none",
                opacity: { center: 0.5, edge: 0.4 },
                skew: -3,
                shapes: ["c"],
            });
        }
    }, []);

    return (
        <div id="finisher-header"  style={{
            width: "100%",
            height: "70vh",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            textAlign: "center",
        }}>
            
            {title}
            
            
        </div>
    );
};

export default FinisherHeader;
