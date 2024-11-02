import { fetchAdventures, fetchCruises } from "./lib/api_call";
import AdventureCard from "./components/adventures";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import CruiseCard from "./components/cruises";

function AdventuresList({ allAdventures }) {
  return (
    <div>
      <h1>Adventures</h1>
      <Grid container spacing={2} sx={{ display: "flex", flexWrap: "wrap" }}>
        {allAdventures.map((adventure, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <AdventureCard image={adventure.image} name={adventure.name} />
                <Typography variant='h6' component='div'>
                  {adventure.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

function CruisesList({ allCruises }) {
  return (
    <div>
      <Typography variant='h4' component='h1' gutterBottom>
        Cruises
      </Typography>
      <Grid container spacing={2} sx={{ display: "flex", flexWrap: "wrap" }}>
        {allCruises.map((cruise, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CruiseCard
              name={cruise.name}
              nights={cruise.nights}
              sailDate={cruise.sailDate}
              price={cruise.price}
              shipName={cruise.shipName}
              startPort={cruise.startPort}
              endPort={cruise.endPort}
              shipImage={cruise.shipImage}
              portNames={cruise.portNames}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default async function Home() {
  const getAllAdventures = await fetchAdventures();
  const getAllCruises = await fetchCruises();

  return (
    <div>
      <AdventuresList allAdventures={getAllAdventures} />
      <CruisesList allCruises={getAllCruises} />
    </div>
  );
}
