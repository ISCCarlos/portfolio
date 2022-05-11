import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import SkillDetail from "./SkillDetail";

const skills = [
  {
    label: "Programming languages",
    description: [
      {
        name: "Python",
        level: 75,
        icon: "../../assets/icons/python.png",
        color: "blue",
      },
      { name: "JavaScript", level: 75, icon: "", color: "yellow" },
      { name: "TypeScript", level: 75, icon: "", color: "blue" },
      { name: "HTML", level: 75, icon: "", color: "red" },
      { name: "PHP", level: 75, icon: "", color: "purple" },
      { name: "CSS", level: 75, icon: "", color: "blue" },
      { name: "Java", level: 75, icon: "", color: "red" },
      { name: "COBOL", level: 75, icon: "", color: "gray" },
      { name: "ALGOL", level: 50, icon: "", color: "black" },
    ],
  },
  {
    label: "Frameworks",
    description: [
      { name: "Yii 2", level: 75, icon: "", color: "" },
      { name: "React", level: 75, icon: "", color: "" },
      { name: "Angular", level: 50, icon: "", color: "" },
      { name: "Spring", level: 50, icon: "", color: "" },
      { name: "Ionic", level: 50, icon: "", color: "" },
    ],
  },
  {
    label: "Data bases",
    description: [
      { name: "MS SQL Server", level: 75, icon: "", color: "" },
      { name: "My SQL", level: 75, icon: "", color: "" },
      { name: "DMSII", level: 50, icon: "", color: "" },
    ],
  },
  {
    label: "Infrastructure",
    description: [{ name: "Azure", level: 50, icon: "", color: "" }],
  },
  {
    label: "Versioning",
    description: [
      { name: "Github", level: 75, icon: "", color: "" },
      { name: "Git", level: 75, icon: "", color: "" },
    ],
  },
  {
    label: "Operative systems",
    description: [
      { name: "Windows", level: 100, icon: "", color: "" },
      { name: "Mac", level: 75, icon: "", color: "" },
      { name: "Linux", level: 75, icon: "", color: "" },
    ],
  },
  {
    label: "Languages",
    description: [
      { name: "Español", level: 100, icon: "", color: "red" },
      { name: "Inglés", level: 75, icon: "", color: "blue" },
    ],
  },
];

const Skills = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper sx={{ maxWidth: "95%", margin: 6 }}>
      <Typography variant="h3" sx={{ m: 3 }}>
        Skills
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ m: 3 }}>
        {skills.map((skill, index) => (
          <Step key={skill.label}>
            <StepLabel>{skill.label}</StepLabel>
            <StepContent>
              {skill.description.map((element) => (
                <SkillDetail
                  name={element.name}
                  color={element.color}
                  icon={element.icon}
                  level={element.level}
                />
              ))}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === skills.length - 1 ? "Finish" : "Continue"}
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Paper>
  );
};

export default Skills;
