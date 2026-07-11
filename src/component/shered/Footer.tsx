import Link from "next/link";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import { RiMvAiLine } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="border-t bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-orange-500"
            >
              FindBack
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Helping people reconnect with their lost belongings.
              Report lost items, discover found items, and make your
              community more connected.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-orange-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/explore" className="hover:text-orange-400">
                  Explore
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <RiMvAiLine size={18} className="text-orange-500" />
                support@findback.com
              </li>

              <li className="flex items-center gap-3">
                <BiPhone size={18} className="text-orange-500" />
                +880 1700-000000
              </li>

              <li className="flex items-start gap-3">
                <BiMapPin size={18} className="mt-1 text-orange-500" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
              >
                <FaFacebook size={20} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
              >
                <BsInstagram size={20} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
              >
                <LiaLinkedin size={20} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-full bg-gray-800 p-3 transition hover:bg-orange-500"
              >
                <GiThunderBlade size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} FindBack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-orange-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-orange-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;