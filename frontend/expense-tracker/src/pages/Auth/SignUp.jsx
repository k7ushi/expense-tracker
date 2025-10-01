import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { UserContext } from "../../context/userContext";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);

  const {updateUser} = useContext(UserContext)
  const navigate = useNavigate();

  // Handle Sign Up Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirm) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    // TODO: call your API here
    console.log({ profilePic, fullName, email, password });
    navigate("/dashboard");

    // SignUp API Call
    try {

      if (profilePic) {
    const imgUploadRes = await uploadImage(profilePic); 
    profileImageUrl = imgUploadRes?.imageUrl || "";
 
  }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp} className="flex flex-col gap-5">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="Your full name"
              type="text"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
            />
            <Input
              label="Email Address"
              placeholder="john@example.com"
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              label="Password"
              placeholder="Create a password"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Input
              label="Confirm Password"
              placeholder="Re-enter password"
              type="password"
              value={confirm}
              onChange={({ target }) => setConfirm(target.value)}
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="mt-1 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
          <p className="text-sm text-slate-600 text-center mt-2">
            Already have an account?{" "}
            <Link
              className="text-blue-600 font-semibold hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
