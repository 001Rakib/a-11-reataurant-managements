/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyAddedFoodCard = ({ foodItem, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/foods/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Card className=" dark:bg-white">
        <div className="flow-root dark:bg-white">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 dark:text-white">
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img
                    alt="Neil image"
                    height="50"
                    src={foodItem.foodImage}
                    width="50"
                    className="rounded-md"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {foodItem.foodName}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-white">
                    <span className="font-medium">Category:</span>{" "}
                    {foodItem.category}
                  </p>
                </div>
                <div className="min-w-0  md:flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    <Link to={`/my-profile/update-food/${foodItem._id}`}>
                      {" "}
                      <button className="btn btn-sm md:btn btn-accent">
                        Update Food
                      </button>{" "}
                    </Link>{" "}
                    <button
                      onClick={() => handleDelete(foodItem._id)}
                      className="btn btn-sm md:btn btn-accent"
                    >
                      Delete Food
                    </button>{" "}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  ${foodItem.price}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default MyAddedFoodCard;
