import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import ComputerIcon from "@material-ui/icons/Computer";
import CameraOutlinedIcon from "@material-ui/icons/CameraOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

const SideBarInfo = () => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText>About Me</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText>Programming Projects</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CameraOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Photography</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ContactMailOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Contact Me</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default SideBarInfo;
