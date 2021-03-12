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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundBlendMode: "overlay",
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
  },
  heading: {
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "90px",
  },
  cardRoot: {
    maxWidth: 345,
    borderRadius: "5%",
    margin: 20,
  },
  media: {
    height: 300,
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
    title: "BMW",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Bmw,
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
    title: "BMW",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
    img: Bmw,
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
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  BMW
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
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
