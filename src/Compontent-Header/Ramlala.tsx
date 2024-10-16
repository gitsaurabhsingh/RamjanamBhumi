import React, { useState } from "react";
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

  const handleRamlalaVedio = () => {
    setIsVideoEnded(true);
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
      {RamlalaVedio && (
        <div className={Style.modalOverlay}>
          <div className={Style.modalContent}>
            <video autoPlay controls onEnded={handleRamlalaVedio}>
              <source
                src="https://www.bhaskar.com/__static__/2.0/ram-mandir/videos/v8/hi-desktop-p3-v3.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Show the offerings section only if the video has ended */}
          {isVideoEnded && (
            <div className={Style.Mainbox}>
              <div className={Style.Overlay}></div>
              <div className={Style.ModelFlower}>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handlePusp}>
                    <img className={Style.rotatingImage} src={line} alt="" />
                    <img src={pushp} alt="" />
                  </div>
                  <h2>पुष्प चढ़ाएं </h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleladdu}>
                    <img className={Style.rotatingImage} src={line} alt="" />
                    <img src={laddu} alt="" />
                  </div>
                  <h2>प्रसाद चढ़ाएं </h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleArti}>
                    <img className={Style.rotatingImage} src={line} alt="" />
                    <img src={jyot} alt="" />
                  </div>
                  <h2>श्रीराम ज्योति जलाएं</h2>
                </div>
                <div className={Style.Modelpushp}>
                  <div className={Style.Modelpusph1} onClick={handleDeep}>
                    <img className={Style.rotatingImage} src={line} alt="" />
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
      />
    </>
  );
};

export default Ramlala;
