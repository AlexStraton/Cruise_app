import { fetchAdventures } from "./lib/api_call";

import AdventuresList from "./components/AdventuresList";

export default async function Home() {
  const getAllAdventures = await fetchAdventures();

  return (
    <div>
      <AdventuresList allAdventures={getAllAdventures} />
      {/* <CruisesList allCruises={getAllCruises} /> */}
    </div>
  );
}
