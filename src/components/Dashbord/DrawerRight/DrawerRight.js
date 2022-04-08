import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButtonMUI from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid, TextField, Typography } from "@mui/material";
import { withStyles, makeStyles } from "@mui/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SettingsIcon from "@mui/icons-material/Settings";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
    },
  },
});

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: "transparent",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ListItemButton = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "red",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(ListItemButtonMUI);

export default function DrawerRightComponent(props) {
  const [building, selectBuilding] = React.useState(0);
  const [floor, selectFloor] = React.useState(0);
  const [fromDate, setFromDate] = React.useState("2022-04-06");
  const [toDate, setToDate] = React.useState("2022-04-07");

  const handleChange = (event) => {
    selectBuilding(event.target.value);
    selectFloor(0);
    props.select(event.target.value);
  };

  const handleFloor = (event) => {
    selectFloor(event.target.value);
    props.selectFloor(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        variant="permanent"
        open={props.openRight}
        PaperProps={{
          sx: {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
        anchor="right"
        onMouseEnter={props.openDrawer}
        onMouseLeave={props.closeDrawer}
      >
        <DrawerHeader>
          <Grid container flex={1} component={Box}>
            <Grid item justifyContent={"flex-start"}></Grid>
          </Grid>
        </DrawerHeader>
        <List>
          {["Building Name"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: props.openRight ? "initial" : "center",
                px: 2.5,
                mx: 1,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.openRight ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 ? <HomeIcon sx={{ color: "white" }} /> : <></>}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: props.openRight ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
        {props.openRight && (
          <Box mx={2} mb={5}>
            <FormControl fullWidth>
              <InputLabel
                sx={{
                  color: "white",
                }}
              >
                Building Name
              </InputLabel>
              <Select
                value={building}
                label="Building Name"
                components={Box}
                variant="outlined"
                style={{
                  outlineColor: "white",
                  borderColor: "white",
                  color: "white",
                }}
                color="primary"
                onChange={handleChange}
              >
                {props.building.length === 0 ? (
                  <></>
                ) : (
                  props.building.map((item, inx) => (
                    <MenuItem value={inx}>
                      <Typography color="black">{item?.buildingName}</Typography>
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Box>
        )}
        <List>
          {["Floor"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: props.openRight ? "initial" : "center",
                px: 2.5,
                mx: 1,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.openRight ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 ? (
                  <DynamicFeedIcon sx={{ color: "white" }} />
                ) : (
                  <></>
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: props.openRight ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
        {props.openRight && (
          <Box mx={2} mb={5}>
            <FormControl fullWidth>
              <InputLabel
                sx={{
                  color: "white",
                }}
              >
                Floor
              </InputLabel>
              <Select
                value={floor}
                label="Floor"
                components={Box}
                variant="outlined"
                style={{
                  outlineColor: "white",
                  borderColor: "white",
                  color: "white",
                }}
                color="primary"
                onChange={handleFloor}
              >
                {props.building.length === 0 ? (
                  <></>
                ) : (
                  props.building[building].floorName.map((item, inx) => (
                    <MenuItem value={inx}>
                      <Typography color="black">{item}</Typography>
                    </MenuItem>
                  ))
                )}
              </Select>
            </FormControl>
          </Box>
        )}
        <List>
          {["Dates"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: props.openRight ? "initial" : "center",
                px: 2.5,
                mx: 1,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.openRight ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 ? (
                  <DateRangeIcon sx={{ color: "white" }} />
                ) : (
                  <></>
                )}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: props.openRight ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
        {props.openRight && (
          <Box mx={2} mb={5}>
            <TextField
              label={<Typography color={"white"}>Fron</Typography>}
              size="small"
              fullWidth
              type={"date"}
              sx={{
                outlineColor: "white",
                borderColor: "white",
                color: "white",
              }}
              color="primary"
              value={fromDate}
              onChange={(event) => setFromDate(event.target.value)}
            />
            <Box mt={2}></Box>
            <TextField
              label={<Typography color={"white"}>To</Typography>}
              size="small"
              fullWidth
              type={"date"}
              style={{
                outlineColor: "white",
                borderColor: "white",
                color: "white",
              }}
              color="primary"
              value={toDate}
              onChange={(event) => setToDate(event.target.value)}
            />
          </Box>
        )}
        <List>
          {["Dashbord Setting"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: props.openRight ? "initial" : "center",
                px: 2.5,
                mx: 1,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: props.openRight ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 ? <SettingsIcon sx={{ color: "white" }} /> : <></>}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ opacity: props.openRight ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
