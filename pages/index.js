import Head from "next/head";
import { useRouter } from "next/router";
import DisplayCard from "../components/DisplayCard";
import SearchDropdown from "../components/SearchDropdown";
import { queryProducts } from "../query";

export default function Home(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Wheelrs</title>
        <meta name="description" content="Wheelrs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col gap-4 p-4">
        <SearchDropdown onSelect={(id) => router.push(`/product/${id}`)} />
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
    </div>
  );
}

export async function getServerSideProps() {
  const products = await queryProducts();

  return {
    props: { products },
  };
}
