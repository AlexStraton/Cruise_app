import { fetchAdventures, fetchCruises } from "./lib/api_call";
import { Grid, Card, CardContent } from "@mui/material";
import Header from "./components/header";
import ContainerCard from "./components/Card";

function AdventuresList({ allAdventures }) {
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

export default async function Home() {
  const getAllAdventures = await fetchAdventures();
  const getAllCruises = await fetchCruises();

  return (
    <div>
      <Header />
      <AdventuresList allAdventures={getAllAdventures} />
      <CruisesList allCruises={getAllCruises} />
    </div>
  );
}
