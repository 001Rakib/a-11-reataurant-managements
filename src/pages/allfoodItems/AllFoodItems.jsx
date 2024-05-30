import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import FoodCard from "../../components/foodCard/FoodCard";
import { Helmet } from "react-helmet";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

const AllFoodItems = () => {
  const axiosPublic = useAxiosPublic();
  // const { register, handleSubmit } = useForm();

  // const [searchFood, setSearchFood] = useState([]);

  // const onSubmit = async (searchData) => {
  //   try {
  //     const response = await axiosPublic.get(
  //       `/foods?name=${searchData.foodName}`
  //     );
  //     setSearchFood(response.data);
  //     console.log(searchFood);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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
      {/* <form > */}
      {/* <div className="max-w-screen-xl mx-auto py-20"> */}
      {/* <label className="input input-bordered flex items-center gap-2"> */}
      {/* <input
              {...register("foodName", { required: true })}
              type="text"
              placeholder="Search"
              className="input  w-full"
            /> */}
      {/* <button type="submit"> */}
      {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              > */}
      {/* <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                /> */}
      {/* </svg> */}
      {/* </button> */}
      {/* </label> */}
      {/* </div> */}
      {/* </form> */}
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto py-10">
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
