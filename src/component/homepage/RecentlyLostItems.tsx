"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

const lostItems = [
  {
    id: 1,
    title: "Black Backpack",
    category: "Bag",
    location: "Dhanmondi, Dhaka",
    date: "12 July 2026",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800",
  },
  {
    id: 2,
    title: "iPhone 15 Pro",
    category: "Mobile",
    location: "Uttara, Dhaka",
    date: "11 July 2026",
    image:
      "https://images.unsplash.com/photo-1592286927505-1def25115558?w=800",
  },
  {
    id: 3,
    title: "Brown Wallet",
    category: "Wallet",
    location: "Rajshahi",
    date: "10 July 2026",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
  },
  {
    id: 4,
    title: "MacBook Air",
    category: "Laptop",
    location: "Mirpur, Dhaka",
    date: "09 July 2026",
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800",
  },
];

export default function RecentlyLostItems() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600">
              Recently Reported
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Recently Lost Items
            </h2>

            <p className="mt-3 max-w-xl text-gray-600">
              Help people recover their belongings by checking the latest
              reported lost items.
            </p>
          </div>

          <Link
            href="/explore?type=lost"
            className="hidden items-center gap-2 font-semibold text-orange-500 transition hover:gap-3 md:flex"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {lostItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                  LOST
                </span>
              </div>

              <div className="flex h-[230px] flex-col p-6">
                <div>
                  <p className="text-sm font-medium text-orange-500">
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
                  className="mt-auto inline-flex items-center justify-center rounded-xl bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-600"
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
            href="/explore?type=lost"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}