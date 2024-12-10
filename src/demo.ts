import { DateTime } from "luxon";
import { nestedCaller } from "./f2/nestedCaller";

export const runDemo = async () => {
  const text = await Bun.file("./input/test.txt").text();
  const lines = text.trim().split("\n");
  for (const line of lines) {
    console.log(`${DateTime.now().toISO()}: ${line}`);
  }
  // Try nested file imports
  nestedCaller();
};
