import {
  Code,
  CodeSignal,
  CodeTag,
  Rect,
  makeScene2D,
} from "@motion-canvas/2d";
import {
  createRef,
  createSignal,
  ThreadGenerator,
  waitFor,
} from "@motion-canvas/core";
import { Window, WindowStyle } from "@hhenrichsen/canvas-commons";
import { event, leadDev, unlocks, rendezvous } from "../reference";

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

  yield* waitFor(1.5);

  yield* type(code().code, "export const eventByIrawo = {};");
  yield* code().code.insert([0, 29], 0.05)`\n`;
  yield* type(code().code, `\n\ttitle: "${event.title}",`, [0, 29]);
  yield* type(code().code, "\n\tleadDev: {},", [1, 11 + event.title.length]);
  yield* code().code.insert([2, 11], 0.05)`\n\t`;
  yield* type(code().code, `\n${leadDev}`, [2, 11]);
  yield* type(code().code, `\n\tunlocks: [],`, [
    3 + Object.keys(event.leadDev).length,
    3,
  ]);
  yield* code().code.insert(
    [4 + Object.keys(event.leadDev).length, 11],
    0.055,
  )`\n\t`;
  yield* type(code().code, unlocks, [
    4 + Object.keys(event.leadDev).length,
    11,
  ]);
  yield* type(code().code, `\n\trendezvous: {},`, [
    5 + Object.keys(event.leadDev).length + event.unlocks.length,
    3,
  ]);
  yield* code().code.insert(
    [6 + Object.keys(event.leadDev).length + event.unlocks.length, 14],
    0.05,
  )`\n\t`;
  yield* type(code().code, `\n${rendezvous}`, [
    6 + Object.keys(event.leadDev).length + event.unlocks.length,
    14,
  ]);

  yield* waitFor(5);
});

function* type(
  code: CodeSignal<Code>,
  text: string,
  location: [number, number] | null = null,
  typingSpeed: number = 0.051,
): ThreadGenerator {
  if (location === null) {
    for (const char of text) {
      yield* code.append(char as CodeTag, typingSpeed);
    }
    return;
  }

  let [line, column] = location;

  for (const char of text) {
    yield* code.insert([line, column], char as CodeTag, typingSpeed);

    if (char == "\n") {
      line++;
      column = 0;
    } else {
      column++;
    }
  }
}
