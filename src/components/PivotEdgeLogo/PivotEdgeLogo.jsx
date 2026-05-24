// import { useEffect, useState } from "react";

// /**
//  * PivotEdgeLogo
//  *
//  * Drop-in text lockup to sit next to your isolated icon PNG.
//  *
//  * Props:
//  *   size      — "sm" | "md" (default) | "lg"
//  *   darkBg    — boolean, pass true when rendering on a dark background
//  *               (no visual change needed since the colors are self-contained,
//  *                but kept as a hook for future variants)
//  */

// const sizes = {
//   sm: {
//     brand: "text-[22px]",
//     partners: "text-[7px] tracking-[0.35em]",
//     tagline: "text-[5.5px] tracking-[0.25em]",
//     gap: "gap-[2px]",
//   },
//   md: {
//     brand: "text-[34px]",
//     partners: "text-[10px] tracking-[0.38em]",
//     tagline: "text-[7.5px] tracking-[0.28em]",
//     gap: "gap-[0px]",
//   },
//   lg: {
//     brand: "text-[48px]",
//     partners: "text-[13px] tracking-[0.4em]",
//     tagline: "text-[9.5px] tracking-[0.3em]",
//     gap: "gap-[4px]",
//   },
// };

// const TEAL = "#0F4C5C";
// const GOLD = "#C9A23F";

// export default function PivotEdgeLogo({ size = "md" }) {
//   const s = sizes[size];

//   return (
//     <div className={`flex flex-col ${s.gap} leading-none select-none`}>
//       {/* ── Row 1: PIVOTEDGE ─────────────────────────────────── */}
//       <div
//         className={`${s.brand} font-semibold`}
//         style={{
//           fontFamily:
//             "'Cormorant Garamond', 'Palatino Linotype', Georgia, serif",
//           color: TEAL,
//           lineHeight: 1,
//         }}
//       >
//         PivotEdge
//       </div>

//       {/* ── Row 2: PARTNERS ──────────────────────────────────── */}
//       <div
//         className={`${s.partners} font-normal uppercase`}
//         style={{
//           fontFamily: "'Cormorant SC', 'Cormorant Garamond', Georgia, serif",
//           color: GOLD,
//           lineHeight: 1,
//           /* nudge left to optically align with the P in PivotEdge
//              (small-caps glyphs have slightly more left-side bearing) */
//           marginLeft: "28px",
//         }}
//       >
//         Partners
//       </div>

//       {/* ── Row 3: TAGLINE ───────────────────────────────────── */}
//       {/* <div
//         className={`${s.tagline} font-normal uppercase`}
//         style={{
//           fontFamily: "'Cormorant SC', 'Cormorant Garamond', Georgia, serif",
//           color: GOLD,
//           lineHeight: 1,
//           marginLeft: "1px",
//         }}
//       >
//         Advantage Starts Here
//       </div> */}
//     </div>
//   );
// }
