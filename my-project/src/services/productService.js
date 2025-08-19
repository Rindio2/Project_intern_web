import axios from "axios";

const API_URL = "http://localhost:3000/api/v1"; 

export const getProducts = async () => {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${API_URL}/products/${id}`);
  return res.data;
};
