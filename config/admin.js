module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "J2fiTWa/L8NnI/fonXWNjA=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "usJ915pIHGlmArmwJifSpA=="),
  },
});
