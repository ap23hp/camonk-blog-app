import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "../api/blogs"

export const useBlogById = (blogId: number | null) => {
  return useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId as number),
    enabled: !!blogId,
  })
}
