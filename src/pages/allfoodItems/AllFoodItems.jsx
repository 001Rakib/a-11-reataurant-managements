import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FoodCard from "../../components/foodCard/FoodCard";
import { Helmet } from "react-helmet";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

const AllFoodItems = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isPending: loading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axiosPublic.get("/foods");
      return res.data;
    },
  });

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
    <div>
      <div className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto py-10">
        {data?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
        <Helmet>
          <title>EpicureEase | All Food</title>
        </Helmet>
      </div>
    </div>
  );
};

export default AllFoodItems;
