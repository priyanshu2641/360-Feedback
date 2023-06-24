import { Box, useTheme, Typography } from "@mui/material";
import Header from "./Header";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { FeedbackOutlined } from "@mui/icons-material";
import StatBox from "./StatBox";
import { tokens } from "../themes";
import { Rating } from "@mui/material/Rating";
import BasicRating from "./rating";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Welcome" subtitle="360 feedback" />
      </Box>
      < Box
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        gridAutoRows="500px"
        gap="20px"
      >
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridColumn="span 2"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="100"
            subtitle="Number of Feedback Given"
            icon={
              <FeedbackIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="100"
            subtitle="Number of Feedbacks Recieved"
            icon={
              <FeedbackOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        
      </Box>
      <Box
          gridColumn="span 1"
          backgroundColor={colors.primary[400]}
          display="flex"
          // gridAutoRows="240px"
          alignItems="center"
          justifyContent="center"
        >

         <BasicRating /> 
        </Box>
        </Box>
    </Box>
  );
};

export default Dashboard;