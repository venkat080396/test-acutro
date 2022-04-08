import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { maxWidth } from "@mui/system";
import Vec from "../../../icon/Vector.svg";
import Monitoring from "../../../icon/Monitoring.svg";
import Lifts from "../../../icon/Lifts.svg";
import Escalators from "../../../icon/Escalator.svg";
import { Grid } from "@mui/material";

export default function StatisticComponent() {
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
          <div
            style={{
              width: 160,
              marginRight: 16,
              marginLeft: 16,
              marginBottom: 16,
            }}
          >
            <Box
              border={1}
              p={2}
              borderColor="white"
              borderRadius={4}
              mx={3}
              width={160}
              style={{
                background: "linear-gradient(135deg, #E9787860, transparent)",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                alignSelf="center"
                mb={4}
              >
                <img src={Vec} alt="" />
              </Box>
              <Typography
                textAlign="center"
                variant="h5"
                color="#E97878"
                lineHeight={2}
              >
                32 C
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Building Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Room Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Assart Name
              </Typography>
            </Box>
          </div>
          <div
            style={{
              width: 160,
              marginRight: 16,
              marginLeft: 16,
              marginBottom: 16,
            }}
          >
            <Box
              border={1}
              p={2}
              borderColor="white"
              borderRadius={4}
              mx={3}
              width={160}
              style={{
                background: "linear-gradient(135deg, #E9787860, transparent)",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={2}
              >
                <img src={Lifts} alt="" />
              </Box>
              <Typography
                textAlign="center"
                variant="h5"
                color="#E97878"
                lineHeight={2}
              >
                32 C
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Building Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Room Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Assart Name
              </Typography>
            </Box>
          </div>
          <div
            style={{
              width: 160,
              marginRight: 16,
              marginLeft: 16,
              marginBottom: 16,
            }}
          >
            <Box
              border={1}
              p={2}
              borderColor="white"
              borderRadius={4}
              mx={3}
              width={160}
              style={{
                background: "linear-gradient(135deg, #24e85660, transparent)",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={2}
              >
                <img src={Monitoring} alt="" />
              </Box>
              <Typography
                textAlign="center"
                variant="h5"
                color="#E97878"
                lineHeight={2}
              >
                32 C
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Building Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Room Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Assart Name
              </Typography>
            </Box>
          </div>
          <div
            style={{
              width: 160,
              marginRight: 16,
              marginLeft: 16,
              marginBottom: 16,
            }}
          >
            <Box
              border={1}
              p={2}
              borderColor="white"
              borderRadius={4}
              mx={3}
              width={160}
              style={{
                background: "linear-gradient(135deg, #E9787860, transparent)",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb={2}
              >
                <img src={Escalators} alt="" />
              </Box>
              <Typography
                textAlign="center"
                variant="h5"
                color="#E97878"
                lineHeight={2}
              >
                32 C
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Building Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Room Name
              </Typography>
              <Typography textAlign="center" variant="body2" lineHeight={2}>
                Assart Name
              </Typography>
            </Box>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
