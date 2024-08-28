import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Icon } from "@iconify/react";

import { createTodolist } from "../../../../services/todolist";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/header";
import Time from "../../components/timePicker";
import clickBanner from "../../assets/images/click-placeir.png";


export default function ToDoListPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description || !time) {
      alert("Please fill in all fields");
      return;
    }
    
    const newTarget = {
      title,
      description,
      time,
    };

    try {
      await createTodolist(newTarget);
      navigate("/dashboard/todolist");
    } catch (err) {
      alert("Failed to create todolist target");
      navigate("/dashboard/todolist/target", { replace: true });
      setTitle("");
      setDescription("");
      setTime("");
    }
  };
  
  return (
    <div className="flex flex-row">
      <Navbar />
      <Sidebar />
      <div className="flex w-full h-screen pt-24 pl-20 pr-4">
        {/* From data area */}
        <form onSubmit={handleSubmit} className="flex flex-col w-full h-full gap-10 lg:basis-1/2">
          <div className="w-full h-full">
            <h1 className="px-12 text-3xl font-bold text-center">Add target for each days to improve in 30 days</h1>
            <div id="title" className="flex flex-col w-full gap-2 pl-4 mt-5">
              <label className="text-lg font-bold">Title</label>
              <input 
                required
                type="text" 
                className="w-full px-5 py-2 border-2 rounded-lg" placeholder="input your title..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}  
              />
            </div>
            <div id="desc" className="flex flex-col w-full gap-2 pl-4 mt-5">
              <label className="text-lg font-bold">Description</label>
              <textarea
                required
                className="w-full px-3 py-2 border-2 rounded-lg"
                placeholder="input your description..."
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Time setTime={setTime} />
          </div>
        </form>
        {/* Banner and action button area */}
        <div className="flex flex-col justify-between w-full h-full lg:basis-1/2 pl-7">
          {/* Banneer Motivation area */}
          <div className="relative flex gap-5 h-auto w-full bg-[#F7EBE6] rounded-2xl">
            <span className="pr-[200px] text-4xl font-bold p-5">Enthusiasm towards becoming a better person</span>
            <div className="absolute right-[-1%] top-[10%] z-50 bg-car-banner w-[400px] h-[230px] bg-cover bg-center bg-no-repeat"></div>
          </div>
          <h2 className="pt-24 text-3xl font-bold text-center">Don`t forget to check mark your to do list every day</h2>
          <div className="flex justify-center items-center flex-col w-full h-[20%]">
            <img src={clickBanner} alt="Click banner placeir" className="bg-center bg-no-repeat bg-cover" />
          </div>
          {/* Action button area */}
          <div className="flex items-center justify-between w-full h-full basis-1/2">
            <button onClick={
              () => {
                window.location.href = "/dashboard/todolist";
              }
            } className="w-[40%] h-auto px-5 py-2 text-xl font-bold text-black bg-white border-black border-2 rounded-3xl hover:text-white hover:bg-black hover:border-gray-500 hover:border-none">Back</button>
            <button
              onClick={handleSubmit}
              className="w-[40%] h-auto px-5 py-2 text-xl font-bold text-black bg-white border-black border-2 rounded-3xl hover:text-white hover:bg-black hover:border-gray-500 hover:border-none">Add Target</button>
          </div>
        </div>
      </div>
    </div>
  );
}