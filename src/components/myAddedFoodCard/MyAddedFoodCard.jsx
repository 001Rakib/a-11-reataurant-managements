/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const MyAddedFoodCard = ({ foodItem }) => {
  return (
    <div>
      <Helmet>
        <title>My Profile | My Added Food</title>
      </Helmet>
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
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    <Link>
                      {" "}
                      <button className="btn btn-accent">
                        Update Food
                      </button>{" "}
                    </Link>
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
