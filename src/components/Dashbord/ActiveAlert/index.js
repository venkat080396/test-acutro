import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Electricity from "../../../icon/Electricity.svg";
import Water from "../../../icon/Water.svg";
import Gas from "../../../icon/Gas.svg";
import { Grid } from "@mui/material";
import ActiveAlert from "./ActiveAlert-compont";
import IIcon from "../../../icon/iButton.svg";

export default function ActiveAlertComponent() {
  const arr = [
    {
      color: '#E9787860',
      img: Electricity,
      achiving: 'Under-achieving',
      Unit: '42',
      oc: 'OPEN',
      levelValue: 1,
      name1: 'HAVC Name',
      name2: 'Floor Location',
      name3: 'Building Location'
    },
    {
      color: '#E9787860',
      img: Water,
      achiving: 'Over-achieving',
      Unit: '12',
      oc: 'RESOLVE',
      levelValue: 2,
      name1: 'HAVC Name',
      name2: 'Floor Location',
      name3: 'Building Location'
    },
    {
      img: Gas,
      color: '#24e85660',
      Unit: '22',
      name1: 'HAVC Name',
      levelValue: 3,
      oc: 'OPEN',
      achiving: 'Over-achieving',
      name2: 'Floor Location',
      name3: 'Building Location'
    },
    {
      color: '#E9787860',
      img: Gas,
      Unit: '52',
      name1: 'HAVC Name',
      levelValue: 2,
      oc: 'OPEN',
      achiving: 'Over-achieving',
      name2: 'Floor Location',
      name3: 'Building Location'
    },
  ];
  const ActiveAlertElements = arr.map((item) => <ActiveAlert color={item.color} Unit={item.Unit} levelValue={item.levelValue} oc={item.oc} achiving={item.achiving} img={item.img} name1={item.name1} name2={item.name2} name3={item.name3}></ActiveAlert>)
  return (
    <Grid
      container
      component={Box}
      maxHeight={412}
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
              Active Alert
            </Typography>
            <Typography variant="body2" color="white">
              An Overview of the alerts currently active
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item component={Box} mb={2} md={12} lg={12}>
        <Grid
        maxHeight={312}
          overflow="scroll"
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
          >
            {ActiveAlertElements}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
