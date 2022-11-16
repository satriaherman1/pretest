import { klikooColor } from "@constant/variables";
import { ScriptableContext } from "chart.js";

const labels = ["04 Apr 2022", "06 Apr 2022", "08 Apr 2022", "10 Apr 2022"];
const options = {
  responsive: true,
  tension: 0.4,
  point: {
    backgroundColor: "none",
  },
  legend: {
    display: false,
  },
};

const salesData = {
  labels,
  datasets: [
    {
      label: "",
      data: [2100000, 4100000, 2200000, 4000000, 4300000],
      borderColor: klikooColor.primary,
      backgroundPoint: "none",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx?.createLinearGradient(0, 0, 0, 450);
        gradient?.addColorStop(0, "rgba(84, 93, 255, 0.3)");
        gradient?.addColorStop(1, "rgba(84, 93, 255, 0)");
        return gradient;
      },
      fill: "start",
    },
  ],
};

export { salesData, options };
