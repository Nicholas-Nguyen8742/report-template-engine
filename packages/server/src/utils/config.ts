import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({
  path: `${path.dirname(fileURLToPath(import.meta.url))}/./../../../../.env`
});

export const {
  PORT,
  LOG_LEVEL,
  NODE_ENV,
} = process.env as { [key: string]: string; };
