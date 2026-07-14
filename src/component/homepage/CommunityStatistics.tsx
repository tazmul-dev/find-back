"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";
import {
  Package,
  SearchCheck,
  Users,
  MapPinned,
} from "lucide-react";

const stats = [
  {
    title: "Total Posts",
    value: "2,450+",
    icon: Package,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    title: "Recovered Items",
    value: "1,180+",
    icon: SearchCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Active Members",
    value: "4,800+",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Cities Covered",
    value: "64",
    icon: MapPinned,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const chartData = [
  { month: "Jan", recovered: 42 },
  { month: "Feb", recovered: 68 },
  { month: "Mar", recovered: 58 },
  { month: "Apr", recovered: 91 },
  { month: "May", recovered: 83 },
  { month: "Jun", recovered: 110 },
];

export default function CommunityStatistics() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Community Impact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Community Statistics
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Every report helps reconnect people with their belongings.
            Here is how our community is making a difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border bg-white p-7 shadow-sm transition hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bg}`}
                >
                  <Icon className={stat.color} size={28} />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-gray-500">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 rounded-3xl border bg-white p-8 shadow-sm"
        >
          <h3 className="mb-8 text-2xl font-bold text-gray-900">
            Monthly Recovered Items
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip />

                <Bar
                  dataKey="recovered"
                  radius={[8, 8, 0, 0]}
                  fill="#f97316"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}