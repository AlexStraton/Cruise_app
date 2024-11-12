import React from "react";
import ContainerCard from "../components/Card";

export default function AdventuresList({ allAdventures }) {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-8'>Adventures</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        {allAdventures.map((adventure, index) => (
          <div key={index} className='w-1/3 sm:w-1/4 md:w-1/6 p-4'>
            <div className='bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg'>
              <ContainerCard
                adventureImage={adventure.image}
                adventureName={adventure.name}
                isAdventure={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// import React from "react";
// import ContainerCard from "../components/Card";
// import { Grid, Card, CardContent } from "@mui/material";

// export default function AdventuresList({ allAdventures }) {
//   return (
//     <div>
//       <h1>Adventures</h1>
//       <Grid
//         container
//         spacing={4}
//         sx={{ display: "flex", flexWrap: "wrap", paddingX: 2 }}>
//         {allAdventures.map((adventure, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ height: "100%" }}>
//               <CardContent>
//                 <ContainerCard
//                   adventureImage={adventure.image}
//                   adventureName={adventure.name}
//                   isAdventure={true}
//                 />
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }
