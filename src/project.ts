import { makeProject } from "@motion-canvas/core";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/javascript";

import example from "./scenes/example?scene";
import { HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

import "./app.css";

Code.defaultHighlighter = new LezerHighlighter(
  parser,
  HighlightStyle.define([
    { tag: tags.keyword, color: "#d1564e" },
    { tag: tags.number, color: "#815ba4" },
    { tag: tags.string, color: "#dfab1a" },
    { tag: tags.name, color: "#48b685" },
    { tag: tags.punctuation, color: "#b9b6b0" },
  ]),
);

export default makeProject({
  scenes: [example],
});
