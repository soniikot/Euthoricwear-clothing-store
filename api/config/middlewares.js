module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",

  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
      headers: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
  },

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
