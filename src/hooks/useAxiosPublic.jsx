import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://restaurant-management-website-server-wine.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
