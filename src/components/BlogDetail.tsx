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
<div className="pt-24 flex justify-center">
      <div className="text-center max-w-sm">

    <h1
  className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
  style={{ color: "#5755D9" }}
>
  CA MONK BLOG
</h1>

<h3 className="text-lg font-semibold text-gray-800 mb-2">
  Choose an article to get started
</h3>


        <p className="text-gray-500 mt-2">
          Select a blog from the list to read insights on finance,
          accounting, and career growth.
        </p>
      </div>
    </div>
  )
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
  <article className="space-y-6 max-w-3xl mx-auto">

      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold">{blog.title}</h2>

  <div className="inline-flex items-center gap-2 bg-[#D9DDFC] px-3 py-1 rounded-md text-sm text-gray-800">
  {blog.category.join(", ")} • {new Date(blog.date).toDateString()}
</div>

      <p className="text-gray-700">{blog.description}</p>

<div className="prose prose-gray max-w-none">
  {blog.content}
</div>


      {/* Tags */}
<div className="pt-4">
  <h4 className="text-sm font-semibold text-gray-600 mb-2">
    Tags
  </h4>

  <div className="flex flex-wrap gap-2">
    {blog.category.map((tag) => (
      <span
        key={tag}
        className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

    </article>
  );
};
