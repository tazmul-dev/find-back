'use server'

import { Item } from "./tsType"

export const browseData = async ():Promise<Item[]> =>{
 const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allData`)
 return (await res.json()) as Item[]
}