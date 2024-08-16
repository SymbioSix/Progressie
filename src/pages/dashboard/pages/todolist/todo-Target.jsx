// import { Icon } from "@iconify/react";

import Sidebar from "../../components/sidebar";
import Navbar from "../../components/header";
import Time from "../../components/timePicker";


export default function ToDoListPage() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Sidebar />
      <div className="flex flex-col w-full h-screen pt-24 pl-20 pr-4">
        <form className="flex w-full gap-10 lg:h-[85%]">
          <div className="basis-1/2">
            <h1 className="px-12 text-3xl font-bold text-center">Add target for each days to improve in 30 days</h1>
            <div id="title" className="flex flex-col w-full gap-2 pl-4 mt-5">
              <label className="text-lg font-bold">Title</label>
              <input type="text" className="w-full px-5 py-2 border-2 rounded-lg" placeholder="input your title..." />
            </div>
            <div id="desc" className="flex flex-col w-full gap-2 pl-4 mt-5">
              <label className="text-lg font-bold">Description</label>
              <textarea className="w-full px-3 py-2 border-2 rounded-lg" placeholder="input your description..." rows={4  } />
            </div>
            <Time />  
          </div>
          <div className="basis-1/2"></div>
        </form>
        <div className="flex w-full gap-10 lg:h-[15%] rounded-2xl pl-7">
          <div className="flex items-center w-full h-full basis-1/2">
            <h2 className="text-2xl font-bold">Don`t forget to check mark your to do list every day</h2>
          </div>
          <div className="flex items-center justify-between w-full h-full basis-1/2">
            <button onClick={
              () => {
                window.location.href = "/dashboard/todolist";
              }
            } className="w-[40%] h-auto px-5 py-2 text-xl font-bold text-black bg-white border-black border-2 rounded-3xl hover:text-white hover:bg-black hover:border-gray-500 hover:border-none">Back</button>
            <button onClick={
              () => {
                window.location.href = "/dashboard/todolist";
              }
            } className="w-[40%] h-auto px-5 py-2 text-xl font-bold text-black bg-white border-black border-2 rounded-3xl hover:text-white hover:bg-black hover:border-gray-500 hover:border-none">Add Target</button>
          </div>
        </div>
      </div>
    </div>
  );
}