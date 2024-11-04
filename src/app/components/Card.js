import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

export default function ContainerCard({
  adventureImage,
  adventureName,
  nights,
  sailDate,
  price,
  shipName,
  shipImage,
  startPort,
  endPort,
  portNames = [],
  isAdventure,
}) {
  return (
    <Card sx={{ position: "relative", padding: 2, margin: 2 }}>
      <Typography level='title-lg'>{adventureName}</Typography>

      {sailDate && (
        <Typography sx={{ color: "#003366" }} level='body-sm'>
          Sail Date: {new Date(sailDate).toLocaleDateString()}
        </Typography>
      )}
      {nights && (
        <Typography sx={{ color: "#003366" }} level='body-md'>
          Nights: {nights}
        </Typography>
      )}

      <IconButton
        aria-label='ship image'
        variant='plain'
        color='neutral'
        size='sm'
        sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}>
        <BookmarkAdd />
      </IconButton>

      <AspectRatio minHeight='120px' maxHeight='200px'>
        <img
          src={isAdventure ? adventureImage : shipImage}
          alt={
            isAdventure
              ? `${adventureName} adventure image`
              : `${shipName} cruise ship image`
          }
          loading='lazy'
        />
      </AspectRatio>

      <CardContent orientation='horizontal'>
        <div>
          {price && (
            <>
              <Typography level='body-xs'>Total price:</Typography>
              <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
                ${price}
              </Typography>
            </>
          )}
          {shipName && (
            <Typography variant='body3'>Ship Name: {shipName}</Typography>
          )}
          {startPort && (
            <Typography variant='body4'>Start Port: {startPort}</Typography>
          )}
          {endPort && (
            <Typography variant='body4'>End Port: {endPort}</Typography>
          )}
          {portNames.length > 0 && (
            <Typography variant='body4'>
              Stops: {portNames.join(", ")}
            </Typography>
          )}
        </div>

        <Button
          variant='solid'
          size='md'
          color='primary'
          aria-label='Explore trips'
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}>
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
