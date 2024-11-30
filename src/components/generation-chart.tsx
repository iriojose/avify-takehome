import React, { useEffect, useState } from "react";
import { Generation} from "../models/generation";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Loading } from "./loading";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
type Props = {
    generationmix: Generation[]
}

const GenerationChart = ({ generationmix }: Props) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const labels = generationmix.map((item) => item.fuel);
        const percs = generationmix.map((item) => item.perc);
        
        setChartData({
            labels,
            datasets: [
              {
                label: "Consumo eléctrico (%)",
                data: percs,
                backgroundColor: [
                  "#ff6384",
                  "#36a2eb",
                  "#cc65fe",
                  "#ffce56",
                  "#4bc0c0",
                  "#9966ff",
                  "#ff9f40",
                  "#c9cbcf",
                  "#7fffd4",
                ],
                borderColor: "#ffffff",
                borderWidth: 1,
              },
            ],
        });
    }, [])

    if (!chartData) {
        return (
            <div className="fullscreen-center">
                <Loading />
            </div>
        );
    }

    return (
        <div>
            <div style={{ width: "70%", margin: "auto" }}>
                <h2 style={{ textAlign: "center" }}>Consumo eléctrico por tipo de energía</h2>
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { position: "top" },
                            tooltip: { enabled: true },
                        },
                    }}
                />
                </div>
        </div>
    )
}

export { GenerationChart }
