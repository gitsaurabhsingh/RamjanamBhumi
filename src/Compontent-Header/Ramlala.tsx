import React, { useEffect, useRef, useState } from "react";
import Style from "./Ramlala.module.scss";
import line from "../img/light-effect.png";
import pushp from "../img/pusph-chadhaye-new.png";
import laddu from "../img/prasad-chadhayye-new.png";
import jyot from "../img/sri-ram-joti-jalayen-new.png";
import arti from "../img/poori-arti-kare-new.png";
import RamlalaDetails from "./RamlalaDetails";

export interface IType {
  RamlalaVedio: any;
  setRamlalaVedio: any;
}

const Ramlala: React.FC<IType> = ({ RamlalaVedio, setRamlalaVedio }) => {
  const [puspData, setPuspData] = useState(false);
  const [ArtiData, setArtiData] = useState(false);
  const [ladduData, setLadduData] = useState(false);
  const [DeepData, setDeepData] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [mobileVideo, setMobileVideo] = useState(window.innerWidth <= 768);
  const RamlaRef: any = useRef(null);
  const [showButton, setShowButton] = useState(false);

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

  function handleRamlalaVedioEnd() {
    setIsVideoEnded(true);
  }

  const handleRamlalaVedio = () => {
    if (RamlaRef.current) {
      const totalDuration = RamlaRef.current.duration;
      RamlaRef.current.currentTime = Math.max(0, totalDuration - 20);
      RamlaRef.current.play();
    }
    setIsVideoEnded(false);
  };

  const handleTimeUpdate = () => {
    if (RamlaRef.current) {
      const currentTime = RamlaRef.current.currentTime;
      if (currentTime >= 35) {
        setShowButton(true);
      }
    }
  };

  const handleLoadMetaData = () => {
    const videoElement = RamlaRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }
  };

  useEffect(() => {
    return () => {
      const videoElement = RamlaRef.current;
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

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
      {RamlalaVedio && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <video
              ref={RamlaRef}
              onLoadedMetadata={() => {
                handleRamlalaVedio();
                handleLoadMetaData();
              }}
              onEnded={handleRamlalaVedioEnd}
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

          {/* Show the offerings section only if the video has ended */}
          {showButton && (
            <div className={Style.Mainbox}>
              <div className={Style.Overlay}></div>
              <div className={Style.ModelFlower}>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handlePusp}>
                    {isVideoEnded && (
                      <img className={Style.rotatingImage} src={line} alt="" />
                    )}
                    <img src={pushp} alt="" />
                  </div>
                  <h2>पुष्प चढ़ाएं </h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleladdu}>
                    {isVideoEnded && (
                      <img className={Style.rotatingImage} src={line} alt="" />
                    )}
                    <img src={laddu} alt="" />
                  </div>
                  <h2>प्रसाद चढ़ाएं </h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleArti}>
                    {isVideoEnded && (
                      <img className={Style.rotatingImage} src={line} alt="" />
                    )}
                    <img src={jyot} alt="" />
                  </div>
                  <h2>श्रीराम ज्योति जलाएं</h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleDeep}>
                    {isVideoEnded && (
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

      <RamlalaDetails
        puspData={puspData}
        setPuspData={setPuspData}
        ArtiData={ArtiData}
        setArtiData={setArtiData}
        ladduData={ladduData}
        setLadduData={setLadduData}
        DeepData={DeepData}
        setDeepData={setDeepData}
        setIsVideoEnded={setIsVideoEnded}
      />
    </>
  );
};

export default Ramlala;
