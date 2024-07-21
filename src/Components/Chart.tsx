import { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";
import { TaskType } from "../types";

interface IData {
  date: string;
  available_spoons: number;
  spoons_used: number;
  flare_up: boolean;
}

type ChartProps = {
  activityLog: TaskType[];
};

export default function Chart({ activityLog }: ChartProps) {
  const [chartData, setChartData] = useState<IData[]>([]);

  // Helper function to transform activityLog data into chart data format
  const transformData = (log: TaskType[]): IData[] => {
    const dayMap: { [key: string]: IData } = {};

    log.forEach((task) => {
      const date = new Date(task.date);
      const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

      if (!dayMap[formattedDate]) {
        dayMap[formattedDate] = { date: formattedDate, available_spoons: 12, spoons_used: 0, flare_up: false };
      }
      dayMap[formattedDate].spoons_used += task.spoons_needed;
      if (task.task.toLowerCase().includes("flare")) {
        dayMap[formattedDate].flare_up = true;
      }
    });

    return Object.values(dayMap);
  };

  useEffect(() => {
    const data = transformData(activityLog);
    setChartData(data);
  }, [activityLog]);

  const options: AgChartOptions = {
    data: chartData,
    series: [
      {
        type: "bar",
        xKey: "date",
        yKey: "spoons_used",
        yName: "Spoons Used",
        cornerRadius: 10,
      } as AgBarSeriesOptions,
    ],
    background: {
      fill: "rgb(0 0 0 / 0%)",
    },
    minHeight: 375,
    legend: {
      position: 'top',
    },
  };

  return <AgCharts options={options} />;
}
