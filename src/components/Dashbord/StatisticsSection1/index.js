import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {  IconButton } from "@mui/material";
import { maxWidth } from "@mui/system";
import Vec from "../../../icon/Vector.svg";
import Monitoring from "../../../icon/Monitoring.svg";
import Lifts from "../../../icon/Lifts.svg";
import Escalators from "../../../icon/Escalator.svg";
import { Grid } from "@mui/material";
import Acutro from "./AcutroLence-component";
import IIcon from "../../../icon/iButton.svg";

export default function StatisticComponent() {

  const arr = [
    {
      color: '#E9787860',
      img: Vec,
      temprature: 32,
      name1:'Building Name',
      name2:'Room Name',
      name3:'Assart Name'
    },
    {
      color: '#E9787860',
      img: Lifts,
      temprature: 32,
      name1:'Building Name',
      name2:'Room Name',
      name3:'Assart Name'
    },
    {
      color: '#24e85660',
      img: Monitoring,
      temprature: 32,
      name1:'Building Name',
      name2:'Room Name',
      name3:'Assart Name'
    },
    {
      color: '#E9787860',
      img: Escalators,
      temprature: 32,
      name1:'Building Name',
      name2:'Room Name',
      name3:'Assart Name'
    },
  ];
  const AcutroElements = arr.map((item)=><Acutro color={item.color} img={item.img} temprature ={item.temprature} name1={item.name1} name2={item.name2} name3={item.name3}></Acutro>)
  return (
    <Grid
      container
      component={Box}
      border={1}
      borderColor="white"
      borderRadius={4}
      p={2}
      position="relative"
    >
    <IconButton style={{ position: "absolute", top: "1px", right: "1px" }}>
        <img src={IIcon} alt=""></img>
      </IconButton>
      <Grid item component={Box} mb={2} md={12} lg={12}>
        <Typography variant="h6" color="white">
          Acutro Lens statistics
        </Typography>
      </Grid>
      <Grid item component={Box} mb={2} md={12} lg={12}>
        <Box
          display="flex"
          flexDirection="row"
          overflow="auto"
          width="100%"
        >
        {AcutroElements}
        </Box>
      </Grid>
    </Grid>
  );
}
