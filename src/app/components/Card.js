import * as React from "react";

export default function ContainerCard({
  adventureImage,
  adventureName,
  nights,
  sailDate,
  price,
  shipName,
  shipImage,
  startPort,
  endPort,
  portNames = [],
  isAdventure,
}) {
  return (
    <div className='relative p-6 m-6 bg-red-500 rounded-md shadow-lg border border-gray-300'>
      <div className='relative h-[150px]'>
        <img
          src={isAdventure ? adventureImage : shipImage}
          alt={
            isAdventure
              ? `${adventureName} adventure image`
              : `${shipName} cruise ship image`
          }
          loading='lazy'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='absolute bottom-0 w-full py-2 px-4 border-t border-gray-300'>
        <h2 className='text-lg font-semibold text-black'>{adventureName}</h2>
      </div>

      <div className='mt-4'>
        {sailDate && (
          <p className='text-blue-800 text-sm'>
            Sail Date: {new Date(sailDate).toLocaleDateString()}
          </p>
        )}
        {nights && <p className='text-blue-800 text-base'>Nights: {nights}</p>}

        {price && (
          <>
            <p className='text-white text-xs'>Total price:</p>
            <p className='text-lg font-bold text-white'>${price}</p>
          </>
        )}
        {shipName && (
          <p className='text-white text-sm'>Ship Name: {shipName}</p>
        )}
        {startPort && (
          <p className='text-white text-sm'>Start Port: {startPort}</p>
        )}
        {endPort && <p className='text-white text-sm'>End Port: {endPort}</p>}
        {portNames.length > 0 && (
          <p className='text-black text-sm'>Stops: {portNames.join(", ")}</p>
        )}
      </div>
    </div>
  );
}

// import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Button from "@mui/joy/Button";
// import Card from "@mui/joy/Card";
// import CardContent from "@mui/joy/CardContent";
// import IconButton from "@mui/joy/IconButton";
// import Typography from "@mui/joy/Typography";
// import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

// export default function ContainerCard({
//   adventureImage,
//   adventureName,
//   nights,
//   sailDate,
//   price,
//   shipName,
//   shipImage,
//   startPort,
//   endPort,
//   portNames = [],
//   isAdventure,
// }) {
//   return (
//     <Card sx={{ position: "relative", padding: 2, margin: 2 }}>
//       <Typography level='title-lg'>{adventureName}</Typography>

//       {sailDate && (
//         <Typography sx={{ color: "#003366" }} level='body-sm'>
//           Sail Date: {new Date(sailDate).toLocaleDateString()}
//         </Typography>
//       )}
//       {nights && (
//         <Typography sx={{ color: "#003366" }} level='body-md'>
//           Nights: {nights}
//         </Typography>
//       )}

//       <IconButton
//         aria-label='ship image'
//         variant='plain'
//         color='neutral'
//         size='sm'
//         sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}>
//         <BookmarkAdd />
//       </IconButton>

//       <AspectRatio minHeight='120px' maxHeight='200px'>
//         <img
//           src={isAdventure ? adventureImage : shipImage}
//           alt={
//             isAdventure
//               ? `${adventureName} adventure image`
//               : `${shipName} cruise ship image`
//           }
//           loading='lazy'
//         />
//       </AspectRatio>

//       <CardContent orientation='horizontal'>
//         <div>
//           {price && (
//             <>
//               <Typography level='body-xs'>Total price:</Typography>
//               <Typography sx={{ fontSize: "lg", fontWeight: "lg" }}>
//                 ${price}
//               </Typography>
//             </>
//           )}
//           {shipName && (
//             <Typography variant='body3'>Ship Name: {shipName}</Typography>
//           )}
//           {startPort && (
//             <Typography variant='body4'>Start Port: {startPort}</Typography>
//           )}
//           {endPort && (
//             <Typography variant='body4'>End Port: {endPort}</Typography>
//           )}
//           {portNames.length > 0 && (
//             <Typography variant='body4'>
//               Stops: {portNames.join(", ")}
//             </Typography>
//           )}
//         </div>

//         <Button
//           variant='solid'
//           size='md'
//           color='primary'
//           aria-label='Explore trips'
//           sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}>
//           Explore
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }
