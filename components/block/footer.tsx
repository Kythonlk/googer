import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 px-4 py-10 md:px-6 md:gap-8 lg:gap-12 xl:gap-16">
        <nav className="flex flex-col gap-2 text-center md:flex-row md:gap-4 lg:gap-8 xl:gap-4 justify-center">
          <Link
            className="font-medium tracking-wide text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="font-medium tracking-wide text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Services
          </Link>
          <Link
            className="font-medium tracking-wide text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Testimonials
          </Link>
          <Link
            className="font-medium tracking-wide text-gray-500 transition-colors hover:text-gray-900 dark:hover:text-gray-50"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 BabyLux Gear services. All rights reserved.Dev by kythonlk
          </span>
        </div>
      </div>
    </footer>
  );
}
