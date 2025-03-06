import { PortableTextBlock } from "next-sanity";

export type Page = {
    _id: string, 
    _createdAt: Date, 
    title: string, 
    content: PortableTextBlock[], 
    author: string,
    slug: string,
  
}