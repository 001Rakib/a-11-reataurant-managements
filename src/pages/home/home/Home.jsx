import { Helmet } from "react-helmet";
import Navbar from "../../shared/navbar/Navbar";
import Banner from "../banner/Banner";
import ToopFoods from "../topFoods/ToopFoods";
import OrderOnline from "../orderOnline/OrderOnline";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EpicureEase | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <ToopFoods></ToopFoods>
      <OrderOnline></OrderOnline>
    </div>
  );
};

export default Home;
