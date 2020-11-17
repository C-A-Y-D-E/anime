import React, { useEffect } from "react";
import Slider from "../components/Slider";
import Main from "../components/Main";
import { Section } from "../globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { bestAnimes } from "../store/actions/animes";
import SliderSkeletion from "../components/skeletons/Slider";
const Home = () => {
  const dispatch = useDispatch();
  const animes = useSelector((states) => states.animes);
  const best = useSelector((states) => states.best);
  useEffect(() => {
    dispatch(bestAnimes());
  }, [dispatch]);

  return (
    <Section>
      {best.loading ? <SliderSkeletion /> : <Slider best={best} />}
      <Main animes={animes} />
    </Section>
  );
};

export default Home;
