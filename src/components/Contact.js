import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import "./contact.css";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const FormTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "skyblue",
      },
      "&:hover fieldset": {
        borderColor: "blue",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const xl = useMediaQuery("(min-width: 2000px");
  const lg = useMediaQuery("(min-width: 1500px");
  const md = useMediaQuery("(min-width: 1000px");
  // const pad = useMediaQuery("(min-width: 700px)");
  const sm = useMediaQuery("(min-width: 500px");

  const handleSubmit = (e) => {
    name === "" || email === "" || subject === "" || message === ""
      ? alert("Fields cannot be empty")
      : alert("message sent");
    e.preventDefault();

    const sendFeedback = (templateId, variables) => {
      window.emailjs
        .send("gmail", templateId, variables)
        .then((res) => {
          console.log("Email successfully sent!");
        })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) =>
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          )
        );
    };

    const templateId = "template_1Y9yrdDk";
    sendFeedback(templateId, {
      message_html: message,
      subject: subject,
      from_name: name,
      reply_to: email,
    });
  };

  return (
    <div className="di">
      <Typography id="cntct-head">
        <h2>Contact Me</h2>
      </Typography>
      <div id="ctct-hd" style={{ textAlign: "center" }}>
        <h5>Let's work together</h5>
      </div>

      <form
        className={classes.root}
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          //for phones width should be less than sm screen width  eg: >375px
          //style={{ width: 200 }}
          style={{ width: "50%" }}
        >
          <Grid item>
            <FormTextField
              className={classes.margin}
              value={name}
              label="Name"
              variant="outlined"
              id="custom-css-outlined-input"
              onChange={(e) => setName(e.target.value)}
              //same rule as for the grid
              style={{
                width: xl ? 900 : lg ? 700 : md ? 600 : sm ? 200 : null,
              }}
            />
          </Grid>

          <Grid item>
            <FormTextField
              className={classes.margin}
              label="Email"
              variant="outlined"
              id="custom-css-outlined-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //same rule as for the grid
              style={{
                width: xl ? 900 : lg ? 700 : md ? 600 : sm ? 200 : null,
              }}
            />
          </Grid>

          <Grid item>
            <FormTextField
              className={classes.margin}
              label="Subject"
              variant="outlined"
              id="custom-css-outlined-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              //same rule as for the grid
              style={{
                width: xl ? 900 : lg ? 700 : md ? 600 : sm ? 200 : null,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormTextField
              className={classes.margin}
              variant="outlined"
              id="standard-multiline-static"
              label="Message"
              multiline
              value={message}
              rows={8}
              onChange={(e) => setMessage(e.target.value)}
              //same rule as for the grid
              style={{
                width: xl ? 900 : lg ? 700 : md ? 600 : sm ? 200 : null,
              }}
            />
          </Grid>

          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </Grid>

          {console.log(name, email, subject, message)}
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
