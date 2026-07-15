"use client";


import { authClient } from "@/lib/auth-client";
import { ItemFormData } from "@/lib/tsType";
import { string } from "better-auth";
import { useState } from "react";


const initialState: ItemFormData = {
  title: "",
  type: "Lost",
  category: "",
  image: "",
  location: "",
  date: "",
  description: "",
  contact: "",
  userEmail:'',
  
};

const AddItemForm = () => {
  const [formData, setFormData] = useState< ItemFormData>(initialState);
  const [loading, setLoading] = useState(false);
  const { data:session } = authClient.useSession()
  
   const user = session?.user

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      
      
      
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const itemData = {
    ...formData,
    userEmail: user?.email,
  };

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/addItem`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        }
      );

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        alert("Item added successfully");
        setFormData(initialState);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Add Lost / Found Item
      </h2>


      <form 
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          className="input input-bordered w-full"
          name="title"
          placeholder="Item title"
          value={formData.title}
          onChange={handleChange}
        />


        <select
          className="select select-bordered w-full"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Lost">
            Lost
          </option>

          <option value="Found">
            Found
          </option>

        </select>


        <input
          className="input input-bordered w-full"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />


        <input
          className="input input-bordered w-full"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />


        <input
          className="input input-bordered w-full"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />


        <input
          className="input input-bordered w-full"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
        />


        <input
          className="input input-bordered w-full"
          name="contact"
          placeholder="Contact number"
          value={formData.contact}
          onChange={handleChange}
        />


        <textarea
          className="textarea textarea-bordered w-full"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />


        <button
          disabled={loading}
          className="btn btn-primary w-full"
        >
          {
            loading 
            ? "Submitting..."
            : "Add Item"
          }
        </button>

      </form>

    </div>
  );
};


export default AddItemForm;