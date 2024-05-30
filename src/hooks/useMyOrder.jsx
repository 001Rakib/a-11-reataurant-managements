import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";
const useMyOrder = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth(AuthContext);
  const {
    data: orders = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/orders?email=${user.email}`);
      return res.data;
    },
  });
  return [orders, refetch, loading];
};

export default useMyOrder;
