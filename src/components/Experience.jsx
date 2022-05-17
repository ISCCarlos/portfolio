import { Grid, Paper, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import React from "react";
import ExperienceDetail from "./ExperienceDetail";

const experiences = [
  {
    label: "Zuma TI",
    role: "Analista programador",
    years: "2015 - 2016",
    description:
      "Coding and testing COBOL programs for CitiBanamex clients system.",
    img: "../../assets/icons/experience/banking.png",
    industry: "Banking",
  },
  {
    label: "NetLogistik",
    role: "Sr. Software developer",
    years: "2016 - at present",
    description:
      "Coding and implementing systems for supply chain, working with industry leaders as Honeywell, BlueYonder and Supplynet from NetLogistik.",
    img: "../../assets/icons/experience/logistics.png",
    industry: "Logistics",
  },
];

let size =
  Math.ceil(12 / experiences.length) < 3
    ? 3
    : Math.ceil(12 / experiences.length);

const Experience = () => {
  return (
    <Paper sx={{ maxWidth: "98%", margin: "1%" }} id="experience">
      <Typography variant="h3" sx={{ m: 3 }}>
        <WorkIcon /> Experience
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
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Experience;
