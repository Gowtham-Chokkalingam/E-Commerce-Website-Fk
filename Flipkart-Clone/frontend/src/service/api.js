import axios from "axios";

const URL = `http://localhost:8080`;
export const authenticateSignup = async(data) => {
  try {
  return  await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("SignUp Api Error:", error.message);
  }
};


export const authenticateLogin = async(data) => {
  try {
  return  await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Login Api Error:", error.message);
    return error.message;
  }
};
