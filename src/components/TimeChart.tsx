import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import type { Activity } from "../pages/Home";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  data: Activity[];
}

export default function TimeChart({ data }: Props) {
  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.minutes),
        backgroundColor: [
          "#a78bfa",
          "#f472b6",
          "#34d399",
          "#60a5fa",
          "#fbbf24",
          "#ef4444",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gray-700 shadow-lg p-6 rounded-xl w-80">
      <h2 className="text-xl font-semibold mb-4 text-center text-black">Time Spent</h2>
      {data.length > 0 ? (
        <Pie data={chartData} />
      ) : (
        <p className="text-white-500 text-center">No activities yet</p>
      )}
    </div>
  );
}
