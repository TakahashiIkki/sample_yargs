import Yargs from "yargs";
import { LoadEnvCommand } from "./LoadEnv";

Yargs(process.argv.slice(2))
  .command(LoadEnvCommand)
  .demandCommand()
  .help()
  .parseAsync();
