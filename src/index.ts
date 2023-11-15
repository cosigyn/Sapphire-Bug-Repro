import { LogLevel, SapphireClient } from '@sapphire/framework';
import './lib/setup'

const client = new SapphireClient({
  defaultPrefix: '!',
  caseInsensitiveCommands: true,
  logger: {
    level: LogLevel.Debug
  },
  intents: [],
  loadMessageCommandListeners: false
});

const main = async () => {
  try {
    client.logger.info('Logging in');
    await client.login(process.env.DISCORD_TOKEN);
    client.logger.info('logged in');
  } catch (error) {
    client.logger.fatal(error);
    process.exit(1);
  }
};

main();