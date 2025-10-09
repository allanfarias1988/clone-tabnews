import { Client } from "pg";

export async function database(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
  });
  try {
    await client.connect();
    const result = await client.query(queryObject);
    return result.rows;
  } catch (error) {
    console.error("Error na query", error);
    throw error;
  } finally {
    await client.end();
  }
}
