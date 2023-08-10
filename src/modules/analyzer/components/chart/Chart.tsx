import { IProgressItem } from "../../interfaces/analyzer.interfaces";
import style from "./Chart.module.scss";
import dynamic from "next/dynamic";

export default function Chart({
  progress,
  labels,
}: {
  labels: Array<number>;
  progress: Array<IProgressItem>;
}) {
  const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });
  const state = {
    options: {
      fill: {
        colors: [
          "rgba(255, 0, 0, 0)",
          "#0075FF",
          "rgba(255, 0, 0, 0)",
          "rgba(255, 0, 0, 0)",
          "rgba(255, 0, 0, 0)",
        ],
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
      colors: ["#01B574", "#0075FF", "#2CD9FF", "#FF5757"],
      legend: {
        position: "top" as const,
        horizontalAlign: "left" as const,
        offsetY: -5,
        offsetX: -10,
        shape: "square",
      },
      markers: {
        shape: "square" as const,
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
        background: "trasparent",
      },
      series: progress.map((item) => ({
        name: item.label as string,
        data: item.value
      })),
      xaxis: {
        categories: labels,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        ...(progress[0].value.length > 50 ? {range: 50} : {})
      },
      grid: {
        strokeDashArray: 5,
        borderColor: "#56577A",
      },
      theme: {
        mode: "dark" as const,
      },
    },
  };

  return (
    <div className={style.container}>
      <ReactApexChart
        options={state.options}
        series={state.options.series}
        type="area"
        height={"100%"}
      />
    </div>
  );
}
