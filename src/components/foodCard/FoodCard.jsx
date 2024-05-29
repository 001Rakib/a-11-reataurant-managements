/* eslint-disable react/prop-types */
const FoodCard = ({ food }) => {
  return (
    <div>
      <div className="card  bg-base-100">
        <figure>
          <img src={food.foodImage} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {food.foodName} </h2>
          <p> {food.foodCategory} </p>
          <p> Price:$ {food.price} </p>
          <p> Quantity: {food.quantity} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
