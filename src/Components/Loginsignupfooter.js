import React from "react";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Mail } from "@mui/icons-material";

const FooterContainer = styled("footer")({
  backgroundColor: "#003366",
  color: "#ffffff",
  padding: (theme) => theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
});

const CompanyName = styled(Typography)({
  fontWeight: "bold",
  alignSelf: "center", 
  marginLeft: 0, 
});

const SocialMediaContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center", 
  marginTop: (theme) => theme.spacing(1), 
});

const ContactDetails = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // Center horizontally
  marginTop: (theme) => theme.spacing(1), // Add top margin for vertical centering
  width: "100%", // Stretch to full width
});

const PrivacyPolicy = styled(Typography)({
  marginLeft: "auto", // Align the privacy policy to the right
  alignSelf: "center", // Center vertically
});

const Footer = () => {
  return (
    <FooterContainer sx={{display: "flex" , alignItems: "center"}}>
      <Box >
        {" "}
        <CompanyName variant="body1">
          Mindsclik Digital Solutions Pvt. Ltd.
        </CompanyName>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <SocialMediaContainer>
          <InstagramIcon />
          <Mail />
        </SocialMediaContainer>
      </Box>
      <ContactDetails>
        <Typography variant="body2">Contact: 1234567890</Typography>
      </ContactDetails>
      <Box display="flex" justifyContent="flex-end" width="100%">
        <PrivacyPolicy variant="caption">Privacy Policy</PrivacyPolicy>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
