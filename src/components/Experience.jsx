import { Grid, Paper, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import ExperienceDetail from "./ExperienceDetail";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    label: "Zuma TI",
    role: "experience.zuma.role",
    years: "2015 - 2016",
    description: "experience.zuma.description",
    img: "../../assets/icons/experience/banking.png",
    industry: "experience.zuma.industry",
  },
  {
    label: "NetLogistik",
    role: "experience.netlogistik.role",
    years: "2016 - at present",
    description: "experience.netlogistik.description",
    img: "../../assets/icons/experience/logistics.png",
    industry: "experience.netlogistik.industry",
  },
];

let size =
  Math.ceil(12 / experiences.length) < 3
    ? 3
    : Math.ceil(12 / experiences.length);

const Experience = () => {
  const [translations] = useTranslation("global");

  return (
    <Paper
      sx={{ maxWidth: "98%", margin: "1%", background: "#fafafa" }}
      id="experience"
    >
      <Typography variant="h3" sx={{ m: 3 }}>
        <WorkIcon /> {translations("experience.title")}
      </Typography>
      <Grid container>
        {experiences.map((experience) => (
          <Grid item xs={12} sm={size}>
            <ExperienceDetail
              img={experience.img}
              industry={experience.industry}
              label={experience.label}
              role={experience.role}
              years={experience.years}
              description={experience.description}
              technologies={experience.technologies}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Experience;
