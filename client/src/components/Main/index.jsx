import React, { useState } from "react";
import {
  Header,
  HeaderItem,
  Tab,
  HeaderContainer,
  CardContainer,
} from "./MainStyle";
import MainSearch from "../MainSearch";
import Card from "../CardItem";
import CardSkeleton from "../skeletons/CardItem";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  popularAnimes,
  ratedAnimes,
  getAnimes,
} from "../../store/actions/animes";

const Main = ({ animes }) => {
  const [active, setActive] = useState("/");
  const dispatch = useDispatch();
  const searchResults = useSelector((states) => states.animes.search);
  const [showSearch, setShowSearch] = useState(false);
  const toggle = (state) => {
    setActive(state);
  };

  React.useEffect(() => {
    dispatch(getAnimes());
  }, [dispatch]);

  const loadCards = () => {
    if (animes.loading) {
      return (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      );
    } else if (animes.results) {
      return animes.results.map((anime) => (
        <Card key={anime.id} anime={anime} />
      ));
    } else {
      return <p>error....</p>;
    }
  };
  return (
    <Tab
      onClick={() => {
        setShowSearch(false);
      }}
    >
      <HeaderContainer>
        <Header>
          <HeaderItem
            active={active === "/" ? true : false}
            onClick={() => toggle("/", dispatch(getAnimes()))}
          >
            Recent
          </HeaderItem>
          <HeaderItem
            active={active === "/popular" ? true : false}
            onClick={() => toggle("/popular", dispatch(popularAnimes()))}
          >
            Popular
          </HeaderItem>
          <HeaderItem
            active={active === "/rated" ? true : false}
            onClick={() => toggle("/rated", dispatch(ratedAnimes()))}
          >
            Rated
          </HeaderItem>
          <HeaderItem>
            <MainSearch
              searchResults={searchResults}
              setShowSearch={setShowSearch}
              showSearch={showSearch}
            />
          </HeaderItem>
        </Header>
      </HeaderContainer>
      <CardContainer>{loadCards()}</CardContainer>
    </Tab>
  );
};

Main.prototype = {
  animes: PropTypes.array,
};

export default Main;
