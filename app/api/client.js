import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.210:9000/api",
});

export default apiClient;
