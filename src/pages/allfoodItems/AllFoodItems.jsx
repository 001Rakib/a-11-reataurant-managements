import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FoodCard from "../../components/foodCard/FoodCard";

const AllFoodItems = () => {
  const axiosPublic = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axiosPublic.get("/foods");
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
      {data.map((food) => (
        <FoodCard key={food._id} food={food}></FoodCard>
      ))}
    </div>
  );
};

export default AllFoodItems;
