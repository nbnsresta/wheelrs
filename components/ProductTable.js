import cx from "classnames";
import get from "lodash-es/get";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchDropdown from "./SearchDropdown";

const TitleCell = (props) => {
  return (
    <td className="p-4 whitespace-nowrap bg-gray-900 text-white" {...props} />
  );
};

const DataCell = ({ className, ...props }) => {
  return (
    <td
      className={cx("p-4 whitespace-nowrap rounded-md", className)}
      {...props}
    />
  );
};

const rows = [
  {
    field: "name",
    label: "Name",
    formatter: (value) => <span className="font-bold text-lg">{value}</span>,
  },
  { field: "brand.name", label: "Brand" },
  { field: "bodyType.name", label: "Body Type" },
  { field: "EngineType.name", label: "Engine Type" },
  {
    field: "displacement",
    label: "Displacement",
    formatter: (value) => `${value} cc`,
  },
  { field: "mileage", label: "Mileage", formatter: (value) => `${value} kmpl` },
  {
    field: "fuelCapacity",
    label: "Fuel Capacity",
    formatter: (value) => `${value} litres`,
  },
  { field: "cylinders", label: "No. of Cylinders" },
  { field: "maxPower", label: "Max Power" },
  { field: "maxTorque", label: "Max Torque" },
  { field: "frontBrake", label: "Front Brake" },
  { field: "rearBrake", label: "Rear Brake" },
  { field: "instrumentCluster", label: "Instrument Cluster" },
  {
    field: "seatHeight",
    label: "Seat Height",
    formatter: (value) => `${value} mm`,
  },
  {
    field: "groundClearance",
    label: "Ground Clearance",
    formatter: (value) => `${value} mm`,
  },
  { field: "suspensionType", label: "Suspension Type" },
  {
    field: "kerbWeight",
    label: "Kerb Weight",
    formatter: (value) => `${value} kg`,
  },
];

const ProductTable = ({ products }) => {
  const router = useRouter();
  return (
    <table className="table-fixed border-separate">
      <tbody>
        <tr></tr>
        <tr>
          <td />
          {products.map((product) => (
            <td key={product.id}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width="300px"
                height="200px"
                quality={100}
                objectFit="cover"
              />
            </td>
          ))}
          {products.length < 3 ? (
            <td>
              <SearchDropdown
                placeholder="Search Product"
                onSelect={(selectedId) => {
                  const ids = new URLSearchParams({
                    ids: products
                      .map((product) => product.id)
                      .concat(selectedId),
                  });
                  router.replace(`/compare?` + ids);
                }}
              />
            </td>
          ) : null}
        </tr>
        {rows.map((row) => (
          <tr key={row.field}>
            <TitleCell>{row.label}</TitleCell>
            {products.map((product) => {
              const value = get(product, row.field);
              return (
                <DataCell key={product.id}>
                  {row.formatter ? row.formatter(value) : value}
                </DataCell>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
