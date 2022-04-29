import { CommandModule } from "yargs";

export const LoadEnvCommand: CommandModule = {
  command: "load-env",
  describe: "envの読み込みテスト",
  builder: {},
  handler: async () => {
    console.info("LoadEnv Command Start");
    console.info(`Env MY_NAME is Start ${process.env.MY_NAME}`);
    console.info("LoadEnv Command End");
  },
};
