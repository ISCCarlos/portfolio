import { Paper, Typography, Button, Input, Box } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";

const Contact = () => {
  const [translations, i18n] = useTranslation("global");

  const getCV = () => {
    const language = i18n.language;

    const file = "../../assets/docs/" + language + "_CV.pdf";

    saveAs(file, "CV.pdf");
  };

  return (
    <Paper
      sx={{
        maxWidth: "98%",
        margin: "1%",
        justifyItems: "center",
        background: "#fafafa",
      }}
      id="contact"
    >
      <Typography variant="h3" sx={{ m: 3 }}>
        <MailIcon /> {translations("contact.title")}
      </Typography>
      <Box
        sx={{ width: "90%", maxWidth: "90%", ml: "5%", textAlign: "center" }}
      >
        <Input
          type="text"
          name="name"
          id="name"
          placeholder={translations("contact.name")}
          sx={{ m: 1 }}
        />
        <Input
          type="email"
          name="mail"
          id="mail"
          placeholder={translations("contact.email")}
          sx={{ m: 1 }}
        />
        <Input
          type="tel"
          name="phone"
          id="phone"
          placeholder={translations("contact.phone")}
          sx={{ m: 1 }}
        />
      </Box>
      <Box
        sx={{ width: "90%", maxWidth: "90%", ml: "5%", textAlign: "center" }}
      >
        <Button variant="contained" sx={{ m: 1 }}>
          {translations("contact.submit")}
        </Button>
        <Button variant="outlined" sx={{ m: 1 }} onClick={getCV}>
          {translations("contact.cv")}
        </Button>
      </Box>
    </Paper>
  );
};

export default Contact;
