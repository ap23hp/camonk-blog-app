import { useState } from "react";
import { Header } from "./components/Header";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetail";
import { CreateBlogModal } from "./components/CreateBlogModal";

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onAddBlogClick={() => setIsModalOpen(true)} />

      <main className="max-w-7xl mx-auto p-6 h-[calc(100vh-72px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
          {/* LEFT: scrollable */}
          <div
            className="md:col-span-1
  max-h-[calc(100vh-72px)]
  overflow-y-auto
  pr-2
  scrollbar-thin
  scrollbar-thumb-[#5755D9]
  scrollbar-track-transparent"
          >
            <BlogList onSelectBlog={setSelectedBlogId} />
          </div>

          {/* RIGHT */}
          <div className="md:col-span-2">
            <BlogDetail blogId={selectedBlogId} />
          </div>
        </div>
      </main>

      <CreateBlogModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
