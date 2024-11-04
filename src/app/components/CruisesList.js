import React from "react";
import { Grid } from "@mui/material";
import ContainerCard from "../components/Card";

function CruisesList({ allCruises }) {
  return (
    <div>
      <h1>Cruises</h1>
      <Grid container spacing={2} sx={{ display: "flex", flexWrap: "wrap" }}>
        {allCruises.map((cruise, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ContainerCard
              name={cruise.name}
              nights={cruise.nights}
              sailDate={cruise.sailDate}
              price={cruise.price}
              shipName={cruise.shipName}
              startPort={cruise.startPort}
              endPort={cruise.endPort}
              shipImage={cruise.shipImage}
              portNames={cruise.portNames}
              isAdventure={false}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CruisesList;
