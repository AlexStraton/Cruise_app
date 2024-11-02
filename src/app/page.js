import { fetchAdventures, fetchCruises } from "./lib/api_call";
import Adventure from "./components/adventures";

export default async function Home() {
  const getAllAdventures = await fetchAdventures();
  const getAllCruises = await fetchCruises();

  return (
    <div>
      <h1>Adventures</h1>
      <ul>
        {getAllAdventures.map((adventure, index) => (
          <Adventure image={adventure.image} name={adventure.name} />
        ))}
      </ul>
      <h1>Cruises</h1>
      <ul>
        {getAllCruises.map((cruise, index) => (
          <li key={index}>
            <h2>Cruise name: {cruise.name}</h2>
            <h3>Nights: {cruise.nights}</h3>
            <h3>{cruise.sailDate}</h3>
            <h3>Price: {cruise.price}</h3>
            <h3>Ship name: {cruise.shipName}</h3>
            <h3>Start Port: {cruise.startPort}</h3>
            <h3>End port: {cruise.endPort}</h3>

            <img
              src={cruise.shipImage}
              alt={`${cruise.cruiseLineName} icon`}
              width={200}
              height={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
