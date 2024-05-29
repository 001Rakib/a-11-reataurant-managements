import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FoodCard from "../../components/foodCard/FoodCard";

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
    <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto py-20">
      {data?.map((food) => (
        <FoodCard key={food._id} food={food}></FoodCard>
      ))}
    </div>
  );
};

export default AllFoodItems;
