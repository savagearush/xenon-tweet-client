import "./login.css";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Login() {
  const initialState = { email: "", password: "" };
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialState);

  const { setCurrentUser } = useContext(AuthContext);

  const doSubmit = async (inputs) => {
    const response = await axios.post(
      "https://xenontweet.onrender.com/user/login",
      inputs
    );

    if (response.status === 200) {
      document.cookie = `accessToken=${response.headers["x-auth-token"]}`;
      window.location =
        "https://xenon-tweet-client-arush-sharmas-projects.vercel.app/profile";
    }

    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(inputs);
    if (checkAllInputs(inputs)) {
      // showing alert to user
      toast.promise(
        doSubmit(inputs),
        {
          loading: "Loading",
          success: (response) => `Login Sucess`,
          error: ({ response }) => `${response.data}`,
        },
        {
          success: {
            duration: 5000,
          },
          style: {
            minWidth: "250px",
            font: "bold 12px verdana",
          },
        }
      );
    }
  };

  // Check if all inputs are given
  const checkAllInputs = (inputs) => {
    // joi validaton will goes here....
    return true;
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleGoogle = async () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <form onSubmit={handleSubmit} className="login__container">
      <h3>Login in to your Account</h3>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" onChange={handleChange} name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          id="password"
        />
      </div>
      <button type="submit" className="login_button">
        Login
      </button>
      <p>
        {" "}
        Do not have account?{" "}
        <Link to="/register" className="font-bold italic">
          Register Here
        </Link>
      </p>
    </form>
  );
}
