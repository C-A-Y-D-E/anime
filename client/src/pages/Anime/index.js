import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown/index";
import { Section } from "../../globalStyles";
import { getAnime } from "../../store/actions/animes";
import BannerSkeleton from "../../components/skeletons/BannerSkeleton";
import ShareModal from "../../components/ShareModal";
import { BannerContainer } from "./AnimeStyle";
import SlideCard from "../../components/SlideCard/SlideCard";
import LazyLoad from "react-lazyload";
import ErrorPage from "../ErrorPage";
import Reviews from "../../components/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
const Anime = ({ match }) => {
  const [select, setSelect] = useState(1);
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();

  const anime = useSelector((states) => states.anime);
  const likes = useSelector((states) => states.likes);
  const user = useSelector((states) => states.user);

  let ses;
  let episodes = null;
  if (anime.result.episodes) {
    ses = anime.result.episodes.reduce(
      (unique, episode) =>
        unique.includes(episode.season) ? unique : [...unique, episode.season],
      []
    );
    episodes = anime.result.episodes.filter((epi) => epi.season === select);
  }

  useEffect(() => {
    dispatch(getAnime(match.params.id));
  }, [match.params.id, dispatch]);
  if (anime && anime.error) {
    return <ErrorPage status={anime.error.statusCode} />;
  }

  return (
    <div>
      <BannerContainer>
        {anime.loading ? (
          <BannerSkeleton />
        ) : (
          <Banner
            likes={likes}
            bookmarks={user.user.bookmarks}
            anime={anime.result}
            openModal={setshowModal}
          />
        )}
      </BannerContainer>
      <Section>
        <Dropdown active={select} select={setSelect} seasons={ses} />

        <SlideCard episodes={episodes} />
        <AnimatePresence exitBeforeEnter>
          {showModal ? (
            <ShareModal
              link={`${window.location.protocol}//${window.location.host}/${anime.result._id}`}
              onClose={() => setshowModal(false)}
            />
          ) : null}
        </AnimatePresence>
      </Section>

      <Section>
        <LazyLoad height={100} offset={50}>
          <Reviews match={match} user={user.user} />
        </LazyLoad>
      </Section>
    </div>
  );
};

export default Anime;
