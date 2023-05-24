import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataForApi } from "./utils/api";

function App() {
  useEffect(() => {
    apitesting();
  }, []);
  const apitesting = () => {
    fetchDataForApi("/movie/popular").then((res) => {
      console.log("res: ", res);
    });
  };
  return (
    <>
      <div style={{ color: "white" }}>React</div>
    </>
  );
}

export default App;
