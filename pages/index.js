import Head from "next/head";
import DisplayCard from "../components/DisplayCard";
import { queryProducts, queryProductsLookup } from "../query";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Wheelrs</title>
        <meta name="description" content="Wheelrs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-4 p-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {props.products.map((product) => (
          <DisplayCard
            key={product.id}
            imageUrl={product.imageUrl}
            href={`/product/${product.id}`}
            productName={product.name}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await queryProducts();

  return {
    props: { products },
  };
}
