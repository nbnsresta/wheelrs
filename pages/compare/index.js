import Header from "../../components/Header";
import ProductTable from "../../components/ProductTable";
import { getProduct } from "../api/products";

const Compare = ({ products }) => {
  console.log(products);
  return (
    <div className="flex flex-col gap-4">
      <Header />

      <ProductTable products={products} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const ids = context.query.ids
    ?.split(",")
    .map((value) => Number(value))
    .filter((value) => !isNaN(value));

  console.log(ids);
  const products = await Promise.all(
    ids.map(async (id) => {
      return await getProduct(Number(id)).catch(() => null);
    })
  );

  console.log(products);
  return {
    props: {
      products: products.filter(Boolean),
    },
  };
}

export default Compare;
