import Link from "next/link";
import Image from "next/image";

const DisplayCard = ({ imageUrl, productName, href }) => {
  return (
    <Link href={href} passHref>
      <a className="flex flex-col rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform ease-linear duration-400 overflow-hidden">
        <Image
          src={imageUrl}
          alt={productName}
          width="300px"
          height="200px"
          quality={100}
          objectFit="cover"
        />
        <h1 className="text-lg p-4">{productName}</h1>
      </a>
    </Link>
  );
};

export default DisplayCard;
