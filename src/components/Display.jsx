import React, { useState, useEffect } from "react";

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

import axios from "axios";

// import Wallpaper from "../assests/wallpaper.jpg";

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
    // borderColor: "red",
    // borderWidth: 1,
    // borderStyle: "solid",
    margin: 25,
  },
  heading: {
    color: "#fff",
    fontWeight: "bolder",
    fontSize: "90px",
  },
  cardRoot: {
    width: 300,
    height: 450,
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
  // buttons: {
  //   display: "flex",
  //   alignItems: "end",
  //   justifyItems: "end",
  // },
}));
// const listData = [
//   {
//     title: "BMW",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
//     img: Bmw,
//     opensea: "https://opensea.io/",
//     rarible: "#",
//   },
//   {
//     title: "Painting",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
//     img: Painting,
//     opensea: "https://opensea.io/",
//     rarible: "#",
//   },
//   {
//     title: "Computer Gril",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
//     img: Anime,
//     opensea: "https://opensea.io/",
//     rarible: "#",
//   },
//   {
//     title: "BMW",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
//     img: Bmw,
//     opensea: "https://opensea.io/",
//     rarible: "#",
//   },
//   {
//     title: "Painting",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
//     img: Painting,
//     opensea: "https://opensea.io/",
//     rarible: "#",
//   },
//   {
//     title: "Computer Gril",
//     description:
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sequi hic tempora aliquam ea omnis quasi a placeat fuga saepe minima, laborum eaque dicta dolor voluptas? Illum nobis et voluptatem!",
//     img: Anime,
//     opensea: "https://opensea.io/",
//     rarible: "#",
//   },
// ];
const Display = () => {
  const [nfts, setNftes] = useState([]);
  const classes = useStyles();
  const url =
    "https://api.opensea.io/api/v1/assets?owner=0x5650f0cb12ea1b7bda6ceab0a4c8183f7f92257d&order_direction=desc&offset=0&limit=200&collection=wrapped-mooncatsrescue";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setNftes(res.data.assets);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        {nfts.map((item) => (
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={item.image_preview_url}
                // /mnt/c/Users/Acost/nft-store/public/assests/bmw.jpg
                title={item.name}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              {/* <Typography variant="h6" color="#000000" component="h6">
                Creator: {item.creator.user.username}
              </Typography> */}
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button href={item.permalink} size="small" color="primary">
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
