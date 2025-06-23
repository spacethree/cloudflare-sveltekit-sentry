import { sequence } from "@sveltejs/kit/hooks";
import {
  handleErrorWithSentry,
  sentryHandle,
  initCloudflareSentryHandle,
} from "@sentry/sveltekit";
import * as Sentry from "@sentry/sveltekit";

console.log("Sentry =>", Sentry);

Sentry.init({
  dsn: "https://62c179208e23abfaca674357ecd68744@o4508894715641856.ingest.us.sentry.io/4509548440649728",

  tracesSampleRate: 1.0,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});

export const handle = sequence(
  initCloudflareSentryHandle({
    dsn: "https://62c179208e23abfaca674357ecd68744@o4508894715641856.ingest.us.sentry.io/4509548440649728",
    tracesSampleRate: 1.0,
  }),
  sentryHandle()
);

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
