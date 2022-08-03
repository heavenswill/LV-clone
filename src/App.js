import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Back3 from "./components/Back3";
import Back4 from "./components/Back4";
import Back5 from "./components/Back5";
import Back6 from "./components/Back6";
import Footer from "./components/Footer";
import Last from "./components/Last";
import { useMediaQuery } from "react-responsive";
import ResponsiveHeader from "./components/ResponsiveHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
  faVolumeHigh,
  faVolumeXmark,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [play, setPlay] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [volumi, setVolumi] = useState(0);
  const vidRef = useRef();
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    if (nav === false) {
      setNav(true);
    }
    if (nav === true) {
      setNav(false);
    }
  };

  const mediahandler = useMediaQuery({ query: "(max-width: 855px)" });

  const handlePlayVideo = () => {
    if (play === false) {
      setPlay(true);
      vidRef.current.play();
    }
    if (play === true) {
      setPlay(false);
      vidRef.current.pause();
    }
  };

  const handlePlayVideo12 = () => {
    if (playing === false) {
      setPlaying(true);
      vidRef.current.play();
    }
    if (playing === true) {
      setPlaying(false);
      vidRef.current.pause();
    }
  };

  const volumeHandler = () => {
    if (volumi === 0) {
      setVolumi(1);
      document.getElementById("videoo").muted = false;
    }
    if (volumi === 1) {
      setVolumi(0);
      document.getElementById("videoo").muted = true;
    }
  };

  return (
    <div className="App">
      <ResponsiveHeader usenav={nav} navClick={navHandler}></ResponsiveHeader>
      {!nav && (
        <div>
          <Header></Header>

          <div>
            {mediahandler && (
              <video
                loop
                autoPlay
                muted
                ref={vidRef}
                id="videoo"
                className="video okey"
              >
                <source
                  src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/yCJw381WWd_MD.mp4"
                  type="video/mp4"
                />
              </video>
            )}
            {!mediahandler && (
              <video
                loop
                autoPlay
                muted
                ref={vidRef}
                id="videoo"
                className="video okey"
              >
                <source
                  src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/UOi3LqWVSQ_HD.mp4"
                  type="video/mp4"
                />
              </video>
            )}

            {mediahandler && (
              <div className="control">
                {volumi === 0 && (
                  <FontAwesomeIcon
                    className="offsound"
                    icon={faVolumeXmark}
                    onClick={volumeHandler}
                  />
                )}
                {volumi === 1 && (
                  <FontAwesomeIcon
                    className="onsound"
                    icon={faVolumeHigh}
                    onClick={volumeHandler}
                  />
                )}
                {play && (
                  <FontAwesomeIcon
                    className="play"
                    icon={mediahandler ? faPause : faCirclePause}
                    onClick={handlePlayVideo}
                    size="2x"
                  />
                )}
                {!play && (
                  <FontAwesomeIcon
                    className="stop"
                    icon={mediahandler ? faPlay : faCirclePlay}
                    onClick={handlePlayVideo}
                    size="2x"
                  />
                )}
              </div>
            )}
            <div className="controller">
              <div className="springDiv">
                <h1 className="ms-5 spring">FROM DAY TO NIGHT</h1>
              </div>
              <div className="buttons">
                <div>
                  <button className="buttonn ms-5 rounded-0 btn-lg">
                    <p className="button">Shop the Twist</p>
                  </button>
                </div>
                {!mediahandler && (
                  <div className="control">
                    {volumi === 0 && (
                      <FontAwesomeIcon
                        className="offsound"
                        icon={faVolumeXmark}
                        onClick={volumeHandler}
                      />
                    )}
                    {volumi === 1 && (
                      <FontAwesomeIcon
                        className="onsound"
                        icon={faVolumeHigh}
                        onClick={volumeHandler}
                      />
                    )}
                    {play && (
                      <FontAwesomeIcon
                        className="play"
                        icon={faCirclePause}
                        onClick={handlePlayVideo}
                        size="2x"
                      />
                    )}
                    {!play && (
                      <FontAwesomeIcon
                        className="stop"
                        icon={faCirclePlay}
                        onClick={handlePlayVideo}
                        size="2x"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="handle">
            <div className="h11">
              <h1>THE NEW SOFT TRUNK</h1>
            </div>
            <div className="images-button">
              <button className="buttonn ms-5 rounded-0 btn-lg ">
                <p className="button1">Discover the Collection</p>
              </button>
            </div>
          </div>
          <Back3 />
          <Back4 />
          <div className="handle2">
            <div className="h112">
              <h1>ICONIC HANDBAGS</h1>
            </div>
            <div className="images-button2">
              <button className="buttonn ms-5 rounded-0 btn-lg ">
                <p className="button1">Shop All Bags</p>
              </button>
            </div>
          </div>
          <Back5 />
          <Back6 />
          <div className="handle3">
            <div className="h113">
              <h1>TOWARDS A DREAM</h1>
            </div>
            <div className="images-button3">
              <button className="buttonn ms-5 rounded-0 btn-lg ">
                <p className="button1">Discover the New Chapter</p>
              </button>
            </div>
          </div>
          <Last />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
