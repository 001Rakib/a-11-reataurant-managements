import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('/Firefly Create a banner for a restaurant management website with a sleek and modern design, featurin.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md md:max-w-full">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold text-white">
              EpicureEase Excellence in Every Bite
            </h1>
            <p className="mb-5 text-gray-200">
              At EpicureEase, we believe that dining should be an extraordinary
              experience. Our passion for culinary perfection is reflected in
              every dish we create, offering you a symphony of flavors crafted
              from the finest ingredients. Join us for a journey where every
              bite tells a story of excellence and delight. Discover a place
              where gourmet cuisine meets unparalleled service, making every
              visit a memorable one.
            </p>
            <Link to={"/all-menu"}>
              <button className="btn btn-primary">All Menu</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
