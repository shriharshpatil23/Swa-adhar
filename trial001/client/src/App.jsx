import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Connect from "./components/ConnectButton";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" class="full-screen" >
        <div>
          <h1>Swaadhar</h1>
          <br></br>
          <Connect/>
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
