import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="divider px-6"></div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FcGoogle></FcGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
