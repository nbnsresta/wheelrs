import Link from "next/link";

const Header = () => {
  return (
    <header className="flex bg-black h-[4rem]">
      <Link href="/" passHref>
        <a className="text-white uppercase font-bold text-xl p-4 hover:bg-sky-500">
          Wheelrs
        </a>
      </Link>
    </header>
  );
};

export default Header;
