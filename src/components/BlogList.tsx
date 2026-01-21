import { useBlogs } from "../hooks/useBlogs"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { getRelativeTime } from "../lib/date"


type Props = {
  onSelectBlog: (id: number) => void
}

export const BlogList = ({ onSelectBlog }: Props) => {
  const { data, isLoading, isError } = useBlogs()

  if (isLoading) {
    return <p>Loading blogs...</p>
  }

  if (isError) {
    return <p className="text-red-500">Failed to load blogs</p>
  }

  return (
    <div className="space-y-4">
      {data!.map((blog) => (
        <Card
          key={blog.id}
         className="p-5 cursor-pointer hover:bg-gray-50 transition border-l-4"
  style={{ borderLeftColor: "#5755D9" }}
          onClick={() => onSelectBlog(blog.id)}
        >
          <div className="flex flex-wrap gap-2 mb-2">
            {blog.category.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>

   <div className="flex items-center justify-between mb-1">
  <h3 className="font-semibold">{blog.title}</h3>
  <span className="text-xs text-gray-400">
    {getRelativeTime(blog.date)}
  </span>
</div>

          <p className="text-sm text-gray-600">{blog.description}</p>
        </Card>
      ))}
    </div>
  )
}
