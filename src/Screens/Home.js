import React from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../Theme/Colors";

const CardsForMoviesAndSeries = ({ label, desc, navigateTo }) => (
  <div
    onClick={navigateTo}
    style={{
      height: 210,
      width: 130,
      cursor: "pointer",
      marginRight: 20,
      marginBottom: 20,
    }}
  >
    <div
      style={{
        color: "white",
        height: 180,
        width: 130,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.Black,
        backgroundImage: `url(/placeholder.png)`,

        backgroundRepeat: "no-repeat",
        backgroundSize: 250,
        backgroundPositionY: 10,
        backgroundPositionX: -60,
      }}
    >
      {label}
    </div>
    <div style={{ marginTop: 10 }}>{desc}</div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "50vh",
        padding: 20,
        paddingLeft: 100,
        paddingRight: 100,
        display: "flex",
      }}
    >
      <CardsForMoviesAndSeries
        label="Series"
        desc="Popular Series"
        navigateTo={() => {
          navigate("/series");
        }}
      />
      <CardsForMoviesAndSeries
        label="Movies"
        desc="Popular Movies"
        navigateTo={() => {
          navigate("/movie");
        }}
      />
    </div>
  );
};

export default Home;
