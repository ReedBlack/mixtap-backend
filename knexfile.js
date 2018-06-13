module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/mixtapDB"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};