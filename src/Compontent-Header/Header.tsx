import React, { useState } from "react";
import Style from "./Header.module.scss";
import Saurabh from "../img/zzzzzzzz-removebg1-preview.png";
import Banner from "../img/Rammandir.jpg";
import Button from "../img/pura-mandir.png";
import Button1 from "../img/ram-lala-ke-darshon.png";
import Video from "./Video";
import Ramlala from "./Ramlala";

const Header = () => {
  const [showImage, setShowImage] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [RamlalaVedio, setRamlalaVedio] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setShowImage(false);
  };

  const openRamlala = () => {
    setRamlalaVedio(true);
    setShowImage(false);
  };
  return (
    <div className={Style.header}>
      <div className={Style.headerflex}>
        <div className={Style.headerImg}>
          <img src={Saurabh} alt="Profile" />
        </div>
        <div className={Style.headerSpeak}>
          <i className="fa-solid fa-volume-xmark"></i>
          <span>बेहतर अनुभव के लिए ऑडियो ऑन करें</span>
        </div>
        <div className={Style.headerIcon}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-solid fa-link"></i>
        </div>
      </div>
      {showImage && (
        <div className={Style.BannerDisk}>
          <div className={Style.Banner}>
            <img src={Banner} alt="Ram Mandir Banner" />
          </div>
          <div className={Style.BannerButton}>
            <div className={Style.BannerButtonMandir}>
              <button onClick={openModal} className={Style.videoButton}>
                <img src={Button} alt="Pura Mandir" />
              </button>
            </div>
            <div className={Style.BannerButtonMandir}>
              <button onClick={openRamlala}>
                <img src={Button1} alt="Ram Lala Darshon" />
              </button>
            </div>
          </div>
        </div>
      )}
      <Video firstVedio={isModalOpen} setFirstVedio={setIsModalOpen} />

      <Ramlala RamlalaVedio={RamlalaVedio} setRamlalaVedio={setRamlalaVedio} />
    </div>
  );
};

export default Header;
