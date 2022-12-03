/* eslint-disable react/jsx-pascal-case */
import { EthProvider } from "./contexts/EthContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import doctor from "./components/Doctor";

import Connect from "./components/ConnectButton";
import UploadDocuments from "./components/UploadDocuments";
import Documents from "./components/Documents";
import Footer from "./components/Footer";
// import firebase from "Firebase.js";
// import storage from 'Firebase.js'
// import files_upload from "./components/Patient";
import "./App.css";

function App() {
  return (
    <EthProvider>
    <BrowserRouter>
      <Routes>
          <switch>
            <Route path="/Doctor" />

            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </switch>
         
      </Routes>
    </BrowserRouter>

    </EthProvider>
  );
}


export default App;
