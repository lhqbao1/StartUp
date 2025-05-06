import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup'] | order(_createdAt desc){
  _id,
  title,
    slug,
    description,
    category,
    views,
    _createdAt,
    image,
    level,
    author->{
      _id,
      name,
      image,
      bio
    }
}`)