import React from "react";
import { Grid } from "@mui/material";
import ContainerCard from "../components/Card";
import { fetchCruises } from "../lib/api_call";

// export async function getServerSideProps() {
//   const getAllCruises = await fetchCruises();
//   const cruises = await getAllCruises.json();
//   console.log(cruises);

//   return { props: { cruises } };
// }

async function CruisesList() {
  const getAllCruises = await fetchCruises();
  return (
    <div>
      <h1>Cruises</h1>
      <Grid container spacing={2} sx={{ display: "flex", flexWrap: "wrap" }}>
        {getAllCruises.map((cruise, index) => (
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
