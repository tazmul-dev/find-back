"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Wallet,
  Briefcase,
  KeyRound,
  Laptop,
  FileText,
  Watch,
  Package,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Smartphone,
    count: 124,
    color: "bg-blue-100 text-blue-600",
    href: "/explore?category=Electronics",
  },
  {
    name: "Wallet",
    icon: Wallet,
    count: 87,
    color: "bg-orange-100 text-orange-600",
    href: "/explore?category=Wallet",
  },
  {
    name: "Bags",
    icon: Briefcase,
    count: 95,
    color: "bg-purple-100 text-purple-600",
    href: "/explore?category=Bag",
  },
  {
    name: "Keys",
    icon: KeyRound,
    count: 52,
    color: "bg-yellow-100 text-yellow-600",
    href: "/explore?category=Keys",
  },
  {
    name: "Laptop",
    icon: Laptop,
    count: 41,
    color: "bg-green-100 text-green-600",
    href: "/explore?category=Laptop",
  },
  {
    name: "Documents",
    icon: FileText,
    count: 76,
    color: "bg-red-100 text-red-600",
    href: "/explore?category=Documents",
  },
  {
    name: "Watch",
    icon: Watch,
    count: 34,
    color: "bg-cyan-100 text-cyan-600",
    href: "/explore?category=Watch",
  },
  {
    name: "Others",
    icon: Package,
    count: 58,
    color: "bg-gray-200 text-gray-700",
    href: "/explore?category=Others",
  },
];

export default function BrowseCategories() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Categories
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Browse by Category
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Find lost and found items by category. Select a category to explore
            all related posts shared by the community.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <Link
                  href={category.href}
                  className="group flex flex-col items-center rounded-3xl border bg-white p-8 shadow-sm transition-all hover:border-orange-300 hover:shadow-xl"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-orange-500">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {category.count} Items
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}