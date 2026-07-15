
export interface Item{
    _id:string;
    title:string;
    type:string;
    category:string;
    image:string;
    location:string;
    date:string;
    description:string;
    contact:string;
    createdBy:string;
    status:string;
}

export interface ItemFormData {
  title: string;
  type: "Lost" | "Found";
  category: string;
  image: string;
  location: string;
  date: string;
  description: string;
  contact: string;
  userEmail: string;
}