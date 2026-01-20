import { useBlogById } from "../hooks/useBlogById";
import { Skeleton } from "./ui/skeleton";

type Props = {
  blogId: number | null;
};

export const BlogDetail = ({ blogId }: Props) => {
  const { data, isLoading, isError } = useBlogById(blogId);

  // Empty state
  if (!blogId) {
    return (
      <div className="text-gray-500 text-center mt-20">
        Select a blog to read
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  // Error state
  if (isError) {
    return <p className="text-red-500">Failed to load blog</p>;
  }

  // Success state
  const blog = data!;

  return (
    <article className="space-y-6">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold">{blog.title}</h2>

      <div className="text-sm text-gray-500">
        {blog.category.join(", ")} • {new Date(blog.date).toDateString()}
      </div>

      <p className="text-gray-700">{blog.description}</p>

      <div className="text-gray-800 leading-relaxed">{blog.content}</div>
    </article>
  );
};
