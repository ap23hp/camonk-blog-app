import { useBlogs } from "./hooks/useBlogs";

function App() {
  const { data, isLoading, isError, error } = useBlogs();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  console.log("Blogs 👉", data);

  return (
    <div>
      <h1>CA Monk Blog App</h1>
      <div className="text-red-500 font-bold">Tailwind Working</div>

      <p>Check console for blogs data</p>
    </div>
  );
}

export default App;
