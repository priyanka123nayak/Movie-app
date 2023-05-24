import { useState, useEffect } from "react";
import "./App.css";
import { fetchDataForApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import SearchResult from "./pages/searchResult/SearchResult";
import PagenotFound from "./pages/404/PagenotFound";

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    apitesting();
  }, []);
  const apitesting = () => {
    fetchDataForApi("/movie/popular").then((res) => {
      console.log("res: ", res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details/>} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
