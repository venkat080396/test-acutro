import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const Energy = (props) => {
    return (
        <div
            style={{
                width: 220,
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
                width={220}
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
                    <Typography
                        // textAlign="center"
                        variant="h5"
                        color="#FFFFFF"
                        lineHeight={2}
                    >
                        {/* Electricity */}
                        {props.title}
                    </Typography>
                </Box>
                <Box>
                    <Box>
                        <Typography
                            textAlign="center"
                            variant="h6"
                            color="#FFFFFF"
                            lineHeight={2}
                        >
                            Estimated Usage
                        </Typography>
                    </Box>
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    alignSelf="center">
                        <Box>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color="#FFFFFF"
                                lineHeight={2}
                            >
                                Weekdays
                            </Typography>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color= {(props.wkUnitValue>=20000)?'#E97878':'#78E991'}
                                lineHeight={2}
                            >
                            {/* 31,222 */}
                            {props.wkUnitValue}
                                {/* {props.kwh} */}
                            </Typography>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color={(props.wkUnitValue>=20000)?'#E97878':'#78E991'}
                                lineHeight={2}
                            >
                                {/* KWh */}
                                {props.unit}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color="#FFFFFF"
                                lineHeight={2}
                            >
                                Weekend
                            </Typography>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color={(props.weUnitValue>=20000)?'#E97878':'#78E991'}
                                lineHeight={2}
                            >
                            {/* 31,222 */}
                            {props.weUnitValue}
                                {/* {props.kwh} */}
                            </Typography>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color={(props.weUnitValue>=20000)?'#E97878':'#78E991'}
                                lineHeight={2}
                            >
                                {/* KWh */}
                                {props.unit}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography
                            textAlign="center"
                            variant="h6"
                            color="#FFFFFF"
                            lineHeight={2}
                        >
                            Estimated Cost
                        </Typography>
                    </Box>
                    <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    alignSelf="center">
                        <Box>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color="#FFFFFF"
                                lineHeight={2}
                            >
                                Weekdays
                            </Typography>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color= {(props.wkCost>=2000)?'#E97878':'#78E991'}
                                lineHeight={2}
                            >
                            {/* 4000 */}
                                {props.wkCost}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color="#FFFFFF"
                                lineHeight={2}
                            >
                                Weekend
                            </Typography>
                            <Typography
                                textAlign="center"
                                variant="body2"
                                color= {(props.weCost>=2000)?'#E97878':'#78E991'}
                                lineHeight={2}
                            >
                            {/* 1000 */}
                                {props.weCost}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>);
}
export default Energy;