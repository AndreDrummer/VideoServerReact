import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './style/index.css';
import NavBar from './components/navbar'
import VideoPlayer from './components/videoPlayer'
import VideoList from './components/videoList'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ display: "inline-block", marginTop: "40px" }} >
        <VideoPlayer />
      </div>

      <div style={{ display: "inline", marginTop: "0px" }}>
        <VideoList />
      </div>
    </div >
  );
}

export default App;
