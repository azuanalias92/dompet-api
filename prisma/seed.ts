import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  // const createState = await prisma.user.createMany({

  //   skipDuplicates: true,
  // });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
