import { Code, Rect, makeScene2D, word } from "@motion-canvas/2d";
import { createRef, createSignal, waitFor } from "@motion-canvas/core";
import { Window, WindowStyle } from "@hhenrichsen/canvas-commons";

export default makeScene2D(function* (view) {
  const window = createRef<Window>();
  const rect = createRef<Rect>();
  const code = createRef<Code>();
  const windowWidth = createSignal(() => (view.width() * 90) / 100);

  view.fill("#FBC029");
  view.add(
    <>
      <Window
        windowStyle={WindowStyle.MacOS}
        ref={window}
        bodyColor="#2f1e2e"
        headerColor="#2f1e2e"
        width={windowWidth}
        height={() => (view.height() * 90) / 100}
        padding={10}
      >
        <Rect ref={rect} width={windowWidth} padding={32} height="100%">
          <Code ref={code} fontSize={32} code={""} fontFamily="Hack" />
        </Rect>
      </Window>
    </>,
  );

  for (const char of "const eventByIrawo = {\n};") {
    yield* code().code.append(char, 0.05);
  }

  yield* code().code.insert([1, 0], 0.45)`\ttitle: "Coder avec l\'IA",\n`;
  yield* code().code.insert([2, 0], 0.25)`\tleadDev: {\n\t}\n`;
  yield* code().code.insert([3, 0], 0.25)`\t\tname: "Boulama Kandine",\n`;
  yield* code().code.insert(
    [4, 0],
    0.25,
  )`\t\ttitle: "Ingénieur Aérospatial & IA",\n`;
  yield* code().code.insert(
    [5, 0],
    0.25,
  )`\t\tstack: ["Machine Learning", "AI", "Cybersec"],\n`;
  yield* code().code.replace(word(6, 1, 1), 0.1)`},\n`;
  yield* code().code.insert([7, 0], 0.25)`\tunlocks: []`;
  yield* code().code.replace(word(7, 11, 1), 0.1)`\n\n\t],`;
  yield* code().code.insert(
    [8, 0],
    0.25,
  )`\t\t"👉🏿 Les outils IA à vraiment utiliser en 2025",\n`;
  yield* code().code.insert(
    [9, 0],
    0.25,
  )`\t\t"👉🏿 Comment coder plus vite, clean et sans prise de tête",\n`;
  yield* code().code.insert(
    [10, 0],
    0.25,
  )`\t\t"👉🏿 Les réflexes pour rester compétitif.ve dans le game",`;
  yield* code().code.replace(word(11, 1), 0.1)`],\n\n`;
  yield* code().code.insert([12, 0], 0.25)`\trendezvous: {\n\t},`;
  yield* code().code.replace(word(13, 1), 0.1)`\n\t},\n`;
  yield* code().code.insert(
    [13, 0],
    0.25,
  )`\t\tdateTime: "2025-06-05T19:00:00Z",\n`;
  yield* code().code.insert(
    [14, 0],
    0.25,
  )`\t\tentryPoint: "https://bit.ly/CodexIA",\n`;
  yield* code().code.insert([15, 0], 0.25)`\t\taccessFee: 0,`;

  yield* waitFor(4);
});
