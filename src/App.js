import Sidebar from "./components/Sidebar/Sidebar";
import StatusBar from "./components/Header/StatusBar";
import Post from "./components/Post/Post";
import "./index.css";

function App() {
  return (
    <div>
      <div>
        <Sidebar />
        <StatusBar />
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
}

export default App;
