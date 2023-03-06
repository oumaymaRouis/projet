import React, { useEffect, useState } from "react";
import axios from "axios";

const API = () => {
  const [productNames, setProductNames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      "https://fffb-197-240-25-234.eu.ngrok.io/predict2?choice=1&budget_min=1000&budget_max=2000";

    const requestOptions = {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    };

    axios
      .get(url, requestOptions)
      .then((response) => {
        console.log(response.data);
        const productNames = Object.keys(response.data).filter((key) => {
          return typeof response.data[key] === "object";
        });
        setProductNames(productNames);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      {productNames.length > 0 && (
        <div>
          {productNames.map((productName, idx) => (
            <div key={idx}>{productName}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default API;
