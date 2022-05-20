import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const ExperienceDetail = ({
  img,
  industry,
  label,
  role,
  years,
  description,
}) => {
  const [translations] = useTranslation("global");

  return (
    <Card sx={{ m: 2 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={industry} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
            {translations(role)}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
            {years}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            {translations(description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip
          label={translations(industry)}
          color="primary"
          variant="outlined"
        />
      </CardActions>
    </Card>
  );
};

export default ExperienceDetail;
