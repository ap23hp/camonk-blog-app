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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate({
      title,
      description,
      content,
      coverImage,
      category: category.split(",").map((c) => c.trim()),
    })

    setTitle("")
    setDescription("")
    setContent("")
    setCoverImage("")
    setCategory("")
  }

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

      {isError && (
        <p className="text-red-500">Failed to create blog</p>
      )}
    </form>
  )
}
