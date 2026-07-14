"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700"
            >
              <ShieldCheck size={18} />
              Trusted Lost & Found Platform
            </motion.span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
              Lost Something?
              <br />
              <span className="text-orange-500">
                Find It Again.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Report lost belongings, discover found items, and reconnect with
              what matters most. Join thousands helping each other every day.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/items/add"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Report Item
                <ArrowRight
                  className="transition group-hover:translate-x-1"
                  size={18}
                />
              </Link>

              <Link
                href="/explore"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:border-orange-500 hover:text-orange-500"
              >
                <Search size={18} />
                Browse Items
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-5">
              {[
                {
                  value: "2.5K+",
                  label: "Items Posted",
                },
                {
                  value: "850+",
                  label: "Recovered",
                },
                {
                  value: "120+",
                  label: "Cities",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                >
                  <h3 className="text-2xl font-bold text-orange-500">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="rounded-3xl border bg-white p-8 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                  alt="Lost Item"
                  className="h-72 w-full rounded-2xl object-cover"
                />

                <div className="mt-6">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
                    LOST
                  </span>

                  <h2 className="mt-4 text-2xl font-bold">
                    Black Backpack
                  </h2>

                  <div className="mt-4 flex items-center gap-2 text-gray-500">
                    <MapPin size={18} />
                    Dhaka, Bangladesh
                  </div>

                  <p className="mt-4 text-gray-600">
                    Lost near Dhanmondi Lake. Contains important documents and
                    a laptop.
                  </p>
                </div>
              </motion.div>

              {/* Floating Card */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -left-8 top-12 hidden rounded-2xl bg-white p-4 shadow-xl md:block"
              >
                <h4 className="text-xl font-bold text-green-600">
                  850+
                </h4>
                <p className="text-sm text-gray-500">
                  Items Returned
                </p>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-6 right-0 hidden rounded-2xl bg-orange-500 px-5 py-4 text-white shadow-xl md:block"
              >
                Community Powered ❤️
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;