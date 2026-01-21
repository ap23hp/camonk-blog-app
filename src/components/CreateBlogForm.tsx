import { useState } from "react"
import type { FormEvent } from "react"
import { useCreateBlog } from "../hooks/useCreateBlog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export const CreateBlogForm = () => {
  const { mutate, isPending, isError } = useCreateBlog()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [category, setCategory] = useState("")
const [success, setSuccess] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate(
  {
    title,
    description,
    content,
    coverImage,
    category: category.split(",").map((c) => c.trim()),
  },
  {
    onSuccess: () => {
      setSuccess(true)

      setTitle("")
      setDescription("")
      setContent("")
      setCoverImage("")
      setCategory("")

      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    },
  }
)}

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        placeholder="Cover Image URL"
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
      />

      <Input
        placeholder="Categories (comma separated)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <Textarea
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Textarea
        placeholder="Full content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Blog"}
      </Button>
{success && (
  <div className="rounded-md border border-green-200 bg-green-50 p-3">
    <p className="text-green-700 font-medium">
      ✅ Blog published successfully
    </p>
    <p className="text-green-600 text-sm mt-1">
      Your blog is now visible in the list.
    </p>
  </div>
)}


      {isError && (
        <p className="text-red-500">Failed to create blog</p>
      )}
    </form>
  )
}
