import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Electricity from "../../../icon/Electricity.svg";
import Water from "../../../icon/Water.svg";
import Gas from "../../../icon/Gas.svg";
import { Grid } from "@mui/material";
import EnergyInte from "./EnergyIntencity-component";
import IIcon from "../../../icon/iButton.svg";

export default function EnergyIntensityComponent() {
  const arr = [
    {
      color: '#78E991',
      score: 20
    },
    {
        color: '#F4BD7C',
        score: 74
    },
  ];
  const EnergyElements = arr.map((item) => <EnergyInte  color={item.color} score={item.score} ></EnergyInte>)
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
        <Box
          display='flex'
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box>
            <Box display='flex' alignItems='center'>
            <Typography variant="h6" color="white" mr={1}>
                Energy Intensity 
            </Typography>
            <Typography variant="body2" color="white">
              / Site Name/ Building Name
            </Typography>
            </Box>
            <Typography variant="body2" color="white">
              Total Floor space: 57,343 Sqft
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item component={Box} md={12} lg={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          {EnergyElements}
        </Box>
      </Grid>
    </Grid>
  );
}
