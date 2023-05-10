import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import { useFetcher, useParams } from "react-router-dom";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function BlogDetal() {
  const params = useParams();
  const { blogTitle } = params;
  const host = process.env.REACT_APP_BACKEND_URL;
  const [data, setData] = useState([]);

  // I want to update data array inside datasets in this state. How ?
  const [chartData, setChartData] = useState({
    labels: ["intensity", "likelihood", "relevance"],
    datasets: [
      {
        label: "Blog detail",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`${host}/getbyTitle/${blogTitle}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        // Create a new state object with updated data
        const newState = {
          ...chartData,
          datasets: [
            {
              ...chartData.datasets[0],
              data: [
                response.data.intensity,
                response.data.likelihood,
                response.data.relevance,
              ],
            },
          ],
        };
        // Update the state variable with the new state object
        setChartData(newState);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <section className="pl-[250px] p-5 mx-5">
        <div className="w-[600px]">
          <Bar data={chartData} />
        </div>
        <div>
          <p>
            <span className="font-medium">Topic : </span> {data.topic}{" "}
          </p>
          <p>
            <span className="font-medium">Country : </span> {data.country}{" "}
          </p>
          <p>
            <span className="font-medium">Region : </span> {data.region}{" "}
          </p>
          <p>
            <span className="font-medium">EndYear : </span> {data.end_year}{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
