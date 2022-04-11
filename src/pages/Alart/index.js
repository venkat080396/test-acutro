import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  MenuItem,
  Select,
  Toolbar,
  FormControl,
  InputLabel,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";

import ImageCard from "../../components/Dashbord/DashbordHeader/image-card";
import AppBarComponent from "../../components/Dashbord/Appbar/Appbar";
import DrawerLeftComponent from "../../components/Dashbord/DrawerLeft/DrawerLeft";
import DrawerRightComponent from "../../components/Dashbord/DrawerRight/DrawerRight";
import StatisticComponent from "../../components/Dashbord/StatisticsSection";
import MapContainer from "../../components/Dashbord/Map";
import GraphContainer from "../../components/Dashbord/Charts";
import EnegryComponent from "../../components/Dashbord/Energy";
import HavcComponent from "../../components/Dashbord/HAVC";
import ActiveAlertComponent from "../../components/Dashbord/ActiveAlert";
import EnergyIntensityComponent from "../../components/Dashbord/EnergyIntencity";

import Image from "../../asset/image/Background.png";
import { TableBar } from "@mui/icons-material";

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
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    objectFit: "fill",
    width: "100vw",
    // background: "linear-gradient(135deg, #1F1A3B, #344D5E)",
    color: "white",
    display: "flex",
    height: "100vh",
    overflow: "scroll",
  },
});

export default function Alart(props) {
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = React.useState("");
  const classes = useStyles();

  console.log(props);

  useEffect(() => {
    props.getData();
  }, []);

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBarComponent
        open={open}
        openRight={false}
        leftOpen={() => setOpen(true)}
        rightOpenClose={() => false}
        floorName={""}
        buildingName={""}
      />
      <DrawerLeftComponent
        open={open}
        leftClose={() => setOpen(false)}
        leftOpen={() => setOpen(true)}
      />
      <Box omponent="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box border={1} borderColor="white" borderRadius={4} p={4}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                color: "white",
              }}
              style={{
                color: "white",
              }}
            >
              select City
            </InputLabel>
            <Select
              label="City Name"
              components={Box}
              value={city}
              onChange={(event) => setCity(event.target.value)}
              variant="outlined"
              fullWidth
              sx={{
                outlineColor: "white",
                borderColor: "white",
                color: "white",
              }}
            >
              <MenuItem value={"Nairobi"}>{"Nairobi"}</MenuItem>
            </Select>
          </FormControl>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography color="white">City Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">Date</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">Temprature</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography color="white">{city}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">2021-01-01</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">17.46</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Typography color="white">2021-01-01</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">17.46</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Typography color="white">2021-01-01</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">17.46</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>
                    <Typography color="white">2021-01-01</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography color="white">17.46</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
