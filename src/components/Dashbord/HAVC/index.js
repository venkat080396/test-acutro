import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Electricity from "../../../icon/Electricity.svg";
import Water from "../../../icon/Water.svg";
import Gas from "../../../icon/Gas.svg";
import { Grid } from "@mui/material";
import Havc from "./Havc-Component";
import IIcon from "../../../icon/iButton.svg";

export default function HavcComponent() {
  const arr = [
    {
      img: Electricity,
      achiving: 'Under-achieving',
      Unit:'42',
      name1:'HAVC Name',
      name2:'Floor Location',
      name3:'Building Location'
    },
    {
      img: Water,
      achiving: 'Over-achieving',
      Unit:'12',
      name1:'HAVC Name',
      name2:'Floor Location',
      name3:'Building Location'
    },
    {
      img: Gas,
      Unit:'22',
      name1:'HAVC Name',
      achiving: 'Over-achieving',
      name2:'Floor Location',
      name3:'Building Location'
    },
    {
      img: Gas,
      Unit:'52',
      name1:'HAVC Name',
      achiving: 'Over-achieving',
      name2:'Floor Location',
      name3:'Building Location'
    },
  ];
  const HavcElements = arr.map((item) => <Havc  Unit={item.Unit} achiving={item.achiving} img={item.img} name1={item.name1} name2={item.name2} name3={item.name3}></Havc>)
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
              HAVC Efficiency
            </Typography>
            <Typography variant="body2" color="white">
              Your under achiving HAVC assets
            </Typography>
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
          {HavcElements}
        </Box>
      </Grid>
    </Grid>
  );
}
