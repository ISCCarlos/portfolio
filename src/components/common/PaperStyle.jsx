import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import React from "react";

const CustomizedPaper = styled(Paper)`
  background: "#121212";
`;

export default function PaperStyle() {
  return <CustomizedPaper />;
}
