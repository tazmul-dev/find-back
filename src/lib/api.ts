'use server'

import { revalidatePath } from "next/cache";
import { Item, ItemFormData } from "./tsType";

export const myPost = async(email:string):Promise<Item[]>=>{
const res = await fetch(`http://localhost:5000/myPost/${email}`);
return (await res.json()) as Item[]
}
export const deletPost = async(id:string)=>{
    const res = await fetch(`http://localhost:5000/myPost/${id}`,{
        method:"DELETE"
    })
    revalidatePath('/managePost')
    return await res.json()
}

export const detalsPage = async(id:string):Promise<ItemFormData[]>=>{
 const res = await fetch(`http://localhost:5000/details/${id}`)
 return (await res.json()) as ItemFormData[]
}