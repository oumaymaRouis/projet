import axios from "axios";

const API_URL = "https://bcec-197-240-237-104.eu.ngrok.io";

const getProducts = async () => {
  try {
    const url = `${API_URL}/predict2?choice=1&budget_min=3000&budget_max=4000`;
    const requestOptions = {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    };
    const response = await axios.get(url, requestOptions);
    const formatedArray = [];
    for (let key in response.data) {
      formatedArray.push({
        name: key,
        price: response.data[key][0],
        score: response.data[key][1],
        productURL: response.data[key][2],
        imagepc: response.data[key][3],
        stock: response.data[key][4],
        boutique: response.data[key][5],
        description: response.data[key][6],
      });
    }
    return formatedArray;
  } catch (error) {
    throw error;
  }
};

export { getProducts };
