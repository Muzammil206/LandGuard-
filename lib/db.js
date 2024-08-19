

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// export default async function query(text, params) {
//   const res = await pool.query(text, params);
//   return res;
// }



// lib/db.js

import { Pool } from 'pg';

const pool = new Pool({ 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.DB_CA_CERT,
  },
})

export default async function query(text, params) {
    const res = await pool.query(text, params);
    return res;
   }
