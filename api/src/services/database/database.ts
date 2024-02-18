const { Pool } = require("pg");

const pool = new Pool({
  user: "bibliography",
  password: "bibliography",
  host: "localhost",
  port: 5432,
  database: "bibliography",
});

module.exports = {
  query: (text: string, params?: any[]) => pool.query(text, params),
};
