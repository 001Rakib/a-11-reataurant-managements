import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateFood = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const {
    _id,
    foodName,
    foodImage,
    category,
    quantity,
    price,
    country,
    description,
  } = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const updatedFoodItem = {
      foodName: data.foodName,
      foodImage: data.foodImage,
      category: data.foodCategory,
      quantity: data.quantity,
      userName: data.userName,
      email: data.email,
      price: parseFloat(data.price),
      country: data.foodOrigin,
      description: data.description,
    };
    const updateFood = await axiosSecure.patch(
      `/foods/${_id}`,
      updatedFoodItem
    );

    if (updateFood.data.modifiedCount) {
      // show success popup
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${data.foodName} is updated successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/my-profile/my-added-food");
    }
  };

  return (
    <div>
      <div>
        <Helmet>
          <title>My Profile | Update Food</title>
        </Helmet>
        <div className="max-w-screen-xl mx-auto bg-green-400 px-5  text-black py-24">
          <h1 className="text-center text-4xl font-bold text-green-400">
            <span className="bg-green-200 px-2 py-1 rounded-md">
              Update Food
            </span>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full my-6">
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
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text text-black">Food Image URL</span>
              </div>
              <input
                {...register("foodImage", { required: true })}
                type="text"
                placeholder="Food Image URL"
                className="input input-bordered w-full"
                defaultValue={foodImage}
              />
            </label>

            <div className="flex gap-6">
              {/* category */}
              <div className="form-control w-full my-6">
                <label>
                  <div className="label">
                    <span className="label-text text-black">Category</span>
                  </div>
                  <input
                    {...register("foodCategory", { required: true })}
                    type="text"
                    placeholder="Food Category"
                    className="input input-bordered w-full"
                    defaultValue={category}
                  />
                </label>
              </div>

              <div className="form-control w-full my-6">
                <label>
                  <div className="label">
                    <span className="label-text text-black">Quantity</span>
                  </div>
                  <input
                    {...register("quantity", { required: true })}
                    type="number"
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                    defaultValue={quantity}
                  />
                </label>
              </div>
            </div>
            <label>
              <div className="label">
                <span className="label-text font-bold text-black">Add By</span>
              </div>
            </label>
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
                  />
                </label>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="form-control w-1/2 my-6">
                <label>
                  <div className="label">
                    <span className="label-text text-black">
                      Food Origin (Country)
                    </span>
                  </div>
                  <input
                    {...register("foodOrigin", { required: true })}
                    type="text"
                    placeholder="Food Origin(Country)"
                    className="input input-bordered w-full"
                    defaultValue={country}
                  />
                </label>
              </div>
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
            <div>
              <label className="form-control ">
                <div className="label">
                  <span className="label-text text-black">
                    Short description of the food item
                  </span>
                </div>
                <textarea
                  {...register("description", { required: true })}
                  className="textarea textarea-bordered  w-full"
                  placeholder="Short Description"
                  defaultValue={description}
                ></textarea>
              </label>
            </div>
            <div className="text-center my-10">
              <button className="btn">Update Food</button>
              <Link to={"/"}>
                <button className="btn ml-4">Back To Home</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
