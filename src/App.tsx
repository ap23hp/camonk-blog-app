import { useState } from "react"
import { BlogDetail } from "./components/BlogDetail"
import { BlogList } from "./components/BlogList"

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {/* Left Panel */}
      <div className="md:col-span-1">
        <BlogList onSelectBlog={setSelectedBlogId} />
      </div>

      {/* Right Panel */}
      <div className="md:col-span-2">
        <BlogDetail blogId={selectedBlogId} />
      </div>
    </div>
  )
}

export default App
