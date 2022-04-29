import Yargs from "yargs";
import { HealthCheckCommand } from "./HealthChecker";
import { LoadEnvCommand } from "./LoadEnv";

Yargs(process.argv.slice(2))
  .command(HealthCheckCommand)
  .command(LoadEnvCommand)
  .demandCommand()
  .help()
  .parseAsync();
