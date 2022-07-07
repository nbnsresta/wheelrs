import Image from "next/image";
import Link from "next/link";
import Product404 from "../../components/Product404";

const Card = ({ title, description }) => {
  return (
    <div className="flex-col p-4 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform ease-linear duration-400">
      <div className="text-xs uppercase">{title}</div>
      <div className="text-xl">{description}</div>
    </div>
  );
};

const ProductProfile = ({ productDetail }) => {
  if (!productDetail) {
    return <Product404 />;
  }

  return (
    <div className="flex flex-col gap-4">
      <main className="flex flex-col p-4 gap-4">
        <div className="flex flex-col sm:flex-row p-4 gap-4 bg-black rounded-t-xl items-start">
          <Image
            src={productDetail.imageUrl}
            alt={productDetail.name}
            width="300px"
            height="200px"
            quality={100}
            objectFit="cover"
          />
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-white text-3xl">{productDetail.name}</h1>
            <Link href={`/compare/?ids=${productDetail.id}`} passHref>
              <a className="text-black px-4 py-2 bg-white rounded-md">
                Compare
              </a>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          <Card title="Brand" description={productDetail.brand.name} />
          <Card title="Engine" description={productDetail.EngineType.name} />
          <Card
            title="Displacement"
            description={`${productDetail.displacement} cc`}
          />
          <Card title="Mileage" description={`${productDetail.mileage} km`} />
          <Card
            title="Fuel Capacity"
            description={`${productDetail.fuelCapacity} litres`}
          />
          <Card
            title="No. of Cylinders"
            description={productDetail.cylinders}
          />
          <Card title="Max Power" description={productDetail.maxPower} />
          <Card title="Max Torque" description={productDetail.maxTorque} />
          <Card title="Front Brake" description={productDetail.frontBrake} />
          <Card title="Rear Brake" description={productDetail.bodyType.name} />
          <Card
            title="Instrument Cluster"
            description={productDetail.instrumentCluster}
          />
          <Card
            title="Seat Height"
            description={`${productDetail.seatHeight} mm`}
          />
          <Card
            title="Ground Clearance"
            description={`${productDetail.groundClearance} mm`}
          />
          <Card title="Suspension" description={productDetail.suspensionType} />
          <Card
            title="Kerb Weight"
            description={`${productDetail.kerbWeight} kg`}
          />
          <Card
            title="Instrument Cluster"
            description={productDetail.bodyType.name}
          />
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = Number(context.query.productId);
  if (isNaN(id))
    return {
      props: {
        productDetail: null,
      },
    };

  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const productDetail = await response.json();
  return {
    props: { productDetail },
  };
}

export default ProductProfile;
