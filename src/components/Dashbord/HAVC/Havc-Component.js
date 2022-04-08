import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const Havc = (props) => {
    return (
        <div
            style={{
                width: 230,
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
                width={230}
                style={{
                    background: `linear-gradient(135deg,#FFFFFF29, transparent)`,//#E9787860
                }}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    alignSelf="center"
                    mb={2}
                >
                    <img height={80} width={60} src={props.img} alt="" />
                    <Box>

                        <Typography
                            // textAlign="center"
                            variant="h6"
                            color="#FFFFFF"
                        // lineHeight={2}
                        >
                            {/* Electricity */}
                            {props.name1}
                        </Typography>
                        <Typography variant="body2" color="white">
                            {props.name2}
                        </Typography><Typography variant="body2" color="white">
                            {props.name3}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography
                            textAlign="center"
                            variant="h6"
                            color="#FFFFFF"
                            font="Nunito"
                            fontWeight="Bold"
                            lineHeight={2}
                            mb={-2}
                        >
                            {props.achiving}
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <Box>
                            <Typography
                                textAlign="center"
                                variant="h2"
                                mb={-5}
                                font="Nunito"
                                fontWeight="Bold"
                                color="#E97878"
                                lineHeight={2}
                            >
                                {/* 32 */}
                                {props.Unit}
                            </Typography>
                            <Typography
                                textAlign="center"
                                variant="h6"
                                font="Nunito"
                                fontWeight="Bold"
                                color={(props.Unit >= 0) ? '#E97878' : '#78E991'}
                                lineHeight={2}
                            >
                                UNITS
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>);
}
export default Havc;