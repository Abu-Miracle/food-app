import { useState } from "react";
import { Link } from "react-router-dom";

export default function SIgnUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-[100vh]">
      <div className="w-[50vw]">
        <img
          src="/images/signupImage.svg"
          alt="Login-Image"
          className="w-full h-full object-top object-cover"
        />
      </div>

      <div className="flex justify-center items-center w-[50vw] text-center">
        <form
          action=""
          method="post"
          className="flex flex-col w-[75%] justify-center"
        >
          <h1 className="text-[--lily-green] font-[600] text-[26px] mb-10">
            Welcome to Lilies!
          </h1>

          <input
            type="email"
            placeholder="Your First Name"
            className="border-[0.25px] border-[--lily-light] outline-none text-sm px-5 py-5 w-full mb-10 rounded"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="border-[0.25px] border-[--lily-light] outline-none text-sm px-5 py-5 w-full mb-10 rounded"
          />
          <div className="relative mb-10">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              className="border-[0.25px] border-[--lily-light] outline-none text-sm px-5 py-5 w-full rounded pr-16"
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
            className="w-full bg-lily-green text-lily-light font-semibold py-5 rounded hover:bg-lily-green/60"
          >
            SIGNUP
          </button>

          <div className="w-full flex text-lily-green justify-center font-normal text-[15px] mt-8">
            <p>
              Aleady have an account?{" "}
              <Link className="font-bold" to="/login">
                LOGIN
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
