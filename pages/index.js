import Head from "next/head";
import prisma from "../lib/prisma";
import ProductTable from "../components/ProductTable";
import Header from "../components/Header";
import DisplayCard from "../components/DisplayCard";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Wheelrs</title>
        <meta name="description" content="Wheelrs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
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

export async function getStaticProps(context) {
  const data = await prisma.product.findMany({
    include: {
      brand: true,
      EngineType: true,
      bodyType: true,
    },
  });

  return {
    props: { products: data },
  };
}
