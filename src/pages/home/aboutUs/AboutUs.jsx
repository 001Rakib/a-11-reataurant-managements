import OnlineOrderImg from "../../../../public/FB_IMG_1717221373551.jpg";
const AboutUs = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold text-green-400 my-16">
        <span className="bg-green-200 px-2 py-1 rounded-md">About Us</span>
      </h1>
      <div className="max-w-screen-xl mx-auto flex-col px-5 space-y-2 md:px-0  md:flex md:flex-row my-20 gap-10 justify-center items-center">
        <div className="max-w-lg">
          <img src={OnlineOrderImg} alt="" />
        </div>
        <div className="flex max-w-md flex-col gap-4">
          <p>
            Welcome to EpicureEase, where culinary artistry and exceptional
            dining converge. At EpicureEase, our mission is to deliver an
            unparalleled gastronomic experience that delights your senses and
            satisfies your soul.
          </p>
          <p>
            Founded by a team of passionate food enthusiasts and seasoned
            professionals, EpicureEase is dedicated to the art of fine dining.
            Our chefs bring creativity and precision to every plate, using the
            freshest ingredients sourced from local farms and global markets.
            Whether you are joining us for a casual meal or a special occasion,
            our diverse menu promises a journey through flavors that are both
            innovative and comforting.
          </p>
          <p>
            At the heart of EpicureEase is our commitment to excellence. From
            the warm, inviting ambiance of our restaurant to the attentive
            service provided by our staff, we strive to make every visit
            remarkable. We believe that dining is more than just a meal – it is
            an experience that fosters connection, celebration, and joy.
          </p>
          <p>
            Thank you for choosing EpicureEase. We look forward to welcoming you
            and providing an exceptional dining experience that will keep you
            coming back for more.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
