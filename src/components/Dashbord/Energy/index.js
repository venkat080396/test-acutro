import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { maxWidth } from "@mui/system";
import Electricity from "../../../icon/Electricity.svg";
import Water from "../../../icon/Water.svg";
import Gas from "../../../icon/Gas.svg";
import Escalators from "../../../icon/Escalator.svg";
import { Grid } from "@mui/material";
import Energy from "./Energy-component";
import IIcon from "../../../icon/iButton.svg";

export default function EnegryComponent() {
  const arr = [
    {
      color: '#E9787860',
      img: Electricity,
      title: 'Electricity',
      wkUnitValue: 32239,
      weUnitValue: 11889,
      unit: 'KWh',
      wkCost: 4110,
      weCost: 1480
    },
    {
      color: '#E9787860',
      img: Water,
      title: 'Water',
      wkUnitValue: 32239,
      weUnitValue: 11889,
      unit: 'Ltrs',
      wkCost: 4110,
      weCost: 1480
    },
    {
      color: '#24e85660',
      img: Gas,
      title: 'Gas',
      wkUnitValue: 32239,
      weUnitValue: 11889,
      unit: 'Ltrs',
      wkCost: 4110,
      weCost: 1480
    },
  ];
  const AcutroElements = arr.map((item) => <Energy title={item.title} color={item.color} img={item.img} wkUnitValue={item.wkUnitValue} weUnitValue={item.weUnitValue} unit={item.unit} wkCost={item.wkCost} weCost={item.weCost}></Energy>)
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
            <Typography variant="h6" color="white">
              Energy
            </Typography>
            <Typography variant="body2" color="white">
              Selected Building
            </Typography>
          </Box>
          <Box>
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
        </Box>
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
