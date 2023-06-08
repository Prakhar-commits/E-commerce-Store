import { useTheme } from "@emotion/react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Hidden,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import {ShoppingCartSharp} from '@mui/icons-material'
import React, { useEffect, useState } from "react";

export function Home() {
  const theme = useTheme();
  const [products, setProducts] = useState([]);

  async function fetchAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map(({ title, id, rating, description, price, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                }}
                image={image}
                alt={title}
              />

              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "1",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {title}
                </Typography>
                <Typography color="text.secondary" paragraph  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                  }}>{description}</Typography>
                <Typography fontSize="large">{price}</Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
              <CardActions sx={{alignSelf:'center'}}>
                <IconButton variant="contained">
                    <ShoppingCartSharp/>
                    Add to Cart
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
