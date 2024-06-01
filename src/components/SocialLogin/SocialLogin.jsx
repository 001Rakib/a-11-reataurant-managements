/* eslint-disable no-unused-vars */
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosSecure.post("/users", userInfo).then((res) => {
          console.log(res);
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
