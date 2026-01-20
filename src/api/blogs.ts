export type Blog = {
  id: number
  title: string
  description: string
  content: string
  category: string[]
  coverImage: string
  date: string
}

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch("http://localhost:3001/blogs")

  if (!res.ok) {
    throw new Error("Failed to fetch blogs")
  }

  return res.json()
}
