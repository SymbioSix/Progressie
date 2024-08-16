import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Navbar from "../../components/navbar";
import Input from "../../components/inputAuth";
import Button from "../../components/buttonAuth";
import overlayAuth from "../../assets/images/process.png";


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    navigate('/dashboard');
  };
  
  return (
    <>
      <Navbar />
      <main className="w-full h-screen max-h-screen bg-white">
        <section
          id="login"
          className="w-full h-full bg-gradient-to-t from-[#979797] from-10% to-white to-90%"
        >
          <div className="container flex flex-wrap w-full h-full">
            <div className="w-full lg:w-[35%] lg:max-w-[35%] h-full flex justify-center items-center">
              <div className="w-full h-auto ml-0 lg:ml-10 px-10 py-5 mt-10 bg-white container-layout-auth rounded-[40px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)]">
                <h3 className="my-10 text-3xl font-bold text-center sm:text-4xl">
                  Login
                </h3>
                {error && <p className="mb-4 text-sm font-bold text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col w-full h-full gap-8 mb-10">
                  <div className="w-full h-auto username">
                    <label htmlFor="username" className="font-bold">
                      Username
                    </label>
                    <Input
                      name="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Type your username"
                      icon="mdi:account"
                    />
                    <label className="flex items-center gap-2 text-sm sm:text-base">
                      <input
                        type="checkbox"
                        className="accent-black w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]"
                      />
                      remember me
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
                      icon="fluent:key-32-filled"
                    />
                    <p className="text-sm sm:text-base">
                      <Link to="/forgot-confirm-email" className="text-[#062EFF]">
                        forgot
                      </Link>{" "}
                      password?
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-2">
                    <Button
                      type="submit"
                      text="Login"
                      onClick={handleSubmit}
                      className="w-fit px-12 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)] text-black py-2 text-base sm:text-2xl font-bold bg-[#F7EBE6] rounded-full"
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