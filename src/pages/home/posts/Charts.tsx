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
  const [days, setDays] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = "89d422cb71ae4c90ad3233708241007";

  useEffect(() => {
    fetchData();
  }, [city, days]);

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
          `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${dateString}`
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
          labels.push(dateString);
          temperatures.push(data.forecast.forecastday[0].day.avgtemp_c);
        }
      }

      if (labels.length === 0) {
        throw new Error("No Data Available For The Selected City & Days.");
      }

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Average Temperature (°C)",
            data: temperatures,
            borderColor: "rgb(76, 174, 79)",
            backgroundColor: "rgba(75,192,192,0.2)",
            fill: true,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDays(parseInt(event.target.value));
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
        text: `Temperature (°C) in Last ${days} Days for ${city}`,
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
    <Container>
      <SectionTitle fTitle="Temperature" lTitle="Analysis" description="" />
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
            className="px-2 py-1 border  border-gray-300 rounded"
          />
          <input
            type="number"
            placeholder="Enter Days"
            value={days}
            onChange={handleDaysChange}
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </motion.div>
        {error ? (
          <motion.p
            initial={{ x: 200, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
            className="text-center text-red-500"
          >
            {error}
          </motion.p>
        ) : chartData ? (
          <Line data={chartData} options={options} />
        ) : loading ? (
          <p className="text-center font-semibold text-[#4CAE4F]">Loading...</p>
        ) : (
          <p className="text-center">
            No Data To Display, Please Add City And Days
          </p>
        )}
      </div>
    </Container>
  );
};

export default LineChart;
