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
        icon: "../../assets/icons/skills/python.png",
        color: "49,116,171,0.5",
      },
      {
        name: "JavaScript",
        level: 75,
        icon: "../../assets/icons/skills/javascript.png",
        color: "247,223,30,0.5",
      },
      {
        name: "TypeScript",
        level: 75,
        icon: "../../assets/icons/skills/typescript.png",
        color: "0,122,204,0.5",
      },
      {
        name: "HTML",
        level: 100,
        icon: "../../assets/icons/skills/html.png",
        color: "228,79,38,0.5",
      },
      {
        name: "PHP",
        level: 75,
        icon: "../../assets/icons/skills/php.png",
        color: "98,128,182,0.5",
      },
      {
        name: "CSS",
        level: 100,
        icon: "../../assets/icons/skills/css.png",
        color: "21,114,182,0.5",
      },
      {
        name: "Java",
        level: 75,
        icon: "../../assets/icons/skills/java.png",
        color: "0,195,255,0.5",
      },
      {
        name: "COBOL",
        level: 100,
        icon: "../../assets/icons/skills/cobol.png",
        color: "0,92,165,0.5",
      },
      {
        name: "ALGOL",
        level: 50,
        icon: "../../assets/icons/skills/algol.png",
        color: "172,195,37,0.5",
      },
    ],
  },
  {
    label: "Frameworks",
    description: [
      {
        name: "Yii",
        level: 75,
        icon: "../../assets/icons/skills/yii3.png",
        color: "241,138,42,0.5",
      },
      {
        name: "React",
        level: 75,
        icon: "../../assets/icons/skills/react.png",
        color: "97,218,251,0.5",
      },
      {
        name: "Angular",
        level: 50,
        icon: "../../assets/icons/skills/angular.png",
        color: "195,0,47,0.5",
      },
      {
        name: "Spring",
        level: 50,
        icon: "../../assets/icons/skills/spring.png",
        color: "109,179,63,0.5",
      },
      {
        name: "Ionic",
        level: 50,
        icon: "../../assets/icons/skills/ionic.png",
        color: "78,142,247,0.5",
      },
    ],
  },
  {
    label: "Data bases",
    description: [
      {
        name: "MS SQL Server",
        level: 75,
        icon: "../../assets/icons/skills/sql.png",
        color: "226,47,42,0.5",
      },
      {
        name: "My SQL",
        level: 75,
        icon: "../../assets/icons/skills/mysql.png",
        color: "228,142,0,0.5",
      },
      {
        name: "DMSII",
        level: 50,
        icon: "../../assets/icons/skills/dmsii.png",
        color: "0,0,255,0.5",
      },
    ],
  },
  {
    label: "Infrastructure",
    description: [
      {
        name: "Azure",
        level: 50,
        icon: "../../assets/icons/skills/azure.png",
        color: "3,91,218,0.5",
      },
    ],
  },
  {
    label: "Versioning",
    description: [
      {
        name: "Github",
        level: 75,
        icon: "../../assets/icons/skills/github.png",
        color: "0,0,0,0.5",
      },
      {
        name: "Git",
        level: 75,
        icon: "../../assets/icons/skills/git.png",
        color: "221,76,53,0.5",
      },
    ],
  },
  {
    label: "Operative systems",
    description: [
      {
        name: "Windows",
        level: 100,
        icon: "../../assets/icons/skills/windows.png",
        color: "0,182,240,0.5",
      },
      {
        name: "Mac",
        level: 75,
        icon: "../../assets/icons/skills/mac.png",
        color: "51,51,51,0.5",
      },
      {
        name: "Linux",
        level: 75,
        icon: "../../assets/icons/skills/linux.png",
        color: "255,209,51,0.5",
      },
    ],
  },
  {
    label: "Languages",
    description: [
      {
        name: "Español",
        level: 100,
        icon: "../../assets/icons/skills/mexico.png",
        color: "206,17,38,0.5",
      },
      {
        name: "Inglés",
        level: 75,
        icon: "../../assets/icons/skills/uk.png",
        color: "0,35,122,0.5",
      },
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
    <Paper sx={{ maxWidth: "98%", margin: "1%" }} id="skills">
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
