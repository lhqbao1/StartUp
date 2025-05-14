import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type == 'startup' && title match $search] | order(_createdAt desc){
  _id,
  title,
    slug,
    description,
    category,
    views,
    _createdAt,
    image,
    level,
    pitch,
    author->{
      _id,
      name,
      image,
      bio,
      email
    }
}`)

export const STARTUP_QUERY_BY_ID = defineQuery(`*[_type == 'startup' && _id == $id][0]{
  _id,
  title,
  slug,
  description,
  category,
  views,
  _createdAt,
  image,
  level,
  pitch,
  author->{
    _id,
    name,
    image,
    bio,
    email
  }
}`)

export const STARTUP_QUERY_SIMILAR = defineQuery(`*[_type == 'startup' && category == $category && _id != $id][0...2]{
  _id,
  title,
  slug,
  description,
  category,
  views,
  _createdAt,
  image,
  level,
  pitch,
  author->{
    _id,
    name,
    image,
    bio,
    email
  }
}`)

export const STARTUP_QUERY_VIEW = defineQuery(`*[_type == 'startup' && _id == $id][0]{
  _id, views
  }`)

export const USER_EXISTING_QUERY = defineQuery(`*[_type == 'author' && id == $id][0]{
  _id,
  id,
  name,
  username,
  email,
  image,
  bio
  }`)