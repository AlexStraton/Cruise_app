import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

export default function AdventureCard({ image, name }) {
  return (
    <Card sx={{ position: "relative", padding: 2, margin: 2 }}>
      <Typography level='title-lg'>{name}</Typography>
      <IconButton
        aria-label='ship image'
        variant='plain'
        color='neutral'
        size='sm'
        sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}>
        <BookmarkAdd />
      </IconButton>

      <AspectRatio minHeight='120px' maxHeight='200px'>
        <img src={image} srcSet={image} loading='lazy' alt='' />
      </AspectRatio>

      <CardContent orientation='horizontal'>
        <Button
          variant='solid'
          size='md'
          color='primary'
          aria-label='Explore Bahamas Islands'
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}>
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
