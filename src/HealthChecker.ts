import { CommandModule } from "yargs";

export const HealthCheckCommand: CommandModule = {
  command: "health-checking",
  describe: "インフラ動作確認用",
  builder: {},
  handler: async () => {
    console.info("Health Checking Command Start");
    console.info("Health Checking Command End");
  },
};
