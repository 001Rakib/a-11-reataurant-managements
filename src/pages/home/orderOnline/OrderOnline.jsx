import { Label, TextInput } from "flowbite-react";
import OnlineOrderImg from "../../../../public/FB_IMG_1717221369534.jpg";
import Swal from "sweetalert2";
const OrderOnline = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-green-400 my-16">
        <span className="bg-green-200 px-2 py-1 rounded-md">Order Online</span>
      </h1>
      <div className="max-w-screen-xl mx-auto flex-col px-5 space-y-2 md:px-0  md:flex md:flex-row my-20 gap-10 justify-center items-center">
        <div className="max-w-lg">
          <img src={OnlineOrderImg} alt="" />
        </div>
        <div className="flex max-w-md flex-col gap-4">
          <Label>Your Name</Label>
          <TextInput type="text" id="name" placeholder="Your Name" />
          <Label>Email</Label>
          <TextInput type="email" id="email" placeholder="email" />
          <Label>Phone</Label>
          <TextInput type="number" id="phone" placeholder="Your Phone Number" />
          <Label>Food You Want To Order</Label>
          <TextInput type="text" id="foodName" placeholder="Food Name" />
          <Label>Your Address</Label>
          <TextInput type="text" id="address" placeholder="Delivery Address" />
          <button
            onClick={() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `Your order placed successfully`,
                showConfirmButton: false,
                timer: 1500,
              });
            }}
            className="btn btn-primary"
          >
            Order
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
