import React from "react";
import { useSelector } from "react-redux";
import { store } from "react-notifications-component";
const Notification = () => {
  const error = useSelector((state) => state.error);
  const showNotify = () => {
    store.addNotification({
      title: "Try Again",
      message: `${error.message}`,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };
  if (error && error.message) {
    showNotify();
  }

  return <div></div>;
};

export default Notification;
