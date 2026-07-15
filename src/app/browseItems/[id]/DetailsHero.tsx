"use client";

import Image from "next/image";
import { CalendarDays, MapPin, Phone, User } from "lucide-react";
import { motion } from "framer-motion";
import { ItemFormData } from "@/lib/tsType";
interface BrowseDetails {
  item: ItemFormData;
}
export default function DetailsHero({item}:BrowseDetails) {
//   const item = {
//     title: "Black Leather Wallet",
//     type: "Lost",
//     category: "Wallet",
//     location: "Dhanmondi, Dhaka",
//     date: "15 July 2026",
//     contact: "017XXXXXXXX",
//     owner: "Tazmul Hossain",
//     image:
//       "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200",
//     description:
//       "Lost near Dhanmondi Lake. Contains National ID, Student ID, ATM cards and some cash.",
//   };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[300px] overflow-hidden rounded-3xl md:h-[500px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              <span
                className={`absolute left-5 top-5 rounded-full px-4 py-2 text-sm font-semibold text-white ${
                  item.type === "Lost"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {item.type.toUpperCase()}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <p className="font-medium text-orange-500">
              {item.category}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
              {item.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              {item.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} />
                <span>{item.location}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <CalendarDays size={20} />
                <span>{item.date}</span>
              </div>

            

              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} />
                <span>{item.contact}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${item.contact}`}
                className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
              >
                Contact Owner
              </a>

              <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:border-orange-500 hover:text-orange-500">
                Share Post
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}