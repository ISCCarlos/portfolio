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
  },
  /*{ label: "Medical Assitant", imgPath: "" },*/
  {
    label: "BY private project",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "",
  },
  {
    label: "Honeywell private project",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "",
  },
  {
    label: "Netlogistik private projects",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "",
  },
  {
    label: "Netlogistik private projects",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "",
  },
  {
    label: "Netlogistik private projects",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "",
  },
  {
    label: "Netlogistik private projects",
    imgPath: "../../assets/icons/projects/portfolio.png",
    url: "",
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
              <img src={`${image.imgPath}`} alt={image.label} loading="lazy" />
              <Link
                href={image.url}
                target="_blank"
                color="inherit"
                underline="none"
              >
                <ImageListItemBar position="below" title={image.label} />
              </Link>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
};

export default ProjectDetail;
