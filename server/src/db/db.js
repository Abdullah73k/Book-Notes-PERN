import pg from "pg";
import env from "dotenv";

env.config();

const db = new pg.Client({
    user: DB_USER,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT,
  });