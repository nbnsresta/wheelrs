import { useEffect } from "react";

import { useRouter } from "next/router";
import ProductTable from "../../components/ProductTable";

const Compare = ({ products, ids }) => {
  const router = useRouter();

  useEffect(() => {
    if (ids.length !== products.length) {
      // return;
      router.replace(
        "/compare?" +
          new URLSearchParams({ ids: products.map((product) => product.id) })
      );
    }
  }, [ids.length, products, router]);
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
      ids,
      products,
    },
  };
}

export default Compare;
