module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "aurus"),
      password: env("DATABASE_PASSWORD", "aurus.147"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    useNullAsDefault: true,
  },
});
