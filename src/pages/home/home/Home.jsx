import { Helmet } from "react-helmet";
import Navbar from "../../shared/navbar/Navbar";
import Banner from "../banner/Banner";
import ToopFoods from "../topFoods/ToopFoods";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EpicureEase | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <ToopFoods></ToopFoods>
    </div>
  );
};

export default Home;
