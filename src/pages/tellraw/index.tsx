import { useState } from "preact/hooks";
import "./style.css";

import { parseTellraw, stringifyTellraw } from "tellraw-parser";

function processText(text: string): string {
  if (!text.trim()) {
    return "";
  }

  try {
    const parsed = parseTellraw(text);

    return stringifyTellraw(parsed, {
      format: "snbt",
    });
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : String(error)}`;
  }
}

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleInput(event: Event) {
    const target = event.currentTarget as HTMLTextAreaElement;

    const value = target.value;

    setInput(value);
    setOutput(processText(value));
  }

  return (
    <main>
      <p>
        Tellraw Converter from JSON to SNBT to Update it for newer Minecraft
        Versions
      </p>
      <section class="text-editor">
        <div class="text-panel">
          <label for="input">Input</label>

          <textarea
            id="input"
            value={input}
            onInput={handleInput}
            placeholder="tellraw @a {text:'Hello',bold:true}"
          />
        </div>

        <div class="text-arrow">→</div>

        <div class="text-panel">
          <label for="output">Output</label>

          <textarea
            id="output"
            value={output}
            readOnly
            placeholder="SNBT Output..."
          />
        </div>
      </section>
      <p>
        More Minecraft Tools are{" "}
        <a href="https://shadowdara.github.io/mctools">here</a>!
      </p>
    </main>
  );
}
