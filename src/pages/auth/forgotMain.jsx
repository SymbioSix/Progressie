import Navbar from "../../components/navbar";
import Input from "../../components/inputAuth";
import Button from "../../components/buttonAuth";
import overlayAuth from "../../assets/images/process.png";


export default function ForgotPage() {
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
              <div className="w-full h-auto ml-0 lg:ml-10 px-10 py-5 mt-10 bg-white rounded-[40px] shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)]">
                <h3 className="my-5 text-lg font-bold text-center sm:text-2xl">
                  Create a new password
                </h3>
                <div className="flex flex-col w-full h-full gap-3 mb-10">
                  <div className="w-full h-auto password">
                    <label htmlFor="password" className="font-bold">
                      New Password
                    </label>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Type your password"
                      icon="fluent:key-32-filled"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full gap-2">
                    <Button
                      text="Create"
                      link="/login"
                      className="w-fit px-12 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.3)] text-black py-2 text-base sm:text-2xl font-bold bg-[#F7EBE6] rounded-full"
                    />
                  </div>
                </div>
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