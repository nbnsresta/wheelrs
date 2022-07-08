import { queryProductsLookup } from "../../../query/index.js";

export default async function getProducts(req, res) {
  const data = await queryProductsLookup(req.query.search);

  return res.status(200).json(data);
}
