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

    // Data from APIs can probably be mapped to this format after fetched.  Seems complicated, though. Maybe a helper function? Each day needs to be added up from the data
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
        cornerRadius: 10,
        // itemStyler: ({ datum, xKey, fill, highlighted }) => {
        //     return {
        //         fill: datum[xKey] === 'Jul' ? (highlighted ? 'lime' : 'red') : fill,
        //     };
        // },
        itemStyler: (params) => {
            if (params.datum.flare_up == true) return { fill: 'red' };
            // if (params.datum.spoons_used <= .75 * params.datum.available_spoons) return { fill: 'green' };
            // else if (params.datum.spoons_used <= params.datum.available_spoons) return { fill: 'orange' };
            // else return { fill: 'red' };
            
        },
      } as AgBarSeriesOptions,
        
      { 
        type: 'line',
        title: "Available Spoons", 
        xKey: 'day', 
        yKey: 'available_spoons',
        stroke: "green", 
        marker: {
            fill: 'green',
            size: 15,
            shape: 'circle',
        }, 
        }, 
      { 
        type: 'line',
        title: "Flare Up", 
        xKey: 'day', 
        yKey: 'flare_up',
        interpolation: { type: "smooth" },

        // data: ({ datum }) => {
        //     return {datum.flare_up ? 1 : 0}},
        stroke: "rgb(0 0 0 / 0%)", 
        marker: {
            fill: 'red',
            size: 10,
            shape: 'triangle',
        },
        }, 
    ],
    background: {
        fill: "rgb(0 0 0 / 0%)",
      },
    minHeight: 375,
    legend: {
        position: 'top',
    }
  });

  return <AgCharts options={options} />;
};

// const root = createRoot(document.getElementById("root")!);
// root.render(<Chart />);