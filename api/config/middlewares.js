module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",

  "strapi::poweredBy",

  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://62.72.5.244:5173"],
      headers: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      keepHeaderOnError: true,
    },
  },

  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
