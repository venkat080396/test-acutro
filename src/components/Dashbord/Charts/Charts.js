import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
// react plugin used to create charts
import { Line, Bar, Pie } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import SelectAutoWidth from "./select";
import IIcon from "../../../icon/iButton.svg";

// core components
import { chartExample5 } from "./variable/charts";

const Charts = () => {
  return (
    <Card
      className="card-chart"
      style={{
        borderRadius: "15px",
        padding: "20px 15px 15px 15px",
        border: "1px solid white",
        position: "relative",
        background: "rgba(255,255,255,0.0)",
        zIndex: 4,
        boxSizing: "border-box",
      }}
    >
      <IconButton style={{ position: "absolute", top: "1px", right: "1px" }}>
        <img src={IIcon} alt=""></img>
      </IconButton>
      <CardHeader style={{ display: "flex" }}>
        <div>
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
            <i className="tim-icons icon-chart-bar-32 text-primary" /> Comfort
            Levels
          </CardTitle>
          <Typography
            style={{
              font: "Nunito",
              fontWeight: "200, Extra Light",
              color: "#F4F4F4",
              margin: "2.5px",
            }}
          >
            Selected Building / Selected Room / Selected Asset
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <SelectAutoWidth
            title="Building"
            array={["Building1", "Building2", "Building3", "Building4"]}
          ></SelectAutoWidth>
          <SelectAutoWidth
            title="Room"
            array={["Room1", "Room2", "Room3", "Room4"]}
          ></SelectAutoWidth>
        </div>
      </CardHeader>
      <Box mt={4}></Box>
      <CardBody>
        <div className="chart-area">
          <Line data={chartExample5.data} options={chartExample5.options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default Charts;
