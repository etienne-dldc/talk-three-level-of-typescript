import chokidar from "chokidar";
import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import WebSocket from "ws";

watch().catch(console.error);

async function watch() {
  const ws = new WebSocket("ws://127.0.0.1:3710");

  let sendCommand = (command: any) => {
    ws.send(JSON.stringify(command));
  };

  chokidar.watch("src").on("change", (path) => {
    const isLive = resolve(path) === resolve("src/live.ts");
    if (!isLive) {
      return;
    }
    updateLive(sendCommand);
  });
}

async function updateLive(sendCommand: (command: any) => void) {
  console.log("updateLive");

  const prevContent = await readFile("src/live.ts", "utf-8");
  const firstLine = prevContent.split("\n")[0];
  const slideNum = parseNextSlideNum(firstLine);
  const content = await loadStepContent(slideNum);
  const nextHeader = slideNum === null ? firstLine : `// ${slideNum}`;
  const nextContent = `${nextHeader}\n\n${content}`;
  if (nextContent === prevContent) {
    return;
  }
  await writeFile("src/live.ts", nextContent);
  sendCommand({ command: "cursorMove", args: { to: "viewPortTop" } });
  sendCommand({ command: "cursorMove", args: { to: "right", value: 3 } });
}

function parseNextSlideNum(line: string): null | number {
  // remove // from comment
  const step = line.slice(3).trim();
  const indexMatch = step.match(/^(\d+)((\++)|(-+))?$/);
  if (!indexMatch) {
    return null;
  }
  const index = parseInt(indexMatch[1]);
  if (!indexMatch[2]) {
    return index;
  }
  const operation = indexMatch[2]
    .split("")
    .map((c) => Number(c + "1"))
    .reduce((a, b) => a + b, 0);
  return index + operation;
}

async function loadStepContent(slide: number | null): Promise<string> {
  if (slide === null) {
    return "// Invalid slide";
  }
  const files = (await readdir("src/slides")).filter((file) =>
    file.endsWith(".ts")
  );
  for (const file of files) {
    const [numStr] = file.split(".");
    const fileIndex = parseInt(numStr);
    if (fileIndex === slide) {
      const content = await readFile(`src/slides/${file}`, "utf-8");
      return content;
    }
  }
  return "// Slide not found";
}
