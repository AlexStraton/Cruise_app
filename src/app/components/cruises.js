// components/CruiseCard.js
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

export default function CruiseCard({
  name,
  nights,
  sailDate,
  price,
  shipName,
  startPort,
  endPort,
  shipImage,
  portNames,
}) {
  return (
    <div>
      <Card sx={{ position: "relative", padding: 2, margin: 2 }}>
        <Typography
          sx={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            letterSpacing: "0.05em",
            color: "#003366",
            textAlign: "center",
            mb: 1,
          }}
          level='title-lg'>
          {name}
        </Typography>
        <Typography sx={{ color: "#003366" }} level='body-sm'>
          Sail Date: {new Date(sailDate).toLocaleDateString()}
        </Typography>
        <Typography sx={{ color: "#003366" }} level='body-md'>
          Nights: {nights}
        </Typography>
        <IconButton
          aria-label='bookmark cruise'
          variant='plain'
          color='neutral'
          size='sm'
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}>
          <BookmarkAdd />
        </IconButton>
        <Button
          variant='solid'
          size='md'
          color='primary'
          aria-label='Explore cruise'
          sx={{ alignSelf: "flex-end", fontWeight: 600 }}>
          Explore
        </Button>

        <AspectRatio minHeight='120px' maxHeight='200px'>
          <img src={shipImage} alt={`${name} ship`} loading='lazy' />
        </AspectRatio>

        <CardContent orientation='horizontal'>
          <div>
            <Typography level='body-xs'>Total price:</Typography>
            <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
              ${price}
            </Typography>
            <Typography variant='body3'>Ship Name: {shipName}</Typography>
            <Typography variant='body4'>Start Port: {startPort}</Typography>
            <Typography variant='body4'>End Port: {endPort}</Typography>
            <Typography variant='body4'>
              Stops: {portNames.join(", ")}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
