import Sidebar from "./components/Sidebar/Sidebar";
import StatusBar from "./components/Header/StatusBar";
import Post from "./components/Post/Post";

function App() {
  return (
    <div>
      <div>
        <StatusBar />
        <Sidebar />
      </div>
      <Post />
    </div>
  );
}

export default App;
