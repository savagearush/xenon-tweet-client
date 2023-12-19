import "./contact.css";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const initialState = { jobfunction: "none", country: "none" };
  const [inputs, setInputs] = useState(initialState);
  const ref = useRef();

  const doSubmit = async (inputs) => {
    console.log("Inputs", inputs);
    const response = await axios.post(
      "http://localhost:5000/user/contact",
      inputs
    );

    if (response.status === 200) {
      ref.current.reset();
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
          success: (response) => `${response.data}`,
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
    <form ref={ref} onSubmit={handleSubmit} className="contact__container">
      <h3>Contact Us</h3>
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
        <label htmlFor="company-name">Company Name</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="company"
          id="company"
        />
      </div>
      <div>
        <label htmlFor="mobileNo">Phone Number</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="mobileNo"
          id="mobileNo"
        />
      </div>
      <div>
        <label htmlFor="jobFunction">Job Function</label>
        <br />
        <select
          onChange={handleChange}
          name="jobfunction"
          defaultValue="none"
          id="jobfunction"
        >
          <option value="none">Please Select</option>
          <option value="director">Director</option>
          <option value="CEO">CEO</option>
          <option value="headoffuntion">Head of Funtion</option>
        </select>
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <br />
        <select
          onChange={handleChange}
          name="country"
          defaultValue="none"
          id="country"
        >
          <option value="none">Please Select</option>
          <option value="india">India</option>
          <option value="japan">Japan</option>
          <option value="usa">Usa</option>
        </select>
      </div>

      <button type="submit" className="submit_button">
        Submit
      </button>
      <p>
        Already have account ? <Link to="/login">Login Here</Link>
      </p>
    </form>
  );
}

export default Contact;
