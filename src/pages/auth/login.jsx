import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { UserContext } from "../../context/user";
import { signIn } from "../../services/auth";
import Navbar from "../../components/navbar";
import Input from "../../components/inputAuth";
import Button from "../../components/button";
// Mengoreksi nama import gambar dari Self-ie ke Selfie sesuai dengan format JavaScript
import Selfie from "../../assets/images/bg-login.svg";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const { token, role, dataUser } = await signIn(email, password);
      login(token, role, dataUser, rememberMe);
      navigate("/dashboard");
    } catch (error) {
      setError("Login failed, please try again");
    }
  };

  return (
    <>
      <Navbar />
      <main className="w-full h-screen max-h-screen bg-gradient-to-t from-white from-5% to-black to-10%">
        <section
          id="login"
          className="w-full h-full "
        >
          <div className="container flex flex-wrap w-full h-full">
            <div className="w-full lg:w-[35%] lg:max-w-[35%] h-full flex justify-center items-center">
              <div className="w-full h-auto ml-0 lg:ml-10 px-10 py-5 mt-10 bg-white container-layout-auth rounded-[40px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)]">
                <h3 className="my-10 text-3xl font-bold text-center sm:text-4xl">
                  Login
                </h3>
                {error && (
                  <p className="mb-4 text-sm font-bold text-red-500">{error}</p>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full h-full gap-8 mb-10"
                >
                  <div className="w-full h-auto username">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Type your email"
                      icon="mdi:account"
                    />
                    <label className="flex items-center gap-2 text-sm sm:text-base">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="accent-black w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
                      />
                      Remember me
                    </label>
                  </div>
                  <div className="w-full h-auto password">
                    <label htmlFor="password" className="font-bold">
                      Password
                    </label>
                    <Input
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Type your password"
                      icon="carbon:password"
                    />
                    <p className="text-sm sm:text-base">
                      <Link
                        to="/forgot-confirm-email"
                        className="text-[#062EFF]"
                      >
                        Forgot
                      </Link>{" "}
                      password?
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-2">
                    <Button
                      type="submit"
                      text="Login"
                      onClick={handleSubmit}
                      className="mt-5 button w-fit px-12 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)] text-black py-2 text-base sm:text-2xl font-bold bg-[#F7EBE6] rounded-full"
                    />
                    <p className="text-sm sm:text-base">
                      Or{" "}
                      <Link to="/register" className="text-[#062EFF]">
                        create
                      </Link>{" "}
                      account
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden lg:flex w-full lg:w-[65%] lg:max-w-[65%] pl-5 h-full justify-end items-center">
              {/* Section Sebelah Kanan */}
              <div className="flex flex-col items-start justify-center w-full h-auto p-56  text-white">
                <p className="text-lg">
                 
                </p>
                {/* Menggunakan gambar Selfie */}
                <img src={Selfie} alt="Login Background" className=" w-80 h-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
