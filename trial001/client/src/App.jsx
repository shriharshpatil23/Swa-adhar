/* eslint-disable react/jsx-pascal-case */
import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Connect from "./components/ConnectButton";
import UploadDocuments from "./components/UploadDocuments";
import Documents from "./components/Documents";
import Footer from "./components/Footer";
import firebase from "Firebase.js";
import storage from 'Firebase.js'
import files_upload from "./components/Patient";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" class="full-screen" >
        <div>
          <h1>Swaadhar</h1>
          <br></br>
          <Connect/>
          <Documents/>
          <UploadDocuments/>
        </div>
      </div>
    </EthProvider>
  );
}


export default App;
