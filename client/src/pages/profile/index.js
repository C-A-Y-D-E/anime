import React, { useState } from "react";

import UserTabs from "../../UserComponents/UserTabs";
import MobileTabs from "../../UserComponents/UserTabs/MobileTabs";
import UserDetails from "../../UserComponents/UserDetails";
import UserLikes from "../../UserComponents/UserLikes";
import UserBookmarks from "../../UserComponents/UserBookmarks";
import { UserLayout } from "./userStyles";
const User = () => {
  const [active, setactive] = useState("profile");

  const toggle = (data) => {
    setactive(data);
  };
  return (
    <UserLayout>
      <UserTabs active={active} toggle={toggle} />
      <MobileTabs active={active} toggle={toggle} />
      {active === "profile" ? <UserDetails /> : null}
      {active === "likes" ? <UserLikes /> : null}
      {active === "bookmarks" ? <UserBookmarks /> : null}
    </UserLayout>
  );
};

export default User;
