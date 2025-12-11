import { useContext, useState } from "react";
import logo from "/NexBuy.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { auth, provider } from "../../utils/Firebase";
import { signInWithPopup } from "firebase/auth";
import { userDataContext } from "../context/UserContext";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      setLoading(false);
      toast.success("User login successfully");
      getCurrentUser();
      navigate("/");
    } catch (error) {
      setLoading(false);
      toast.error("User login failed");
      console.log(error);
    }
  };

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        `${serverUrl}/api/auth/google-login`,
        { name, email },
        { withCredentials: true }
      );
      getCurrentUser();
      navigate("/");
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-[40px] rounded-full" src={logo} alt="" />
        <h1 className="text-[22px] font-sans">NexBuy</h1>
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">Welcome to NexBuy, Place your order</span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
          onSubmit={handleLogin}
        >
          <div
            className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"
            onClick={googleLogin}
          >
            <img src={google} alt="" className="w-[20px]" />
            Login with google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div> OR{" "}
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]">
            <input
              type="email"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show && (
              <IoEyeSharp
                className="w-[20px] h-[20px] cursor-pointer absolute right-[15%] bottom-[43%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoEyeOffSharp
                className="w-[20px] h-[20px] cursor-pointer absolute right-[15%] bottom-[43%]"
                onClick={() => setShow((prev) => !prev)}
              />
            )}

            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
              {loading ? <Loading /> : "Login"}
            </button>
            <p className="flex gap-[10px]">
              You have no account?
              <span
                onClick={() => navigate("/registration")}
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
              >
                New Registration
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
