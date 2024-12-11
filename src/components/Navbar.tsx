// components/Navbar.tsx
import Link from "next/link";

const Navbar = ({ showNav }: { showNav: boolean }) => (
  <nav
    className={`fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-6 transition-transform ${
      showNav ? "translate-y-0" : "-translate-y-full"
    }`}
  >
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        블로그
      </Link>
      <div>
        <Link href="/about" className="mr-4 hover:underline">
          소개
        </Link>
        <Link href="/contact" className="hover:underline">
          연락처
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
