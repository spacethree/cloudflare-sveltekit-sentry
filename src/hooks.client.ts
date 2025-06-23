import { handleErrorWithSentry, replayIntegration } from "@sentry/sveltekit";
import * as Sentry from "@sentry/sveltekit";

Sentry.init({
  dsn: "https://62c179208e23abfaca674357ecd68744@o4508894715641856.ingest.us.sentry.io/4509548440649728",
  tracesSampleRate: 1.0,
  _experiments: { enableLogs: true },
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
