import React from "react";

import { Box, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";


const Slider = () => {
    return (
        <>
            <Typography 
                style={{ 
                    fontSize: "30px", 
                    textAlign: "center", 
                    color: "red",
                    marginTop: "20px", 
                    backgroundColor: "#e4b2b2" }}> Welcome My Page </Typography>

            <Box className="slider">
                <Box className="title">
                    <Typography 
                        style={{ 
                            fontSize: "25px", 
                            textAlign: "center", 
                            color: "blue", 
                            margin: "20px" }}>Trust Blindly </Typography>

                    <Box className="slider-menu">

                        <Carousel autoPlay navButtonsAlwaysVisible interval={2000}>

{/* Slide-1 */}
                            {/* This Box define Outer style */}
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "300px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>

                            {/* This box define inner style */}
                            <Box
                                sx={{
                                    width: "500px",
                                    textAlign: "center"
                                }}>
                                    <img src="/images/image1.jpeg" alt="img-1" style={{ width: "300px" }} />
                                    <Typography style={{ fontSize: "20px", color: "brown", marginBottom: "20px" }}>Enter Your Details Below...📧</Typography>
                            </Box>
                            </Box>

{/* Slide-2 */}
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "300px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>

                                <Box
                                    sx={{
                                        width: "500px",
                                        textAlign: "center"
                                    }}>
                                    <img src="/images/image2.jpeg" alt="img-1" style={{ width: "300px" }} />
                                    <Typography style={{ fontSize: "20px", color: "brown", marginBottom: "20px" }}>This is very secure page So, Don't worry🔒</Typography>
                                </Box>
                            </Box>

{/* Slide-3 */}
                            <Box
                                sx={{
                                    display: "flex",
                                    height: "300px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>

                                <Box
                                    sx={{
                                        width: "500px",
                                        textAlign: "center"
                                    }}>
                                    <img src="/images/image3.jpeg" alt="img-1" style={{ width: "300px" }} />
                                    <Typography style={{ fontSize: "20px", color: "brown", marginBottom: "20px" }}>Pleage give me right information📝</Typography>
                                </Box>
                                </Box>

                        </Carousel>
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Slider;