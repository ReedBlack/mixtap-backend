module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/mixtapDB"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};