"use client";

import React from "react";
import ContainerCard from "../components/Card";
import { Grid, Card, CardContent } from "@mui/material";
import Button from "@mui/joy/Button";
import { useRouter } from "next/navigation";

export default function AdventuresList({ allAdventures }) {
  const router = useRouter();

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
        <Button
          onClick={() => router.push("/Cruises")}
          variant='soft'
          size='md'
          color='primary'
          aria-label='Explore trips'
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}>
          Explore our cruises here
        </Button>
      </Grid>
    </div>
  );
}
