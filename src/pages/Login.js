import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="relative flex h-[100vh] md:flex-row">
      <div className="absolute md:relative w-full h-full md:w-[50vw] md:h-auto">
        <img
          src="/images/loginImage.svg"
          alt="Login-Image"
          className="w-full h-full object-top object-cover"
        />
      </div>

      <div className="relative z-10 flex justify-center items-center w-full md:w-[50vw] bg-white/25 md:bg-transparent">
        <div className="absolute top-4 left-4 md:left-8 md:top-8 z-20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-lily-green border-[1px] border-lily-green justify-center rounded-full w-8 h-8"
          >
            <ArrowLeft size={16} className="" />
          </button>
        </div>

        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col w-[75%] justify-center"
        >
          <h1 className="text-[--lily-green] font-[600] text-[28px] text-center mb-10 md:mb-14">
            Welcome Back!
          </h1>

          <input
            type="email"
            placeholder="Your Email Address"
            className="border-[0.25px] border-[--lily-light] outline-none text-sm px-5 py-5 w-full mb-10 rounded"
            required
          />
          <div className="relative mb-10">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              className="border-[0.25px] border-[--lily-light] outline-none text-sm px-5 py-5 w-full rounded pr-16"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-lily-green text-lily-light font-semibold py-5 rounded hover:bg-lily-green/60 text-center"
          >
            LOGIN
          </button>

          <div className="w-full justify-between flex text-lily-green font-medium md:font-normal text-sm md:text-[15px] mt-4 md:mt-8">
            <Link to="/signup">Create an account</Link>
            <Link to="/"> Forgot Password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
