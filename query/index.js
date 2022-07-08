import prisma from "../lib/prisma";

export async function queryProductById(id) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      brand: true,
      EngineType: true,
      bodyType: true,
    },
  });
  return product;
}

export async function queryProducts({ search, ids } = {}) {
  const searchByIds =
    ids?.map((id) => ({
      id,
    })) || [];

  const searchByQuery = search
    ? [
        {
          name: {
            contains: search,
          },
        },
      ]
    : [];

  const conditions = [...searchByQuery, ...searchByIds];
  const data = await prisma.product.findMany({
    ...(conditions.length > 0 ? { where: { OR: conditions } } : {}),
    include: {
      brand: true,
      EngineType: true,
      bodyType: true,
    },
  });
  return data;
}

export function queryProductsLookup(search) {
  return prisma.product.findMany({
    where: {
      name: {
        contains: search,
      },
    },
    select: {
      id: true,
      name: true,
    },
  });
}
