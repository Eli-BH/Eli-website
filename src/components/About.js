import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Bounce from "react-reveal/Bounce";

import "./about.css";

const About = () => {
  const xl = useMediaQuery("(max-width:4500px)");
  const lg = useMediaQuery("(max-width:2000px)");
  const reg = useMediaQuery("(max-width:1080px)");
  const sm = useMediaQuery("(max-width:500px)");
  const xm = useMediaQuery("(max-width: 376px");
  const space = useMediaQuery("(min-width: 2000px");
  const smspace = useMediaQuery("(min-width: 1000px");

  let size = 250;
  if (xl) {
    size = 250;
  }
  if (lg) {
    size = 200;
  }
  if (reg) {
    size = 130;
  }
  if (sm) {
    size = 66;
  }

  return (
    <div>
      <Container
        className="abt-typ"
        maxWidth="xl"
        style={{ marginTop: xl ? 150 : 100 }}
      >
        <Typography id="abt-intr" style={{ marginTop: xl ? 250 : 10 }}>
          Who am I?
        </Typography>
        <Typography id="abt-head">
          <h1>About Me</h1>
        </Typography>
        <Typography id="abt-typ1">
          <span id="eli">I am Elijah Brown-Henderson</span>, but most people
          call me Eli. I'm a junior level software developer that primarily
          works with web development projects. I also like to experiment with
          mobile application development in swift or react native, and social
          media automation projects using web scraping with python. I always
          like to try new areas of development to gain versatility in my skills.{" "}
        </Typography>
        <Typography
          id="abt-typ2"
          style={{ marginBottom: space ? 80 : xm ? 50 : 20 }}
        >
          I am also an avid photographer, my focal genre is street photography.
          I find photography fascinating because it allows me to gain a new
          perspective on everyday life, and pay closer attention to the smaller
          or more subtle details in the city that never sleeps.
        </Typography>
      </Container>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Bounce
          top
          cascade
          style={{
            display: sm || xm ? "none" : "block",
            marginTop: lg ? 60 : 200,
            marginLeft: space ? 500 : smspace ? 225 : null,
            paddding: 0,
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={`https://img.icons8.com/nolan/${size}/computer.png`}
              alt="https://icons8.com/icon/43607/computer"
            />
            <img
              src={`https://img.icons8.com/ultraviolet/${size}/000000/plus-math.png`}
              alt="https://icons8.com/icon/44730/plus-math"
            />
            <img
              src={`https://img.icons8.com/nolan/${size}/camera.png`}
              alt="https://icons8.com/icon/43979/camera"
            />
            <img
              src={`https://img.icons8.com/ultraviolet/${size}/000000/equal-sign.png`}
              alt="https://icons8.com/icon/44681/equal-sign"
            />
            <img
              src={`https://img.icons8.com/nolan/${size}/happy.png`}
              alt="https://icons8.com/icon/43626/happy"
            />
          </div>
        </Bounce>
      </div>
    </div>
  );
};

export default About;
