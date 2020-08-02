import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const LinkList = () => {
  return (
    <div>
      <List>
        <ListItemLink href="#">
          <ListItemText>About Me</ListItemText>
        </ListItemLink>
        <ListItemLink href="#">
          <ListItemText>Projects</ListItemText>
        </ListItemLink>
        <ListItemLink href="#">
          <ListItemText>Potography</ListItemText>
        </ListItemLink>
        <ListItemLink href="#">
          <ListItemText>Contact Me</ListItemText>
        </ListItemLink>
      </List>
    </div>
  );
};

export default LinkList;
