import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "3rem", // Increased font size for the heading
            color: "rgb(188, 140, 90)",
          },
          "& p": {
            textAlign: "justify",
            mb: 3, 
            fontSize: "1.8rem", 
            lineHeight: 2,
            marginLeft:8,
            marginRight: 8,
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "2rem", // Adjust font size for smaller screens
            },
            "& p": {
              fontSize: "1rem", // Adjust font size for smaller screens
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To CraveNation</Typography>
        <Typography variant="body1">
          Experience a delightful fusion of traditional and modern flavors at
          our restaurant, where every dish is crafted with passion and
          precision. Our menu features a diverse array of authentic dishes from
          across India, including crispy dosas, flavorful chole, and
          mouthwatering masala dosas. Whether you're craving the comforting
          softness of idli sambhar or the rich, spicy goodness of paneer dishes,
          we have something to tantalize every taste bud.
        </Typography>
        <Typography variant="body1">
          At CraveNation, we take pride in using only the freshest ingredients
          to ensure that each meal is a memorable culinary experience. Our warm
          and inviting ambiance, combined with attentive service, makes us the
          perfect destination for family gatherings, casual outings, and special
          celebrations.
        </Typography>
        <Typography variant="body1">
          Come join us and savor the vibrant and diverse flavors of India. We
          look forward to welcoming you and making your dining experience truly
          exceptional!
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
