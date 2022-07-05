const { PrismaClient } = require("@prisma/client");
const { bodyTypes, brands, engineTypes, products } = require("./data");
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.bodyType.deleteMany();
    await prisma.brand.deleteMany();
    await prisma.engineType.deleteMany();
    await prisma.product.deleteMany();
    console.log("Cleared all previous records");

    await prisma.$queryRaw`ALTER TABLE BodyType AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE Brand AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE EngineType AUTO_INCREMENT = 1`;
    await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`;
    console.log("reset product auto increment to 1");

    await prisma.bodyType.createMany({
      data: bodyTypes,
    });

    await prisma.brand.createMany({
      data: brands,
    });

    await prisma.engineType.createMany({
      data: engineTypes,
    });

    await prisma.product.createMany({
      data: products,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
