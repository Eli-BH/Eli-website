import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    color: "black",
    textDecoration: false,
  },
}));

const LinkList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <AnchorLink
          href="#home"
          style={{ color: props.color, textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </AnchorLink>
        <AnchorLink
          href="#about"
          style={{ color: props.color, textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemText>About Me</ListItemText>
          </ListItem>
        </AnchorLink>
        <AnchorLink
          href="#projects"
          style={{ color: props.color, textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemText>Projects</ListItemText>
          </ListItem>
        </AnchorLink>
        <AnchorLink
          href="#photography"
          style={{ color: props.color, textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemText>Potography</ListItemText>
          </ListItem>
        </AnchorLink>
        <AnchorLink
          href="#contact"
          style={{ color: props.color, textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemText>Contact Me</ListItemText>
          </ListItem>
        </AnchorLink>
      </List>
    </div>
  );
};

export default LinkList;
