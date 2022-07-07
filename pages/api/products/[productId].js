export default async function getProduct(req, res) {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(req.query.productId),
    },
    include: {
      brand: true,
      EngineType: true,
      bodyType: true,
    },
  });
  return res.status(200).json(product);
}
