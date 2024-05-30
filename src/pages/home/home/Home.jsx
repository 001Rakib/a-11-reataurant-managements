import { Helmet } from "react-helmet";
import Navbar from "../../shared/navbar/Navbar";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EpicureEase | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
};

export default Home;
