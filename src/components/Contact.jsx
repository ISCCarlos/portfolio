import {
  Paper,
  Typography,
  Button,
  Box,
  TextField,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import { useTranslation } from "react-i18next";
import { saveAs } from "file-saver";
import emailjs from "emailjs-com";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [translations, i18n] = useTranslation("global");
  const [open, setOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("warning");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const getCV = () => {
    const language = i18n.language;

    const file = "../../assets/docs/" + language + "_CV.pdf";

    saveAs(file, "CV.pdf");
  };

  const showAlert = () => {
    setOpen(true);
  };

  const serviceID = "service_uce0tye";
  const templateID = "template_92kulkn";
  const userID = "kfgV-GW04lXMbcHbX";

  const sendEmail = () => {
    let error = false;
    const fromName = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const replyTo = document.getElementById("mail").value;

    if (fromName === "") {
      error = true;
      setAlertSeverity("warning");
      setMessage("common.invalidName");
      showAlert();
    }

    if (phone === "") {
      error = true;
      setAlertSeverity("warning");
      setMessage("common.invalidPhone");
      showAlert();
    }

    if (replyTo === "") {
      error = true;
      setAlertSeverity("warning");
      setMessage("common.invalidMail");
      showAlert();
    }

    if (!error) {
      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: fromName,
            phone: phone,
            reply_to: replyTo,
          },
          userID
        )
        .then(() => {
          error = false;
          setAlertSeverity("success");
          setMessage("common.successMail");
          showAlert();
        });
    }
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertSeverity}
          sx={{ width: "100%" }}
        >
          {translations(message)}
        </Alert>
      </Snackbar>
      <Typography variant="h3" sx={{ m: 3 }}>
        <MailIcon /> {translations("contact.title")}
      </Typography>
      <Box
        sx={{ width: "90%", maxWidth: "90%", ml: "5%", textAlign: "center" }}
      >
        <TextField
          id="name"
          label={translations("contact.name")}
          sx={{ m: 1 }}
        />
        <TextField
          id="mail"
          type="email"
          label={translations("contact.email")}
          sx={{ m: 1 }}
        />
        <TextField
          id="phone"
          type="tel"
          placeholder={translations("contact.phone")}
          sx={{ m: 1 }}
        />
      </Box>
      <Box
        sx={{ width: "90%", maxWidth: "90%", ml: "5%", textAlign: "center" }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{ m: 1 }}
          onClick={sendEmail}
        >
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
