import { pool } from '../db.js';

export const createProduct = async ({ name, price, description, image_url }) => {
  const result = await pool.query(
    'INSERT INTO products (name, price, description, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, price, description, image_url]
  );
  return result.rows[0];
};

export const getAllProducts = async () => {
  const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
  return result.rows;
};
