import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Card, CardHeader, Grid, Avatar, Badge } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "transparent",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarComponent({
  open,
  openRight,
  leftOpen,
  rightOpenClose,
  floorName,
  buildingName,
}) {
  return (
    <AppBar
      position="fixed"
      open={open}
      component={Box}
      backgroundColor="linear-gradient(135deg, #480CA8, #62BEAC)"
      pr={openRight ? `${drawerWidth}px` : 0}
      elevation={0}
    >
      <Box backgroundColor="linear-gradient(135deg, #480CA8, #62BEAC)">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={leftOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="body1" noWrap component="div">
            <Typography variant="h6" fontWeight={"700"} display={"inline"}>
              Your Dashboard &nbsp;
            </Typography>
            / {buildingName} / {floorName} / 19/07/21 - 21/07/21
          </Typography>
          <Box flex={1}></Box>
          <Box>
            <Card
              sx={{ backgroundColor: "transparent", color: "white" }}
              elevation={0}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "white", color: "red" }}>R</Avatar>
                }
                title={
                  <Typography variant="body1" fontWeight={700}>
                    Your Company Name
                  </Typography>
                }
                subheader={
                  <Typography variant="body2">Administrator</Typography>
                }
                action={
                  <Grid container spacing={2} ml={2} alignItems="center">
                    <Grid item>
                      <IconButton>
                        <PersonIcon sx={{ color: "white" }} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton>
                        <Badge badgeContent={4} color="primary">
                          <NotificationsNoneIcon sx={{ color: "white" }} />
                        </Badge>
                      </IconButton>
                    </Grid>
                  </Grid>
                }
              />
            </Card>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={rightOpenClose}
            edge="start"
            sx={{
              marginRight: openRight ? -8 : -2,
              marginLeft: 5,
            }}
          >
            <FilterAltIcon />
          </IconButton>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
