import axios from "axios";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_URL + url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_STRIPE_APP_KEY}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_STRIPE_APP_KEY,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
});
