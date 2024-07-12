import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import ClipLoader from "react-spinners/ClipLoader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState(null);
  const [city, setCity] = useState("");
  const [days, setDays] = useState(1);
  const [frequency, setFrequency] = useState("Daily");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, [city, days, frequency]);

  useEffect(() => {
    switch (frequency) {
      case "Hourly":
        setDays(1);
        break;
      case "Daily":
        setDays(1);
        break;
      case "Monthly":
        setDays(30);
        break;
      case "Yearly":
        setDays(365);
        break;
      default:
        setDays(1);
    }
  }, [frequency]);

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const labels = [];
      const temperatures = [];

      for (
        let d = new Date(startDate);
        d <= endDate;
        d.setDate(d.getDate() + 1)
      ) {
        const dateString = d.toISOString().split("T")[0];
        const response = await fetch(
          `https://api.weatherapi.com/v1/history.json?key=${
            import.meta.env.VITE_APP_SECRET_KEY
          }&q=${city}&dt=${dateString}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        if (
          data.forecast &&
          data.forecast.forecastday &&
          data.forecast.forecastday.length > 0
        ) {
          if (frequency === "Hourly") {
            //@ts-ignore
            data.forecast.forecastday[0].hour.forEach((hourData) => {
              labels.push(`${hourData.time.split(" ")[1]} - ${dateString}`);
              temperatures.push(hourData.temp_c);
            });
          } else if (frequency === "Daily") {
            //@ts-ignore
            data.forecast.forecastday[0].hour.forEach((hourData) => {
              labels.push(`${hourData.time.split(" ")[1]} - ${dateString}`);
              temperatures.push(hourData.temp_c);
            });
          } else {
            labels.push(dateString);
            temperatures.push(data.forecast.forecastday[0].day.avgtemp_c);
          }
        }
      }

      if (labels.length === 0) {
        throw new Error("No Data Available For The Selected City & Days.");
      }

      setChartData({
        //@ts-ignore
        labels: labels,
        datasets: [
          {
            label: `Average Temperature (°C) - ${frequency}`,
            data: temperatures,
            borderColor: "rgb(76, 174, 79)",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
        ],
      });
    } catch (error) {
      console.error("Error Fetching Weather Data:", error);
      //@ts-ignore
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //@ts-ignore
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  //@ts-ignore
  const handleDaysChange = (event) => {
    setDays(parseInt(event.target.value));
  };
  //@ts-ignore
  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: `Temperature (°C) in Last ${days} Days for ${city} - ${frequency}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date (YYYY-MM-DD)",
          color: "green",
          font: {
            weight: "bold",
            size: 14,
          },
          margin: "20px",
        },
      },
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Temperature (°C)",
          color: "green",
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    },
  };

  return (
    <Container className="mt-8">
      <SectionTitle fTitle="Weather" lTitle="Analysis" description="" />
      <div className="-mt-10">
        <motion.div
          initial={{ x: 200, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 2,
          }}
          className="flex justify-center space-x-2 mb-4"
        >
          <input
            type="text"
            placeholder="Enter Your City"
            value={city}
            onChange={handleCityChange}
            className="px-2 py-1 border w-[90%] border-[#4CAE4F] rounded"
          />
          <input
            type="number"
            placeholder="Enter Days"
            value={days}
            onChange={handleDaysChange}
            className="px-2 py-1 border w-[90%] border-[#4CAE4F] rounded"
            disabled={frequency !== "Custom"}
          />
          <select
            value={frequency}
            onChange={handleFrequencyChange}
            className="px-2 py-1 border w-[90%] border-[#4CAE4F] rounded"
          >
            <option value="Hourly">Hourly</option>
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
            <option value="Custom">Custom</option>
          </select>
        </motion.div>
        {error && (
          <motion.p
            initial={{ x: 200, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
            className="text-center text-red-500 mb-4"
          >
            {/* {error} */}
          </motion.p>
        )}
        {loading ? (
          <div className="flex justify-center items-center mt-16">
            <ClipLoader color="#4CAE4F" loading={loading} size={50} />
          </div>
        ) : chartData ? (
          //@ts-ignore
          <Line data={chartData} options={options} />
        ) : (
          <p className="text-center text-red-500">
            No Data To Display, Please Add City And Days
          </p>
        )}
      </div>
    </Container>
  );
};

export default LineChart;
