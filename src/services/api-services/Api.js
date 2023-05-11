import axios from "axios";

const askAI = axios.create({
    baseURL: "http://localhost:8080/api/v1/bot",
    headers: {
      "Content-Type": "application/json",
    },
  });

  export default askAI;

