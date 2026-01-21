// src/api/blogs.ts

export type Blog = {
  id: number
  title: string
  description: string
  content: string
  category: string[]
  coverImage: string
  date: string
}

/* ---------------- GET ALL BLOGS ---------------- */

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch("http://localhost:3001/blogs")

  if (!res.ok) {
    throw new Error("Failed to fetch blogs")
  }

  return res.json()
}

/* ---------------- GET BLOG BY ID ---------------- */

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch blog")
  }

  return res.json()
}

/* ---------------- CREATE BLOG (POST) ---------------- */

export const createBlog = async (
  blog: Omit<Blog, "id" | "date">
): Promise<Blog> => {
  const res = await fetch("http://localhost:3001/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...blog,
      date: new Date().toISOString(),
    }),
  })

  if (!res.ok) {
    throw new Error("Failed to create blog")
  }

  return res.json()
}
