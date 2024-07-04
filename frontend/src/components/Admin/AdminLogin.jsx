import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdmin({ username, password })).then((action) => {
      if (loginAdmin.fulfilled.match(action)) {
        navigate("/admin/dashboard");
      }
    });
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
                    Admin Login
                  </h2>
                  <form className="flex flex-col" onSubmit={handleSubmit}>
                    <input
                      placeholder="Username"
                      className="text-foreground border-0 bg-input rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="text"
                      value={username}
                      autoComplete="off"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      placeholder="Password"
                      className="text-foreground border-0 bg-input rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                      type="password"
                      value={password}
                      autoComplete="new-password"
                      onChange={(e) => setPassword(e.target.value)}
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

export default AdminLogin;
