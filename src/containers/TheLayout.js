import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import IdleTimer from "react-idle-timer";
import { useIdleTimer } from "react-idle-timer";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

const TheLayout = () => {
  const idleTimer = useRef(null);
  const history = useHistory();
  const handleOnIdle = (event) => {
    console.log("user is idle", event);
    //console.log("last active", getLastActiveTime());
    localStorage.removeItem("loginToken")
    history.push("/login")
  };

  const handleOnActive = (event) => {
    //console.log("user is active", event);
    //console.log("time remaining", getRemainingTime());
  };

  const handleOnAction = (event) => {
    //console.log("user did something", event);
  };
// 1000 * 60 * 15
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * 15,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });
  return (
    <>
      {/*<IdleTimer 
    ref = {idleTimer}
    element={document}
    stopOnIdle={true}
    onIdle={onIdle}
    onActive={onActive}
    onAction={onAction}
    timeout={1000 * 10 * 1}
    />*/}
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    </>
  );
};

export default TheLayout;
