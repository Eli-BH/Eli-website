import React from "react";
import "./homeText.css";

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
          media="(max-width: 650px)"
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
      <div className="homeText">
        <h1>
          <span id="hw">Hello World!</span> I'm Eli Henderson
        </h1>
        <h2>Software Developer | Photographer | Learner</h2>
      </div>
    </div>
  );
};

export default Home;
