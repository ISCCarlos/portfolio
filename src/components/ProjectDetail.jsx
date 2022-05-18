import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
} from "@mui/material";
import React from "react";

const images = [
  {
    label: "My portfolio",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "https://luminous-sprinkles-9f065e.netlify.app/",
    technologies: "React",
  },
  {
    label: "BY's private project",
    imgPath: "../../assets/icons/projects/by.png",
    url: "",
    technologies: "React, Spring",
  },
  {
    label: "Honeywell's private project",
    imgPath: "../../assets/icons/projects/hn.png",
    url: "",
    technologies: "Python, Spring",
  },
  {
    label: "Netlogistik's private projects",
    imgPath: "../../assets/icons/projects/nl.png",
    url: "",
    technologies: "Angular, Yii, Ionic, Bootstrap",
  },
];

const ProjectDetail = () => {
  return (
    <Box
      sx={{
        ml: "2.5%",
        width: "95%",
        height: 450,
        overflowY: "scroll",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((image) => {
          return (
            <ImageListItem key={image.label}>
              <img src={`${image.imgPath}`} alt="" loading="lazy" />
              <Link
                href={image.url}
                target="_blank"
                color="inherit"
                underline="none"
              >
                <ImageListItemBar
                  position="below"
                  title={image.label}
                  subtitle={image.technologies}
                />
              </Link>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

export default ProjectDetail;
