import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const SkillDetail = ({ name, icon, color, level }) => {
  const colorByValue = (value) => {
    let result = "inherit";
    switch (value) {
      case 100:
        result = "success";
        break;
      case 75:
        result = "secondary";
        break;
      case 50:
        result = "inherit";
        break;
      default:
        result = "inherit";
        break;
    }
    return result;
  };

  return (
    <Box sx={{ margin: 3 }}>
      <Typography variant="subtitle1">
        {" "}
        <img alt={name} src={icon} sx={{ bgcolor: color }} /> {name}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={level}
        color={colorByValue(level)}
      />
    </Box>
  );
};

export default SkillDetail;
