import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter: adapter, // This satisfies the 'never' type issue
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB connected via Prisma succesfully");
  } catch (error) {
    console.log("DB connection error " + error);
    process.exit(1); // * <--- exit with a failure code 1
  }
};

const disconnectDB = async () => {
  try {
    await prisma.$disconnect();
    console.log("DB disconnected via Prisma succesfully");
  } catch (error) {
    console.log("DB disconnection error " + error);
  }
};

export { prisma, connectDB, disconnectDB };
