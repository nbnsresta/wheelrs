import Link from "next/link";
import cx from "classnames";

const Th = (props) => {
  return <th className="p-4 whitespace-nowrap" {...props} />;
};

const Td = ({ className, ...props }) => {
  return (
    <td
      className={cx("p-4 whitespace-nowrap text-center rounded-md", className)}
      {...props}
    />
  );
};

const ProductTable = ({ products }) => {
  return (
    <table className="table-fixed border-separate">
      <thead className="bg-black text-white p-2">
        <tr>
          <Th>Name</Th>
          <Th>Brand</Th>
          <Th>Body Type</Th>
          <Th>Engine Type</Th>
          <Th>Displacement</Th>
          <Th>Mileage</Th>
          <Th>Fuel Capacity</Th>
          <Th>No. of Cylinders</Th>
          <Th>Max Power</Th>
          <Th>Max Torque</Th>
          <Th>Front Brake</Th>
          <Th>Rear Brake</Th>
          <Th>Instrument Cluster</Th>
          <Th>Seat Height</Th>
          <Th>Ground Clearance</Th>
          <Th>Suspension Type</Th>
          <Th>Kerb Weight</Th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <Td className="hover:bg-sky-500 focus:ring-sky-500 hover:text-white">
              <Link href={`/product/${product.id}`} passHref>
                <a className="-m-4 p-4">{product.name}</a>
              </Link>
            </Td>
            <Td>{product.brand.name}</Td>
            <Td>{product.bodyType.name}</Td>
            <Td>{product.EngineType.name}</Td>
            <Td>{`${product.displacement}cc`}</Td>
            <Td>{product.mileage}</Td>
            <Td>{product.fuelCapacity}</Td>
            <Td>{product.cylinders}</Td>
            <Td>{product.maxPower}</Td>
            <Td>{product.maxTorque}</Td>
            <Td>{product.frontBrake}</Td>
            <Td>{product.rearBrake}</Td>
            <Td>{product.instrumentCluster}</Td>
            <Td>{`${product.seatHeight}mm`}</Td>
            <Td>{`${product.groundClearance}mm`}</Td>
            <Td>{product.suspensionType}</Td>
            <Td>{`${product.kerbWeight}kg`}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
