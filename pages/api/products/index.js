// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../lib/prisma.js";

export default async function getProducts(req, res) {
  const ids = req.query.ids || "";
  const idArray = ids.split(",");
  const searchByIds = idArray.filter(Boolean).map((id) => ({
    id: Number(id),
  }));

  const searchByQuery = req.query.search
    ? [
        {
          name: {
            contains: req.query.search,
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

  return res.status(200).json(data);
}
