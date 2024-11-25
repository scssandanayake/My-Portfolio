import Link from "next/link";
import { Button } from "../ui/Button";

//Nav component
import Nav from "../main/Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Cham<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navigation & hire me button */}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile navigation */}
        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;