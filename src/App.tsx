import { useState } from "react";
import { Header } from "./components/Header";
import { BlogList } from "./components/BlogList";
import { BlogDetail } from "./components/BlogDetail";
import { CreateBlogModal } from "./components/CreateBlogModal";
import { Footer } from "./components/Footer";

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <Header onAddBlogClick={() => setIsModalOpen(true)} />

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT – SCROLLABLE */}
          <div
            className="
              md:col-span-1
              max-h-[calc(100vh-50px)]
              overflow-y-auto
              pr-2
              scrollbar-thin
              scrollbar-thumb-[#5755D9]
              scrollbar-track-transparent
            "
          >
            <BlogList onSelectBlog={setSelectedBlogId} />
          </div>

          {/* RIGHT – NORMAL FLOW */}
          <div className="md:col-span-2">
            <BlogDetail blogId={selectedBlogId} />
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL */}
      <CreateBlogModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
