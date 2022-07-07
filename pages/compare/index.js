import ProductTable from "../../components/ProductTable";

const Compare = ({ products }) => {
  return (
    <div className="flex flex-col gap-4">
      <ProductTable products={products} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const ids = context.query.ids
    ?.split(",")
    .map((value) => Number(value))
    .filter((value) => !isNaN(value));

  const response = await fetch(
    "http://localhost:3000/api/products?ids=" + ids.join(",")
  );

  const products = await response.json();

  return {
    props: {
      products: products.filter(Boolean),
    },
  };
}

export default Compare;
