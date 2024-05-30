// import { useContext } from "react";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { AuthContext } from "../../../../providers/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import MyOrderCard from "../../../components/myOrder/MyOrderCard";
import useMyOrder from "../../../hooks/useMyOrder";

const MyOrder = () => {
  //   const axiosPublic = useAxiosPublic();
  const [orders, , loading] = useMyOrder();

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
      <Helmet>
        <title>My Profile | My Orders</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto py-24">
        <h1 className="text-3xl font-bold text-center text-blue-500">
          <span className="bg-blue-200 px-2 py-1 rounded-md">My Orders</span>
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
          {orders?.map((item) => (
            <MyOrderCard key={item._id} foodItem={item}></MyOrderCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
