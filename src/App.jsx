import React from "react";
import Login from "./components/Login";

export default function App() {
  return (
    // full screen container
    <div className="min-h-screen bg-[#222] flex items-center justify-center">
      <div className="w-[1000px] max-w-full h-[520px] bg-transparent shadow-lg rounded-md overflow-hidden">
        <Login />
      </div>
    </div>
  );
}