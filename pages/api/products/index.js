// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";

export default async function getProducts(req, res) {
  const ids = req.query.ids || "";
  const idArray = ids.split(",");
  const searchByIds = idArray.map((id) => ({
    id: Number(id),
  }));

  const searchByQuery = req.query.search
    ? [
        {
          name: {
            contains: searchQuery,
          },
        },
      ]
    : [];

  const data = await prisma.product.findMany({
    where: {
      OR: [...searchByQuery, ...searchByIds],
    },
    include: {
      brand: true,
      EngineType: true,
      bodyType: true,
    },
  });

  return res.status(200).json(data);
}
