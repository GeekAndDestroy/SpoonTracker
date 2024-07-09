import { useState } from "react";
// import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
import {
    AgBarSeriesOptions,
    // AgCategoryAxisOptions,
    AgChartOptions,
    // AgLineSeriesOptions,
    // AgNumberAxisOptions,
  } from "ag-charts-community";

interface IData {
  day: string;
  available_spoons: number;
  spoons_used: number;
  flare_up: boolean;
}

type ChartProps = {

    
};

export default function Chart({  }: ChartProps) {
  const [options] = useState<AgChartOptions>({
    // Data: Data to be displayed in the chart
    data: [
      { day: "Sunday", available_spoons: 12, spoons_used: 6, flare_up: false},
      { day: "Monday", available_spoons: 12, spoons_used: 7, flare_up: false},
      { day: "Tuesday", available_spoons: 12, spoons_used: 7, flare_up: false },
      { day: "Wednesday", available_spoons: 13, spoons_used: 10, flare_up: false },
      { day: "Thursday", available_spoons: 13, spoons_used: 6, flare_up: false },
      { day: "Friday", available_spoons: 13, spoons_used: 15, flare_up: true },
      { day: "Saturday", available_spoons: 14, spoons_used: 5, flare_up: false },
    ] as IData[],
    // Series: Defines which chart type and data to use
    series: [
      {
        type: "bar",
        xKey: "day",
        yKey: "spoons_used",
        yName: "Spoons Used",
        cornerRadius: 10 
      } as AgBarSeriesOptions,
        
      { 
        type: 'line',
        title: "Available Spoons", 
        xKey: 'day', 
        yKey: 'available_spoons' 
    }, 
    ],
    background: {
        fill: "rgb(0 0 0 / 0%)",
      },
      minHeight: 375
  });

  return <AgCharts options={options} />;
};

// const root = createRoot(document.getElementById("root")!);
// root.render(<Chart />);