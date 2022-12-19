import React from "react";

import facebookWhite from "../../assets/social/facebook-white.svg";
import instagramWhite from "../../assets/social/instagram-white.svg";
import twitterWhite from "../../assets/social/twitter-white.svg";

import AppStore from "../../assets/store/app-store.svg";
import PlayStore from "../../assets/store/play-store.svg";
import MicroStore from "../../assets/store/windows-store.svg";
import Colors from "../../Theme/Colors";

const SocialIcons = ({ imagePath }) => (
  <img src={imagePath} style={{ paddingRight: 20, height: 30, width: 30 }} />
);
const StoreIcons = ({ imagePath, styles }) => (
  <img
    src={imagePath}
    style={{ paddingRight: 20, height: 80, width: 120, ...styles }}
  />
);

const Footer = () => {
  return (
    <div
      style={{
        padding: 50,
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: Colors.Black,
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 15,
        }}
      >
        Home Terms and Conditions Privacy Policy Collection Statement Help
        Manage Account
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 800,
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        Copyright @ 2016 Demo Streaming alrights reserved
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <SocialIcons imagePath={facebookWhite} />
          <SocialIcons imagePath={instagramWhite} />
          <SocialIcons imagePath={twitterWhite} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <StoreIcons imagePath={AppStore} />
          <StoreIcons imagePath={PlayStore} />
          <StoreIcons
            imagePath={MicroStore}
            styles={{ height: 50, width: 100 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
