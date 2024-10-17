import React, { useEffect, useState } from "react";
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
  const [mobileImage, setMobileImage] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const mobileImage = () => {
      const mobileWidth = window.innerWidth <= 768;
      setMobileImage(mobileWidth);
    };
    window.addEventListener("resize", mobileImage);
    return () => {
      window.removeEventListener("resize", mobileImage);
    };
  }, []);

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
          <div className={Style.headerIcon2}>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </div>
      {showImage && (
        <div className={Style.BannerDisk}>
          <div className={Style.Banner}>
            {!mobileImage ? (
              <img src={Banner} alt="Ram Mandir Banner" />
            ) : (
              <img
                src="https://images.bhaskarassets.com/thumb/2048x0/web2images/web-frontend/3D-Ram-Mandir/new-main-bg-v1-mobile-hi.jpg"
                alt=""
              />
            )}
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
