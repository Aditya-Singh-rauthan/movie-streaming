import React from "react";
import { useLocation } from "react-router-dom";
import Colors from "../../Theme/Colors";

const Header = () => {
  const { pathname } = useLocation();

  const tempText = pathname.split("/")?.[1];

  return (
    <>
      <div
        style={{
          backgroundColor: Colors.Blue,
          padding: 10,
          paddingLeft: 100,
          paddingRight: 100,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 800 }}>DEMO Streaming</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: 30 }}>Login</div>
          <div style={{ backgroundColor: Colors.Black, padding: 10 }}>
            Start your free trial
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: Colors.Black,
          padding: 10,
          paddingLeft: 100,
          paddingRight: 100,
          fontSize: 20,
          fontWeight: 600,
          color: "white",
        }}
      >
        <div>
          Popular
          {tempText === "movie" || tempText === "series"
            ? " " +
              tempText.substring(0, 1).toUpperCase() +
              tempText.substring(1)
            : " Titles"}
        </div>
      </div>
    </>
  );
};

export default Header;
