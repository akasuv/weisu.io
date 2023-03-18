import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="h-[60px] py-8 flex justify-between">
    <Link href="/">
      <Image
        src="/logo.svg"
        width={25}
        height={25}
        alt="weisu.io-logo"
        className="h-[25px]"
      />
    </Link>
    <div className="flex gap-x-4">
      <Link href="https://twitter.com/aka_suv">Twitter</Link>
      <Link href="https://github.com/akasuv">GitHub</Link>
    </div>
  </div>
);
export default Header;
