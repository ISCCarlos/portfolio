import { Grid, Paper, Typography } from "@mui/material";
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

const Experience = () => {
  return (
    <Paper sx={{ maxWidth: "95%", margin: 6 }}>
      <Typography variant="h3" sx={{ m: 3 }}>
        Experience
      </Typography>
      <Grid container>
        {experiences.map((experience) => (
          <Grid item xs={12} sm={4}>
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
