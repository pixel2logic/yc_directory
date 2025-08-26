// sanity/lib/queries.ts
import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
  *[_type == "startup" && defined(slug.current) && (
    $query == "" || // if empty, return all
    title match $query || 
    category match $query || 
    description match $query || 
    author->name match $query
  )] | order(_createdAt desc) {
    _id, 
    title, 
    slug, 
    _createdAt, 
    author -> {
      _id, name, image, bio
    },
    views,
    description, 
    category, 
    image
  }
`);
