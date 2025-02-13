// "use client"; // ✅ Ensures this runs on the client side

// import { useEffect } from "react";

// const GoSquaredAssistant = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined" && !window.GoSquared) {
//       const script = document.createElement("script");
//       script.src = "https://d1l6p2sc9645hc.cloudfront.net/tracker.js"; // ✅ GoSquared tracking script
//       script.async = true;
//       script.onload = () => {
//         window.GoSquared = window.GoSquared || {};
//         window.GoSquared.acct = "GSN-XXXXX"; // ✅ Replace with your actual GoSquared Site Token

//         if (window.GoSquared.init) {
//           window.GoSquared.init(); // ✅ Initialize if available
//         }
//       };

//       document.body.appendChild(script);
//     }
//   }, []);

//   return null; // ✅ No visible UI, just loads the script
// };

// export default GoSquaredAssistant;
