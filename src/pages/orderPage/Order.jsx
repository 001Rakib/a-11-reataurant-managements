import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Order = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const { foodName, foodImage, price, quantity } = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (orderData) => {
    const orderedFood = {
      foodName: orderData.foodName,
      foodImage: foodImage,
      OrderedQuantity: orderData.orderedQuantity,
      userName: orderData.userName,
      email: orderData.email,
      price: orderData.price,
    };

    const orderFood = await axiosSecure.post("/orders", orderedFood);
    console.log(orderFood.data);

    if (orderFood.data.insertedId) {
      // show success popup
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${orderData.foodName} is ordered successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-24">
      <Helmet>
        <title>Epicure Ease | Oder Food</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold text-green-400">
        <span className="bg-green-200 px-2 py-1 rounded-md">Order Food</span>
      </h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-black">Food Name</span>
            </div>
            <input
              {...register("foodName", { required: true })}
              type="text"
              placeholder="Food Name"
              className="input input-bordered w-full"
              defaultValue={foodName}
            />
          </label>

          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label>
                <div className="label">
                  <span className="label-text text-black">
                    Available Quantity
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                  defaultValue={quantity}
                  readOnly
                />
              </label>
            </div>

            <div className="form-control w-full my-6">
              <label>
                <div className="label">
                  <span className="label-text text-black">Order Quantity</span>
                </div>
                <input
                  {...register("orderedQuantity", { required: true })}
                  type="number"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <label></label>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label>
                <div className="label">
                  <span className="label-text text-black">Name</span>
                </div>
                <input
                  {...register("userName", { required: true })}
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered w-full"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </label>
            </div>

            <div className="form-control w-full">
              <label>
                <div className="label">
                  <span className="label-text text-black">Email</span>
                </div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  defaultValue={user?.email}
                  readOnly
                />
              </label>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="form-control w-1/2 my-6">
              <label>
                <div className="label">
                  <span className="label-text text-black">Price</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  defaultValue={price}
                />
              </label>
            </div>
          </div>

          <div className="text-center my-10">
            <button className="btn">Order Food</button>
            <Link to={"/"}>
              <button className="btn ml-4">Back To Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
