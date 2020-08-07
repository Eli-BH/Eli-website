import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-bootstrap/Carousel";

import "./photography.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: 500,
  },
}));

const photos = [
  {
    img: "https://i.imgur.com/EXgKcEv.jpg",
    title: "lovers of art",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/8Q7rFmT.jpg",
    title: "under willies bridge",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/VSnTjvd.jpg",
    title: "west side sunset",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/x8RuhNq.jpg",
    title: "little puddles everywhere",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/f6N92v1.jpg",
    title: "contemplation",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/ctsfhsR.jpg",
    title: "nightlife",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/sBI7xWK.jpg",
    title: "family day",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/3VUrG3r.jpg",
    title: "late night",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/qchIh0R.jpg",
    title: "bubble buddy",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/uKUpiSX.jpg",
    title: "classical lovers",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/5Olh0V6.jpg",
    title: "greenery",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/tCisTku.jpg",
    title: "spring",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/JIK9y56.jpg",
    title: "rainy day ",
    cols: 1,
  },
  {
    img: "https://i.imgur.com/qcvQ6dL.jpg",
    title: "flowers",
    cols: 1,
  },
];

const Photography = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const classes = useStyles();
  return (
    <div key="photography">
      <Typography id="pht-head" key="photography">
        <h1>Photography</h1>
      </Typography>
      <div className="parallax2"></div>
      <div className={classes.root}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {photos.map((photo) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={photo.img}
                  alt={photo.title}
                />
                <Carousel.Caption>
                  <h3>{photo.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>{" "}
      <div className="parallax"></div>
    </div>
  );
};

export default Photography;
