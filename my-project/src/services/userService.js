import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");
  const res = await axios.get(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateCurrentUser = async (updates) => {
  const token = localStorage.getItem("token");
  const res = await axios.put(`${API_URL}/users/me`, updates, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
