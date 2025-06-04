// This is a just used as reference to the code being animated.
export const event = {
  title: "Coder avec l'IA",
  leadDev: {
    name: "Boulama Kandine",
    title: "Ingénieur Aérospatial & IA",
    stack: ["Machine Learning", "AI", "Cybersec"],
    credits: ["tinq.ai", "spellbox.app"],
  },
  unlocks: [
    "Les outils IA à vraiment utiliser en 2025 ツ",
    "Comment coder plus vite, clean et sans prise de tête {◕ ◡ ◕}",
    "Les réflexes pour rester compétitif.ve dans le game (⌐■_■)",
  ],
  rendezvous: {
    dateTime: "2025-06-05T19:00:00Z",
    entryPoint: "https://bit.ly/CodexIA",
    accessFee: 0,
  },
};

export const leadDev = Object.entries(event.leadDev)
  .map(([k, v]) => {
    if (Array.isArray(v))
      return `\t\t${k}: [${v.map((v) => `"${v}"`).join(", ")}],`;
    return `\t\t${k}: "${v}",`;
  })
  .join("\n");
export const unlocks = event.unlocks.map((u) => `\n\t\t"${u}",`).join("");
export const rendezvous = Object.entries(event.rendezvous)
  .map(([k, v]) => `\t\t${k}: ${typeof v === "number" ? v : `"${v}"`},`)
  .join("\n");
