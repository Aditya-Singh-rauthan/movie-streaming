import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PageForLoadingAndError } from "../../App";
import movieData from "../../feed/sample.json";

const Cards = ({ value }) => {
  const { url, height, width } = value?.images?.["Poster Art"];

  return (
    <div
      style={{
        height: 180,
        width: 90,
        cursor: "pointer",
        marginRight: 20,
        marginBottom: 40,
      }}
    >
      <img src={url} height={150} width={90} />
      <div style={{ marginTop: 10 }}>{value.title}</div>
    </div>
  );
};

const MoviesAndSeries = () => {
  const { pathname } = useLocation();
  const [data, updateData] = useState();

  useEffect(() => {
    const MoS = pathname.split("/")[1];
    let tempData = movieData?.["entries"].filter((value) => {
      return value.programType === MoS;
    });
    updateData(tempData);
  }, []);


  if(!data){
    return <PageForLoadingAndError/>
  }

  return (
    <div
      style={{
        minHeight: "50vh",
        padding: 20,
        paddingLeft: 100,
        paddingRight: 100,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          //   scro
        }}
      >
        {data
          ? data.map((value, index) => <Cards key={index} value={value} />)
          : void 0}
      </div>
      {/* <Cards /> */}
    </div>
  );
};

export default MoviesAndSeries;
