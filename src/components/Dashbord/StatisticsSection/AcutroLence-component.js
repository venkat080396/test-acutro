import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const Acutro = (props) => {
    console.log("this is props ",props);
    return (
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
                    background: `linear-gradient(135deg,${props.color}, transparent)`,//#E9787860
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    alignSelf="center"
                    mb={0.7}
                >
                    <img height={70} width={50} src={props.img} alt="" />
                </Box>
                <Typography
                    textAlign="center"
                    variant="h5"
                    color="#E97878"
                    lineHeight={2}
                    mb={1}
                >
                    {/* 32°C */}
                    {props.temprature+`°C`}
                </Typography>
                <Typography textAlign="center" variant="body2" lineHeight={2}>
                    {/* Building Name */}
                    {props.name1}
                </Typography>
                <Typography textAlign="center" variant="body2" lineHeight={2}>
                    {/* Room Name */}
                    {props.name2}
                </Typography>
                <Typography textAlign="center" variant="body2" lineHeight={2}>
                    {/* Assart Name */}
                    {props.name3}
                </Typography>
            </Box>
        </div>);
}
export default Acutro;