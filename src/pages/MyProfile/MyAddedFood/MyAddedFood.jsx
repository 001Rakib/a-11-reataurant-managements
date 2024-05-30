import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import MyAddedFoodCard from "../../../components/myAddedFoodCard/MyAddedFoodCard";

const MyAddedFood = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data, isPending: loading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/foods?email=${user.email}`);
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
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-center text-blue-500">
        <span className="bg-blue-200 px-2 py-1 rounded-md">My Added Foods</span>
      </h1>

      <div className="my-5">
        <div className="mb-1 flex justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center">
            Name
          </h5>
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center">
            Price
          </h5>
        </div>
        {data?.map((item) => (
          <MyAddedFoodCard key={item._id} foodItem={item}></MyAddedFoodCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFood;
