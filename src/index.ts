import Yargs from "yargs";
import { HealthCheckCommand } from "./HealthChecker";

Yargs(process.argv.slice(2))
  .command(HealthCheckCommand)
  .demandCommand()
  .help()
  .parseAsync();
