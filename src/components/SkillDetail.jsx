import {
  Avatar,
  Box,
  Grid,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const SkillDetail = ({ name, icon, color, level }) => {
  const levelByValue = (value) => {
    let result = "ND";
    switch (value) {
      case 100:
        result = "Expert";
        break;
      case 75:
        result = "Advanced";
        break;
      case 50:
        result = "Intermediate";
        break;
      default:
        result = "inherit";
        break;
    }
    return result;
  };

  return (
    <Box sx={{ margin: 3 }}>
      <Grid container mb={1}>
        <Grid item xs={6} sm={1}>
          <Avatar
            alt={name}
            src={`${icon}`}
            sx={{ bgcolor: `rgba(${color})` }}
          />
        </Grid>
        <Grid item xs={6} sm={1}>
          <Typography variant="subtitle1">{name}</Typography>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1, ml: 1 }}>
              <BorderLinearProgress variant="determinate" value={level} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">
                {levelByValue(level)}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillDetail;
