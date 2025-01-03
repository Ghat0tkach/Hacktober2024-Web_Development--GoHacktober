import React from 'react';
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const valueFormatter = (value) => `${value} contributions`;

const chartSetting = {
  yAxis: [
    { label: "Contributions" },
    { fill: 'white' }
  ],
  series: [
    { dataKey: "count", label: "Contribution Activity", valueFormatter },
  ],  
  height: 400,
  xAxis: [{ dataKey: "day", scaleType: "band", label: "Repositories Contributions" }],
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: { transform: "translateX(-10px)" },
    [`& .${axisClasses.directionX} .${axisClasses.label}`]: { transform: "translateX(-10px)" },
  },
};

// Function to create a dataset for BarChart
const createDataset = (contributionsData) => {
    return contributionsData.flatMap((repo) => {
        const { contributions } = repo;

        // Ensure issues and pulls default to empty arrays if null or undefined
        const issues = contributions?.issues || [];
        const pulls = contributions?.pulls || [];

        // Return formatted dataset entries with counts
        return [
            { day: `${repo.repo_name} - Issues`, count: issues.length },
            { day: `${repo.repo_name} - Pull Requests`, count: pulls.length },
        ];
    });
};


const ContributionChart = ({ contributions }) => {
    const dataset = createDataset(contributions); // Create dataset from contributions prop

    return (
        <div className="w-full lg:w-1/2 bg-white bg-opacity-10 text-black shadow-md rounded-lg p-4">
            <BarChart
                dataset={dataset}
                xAxis={[
                    {
                        scaleType: "band",
                        dataKey: "day",
                        tickPlacement: "middle",
                        tickLabelPlacement: "middle",
                        label: "Repositories Contributions",
                        borderRadius: '10'
                    }
                ]}
                {...chartSetting}
            />
        </div>
    );
};

export default ContributionChart;
