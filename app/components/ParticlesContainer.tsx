// import Particles from "@tsparticles/react";
// import { loadFull } from "tsparticles";
// import { Engine } from "@tsparticles/engine";
// import React, { useCallback } from "react";

// const ParticlesContainer: React.FC = () => {
//   // Initialize particles
//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(() => {
//     console.log("Particles loaded successfully");
//   }, []);

//   return (
//     <Particles
//       className="w-full h-full absolute z-0"
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: {
//             value: "#0d47a1", // Set a background color
//           },
//         },
//         fpsLimit: 120,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: false, // Disable click event
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//           },
//           modes: {
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#ffffff", // Particle color
//           },
//           links: {
//             color: "#f5d393",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce",
//             },
//             random: false,
//             speed: 1,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               //  area: 800, // Adjust the area for density
//             },
//             value: 80,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default ParticlesContainer;
