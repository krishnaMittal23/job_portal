// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://24a3d27c9770050ce0f7e0f193a155e9@o4509894698008576.ingest.us.sentry.io/4509894722060288",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [Sentry.mongooseIntegration()],

  sendDefaultPii: true,

});

