import { useContext, useEffect, useState } from "react";
import { ActiveUsersLineChartData } from "../Content/ActiveUsersLineChartData.js";
import { GlobalSettingsContext } from "../App.js";

export const useActiveUsersLineChart = () => {
  const { darkMode } = useContext(GlobalSettingsContext);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line",
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
              [0, "#ffffff"],
              [1, "#9ab7ff"],
            ],
          },
    },
    title: { text: null },
    // title: {
    //   text: "Active Sales",
    //   align: "left",
    //   style: {
    //     fontSize: "16px",
    //     fontWeight: "bold",
    //     color: darkMode ? "#ffffff" : "#000000", // Title color based on darkMode
    //   },
    // },
    // subtitle: {
    //   text: 'than last week <span style="color: green">+30%</span>',
    //   align: "left",
    //   useHTML: true,
    //   style: {
    //     fontSize: "12px",
    //     color: darkMode ? "#ffffff" : "#000000", // Optional subtitle color
    //   },
    // },
    xAxis: {
      categories: ActiveUsersLineChartData.categories,
      labels: {
        style: {
          color: darkMode ? "#ffffff" : "#000000", // X-axis label color
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      max: 600,
      tickInterval: 100,
      labels: {
        style: {
          color: darkMode ? "#ffffff" : "#000000", // Y-axis label color
        },
      },
    },
    legend: {
      align: "right",
      verticalAlign: "top",
      layout: "vertical",
      itemStyle: {
        fontWeight: "normal",
        color: darkMode ? "#ffffff" : "#333", // Legend text color
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: " users",
    },
    series: ActiveUsersLineChartData.series,
    plotOptions: {
      line: {
        marker: {
          enabled: true,
          radius: 4,
          symbol: "circle",
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
                [0, "#ffffff"],
                [1, "#9ab7ff"],
              ],
            },
      },
      title: {
        ...prevOptions.title,
        style: {
          ...prevOptions.title.style,
          color: darkMode ? "#ffffff" : "#000000",
        },
      },
      xAxis: {
        ...prevOptions.xAxis,
        labels: {
          style: {
            color: darkMode ? "#ffffff" : "#000000",
          },
        },
      },
      yAxis: {
        ...prevOptions.yAxis,
        labels: {
          style: {
            color: darkMode ? "#ffffff" : "#000000",
          },
        },
      },
      legend: {
        ...prevOptions.legend,
        itemStyle: {
          color: darkMode ? "#ffffff" : "#333",
        },
      },
      subtitle: {
        text: 'than last week <span style="color: green">+30%</span>',
        align: "left",
        useHTML: true,
        style: {
          fontSize: "12px",
          color: darkMode ? "#ffffff" : "#000000", // Optional subtitle color
        },
      },
    }));
  }, [darkMode]);

  return { chartOptions, setChartOptions };
};
