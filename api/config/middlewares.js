module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",

  {
    name: "strapi::cors",
  
     config: {
  origin: "*",
  headers: ["authorization", "content-Type", "accept"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}
      headers: ["authorization", "content-Type", "accept"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    },
  },

  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
