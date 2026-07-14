"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const foundItems = [
  {
    id: 1,
    title: "Apple Watch Series 9",
    category: "Watch",
    location: "Banani, Dhaka",
    date: "13 July 2026",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
  },
  {
    id: 2,
    title: "Blue School Bag",
    category: "Bag",
    location: "Rajshahi",
    date: "12 July 2026",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800",
  },
  {
    id: 3,
    title: "Car Keys",
    category: "Keys",
    location: "Mohammadpur, Dhaka",
    date: "11 July 2026",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800",
  },
  {
    id: 4,
    title: "Leather Wallet",
    category: "Wallet",
    location: "Chattogram",
    date: "10 July 2026",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
  },
];

export default function RecentlyFoundItems() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Recently Found
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Recently Found Items
            </h2>

            <p className="mt-3 max-w-xl text-gray-600">
              Browse recently found belongings and help return them to their
              rightful owners.
            </p>
          </div>

          <Link
            href="/explore?type=found"
            className="hidden items-center gap-2 font-semibold text-green-600 transition hover:gap-3 md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {foundItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
                  FOUND
                </span>
              </div>

              <div className="flex h-[230px] flex-col p-6">
                <div>
                  <p className="text-sm font-medium text-green-600">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={16} />
                    {item.location}
                  </div>

                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    {item.date}
                  </div>
                </div>

                <Link
                  href={`/items/${item.id}`}
                  className="mt-auto inline-flex items-center justify-center rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/explore?type=found"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}