import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import "./Back6.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
  faVolumeHigh,
  faVolumeXmark,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Back6 = () => {
  const [play1, setPlay1] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [volumi1, setVolumi1] = useState(0);
  const vidRef1 = useRef();

  const mediahandler = useMediaQuery({ query: "(max-width: 855px)" });

  const handlePlayVideo1 = () => {
    if (play1 === false) {
      setPlay1(true);
      vidRef1.current.play();
    }
    if (play1 === true) {
      setPlay1(false);
      vidRef1.current.pause();
    }
  };

  const volumeHandler1 = () => {
    if (volumi1 === 0) {
      setVolumi1(1);
      document.getElementById("videoo4").muted = false;
    }
    if (volumi1 === 1) {
      setVolumi1(0);
      document.getElementById("videoo4").muted = true;
    }
  };

  return (
    <div className="App">
      <div>
        {mediahandler && (
          <video
            loop
            autoPlay
            muted
            ref={vidRef1}
            id="videoo4"
            className="video1"
          >
            <source
              src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/2iAbiyBoFx_MD.mp4"
              type="video/mp4"
            />
          </video>
        )}
        {!mediahandler && (
          <video
            loop
            autoPlay
            muted
            ref={vidRef1}
            id="videoo4"
            className="video1"
          >
            <source
              src="
              https://lv-vod.fl.freecaster.net/vod/louisvuitton/ZjCbGJjT9y_HD.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {mediahandler && (
          <div className="control1">
            {volumi1 === 0 && (
              <FontAwesomeIcon
                className="offsound"
                icon={faVolumeXmark}
                onClick={volumeHandler1}
              />
            )}
            {volumi1 === 1 && (
              <FontAwesomeIcon
                className="onsound"
                icon={faVolumeHigh}
                onClick={volumeHandler1}
              />
            )}
            {play1 && (
              <FontAwesomeIcon
                className="play"
                icon={mediahandler ? faPause : faCirclePause}
                onClick={handlePlayVideo1}
                size="2x"
              />
            )}
            {!play1 && (
              <FontAwesomeIcon
                className="stop"
                icon={mediahandler ? faPlay : faCirclePlay}
                onClick={handlePlayVideo1}
                size="2x"
              />
            )}
          </div>
        )}
        <div className="controller4">
          <div className="springDiv">
            <h1 className="ms-5 spring">THE SPITIT OF MODERN TRAVEL</h1>
          </div>
          <div className="buttons1">
            <div>
              <button className="buttonn ms-5 rounded-0 btn-lg">
                <p className="button">Shop the Twist</p>
              </button>
            </div>
            {!mediahandler && (
              <div className="control1">
                {volumi1 === 0 && (
                  <FontAwesomeIcon
                    className="offsound"
                    icon={faVolumeXmark}
                    onClick={volumeHandler1}
                  />
                )}
                {volumi1 === 1 && (
                  <FontAwesomeIcon
                    className="onsound"
                    icon={faVolumeHigh}
                    onClick={volumeHandler1}
                  />
                )}
                {play1 && (
                  <FontAwesomeIcon
                    className="play"
                    icon={faCirclePause}
                    onClick={handlePlayVideo1}
                    size="2x"
                  />
                )}
                {!play1 && (
                  <FontAwesomeIcon
                    className="stop"
                    icon={faCirclePlay}
                    onClick={handlePlayVideo1}
                    size="2x"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Back6;
