module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",

  // Other middlewares...
  {
    name: "strapi::cors",
    config: {
      origin: ["https://62.72.5.244:5173"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  },

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
