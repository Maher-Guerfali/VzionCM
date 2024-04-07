import temperatureIcon from "./temp.svg";
import voltageIcon from "./volt.svg";
import decibelsIcon from "./decibels.svg";

export const CARDS_DETAILS = [
  {
    title: "Temperature",
    image: temperatureIcon,
  },
  {
    title: "Voltage",
    image: voltageIcon,
  },
  {
    title: "Decibels",
    image: decibelsIcon,
  },
  {
    title: "Gass",
    image: temperatureIcon,
  },
];

export const TEXT_DETAILS = {
  content:
    "Everything is Ok",
};

export const options = {
  responsive: true,
  color: "#FFFFFF",
  scales: {
    y: {
      ticks: { color: "white", beginAtZero: true },
    },
    x: {
      ticks: { color: "white", beginAtZero: true },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sound Wave",
      color: "#FFFFFF",
    },
  },
};

export const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];
