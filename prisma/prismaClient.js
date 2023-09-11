import { PrismaClient } from "@prisma/client";

// to avoid adding prisma client in every stage of the application
// const prismaClient = globalThis.prisma || new PrismaClient();
const prismaClient = new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalThis.prisma = prismaClient;

export default prismaClient;

// async function main() {
//   const allUsers = await prismaClient.user.findMany();
//   console.log(allUsers);
// }

// main()
//   .then(async () => {
//     await prismaClient.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prismaClient.$disconnect();
//     process.exit(1);
//   });
