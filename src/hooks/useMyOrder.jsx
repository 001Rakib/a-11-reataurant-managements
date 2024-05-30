import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
const useMyOrder = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth(AuthContext);
  const {
    data: orders = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user.email}`);
      return res.data;
    },
  });
  return [orders, refetch, loading];
};

export default useMyOrder;
