import { useContext, useEffect, useState } from "react";
import { ActiveUsersChartData } from "../Content/ActiveUsersChartData.js";
import { GlobalSettingsContext } from "../App.js";

export const useActiveUsersColumnChart = () => {
  const { darkMode } = useContext(GlobalSettingsContext);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "column",
      height: "350",
      backgroundColor: darkMode
        ? {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, "#333"],
              [1, "#9ab7ff"],
            ],
          }
        : {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, "#1f5fef"],
              [1, "#9ab7ff"],
            ],
          },
      borderRadius: 10,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: ActiveUsersChartData.categories,
      labels: {
        style: {
          color: "#ffffff",
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      gridLineColor: "#ffffff",
      labels: {
        style: {
          color: "#ffffff",
        },
      },
    },
    tooltip: {
      valueSuffix: " users",
    },
    series: ActiveUsersChartData.series,
    plotOptions: {
      column: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          color: "#ffffff",
        },
      },
    },
    credits: {
      enabled: false,
    },
  });

  // Update chart options when darkMode changes
  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      chart: {
        ...prevOptions.chart,
        backgroundColor: darkMode
          ? {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#333"],
                [1, "#9ab7ff"],
              ],
            }
          : {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                [0, "#1f5fef"],
                [1, "#9ab7ff"],
              ],
            },
      },
    }));
  }, [darkMode]);

  return { chartOptions, setChartOptions };
};
