import logger from './logger.mjs';

async function run() {}

async function gracefulExit() {
  try {
    logger.info('Gracefully shutting down...');
    process.exit(0);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

process.on('exit', async () => {
  await gracefulExit();
});

process.on('SIGINT', async () => {
  await gracefulExit();
});

process.on('SIGTERM', async () => {
  await gracefulExit();
});

run().catch(logger.error);
