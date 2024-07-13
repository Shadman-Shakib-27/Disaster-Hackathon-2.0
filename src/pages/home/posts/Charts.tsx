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

const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barisal",
  "Bhola",
  "Bogra",
  "Brahmanbaria",
  "Chandpur",
  "Chapai Nawabganj",
  "Chittagong",
  "Chuadanga",
  "Comilla",
  "Cox's Bazar",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore",
  "Jhalokathi",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
];

const LineChart = () => {
  const [temperatureData, setTemperatureData] = useState(null);
  const [humidityData, setHumidityData] = useState(null);
  const [windSpeedData, setWindSpeedData] = useState(null);

  const [city, setCity] = useState("");
  const [days, setDays] = useState(1);
  const [frequency, setFrequency] = useState("Daily");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (districts.includes(city)) {
      fetchData();
    } else if (city) {
      setError("Invalid city selected. Please choose a valid district.");
    }
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
      const humidities = [];
      const windSpeeds = [];

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
              humidities.push(hourData.humidity);
              windSpeeds.push(hourData.wind_kph);
            });
          } else {
            labels.push(dateString);
            temperatures.push(data.forecast.forecastday[0].day.avgtemp_c);
            humidities.push(data.forecast.forecastday[0].day.avghumidity);
            windSpeeds.push(data.forecast.forecastday[0].day.maxwind_kph);
          }
        }
      }

      if (labels.length === 0) {
        throw new Error("No Data Available For The Selected City & Days.");
      }

      setTemperatureData({
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

      setHumidityData({
        //@ts-ignore
        labels: labels,
        datasets: [
          {
            label: `Average Humidity (%) - ${frequency}`,
            data: humidities,
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
          },
        ],
      });

      setWindSpeedData({
        //@ts-ignore
        labels: labels,
        datasets: [
          {
            label: `Average Wind Speed (kph) - ${frequency}`,
            data: windSpeeds,
            borderColor: "rgb(255, 206, 86)",
            backgroundColor: "rgba(255, 206, 86, 0.2)",
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

  const temperatureOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
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
          margin: "40px",
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
          margin: "40px",
        },
      },
    },
  };
  const humidityOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
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
          text: "Humidity (%)",
          color: "green",
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    },
  };
  const windSpeedOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
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
          text: "Wind Speed (kph)",
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
          <select
            value={city}
            onChange={handleCityChange}
            className="px-2 py-1 border w-[90%] border-[#4CAE4F] rounded"
          >
            <option value="">Select Your City</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
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
          <motion.p className="text-center text-red-500 mb-4"></motion.p>
        )}
        {loading ? (
          <div className="flex justify-center items-center mt-16">
            <ClipLoader color="#4CAE4F" loading={loading} size={50} />
          </div>
        ) : (
          <motion.div
            initial={{ x: 20, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
            className="mt-16"
          >
            <div>
              {temperatureData ? (
                <div className="mb-8">
                  <div className="w-[60%] pb-12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-4">
                    <h1 className="font-bold text-xl lg:text-4xl text-secondary ">
                      <span className="text-primary">Temperature</span> Analysis
                    </h1>
                  </div>
                  <h5 className="text-center text-gray-500 font-bold mb-2 -mt-12">
                    Temperature in Last {days} Days For {city} - {frequency}
                  </h5>
                  {/* @ts-ignore */}
                  <Line data={temperatureData} options={temperatureOptions} />
                </div>
              ) : (
                <p className="text-center text-red-500">
                  No Temperature Data To Display, Please Add City And Days
                </p>
              )}
              {humidityData ? (
                <div className="mb-8">
                  <div className="w-[60%] pb-12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-4">
                    <h1 className="font-bold text-xl lg:text-4xl text-secondary ">
                      <span className="text-primary">Humidity</span> Analysis
                    </h1>
                  </div>
                  <h5 className="text-center text-gray-500 font-bold mb-2 -mt-12">
                    Humidity in Last {days} Days For {city} - {frequency}
                  </h5>
                  {/* @ts-ignore */}
                  <Line data={humidityData} options={humidityOptions} />
                </div>
              ) : (
                <p className="text-center text-red-500">
                  No Humidity Data To Display, Please Add City And Days
                </p>
              )}
              {windSpeedData ? (
                <div className="mb-8">
                  <div className="w-[60%] pb-12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-4">
                    <h1 className="font-bold text-xl lg:text-4xl text-secondary ">
                      <span className="text-primary">Wind Speed</span> Analysis
                    </h1>
                  </div>
                  <h5 className="text-center text-gray-500 font-bold mb-2 -mt-12">
                    Wind Speed in Last {days} Days For {city} - {frequency}
                  </h5>
                  {/* @ts-ignore */}
                  <Line data={windSpeedData} options={windSpeedOptions} />
                </div>
              ) : (
                <p className="text-center text-red-500">
                  No Wind Speed Data To Display, Please Add City And Days
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </Container>
  );
};

export default LineChart;
