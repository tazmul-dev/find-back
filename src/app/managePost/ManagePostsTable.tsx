"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Trash2 } from "lucide-react";
import { Item } from "@/lib/tsType";

// const posts = [
//   {
//     id: "1",
//     title: "Black Backpack",
//     status: "Lost",
//     image:
//       "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600",
//   },
//   {
//     id: "2",
//     title: "iPhone 15 Pro",
//     status: "Found",
//     image:
//       "https://images.unsplash.com/photo-1592286927505-1def25115558?w=600",
//   },
//   {
//     id: "3",
//     title: "Leather Wallet",
//     status: "Lost",
//     image:
//       "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600",
//   },
// ];
interface managpost {
  posts: Item[];
}

export default function ManagePostsTable({posts, postDelet}:managpost) {
 
  const handelDeletePost = async(id:string)=>{

    await postDelet(id)

  }

  return (
    <section className="mx-auto max-w-7xl p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          My Posts
        </h2>

        <p className="mt-2 text-gray-500">
          Manage your lost and found posts.
        </p>
      </div>

      {/* ================= Desktop Table ================= */}
      <div className="hidden overflow-hidden rounded-2xl border bg-white shadow-sm md:block">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Item</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">View</th>
              <th className="px-6 py-4 text-center">Delete</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr
                key={post._id}
                className="border-t hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={70}
                    height={70}
                    className="rounded-xl object-cover"
                  />
                </td>

                <td className="px-6 py-4 font-medium">
                  {post.title}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      post.type === "Lost"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {post.type}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <Link
                    href={`/browseItems/${post?._id}`}
                    className="inline-flex rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                  >
                    <Eye size={18} />
                  </Link>
                </td>

                <td className="px-6 py-4 text-center">
                 <button onClick={()=>handelDeletePost(post?._id)} className="flex-1 rounded-lg bg-red-500 py-2 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile Cards ================= */}
      <div className="space-y-5 md:hidden">
        {posts.map((post) => (
          <div
            key={post._id}
            className="rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div className="flex gap-4">
              <Image
                src={post.image}
                alt={post.title}
                width={90}
                height={90}
                className="rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {post.title}
                </h3>

                <span
                  className={`mt-2 inline-block rounded-full px-3 py-1 text-sm ${
                    post.type === "Lost"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {post.type}
                </span>

                <div className="mt-5 flex gap-3">
                  <Link
                    href={`/browseItems/${post?._id}`}
                    className="flex-1 rounded-lg bg-blue-500 py-2 text-center text-white"
                  >
                    View
                  </Link>
                   <button onClick={()=>handelDeletePost(post?._id)} className="flex-1 rounded-lg bg-red-500 py-2 text-white">
                    Delete
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}