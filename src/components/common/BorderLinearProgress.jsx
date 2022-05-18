import { LinearProgress, linearProgressClasses, styled } from "@mui/material";
import * as React from "react";

const BorderLinearProgress = ({ level }) => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= level ? level : prevProgress + 5
      );
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [level]);

  const BorderLinearProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return <BorderLinearProgressBar variant="determinate" value={progress} />;
};

export default BorderLinearProgress;
