import React from "react";

import {
  Container,
  Typography,
  CardActions,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Bmw from "../assests/bmw.jpg";
import Painting from "../assests/painting.jpg";
import Anime from "../assests/anime.jpg";
import Wallpaper from "../assests/wallpaper.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  },
  container: {
    minHeight: "50vh",
    width: "100%",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
    margin: 25,
  },
  heading: {
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "90px",
  },
  cardRoot: {
    maxWidth: 300,
    borderRadius: "5%",
    background: "rgba( 255, 255, 255, 0.2 )",
    border: "solid 1px rgba(255,255,255,0.3)",
    backgroudClip: "padding-box",
    backdropFilter: "blur(10px )",
    margin: 20,
    padding: 20,
  },
  media: {
    height: 300,
    borderRadius: "5%",
  },
}));
const listData = [
  {
    title: "BMW",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Bmw,
    opensea: "https://opensea.io/",
    rarible: "#",
  },
  {
    title: "Painting",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Painting,
    opensea: "https://opensea.io/",
    rarible: "#",
  },
  {
    title: "Computer Gril",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Anime,
    opensea: "https://opensea.io/",
    rarible: "#",
  },
  {
    title: "BMW",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Bmw,
    opensea: "https://opensea.io/",
    rarible: "#",
  },
  {
    title: "Painting",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Painting,
    opensea: "https://opensea.io/",
    rarible: "#",
  },
  {
    title: "Computer Gril",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Anime,
    opensea: "https://opensea.io/",
    rarible: "#",
  },
];

const Display = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {listData.map((item) => (
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.img}
                // /mnt/c/Users/Acost/nft-store/public/assests/bmw.jpg
                title={item.title}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                BMW
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={item.opensea} size="small" color="primary">
                Opensea.io
              </Button>
              <Button size="small" color="primary">
                Rarible
              </Button>
              <Button size="small" color="primary">
                Nifty
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Display;
