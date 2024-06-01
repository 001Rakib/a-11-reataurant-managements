import { useQuery } from "@tanstack/react-query";
import FoodCard from "../../../components/foodCard/FoodCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const ToopFoods = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isPending: loading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axiosPublic.get("/foods");
      return res.data;
    },
  });

  const topFood = data?.slice(0, 6);

  if (loading) {
    return (
      <>
        <div className="max-w-screen-xl mx-auto grid justify-center items-center h-[100vh]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }

  return (
    <div className="max-w-screen-xl my-10 mx-auto ">
      <h1 className="text-center text-4xl font-bold text-green-400 my-10">
        <span className="bg-green-200 px-2 py-1 rounded-md">Top Food</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
        {topFood.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="text-center">
        <Link to={"/allFood"}>
          <button className="btn btn-primary mt-5">All Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default ToopFoods;
