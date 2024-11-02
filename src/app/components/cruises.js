// components/CruiseCard.js
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

export default function CruiseCard({
  name,
  nights,
  sailDate,
  price,
  shipName,
  startPort,
  endPort,
  shipImage,
}) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component='img'
        height='200'
        image={shipImage}
        alt={`${name} ship`}
      />
      <CardContent>
        <Typography variant='h6' component='div'>
          Cruise name: {name}
        </Typography>
        <Typography variant='body2'>Nights: {nights}</Typography>
        <Typography variant='body2'>
          Sail Date: {new Date(sailDate).toLocaleDateString()}
        </Typography>
        <Typography variant='body2'>Price: ${price}</Typography>
        <Typography variant='body2'>Ship: {shipName}</Typography>
        <Typography variant='body2'>Start Port: {startPort}</Typography>
        <Typography variant='body2'>End Port: {endPort}</Typography>
      </CardContent>
    </Card>
  );
}