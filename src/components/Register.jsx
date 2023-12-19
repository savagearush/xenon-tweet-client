import "./register.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const initialState = { name: "", email: "", password: "" };
  const [inputs, setInputs] = useState(initialState);

  const navigate = useNavigate();

  const doSubmit = async (inputs) => {
    const response = await axios.post(
      "https://xenontweet.onrender.com/user/register",
      inputs
    );

    if (response.status === 200) {
      document.cookie = `accessToken=${response.headers["x-auth-token"]}`;
      navigate("/profile");
      return response;
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

  return (
    <form onSubmit={handleSubmit} className="register__container">
      <h3>Create new Account</h3>
      <div>
        <label htmlFor="email">Name</label>
        <br />
        <input type="text" onChange={handleChange} name="name" id="name" />
      </div>
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
      <button type="submit" className="signup_button">
        Sign Up
      </button>
      <p>
        Already have account ? <Link to="/login">Login Here</Link>
      </p>
    </form>
  );
}
