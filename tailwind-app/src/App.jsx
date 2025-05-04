import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar>
        <div className=" bg-orange-500 p-8 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white">¡Hola Tailwind CSS!</h1>
          <p className="mt-4 text-white">
            Tailwind CSS es increíblemente poderoso. ¡No puedo esperar para
            seguir explorándolo!
          </p>
        </div>
      </Navbar>
    </>
  );
}

export default App;
