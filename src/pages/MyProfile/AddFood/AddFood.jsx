import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddFood = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);

    const foodItem = {
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
    const addFood = await axiosSecure.post("/foods", foodItem);
    console.log(addFood.data);

    if (addFood.data.insertedId) {
      // show success popup
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${data.foodName} is added to All Food Items`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>My Profile | Add Food</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto bg-green-400 px-5 py-24 text-black">
        <h1 className="text-center text-4xl font-bold text-green-400">
          <span className="bg-green-200 px-2 py-1 rounded-md">
            Add a Food Item
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
              ></textarea>
            </label>
          </div>
          <div className="text-center my-10">
            <button className="btn">Add Food</button>
            <Link to={"/"}>
              <button className="btn ml-4">Back To Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
