// This is just a very simple API route that throws an example error.
// Feel free to delete this file and the entire sentry route.

import * as Sentry from "@sentry/sveltekit";
const { logger } = Sentry;

export const GET = async () => {
  logger.info("Hello from Sentry! (server method)", {
    requestId: "123",
  });
  throw new Error("Sentry Example API Route Error");
};
