import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const images = [
  {
    label: "projects.details.portfolio",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "https://luminous-sprinkles-9f065e.netlify.app/",
    visibility: "common.public",
    technologies: "React",
  },
  {
    label: "projects.details.by",
    imgPath: "../../assets/icons/projects/by.png",
    url: "#",
    visibility: "common.private",
    technologies: "React, Spring",
  },
  {
    label: "projects.details.hon",
    imgPath: "../../assets/icons/projects/hn.png",
    url: "#",
    visibility: "common.private",
    technologies: "Python, Spring",
  },
  {
    label: "projects.details.nl",
    imgPath: "../../assets/icons/projects/nl.png",
    url: "#",
    visibility: "common.private",
    technologies: "Angular, Yii, Ionic, Bootstrap",
  },
];

const ProjectDetail = () => {
  const [translations] = useTranslation("global");

  return (
    <Box
      sx={{
        ml: "2.5%",
        width: "95%",
        height: 450,
        overflowY: "scroll",
      }}
    >
      <ImageList
        variant="masonry"
        cols={images.length % 2 === 0 ? 2 : 3}
        gap={8}
      >
        {images.map((image) => {
          return (
            <ImageListItem key={translations(image.label)}>
              <img src={`${image.imgPath}`} alt="" loading="lazy" />
              <Link
                href={image.url}
                target="_blank"
                color="inherit"
                underline="none"
              >
                <ImageListItemBar
                  position="below"
                  title={translations(image.label)}
                  subtitle={
                    "[" +
                    translations(image.visibility) +
                    "]  " +
                    image.technologies
                  }
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
