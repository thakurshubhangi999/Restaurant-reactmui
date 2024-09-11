import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
            <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
            fontSize: "2.5rem",
          },
          "& p": {
            fontSize: "1.25rem", 
            lineHeight: 1.6,
          },
          "@media (max-width:600px)": {
            ml: 2, 
            "& h4": {
              fontSize: "2rem",
            },
            "& p": {
              fontSize: "1rem",
            },
          },
        }}
      >
        <Typography variant="h4" sx={{ color: "rgb(188, 140, 90)" }}>Contact CraveNation</Typography>
        <Typography variant="body1">
          Have questions or need assistance? Reach out to us at CraveNation, and
          our friendly team will be happy to help.
        </Typography>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@cravenation.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 888 999 777 0
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
