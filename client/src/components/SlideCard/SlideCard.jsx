import React from "react";
import history from "../../history";
import { useLocation } from "react-router-dom";

import {
  CardItem,
  CardImage,
  CardContent,
  CardHeading,
  CardSubHeading,
  CardContainer,
} from "./style";
import LazyLoad from "react-lazyload";

const SlideCard = ({ episodes }) => {
  const location = useLocation();
  const play = (episode) => {
    history.push(
      `${location.pathname}/${episode.season}/${episode.episode_no}`
    );
  };

  return (
    <CardContainer>
      {episodes &&
        episodes.map((episode) => (
          <CardItem
            whileHover={{
              x: -5,
              y: -5,
            }}
            key={episode._id}
            onClick={() => play(episode)}
          >
            <CardImage>
              <LazyLoad style={{ height: "100%" }} offset={100}>
                <img
                  src={episode.episode_img}
                  alt={episode.title}
                  height="100%"
                  width="100%"
                />
              </LazyLoad>
            </CardImage>
            <CardContent>
              <CardHeading>Episode {episode.episode_no}</CardHeading>
              <CardSubHeading>{episode.title}</CardSubHeading>
            </CardContent>
          </CardItem>
        ))}
    </CardContainer>
  );
};

export default SlideCard;
