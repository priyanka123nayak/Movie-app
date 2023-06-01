import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// redux--
import { useSelector } from "react-redux";

import "./style.scss";
import useFetch from "../../../hooks/useFetch";

// HigherOrderComponent--->to reduce repeatative code
import ContentWrapper from "../../../components/componentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const SearchQueryHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover , Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show .............."
              onKeyUp={SearchQueryHandle}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
