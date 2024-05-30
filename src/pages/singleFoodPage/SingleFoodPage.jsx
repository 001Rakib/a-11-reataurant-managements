import { Card } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";

const SingleFoodPage = () => {
  const {
    foodName,
    foodImage,
    category,
    price,
    country,
    description,
    userName,
  } = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <Card className="" horizontal>
        <div className="flex gap-5">
          <div>
            <img className="w-full h-full" src={foodImage} alt="" />
          </div>
          <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {foodName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Category: {category}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Price: <span className="font-medium">${price}</span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Made By: {userName}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Food Origin: {country}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Description: {description}
            </p>
            <Link>
              <button className="bg-orange-400 px-4 py-2 text-white font-medium rounded-md">
                Order
              </button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleFoodPage;
