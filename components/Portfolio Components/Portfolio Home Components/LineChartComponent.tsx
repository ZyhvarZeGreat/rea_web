"use client"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"


import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#13EF29",
  },
} satisfies ChartConfig

export function LineChartComponent() {
  const generateData = (
    length: number,
    minChange: number,
    maxChange: number
  ) => {
    let data = [];
    let uv = 1000; // starting value for uv
  
    for (let i = 0; i < length; i++) {
      // Random change between -maxChange and maxChange
      let change = Math.floor(Math.random() * (2 * maxChange + 1)) - maxChange;
      // Ensure the value doesn't drop below a certain threshold to maintain the overall upward trend
      uv = Math.max(uv + change, uv + minChange);
      data.push({ name: `Point ${i + 1}`, uv });
    }
  
    return data;
  };
  const data = generateData(40, 2, 1500);

  return (
    
        <ChartContainer className="min-h-[150px] w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          
          >
      
            
            
            <Line
              dataKey="uv"

              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2.1}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
    
  )
}
