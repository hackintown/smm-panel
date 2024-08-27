import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, error } = useSelector((state) => state.auth);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(formData));
    if (result.meta.requestStatus === "fulfilled") {
      console.log("Navigation triggered");
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-bg">
      <div className="relative w-full h-full">
        <img
          className="w-full"
          src="https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg"
          alt="login-bg"
        />
      </div>
      <div className="absolute top-52 w-full h-full">
        <div className="container max-w-[1200px]">
          <div className="flex bg-white items-center rounded-2xl overflow-hidden">
            <div className="left-content flex-1">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/036/255/337/small_2x/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-free-vector.jpg" />
            </div>

            <div className="right-content flex-1">
              <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-md bg-card rounded-lg p-6 shadow-sm border">
                  <h2 className="text-2xl text-center text-foreground font-semibold mb-4">
                    Login
                  </h2>
                  <form className="flex flex-col" onSubmit={onSubmit}>
                    <input
                      placeholder="email"
                      className="text-foreground border-0 bg-input rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      required
                      autoComplete="off"
                    />
                    <input
                      placeholder="Password"
                      className="text-foreground border-0 bg-input rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={onChange}
                      required
                      autoComplete="current-password"
                    />
                    <div className="flex items-center justify-between flex-wrap">
                      <label
                        className="text-sm text-foreground cursor-pointer"
                        htmlFor="remember-me"
                      >
                        <input
                          className="text-foreground bg-background mx-1"
                          id="remember-me"
                          type="checkbox"
                        />
                        Remember me
                      </label>
                      <Link
                        className="text-sm text-blue-500 hover:underline mb-0.5"
                        to="/login"
                      >
                        Forgot password?
                      </Link>
                      <p className="text-foreground text-sm mt-4">
                        Don't have an account?
                        <Link
                          className="text-sm text-blue-500 -200 hover:underline mt-4"
                          to="/register"
                        >
                          Signup
                        </Link>
                      </p>
                    </div>
                    <Button
                      varient="default"
                      size="lg"
                      className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                      type="submit"
                    >
                      {loading ? "Loading" : "Login"}
                    </Button>
                  </form>
                  {error && <p style={{ color: "red" }}>{error.message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
