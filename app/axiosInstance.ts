import { getSession } from "@/lib/session";
import axios from "axios";
// Create a new instance of Axios

const axiosInstance = axios.create({
  baseURL: "https://dockerhub-rea-apis.azurewebsites.net", // Your API base URL
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Check session status here
    const session = await getSession();

    // Assuming you have a function to get the session token from storage
    if (session && typeof session !== "string") {
      // If session is active, add token to headers
      config.headers.Authorization = `Bearer ${session?.sessionToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
