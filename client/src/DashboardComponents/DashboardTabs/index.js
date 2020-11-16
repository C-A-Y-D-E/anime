import React from "react";
import { TabGrid, TabItem } from "./TabStyle";
const Tabs = ({ active, toggle }) => {
  return (
    <div>
      <TabGrid>
        <TabItem
          background={active === "animes" ? true : false}
          onClick={() => toggle("animes")}
        >
          <h2>Animes</h2>
        </TabItem>
        <TabItem
          background={active === "episodes" ? true : false}
          onClick={() => toggle("episodes")}
        >
          <h2>Episodes</h2>
        </TabItem>
        <TabItem
          background={active === "users" ? true : false}
          onClick={() => toggle("users")}
        >
          <h2>Users</h2>
        </TabItem>
      </TabGrid>
    </div>
  );
};

export default Tabs;
