import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import ImageCard from "../../components/Dashbord/DashbordHeader/image-card";
import AppBarComponent from "../../components/Dashbord/Appbar/Appbar";
import DrawerLeftComponent from "../../components/Dashbord/DrawerLeft/DrawerLeft";
import DrawerRightComponent from "../../components/Dashbord/DrawerRight/DrawerRight";
import StatisticComponent from "../../components/Dashbord/StatisticsSection";
import MapContainer from "../../components/Dashbord/Map";
import GraphContainer from "../../components/Dashbord/Charts";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: "transparent",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(135deg, #480CA8, #62BEAC)",
    color: "white",
    display: "flex",
    position:"relative"
  },
});

export default function MiniDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const [openRight, setOpenRight] = React.useState(false);
  const classes = useStyles();

  console.log(props);

  useEffect(() => {
    props.getBuilding();
  }, []);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBarComponent
        open={open}
        openRight={openRight}
        leftOpen={() => setOpen(true)}
        rightOpenClose={() => setOpenRight(!openRight)}
        floorName={
          props.dashbordDate.data.length === 0
            ? ""
            : props.dashbordDate.data[props.dashbordDate.selectedBuilding]
                .floorName[props.dashbordDate.selectedFloor]
        }
        buildingName={
          props.dashbordDate.data.length === 0
            ? ""
            : props.dashbordDate.data[props.dashbordDate.selectedBuilding]
                .buildingName
        }
      />
      <DrawerLeftComponent
        open={open}
        leftClose={() => setOpen(false)}
        leftOpen={() => setOpen(true)}
      />
      <Box omponent="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <ImageCard
          data={
            props.dashbordDate.data.length === 0
              ? {}
              : props.dashbordDate.data[props.dashbordDate.selectedBuilding]
          }
        />
        <Box mt={4}></Box>
        <Grid container spacing={2}>
          <Grid item md={7} lg={7} xl={7}>
            <StatisticComponent />
          </Grid>
          <Grid item md={5} lg={5} xl={5}>
            <Grid container spacing={4}>
              <Grid item sm={12} md={12} lg={12}>
                <MapContainer />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <GraphContainer/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <DrawerRightComponent
        openRight={openRight}
        building={props.dashbordDate.data}
        select={props.selectBuilding}
        selectFloor={props.selectFloor}
        closeDrawer={() => setOpenRight(false)}
        openDrawer={() => setOpenRight(true)}
      />
    </Box>
  );
}
