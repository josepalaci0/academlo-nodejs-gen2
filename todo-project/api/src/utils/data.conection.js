import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });
export const sequelize = new Sequelize({
  host: process.env.DB_HOST, // localhost
  username: process.env.DB_USER, // root
  password: process.env.DB_PASSWORD,
  port: 3002,
  database: process.env.DB, // postgres
  dialect: 'postgres'  
});


