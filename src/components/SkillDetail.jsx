import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import BorderLinearProgress from "./common/BorderLinearProgress";
import { useTranslation } from "./dependencies/react-i18next";

const SkillDetail = ({ name, icon, color, level }) => {
  const [translations] = useTranslation("global");

  const levelByValue = (value) => {
    let result = "ND";
    switch (value) {
      case 100:
        result = "common.expert";
        break;
      case 75:
        result = "common.advanced";
        break;
      case 50:
        result = "common.intermediate";
        break;
      default:
        result = "common.rookie";
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
              <BorderLinearProgress level={level} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">
                {translations(levelByValue(level))}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillDetail;
