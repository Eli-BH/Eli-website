import React from "react";
import IconButton from "@material-ui/core/IconButton";

const NavFooter = () => {
  return (
    <div>
      <React.Fragment>
        <IconButton>
          <a href="https://www.instagram.com/avian.eli.photography/">
            <img
              src="https://img.icons8.com/fluent/32/000000/instagram-new.png"
              alt='<a href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram">Instagram icon by Icons8</a>'
            />
          </a>
        </IconButton>
      </React.Fragment>
      <React.Fragment>
        <IconButton>
          <a href="https://www.linkedin.com/in/elijah-brown-henderson-983768144/">
            <img
              src="https://img.icons8.com/color/32/000000/linkedin.png"
              alt='<a href="https://icons8.com/icon/13930/linkedin">LinkedIn icon by Icons8</a>'
            />
          </a>
        </IconButton>
      </React.Fragment>
      <React.Fragment>
        <IconButton>
          <a href="https://twitter.com/Eli_b_goode">
            <img
              src="https://img.icons8.com/fluent/32/000000/twitter.png"
              alt='<a href="https://icons8.com/icon/5MQ0gPAYYx7a/twitter">Twitter icon by Icons8</a>'
            />
          </a>
        </IconButton>
      </React.Fragment>
      <React.Fragment>
        <IconButton>
          <a href="https://github.com/Eli-BH">
            <img
              src="https://img.icons8.com/ios-glyphs/32/000000/github.png"
              alt='<a href="https://icons8.com/icon/62856/github">GitHub icon by Icons8</a>'
            />
          </a>
        </IconButton>
      </React.Fragment>
    </div>
  );
};

export default NavFooter;
