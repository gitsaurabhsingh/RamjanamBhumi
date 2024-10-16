import React, { useRef } from "react";
import Style from "./videodetail.module.scss";

export interface IType {
  puspData: any;
  setPuspData: any;
  ArtiData: any;
  setArtiData: any;
  ladduData: any;
  setLadduData: any;
  DeepData: any;
  setDeepData: any;
}

const VideoDetail: React.FC<IType> = ({
  puspData,
  setPuspData,
  ArtiData,
  setArtiData,
  ladduData,
  setLadduData,
  DeepData,
  setDeepData,
}) => {
  const puspVideoRef: any = useRef(null);
  const puspAudioRef: any = useRef(null);
  const ArtiVideoRef: any = useRef(null);
  const ArtiAudioRef: any = useRef(null);
  const ladduVideoRef: any = useRef(null);
  const ladduAudioRef: any = useRef(null);
  const DeepVideoRef: any = useRef(null);
  const DeepAudioRef: any = useRef(null);
  const handlePushPlay = () => {
    if (puspVideoRef.current) {
      puspVideoRef.current.play();
    }
    if (puspAudioRef.current) {
      puspAudioRef.current.play();
    }
  };

  const handlePuspEnd = () => {
    setPuspData(false);
  };

  const handleArtiPlay = () => {
    if (ArtiVideoRef.current) {
      ArtiVideoRef.current.play();
    }
    if (ArtiAudioRef.current) {
      ArtiAudioRef.current.play();
    }
  };
  const handleArtiEnd = () => {
    setArtiData(false);
  };
  const handleladduPlay = () => {
    if (ladduVideoRef.current) {
      ladduVideoRef.current.play();
    }
    if (ladduAudioRef.current) {
      ladduAudioRef.current.play();
    }
  };
  const handleladduEnd = () => {
    setLadduData(false);
  };
  const handleDeepPlay = () => {
    if (DeepVideoRef.current) {
      DeepVideoRef.current.play();
    }
    if (DeepAudioRef.current) {
      DeepAudioRef.current.play();
    }
  };
  const handleDeepEnd = () => {
    setDeepData(false);
  };

  return (
    <div className={Style.VideoDetail}>
      {puspData && (
        <div className={Style.Detail}>
          <video
            controls
            ref={puspVideoRef}
            onCanPlay={handlePushPlay}
            onEnded={handlePuspEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/mobile/Flower_SingleAnim-vp9-chrome.webm" />
          </video>
          <audio ref={puspAudioRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/flower-shower.mp3" />
          </audio>
        </div>
      )}
      {ladduData && (
        <div className={Style.Detail}>
          <video
            controls
            ref={ladduVideoRef}
            onCanPlay={handleladduPlay}
            onEnded={handleladduEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/mobile/Prasad_SingleAnim-vp9-chrome.webm" />
          </video>
          <audio ref={ladduAudioRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/ram-jyoti-audio.mp3" />
          </audio>
        </div>
      )}
      {ArtiData && (
        <div className={Style.Detail}>
          <video
            controls
            ref={ArtiVideoRef}
            onCanPlay={handleArtiPlay}
            onEnded={handleArtiEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/mobile/RamJyoti_SingleAnim-vp9-chrome.webm" />
          </video>
          <audio ref={ArtiAudioRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/ram-jyoti-audio.mp3" />
          </audio>
        </div>
      )}
      {DeepData && (
        <div className={Style.Detail}>
          <video
            controls
            loop
            ref={DeepVideoRef}
            onCanPlay={handleDeepPlay}
            onEnded={handleDeepEnd}
          >
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/interactions/v1/mobile/AartiThali_Loop-vp9-chrome.webm" />
          </video>
          <audio ref={DeepAudioRef}>
            <source src="https://www.bhaskar.com/__static__/2.0/ram-mandir/audio/v1/aarti-audio.mp3" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
