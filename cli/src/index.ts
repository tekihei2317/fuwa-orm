import cac from "cac";
import { generate } from "./generate.js";
import fs from "node:fs/promises";

const cli = cac();

cli.command("generate <schema>", "Generate fuwa client types from schema").action(async (schema) => {
  const input = await fs.readFile(schema, { encoding: "utf-8" });
  console.log(generate(input));
});

cli.help();
cli.version("0.0.0");
cli.parse();
