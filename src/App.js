import Sidebar from "./components/Sidebar/Sidebar";
import Post from "./components/Post/Post";
import "./index.css";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Post />
    </div>
  );
}

export default App;
