import { fetchAdventures } from "./lib/api_call";

export default async function Home() {
  const getAllAdventures = await fetchAdventures();

  console.log(getAllAdventures);
  return (
    <div>
      <h1>Adventures</h1>
      <ul>
        {getAllAdventures.map((adventure, index) => (
          <li key={index}>
            <h2>{adventure.name}</h2>
            {adventure.image && (
              <img
                src={adventure.image}
                alt={adventure.name}
                width={200}
                height={200}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
