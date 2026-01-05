"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("prisma/config");
exports.default = (0, config_1.defineConfig)({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
        // This tells Prisma how to execute your seed file
        seed: "ts-node prisma/seed.ts",
    },
    datasource: {
        url: process.env["DATABASE_URL"],
    },
});
