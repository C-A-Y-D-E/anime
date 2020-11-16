import React, { useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { useParams } from "react-router-dom";
import { getAnime } from "../../store/actions/animes";
import { useDispatch, useSelector } from "react-redux";
const VideoPlayer = () => {
  let { animeId, seasonId, episodeId } = useParams();
  const dispatch = useDispatch();
  const anime = useSelector((states) => states.anime);
  let ses;
  let episode;
  if (anime.result.episodes) {
    ses = anime.result.episodes.filter(
      (episode) => episode.season === Number(seasonId)
    );

    episode = ses.find((s) => s.episode_no === Number(episodeId));
  }

  useEffect(() => {
    dispatch(getAnime(`/${animeId}`));
  }, [dispatch, animeId]);
  return (
    <div>
      {episode && (
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: episode.video_url,
                type: "video/mp4",
              },
            ],
          }}
          options={{
            autoplay: "autoplay",
          }}
        />
      )}
    </div>
  );
};

export default VideoPlayer; //can useParams in connect
