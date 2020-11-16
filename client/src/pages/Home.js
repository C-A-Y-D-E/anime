import React from "react";
import Slider from "../components/Slider";
import Main from "../components/Main";
import { Section } from "../globalStyles";
import { connect } from "react-redux";
import SliderSkeletion from "../components/skeletons/Slider";
const Home = ({ animes, best }) => {
  return (
    <Section>
      {animes.loading ? <SliderSkeletion /> : <Slider items={animes} />}
      <Main animes={animes} />
    </Section>
  );
};
const mapStateToProps = (states) => ({
  animes: states.animes,
  best: states.best,
});
export default connect(mapStateToProps)(Home);
