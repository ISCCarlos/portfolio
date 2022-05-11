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

const ExperienceDetail = ({
  img,
  industry,
  label,
  role,
  years,
  description,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "25%",
        height: "450px",
        m: 3,
        display: "inline-block",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt={industry} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
            {role}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontStyle: "italic" }}>
            {years}
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip label={industry} color="primary"></Chip>
      </CardActions>
    </Card>
  );
};

export default ExperienceDetail;
