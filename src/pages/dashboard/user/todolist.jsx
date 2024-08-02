import Sidebar from "../components/sidebar";
import Navbar from "../components/header";


export default function ToDoListPage() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <Sidebar />
    </div>
  );
}
