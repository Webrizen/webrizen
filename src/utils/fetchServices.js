import { client } from "@/sanity/lib/client";

// 1. Fetch titles, descriptions, and slugs for navbar and footer
export async function fetchServiceLinks() {
  const query = `*[_type == "service"]{
    title,
    description,
    "slug": slug.current
  }`
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error("Failed to fetch service links:", error)
    return []
  }
}

// 2. Fetch data for service cards (home, services page, etc.)
export async function fetchServiceCards() {
  const query = `*[_type == "service"]{
    title,
    description,
    "slug": slug.current,
    "image": mainImage.asset->url,
    category
  } | order(publishedAt desc)`
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error("Failed to fetch service cards:", error)
    return []
  }
}

// 3. Fetch full service details by slug for individual pages
export async function fetchServiceBySlug(slug) {
  const query = `*[_type == "service" && slug.current == $slug][0]{
    title,
    description,
    category,
    problem,
    solution,
    features,
    outcomes,
    "slug": slug.current,
    "image": mainImage.asset->url,
    seoTitle,
    seoDescription,
    seoKeywords,
    publishedAt
  }`
  try {
    const data = await client.fetch(query, { slug })
    return data
  } catch (error) {
    console.error(`Failed to fetch service with slug "${slug}":`, error)
    return null
  }
}