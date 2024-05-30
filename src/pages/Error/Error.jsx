import { Player } from "@lottiefiles/react-lottie-player";
const Error = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Player
        className="w-full"
        autoplay
        loop
        src="https://lottie.host/6a88ade6-b54c-4b30-b9aa-6849abcf6e47/nHi6SUWPWP.json"
        style={{ height: "400px", width: "400px" }}
      ></Player>
    </div>
  );
};

export default Error;
