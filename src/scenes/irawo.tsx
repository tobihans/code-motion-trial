import { Img, makeScene2D } from "@motion-canvas/2d";
// import irawoYellowStar from "../assets/IRAWO-STAR-JAUNE.png";
import irawoYellowLogo from "../assets/IRAWO-LOGO-JAUNE.png";
import {
  all,
  createRef,
  Direction,
  slideTransition,
  waitFor,
} from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const logo = createRef<Img>();
  view.fill("#0d0c0d");

  view.add(<Img ref={logo} src={irawoYellowLogo} scale={0} />);

  yield* slideTransition(Direction.Right, 0.45);
  yield* all(logo().scale(0.25, 1), logo().alpha(0, 1).to(1, 1));
  yield* waitFor(2);
});
