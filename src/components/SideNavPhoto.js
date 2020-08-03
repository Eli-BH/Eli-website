import React from "react";
import Typography from "@material-ui/core/Typography";

const SideNavPhoto = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://i.imgur.com/UsZxAqd.png"
        alt="elis face in a circle"
        width="80%"
        style={{ margin: 10, border: "black 2px solid", borderRadius: 110 }}
      />
      <Typography variant="h6">Hello world! I'm Eli</Typography>
    </div>
  );
};

export default SideNavPhoto;
