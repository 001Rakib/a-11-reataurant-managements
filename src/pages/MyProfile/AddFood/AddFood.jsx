import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddFood = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
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
    const addFood = await axiosPublic.post("/foods", foodItem);
    console.log(addFood.data);

    if (addFood.data.insertedId) {
      // show success popup
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${data.name} is added to the menu`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto bg-green-400 px-5 py-5 text-white">
        <h1 className="text-center text-4xl font-bold text-green-400">
          <span className="bg-green-200 px-2 py-1 rounded-md">
            Add a Food Item
          </span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text text-white">Food Name</span>
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
              <span className="label-text text-white">Food Image URL</span>
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
                  <span className="label-text text-white">Category</span>
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
                  <span className="label-text text-white">Quantity</span>
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
              <span className="label-text font-bold text-white">Add By</span>
            </div>
          </label>
          <div className="flex gap-6">
            <div className="form-control w-full">
              <label>
                <div className="label">
                  <span className="label-text text-white">Name</span>
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
                  <span className="label-text text-white">Email</span>
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
                  <span className="label-text text-white">
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
                  <span className="label-text text-white">Price</span>
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
                <span className="label-text text-white">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;