"use client";
import React, { useEffect, useState } from "react";

const logoUrl =
  "https://www.mykindofcruise.com/_next/static/media/logo-full-text-white-overlay.b8a950a4.png";

const typewriterText = "Explore the World's Best Cruises";

export default function Header() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typewriterText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <header style={{ backgroundColor: "#003366", padding: "1rem 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <img
            src={logoUrl}
            alt='My Kind of Cruise'
            style={{ height: "50px" }}
          />

          <div
            style={{
              color: "white",
              fontWeight: "bold",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}>
            {displayedText}
          </div>
        </div>
      </div>
    </header>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

// const logoUrl =
//   "https://www.mykindofcruise.com/_next/static/media/logo-full-text-white-overlay.b8a950a4.png";

// const typewriterText = "Explore the World's Best Cruises";

// export default function Header() {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (currentIndex < typewriterText.length) {
//       const timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + typewriterText[currentIndex]);
//         setCurrentIndex((prev) => prev + 1);
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex]);

//   return (
//     <AppBar position='static' sx={{ backgroundColor: "#003366", paddingY: 2 }}>
//       <Container maxWidth='lg'>
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}>
//           <Box
//             component='img'
//             src={logoUrl}
//             alt='My Kind of Cruise'
//             sx={{ height: 50 }}
//           />

//           <Typography
//             variant='h5'
//             component='div'
//             sx={{
//               color: "white",
//               fontWeight: "bold",
//               fontFamily: "monospace",
//               whiteSpace: "nowrap",
//               overflow: "hidden",
//             }}>
//             {displayedText}
//           </Typography>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
