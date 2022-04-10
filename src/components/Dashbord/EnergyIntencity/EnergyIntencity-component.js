import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "./select";
import Energy from "./Energyin";
import { Grid } from "@mui/material";
const EnergyInte = (props) => {
    return (
        <div
            style={{
                width: 280,
                marginRight: 16,
                marginLeft: 16,
            }}
        >
            <Box
                p={2}
                borderRadius={4}
                // mx={3}
                width={280}
            >
                <Energy score={props.score} color={props.color}></Energy>
                <Typography
                    textAlign="center"
                    variant="h6"
                    color="#FFFFFF"
                    font="Nunito"
                    lineHeight={2}
                    mt={-7}
                >
                    kWh /Sqft /Yr
                </Typography>
                <Box
                    mt={4}
                    display="flex"
                    alignItems='center'
                    justifyContent='center'
                >
                    <Select
                        title="Building"
                        array={["Building1", "Building2", "Building3", "Building4"]}
                    ></Select>
                </Box>
            </Box>
        </div>);
}
export default EnergyInte;