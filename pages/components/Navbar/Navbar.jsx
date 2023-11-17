import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-950 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="mx-4">
          <img
            src="https://image.noelshack.com/fichiers/2023/43/5/1698411409-image-2023-10-27-145647058.png"
            className="w-14"
          />
        </Link>
        <div className="flex space-x-4">
          <Link
            href="/"
            className=" font-semibold text-white hover:text-gray-400 hidden md:block"
          >
            Accueil
          </Link>
          <Link
            href="/"
            className="font-semibold text-white hover:text-gray-400 hidden md:block"
          >
            News
          </Link>
          <Link
            href="/Contact"
            className=" font-semibold text-white hover:text-gray-400 hidden md:block"
          >
            Event
          </Link>
          <Link
            href="/Contact"
            className=" font-semibold text-white hover:text-gray-400 hidden md:block"
          >
            Event
          </Link>
          <Link
            href="/Contact"
            className=" font-semibold text-white hover:text-gray-400 hidden md:block"
          >
            profile
          </Link>
        </div>

        <div className="flex space-x-4">
          <button
            className="font-semibold text-white hover:text-gray-400"
            onClick={() => signOut()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              />
            </svg>
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 mt-4">
          <>
            <Link
              href="/"
              className="font-semibold text-white hover:text-gray-400"
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className="font-semibold text-white hover:text-gray-400"
            >
              Pour qui ?
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-white hover:text-gray-400"
            >
              Contact
            </Link>

            <Link
              href="/profile"
              className="font-semibold text-white hover:text-gray-400"
            >
              Profil
            </Link>
            <button
              className="font-semibold text-white hover:text-gray-400"
              onClick={() => signOut()}
            >
              Déconnexion
            </button>
          </>
        </div>
      )}
    </nav>
  );
}
