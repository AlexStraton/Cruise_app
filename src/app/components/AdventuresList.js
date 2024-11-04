import React from "react";
import ContainerCard from "../components/Card";
import { Grid, Card, CardContent } from "@mui/material";

export default function AdventuresList({ allAdventures }) {
  return (
    <div>
      <h1>Adventures</h1>
      <Grid
        container
        spacing={4}
        sx={{ display: "flex", flexWrap: "wrap", paddingX: 2 }}>
        {allAdventures.map((adventure, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <ContainerCard
                  adventureImage={adventure.image}
                  adventureName={adventure.name}
                  isAdventure={true}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
