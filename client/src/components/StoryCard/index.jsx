import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Card, CardItem, CardTitle, CardImage } from "./StoryCardStyle";
import history from "./../../history";
import { bestAnimes } from "../../store/actions/animes";
import { useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";

const StoryCard = ({ best }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bestAnimes());
  }, []);

  if (best.loading) {
    return (
      <Card>
        <CardItem style={{ boxShadow: "none" }}>
          <Skeleton height={"100%"} width={"100%"} />
        </CardItem>
        <CardItem style={{ boxShadow: "none" }}>
          <Skeleton height={"100%"} width={"100%"} />
        </CardItem>
        <CardItem style={{ boxShadow: "none" }}>
          <Skeleton height={"100%"} width={"100%"} />
        </CardItem>
        <CardItem style={{ boxShadow: "none" }}>
          <Skeleton height={"100%"} width={"100%"} />
        </CardItem>
        <CardItem style={{ boxShadow: "none" }}>
          <Skeleton height={"100%"} width={"100%"} />
        </CardItem>
      </Card>
    );
  }
  if (best.error) {
    return <p>{best.error}</p>;
  }
  return (
    <Card>
      {best.results.map((anime) => (
        <CardItem key={anime.id} onClick={() => history.push(`/${anime._id}`)}>
          <CardImage>
            <LazyLoad style={{ height: "100%" }}>
              <img
                height="100%"
                width="100%"
                src={anime.image_url}
                alt={anime.title}
              />
            </LazyLoad>
          </CardImage>
          <CardTitle>{anime.title.toUpperCase()}</CardTitle>
        </CardItem>
      ))}
    </Card>
  );
};

export default StoryCard;
