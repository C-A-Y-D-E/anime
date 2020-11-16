import React, { useState } from "react";
import Animes from "../../DashboardComponents/Animes";
import Episodes from "../../DashboardComponents/Episodes";
import User from "../../DashboardComponents/User";
import Tabs from "../../DashboardComponents/DashboardTabs";
import { Section } from "../../globalStyles";
const Dashboard = () => {
  const [active, setActive] = useState("animes");
  const toggle = (data) => {
    setActive(data);
  };

  return (
    <Section>
      <Tabs active={active} toggle={toggle} />
      {active === "animes" && <Animes />}
      {active === "episodes" && <Episodes />}
      {active === "users" && <User />}
    </Section>
  );
};

export default Dashboard;
