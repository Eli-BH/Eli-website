import React from "react";
import "./homeText.css";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div>
      <div></div>

      <picture>
        <source
          media="(max-width: 450px)"
          srcset="https://i.imgur.com/KgMSiXU.jpg"
          style={{
            width: "100%",
            height: " 100vh",
          }}
        />
        <source
          media="(max-width: 1050px)"
          srcset="https://i.imgur.com/KgMSiXU.jpg"
          style={{
            width: "100%",
            height: " 100%",
          }}
        />

        <img
          src="https://i.imgur.com/1aCU4yl.jpg"
          style={{
            width: "100%",
            height: "100%",
          }}
          alt=""
        />
      </picture>

      <Slide left>
        <div className="homeText">
          <h1 key="hello-world">
            <span id="hw">Hello World!</span> I'm Eli Henderson
          </h1>
          <h3 className="htag">Software Developer | Photographer </h3>
        </div>
      </Slide>
    </div>
  );
};

export default Home;
