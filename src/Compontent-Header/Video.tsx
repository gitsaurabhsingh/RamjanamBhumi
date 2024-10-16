import React, { useEffect, useRef, useState } from "react";
import Style from "./Video.module.scss";

import finger from "../img/new-bell-icon-hi.png";
import darshan from "../img/ram-lala-ke-darshon.png";
import line from "../img/light-effect.png";
import pushp from "../img/pusph-chadhaye-new.png";
import laddu from "../img/prasad-chadhayye-new.png";
import jyot from "../img/sri-ram-joti-jalayen-new.png";
import arti from "../img/poori-arti-kare-new.png";
import VideoDetail from "./VideoDetail";

export interface IType {
  firstVedio: any;
  setFirstVedio: any;
}

const Video: React.FC<IType> = ({ firstVedio, setFirstVedio }) => {
  const secondVedioRef = useRef<HTMLVideoElement | null>(null);
  const secondAudioRef = useRef<HTMLAudioElement | null>(null);
  const fourthAudioRef = useRef<HTMLAudioElement | null>(null);
  const thirdVedioRef = useRef<HTMLVideoElement | null>(null);
  const fourthVedioRef = useRef<HTMLVideoElement | null>(null);
  const fifthVedioRef = useRef<HTMLVideoElement | any>(null); // Added ref for fifth video

  const [secondVedio, setSecondVedio] = useState(false);
  const [thirdVedio, setThirdVedio] = useState(false);
  const [fourthVedio, setFourthVedio] = useState(false);
  const [fifthVedio, setFifthVedio] = useState(false);
  const [puspData, setPuspData] = useState(false);
  const [ArtiData, setArtiData] = useState(false);
  const [ladduData, setLadduData] = useState(false);
  const [DeepData, setDeepData] = useState(false);
  const [iszoon, setIszoom] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [mobileVideo, setMobileVideo] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const mobileImage = () => {
      const mobileWidth = window.innerWidth <= 768;
      setMobileVideo(mobileWidth);
    };
    window.addEventListener("resize", mobileImage);
    return () => {
      window.removeEventListener("resize", mobileImage);
    };
  }, []);

  const handleRamlalaVedio = () => {
    if (fifthVedioRef.current) {
      const totalDuration = fifthVedioRef.current.duration;
      fifthVedioRef.current.currentTime = Math.max(0, totalDuration - 46);
      fifthVedioRef.current.play();
    }
    setIsVideoEnded(false);
  };

  const handleTimeUpdate = () => {
    if (fifthVedioRef.current) {
      const currentTime = fifthVedioRef.current.currentTime;
      if (currentTime >= 35) {
        setIsVideoEnded(true);
      }
    }
  };

  const handleLoadMetaData = () => {
    const videoElement = fifthVedioRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }
  };

  useEffect(() => {
    return () => {
      const videoElement = fifthVedioRef.current;
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handlePlayFirstVedio = () => {
    setSecondVedio(true);
    setIszoom(true);
  };

  const handleVideoEnd = () => {
    setShowButton(true);
  };

  const handleSecondGanti = () => {
    if (secondVedioRef.current) {
      secondVedioRef.current.play();
    }
    if (secondAudioRef.current) {
      secondAudioRef.current.play();
    }
  };

  const handleThirdVedio = () => {
    setFirstVedio(false);
    setSecondVedio(false);
    setThirdVedio(true);
    if (thirdVedioRef.current) {
      thirdVedioRef.current.play();
    }
  };

  const handlePlayThirdVedio = () => {
    setFourthVedio(true);
  };

  const handleFourthGanti = () => {
    if (fourthVedioRef.current) {
      fourthVedioRef.current.play();
    }
    if (fourthAudioRef.current) {
      fourthAudioRef.current.play();
    }
  };

  const handleFifthVedio = () => {
    setFourthVedio(false);
    setThirdVedio(false);
    setFifthVedio(true);
  };

  const handlePusp = () => {
    setPuspData(true);
  };
  const handleArti = () => {
    setArtiData(true);
  };
  const handleladdu = () => {
    setLadduData(true);
  };
  const handleDeep = () => {
    setDeepData(true);
  };

  return (
    <>
      {firstVedio && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <video autoPlay onEnded={handlePlayFirstVedio}>
              <source
                src={
                  !mobileVideo
                    ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v1.mp4"
                    : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v1.mp4"
                }
              />
            </video>
          </div>
        </div>
      )}
      {secondVedio && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <video ref={secondVedioRef}>
              <source
                src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/desktop-ghanta1-vp9-chrome.webm"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={Style.modelfinger} onClick={handleSecondGanti}>
            <img src={finger} alt="" />
          </div>
          <div className={Style.modeldarshan} onClick={handleThirdVedio}>
            <img
              className={`${iszoon ? Style.zoom : ""} ${
                iszoon ? Style.zoomAnimation : ""
              }`}
              src={darshan}
              alt=""
            />
          </div>
          <audio ref={secondAudioRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/ghanta2.mp3" />
          </audio>
        </div>
      )}
      {thirdVedio && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <video
              autoPlay
              ref={thirdVedioRef}
              controls
              onEnded={handlePlayThirdVedio}
            >
              <source
                src={
                  !mobileVideo
                    ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v2.mp4"
                    : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v2.mp4"
                }
              />
            </video>
          </div>
        </div>
      )}
      {fourthVedio && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <video ref={fourthVedioRef}>
              <source
                src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/desktop-ghanta1-vp9-chrome.webm"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={Style.modelfinger} onClick={handleFourthGanti}>
            <img src={finger} alt="" />
          </div>
          <div className={Style.modeldarshan} onClick={handleFifthVedio}>
            <img
              className={`${iszoon ? Style.zoom : ""} ${
                iszoon ? Style.zoomAnimation : ""
              }`}
              src={darshan}
              alt=""
            />
          </div>
          <audio ref={fourthAudioRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/ghanta2.mp3" />
          </audio>
        </div>
      )}
      {fifthVedio && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <video
              onEnded={handleVideoEnd}
              onLoadedMetadata={() => {
                handleRamlalaVedio();
                handleLoadMetaData();
              }}
              ref={fifthVedioRef}
            >
              <source
                src={
                  !mobileVideo
                    ? "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v3.mp4"
                    : "https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-mobile-p3-v3.mp4"
                }
              />
            </video>
          </div>

          {/* Conditional Rendering for Offerings Section */}
          {isVideoEnded && (
            <div className={Style.Mainbox}>
              <div className={Style.Overlay}></div>
              <div className={Style.ModelFlower}>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handlePusp}>
                    {showButton && (
                      <img className={Style.rotatingImage} src={line} alt="" />
                    )}
                    <img src={pushp} alt="" />
                  </div>
                  <h2>पुष्प चढ़ाएं </h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleladdu}>
                    {showButton && (
                      <img className={Style.rotatingImage} src={line} alt="" />
                    )}
                    <img src={laddu} alt="" />
                  </div>
                  <h2>प्रसाद चढ़ाएं </h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleArti}>
                    {showButton && (
                      <img className={Style.rotatingImage} src={line} alt="" />
                    )}
                    <img src={jyot} alt="" />
                  </div>
                  <h2>श्रीराम ज्योति जलाएं</h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleDeep}>
                    {showButton && (
                      <img className={Style.rotatingImage} src={line} alt="" />
                    )}
                    <img src={arti} alt="" />
                  </div>
                  <h2>पूरी आरती करें</h2>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <VideoDetail
        puspData={puspData}
        setPuspData={setPuspData}
        ArtiData={ArtiData}
        setArtiData={setArtiData}
        ladduData={ladduData}
        setLadduData={setLadduData}
        DeepData={DeepData}
        setDeepData={setDeepData}
        setShowButton={setShowButton}
      />
    </>
  );
};

export default Video;
