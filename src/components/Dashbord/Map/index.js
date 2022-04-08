import React from "react";
import ReactDOM from "react-dom";
import { Box, IconButton, Select, Typography } from "@mui/material";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import IIcon from "../../../icon/iButton.svg";
import Map from "./map";
const MapContainer = () => {
  return (
    <Card
      style={{
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        padding: "20px 15px 15px 15px",
        border: "1px solid white",
        background: "rgba(255,255,255,0.0)",
        zIndex: 4,
      }}
    >
      <IconButton style={{ position: "absolute", top: "1px", right: "1px" }}>
        <img src={IIcon} alt=""></img>
      </IconButton>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardTitle
          tag="h3"
          style={{
            color: "#FFFFFF",
            fontWeight: "700, Bold",
            font: "Nunito",
            fontSize: "24px",
            margin: "2.5px",
          }}
        >
          <i className="tim-icons icon-chart-bar-32 text-primary" /> Portfolio
          Map
        </CardTitle>
        <a
          style={{
            cursor: "pointer",
            color: "#F4F4F4",
            fontSize: "16px",
            padding: "0px 10px 0px 0px",
          }}
        >
          <u>See all sites</u>
        </a>
      </Box>

      <Card
        className="card-chart"
        style={{
          border:0,
          borderRadius: "15px",
          position: "relative",
          background: "rgba(255,255,255,0.0)",
          zIndex: 4,
          boxSizing: "border-box",
        }}
      >
        <CardBody>
          <Map></Map>
        </CardBody>
      </Card>
    </Card>
  );
};
export default MapContainer;
