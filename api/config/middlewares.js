module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",

  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:5173",
        "http://62.72.5.244:5173",
        "http://62.72.5.244:8000",
        "http://zkg4g80ok4ss00ok8o4kwo84.62.72.5.244.sslip.io",
      ],
      headers: ["authorization", "content-type", "accept"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },

  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
