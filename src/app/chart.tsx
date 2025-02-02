"use client";

import React from "react";
import { Line, Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

type LineChartProps = {
  data: number[];
};

type PieChartProps = {
  data: Record<string, number>;
};

type BarChartProps = {
  data: number[];
};

export function LineChart({ data }: LineChartProps) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: data,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return <Line data={chartData} />;
}

export function PieChart({ data }: PieChartProps) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: ["#3b82f6", "#f97316", "#10b981"],
      },
    ],
  };

  return <Pie data={chartData} />;
}

export function BarChart({ data }: BarChartProps) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue",
        data: data,
        backgroundColor: "#0099FF",
      },
    ],
  };

  return <Bar data={chartData} />;
}
