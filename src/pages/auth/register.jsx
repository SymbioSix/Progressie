import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { signUpUser } from "../../services/auth";
import Navbar from "../../components/navbar";
import Input from "../../components/inputAuth";
import Button from "../../components/button";
import overlayAuth from "../../assets/images/process.png";


export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // this built in function will reset the default behavior of the form
    e.preventDefault();

    if (!email || !username || !password || !confirmPass) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPass) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUpUser({ email, username, password });
      navigate("/login");
    } catch (error) {
      setError("Registration failed, please try again");
      console.error("Signup error : ", error);
    }
    
  };

  return (
    <>
      <Navbar />
      <main className="w-full h-screen max-h-screen bg-white">
        <section
          id="login"
          className="w-full h-full bg-gradient-to-t from-[#979797] from-10% to-white to-90%"
        >
          <div className="container flex flex-wrap w-full h-full pt-10">
            <div className="w-full lg:w-[35%] lg:max-w-[35%] h-full flex justify-center items-center">
              <div className="w-full h-auto ml-0 lg:ml-10 px-10 bg-white rounded-[40px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)]">
                <h3 className="my-8 text-3xl font-bold text-center sm:text-4xl">
                  SignUp
                </h3>
                {error && (
                  <p className="mb-2 text-sm font-bold text-red-500">{error}</p>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full h-full gap-3 mb-8"
                >
                  {/* Input fields */}
                  <div className="w-full h-auto email">
                    <label htmlFor="email" className="font-bold">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Type your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      icon="mdi:email"
                    />
                  </div>
                  <div className="w-full h-auto username">
                    <label htmlFor="username" className="font-bold">
                      Create Username
                    </label>
                    <Input
                      name="username"
                      type="text"
                      placeholder="Type your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      icon="mdi:account"
                    />
                  </div>
                  <div className="w-full h-auto password">
                    <label htmlFor="password" className="font-bold">
                      Create Password
                    </label>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Type your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      icon="fluent:key-32-filled"
                    />
                  </div>
                  <div className="w-full h-auto confirm">
                    <label htmlFor="confirmPass" className="font-bold">
                      Confirm Password
                    </label>
                    <Input
                      name="confirmPass"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPass}
                      onChange={(e) => setConfirmPass(e.target.value)}
                      icon="fluent:key-32-filled"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-2">
                    <Button
                      type="submit"
                      text="SignUp"
                      onClick={handleSubmit}
                      className="w-fit px-12 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)] text-black py-2 text-base sm:text-2xl font-bold bg-[#F7EBE6] rounded-full"
                    />
                    <p className="text-sm sm:text-base">
                      Or{" "}
                      <Link to="/login" className="text-[#062EFF]">
                        have
                      </Link>{" "}
                      account?
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden lg:flex w-full lg:w-[65%] lg:max-w-[65%] pl-5 h-full justify-end items-center">
              <img
                src={overlayAuth}
                alt="Overlay Process Selfie"
                className="w-full h-full bg-center bg-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}