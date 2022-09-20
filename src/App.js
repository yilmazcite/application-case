import Sidebar from "./components/Sidebar/Sidebar";
import StatusBar from "./components/Header/StatusBar";
import Post from "./components/Post/Post";

function App() {
  return (
    <div>
      <StatusBar />
      <Sidebar />
      <Post />
    </div>
  );
}

export default App;
