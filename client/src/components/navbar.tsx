import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between bg-transparent px-6 py-4">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <div className="h-4 w-4 rounded-sm bg-white"></div>
        </div>
        <span className="text-xl font-semibold text-gray-900">niti</span>
      </div>
      <Link
        to={"/auth/signup"}
        className="rounded-xl bg-white px-4 py-3 text-gray-600 shadow-sm transition duration-150 ease-in-out hover:bg-gray-100"
      >
        Sign in
      </Link>
    </header>
  );
};

export default Navbar;
