import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
const ActiveAlert = (props) => {
    return (
        <div
            style={{
                marginRight: 16,
                marginLeft: 6,
                marginBottom: 16,
            }}
        >
            <Box
                display='flex'
                flexDirection='row'
                border={1}
                p={1}
                borderColor="white"
                justifyContent='space-between'
                borderRadius={4}
                mx={3}
                style={{
                    background: `linear-gradient(135deg,${props.color}, transparent)`,//#E9787860
                }}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent='space-between'
                    width={130}
                >

                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        alignSelf="center"
                        ml={3}
                    >
                        <img height={30} width={20} src={props.img} alt="" />
                        <img height={30} width={20} src={props.img} alt="" />

                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        justifyContent="center"
                        alignSelf="center"
                    >
                        <Typography
                            textAlign="left"
                            font="Nunito"
                            fontWeight="Bold"
                            variant="body2"
                            color="#FFFFFF"
                            lineHeight={2}
                        >
                            Site 1234
                        </Typography>
                        <Typography
                            textAlign="left"
                            variant="body2"
                            color="#FFFFFF"
                            lineHeight={2}
                        >
                            Device 2123
                            {/* {props.wkUnitValue} */}
                            {/* {props.kwh} */}
                        </Typography>

                    </Box>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent='space-between'
                    width={150}
                    mr={5}
                >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    alignSelf="center"
                >
                    <Typography
                        textAlign="center"
                        variant="body2"
                        color={(props.levelValue ==3 ) ? '#E97878' : (props.levelValue ==2)?'#78E991':'#78E991'}
                        lineHeight={2}
                    >
                        Level
                    </Typography>
                    <Typography
                        textAlign="center"
                        variant="body2"
                        font="Nunito"
                        fontWeight="Bold"
                        color={(props.levelValue ==3 ) ? '#E97878' : (props.levelValue ==2)?'#78E991':'#78E991'}
                        lineHeight={2}
                    >
                        1
                        {props.levelValue}
                        {/* {props.wkUnitValue} */}
                        {/* {props.kwh} */}
                    </Typography>

                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    alignSelf="center"
                    width={50}
                >
                    <Typography
                        textAlign="center"
                        variant="body2"
                        color={(props.oc==="OPEN") ? '#E97878' : '#78E991'}
                        lineHeight={2}
                    >
                    {props.oc}
                        {/* Open */}
                    </Typography>

                </Box>
                </Box>

            </Box>
        </div>);
}
export default ActiveAlert;