import axios from "axios";

const API_URL = "https://600c-196-234-125-11.eu.ngrok.io";

const getProducts = async ({ categoryId, minPrice, maxPrice }) => {
  try {
    const url = `${API_URL}/predict2?choice=${categoryId}&budget_min=${minPrice}&budget_max=${maxPrice}`;
    const requestOptions = {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    };
    const response = await axios.get(url, requestOptions);
    const formatedArray = [];
    console.clear();
    console.log(response.data);
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
