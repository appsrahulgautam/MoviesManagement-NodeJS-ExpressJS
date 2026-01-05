import { PrismaClient } from "@prisma/client";

//* here we are telling prisma to give logs based on enviornment
const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV == "development"
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
