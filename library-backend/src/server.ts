import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 5000;
const uri = process.env.DATABASE_URL as string;

async function main() {
  try {
    await mongoose.connect(uri);
    console.log('✅ Database connected');

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect DB', err);
    process.exit(1);
  }
}

main();
