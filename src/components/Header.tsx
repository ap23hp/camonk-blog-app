import { Button } from "./ui/button"

type Props = {
  onAddBlogClick: () => void
}

export const Header = ({ onAddBlogClick }: Props) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="font-bold text-xl">CA MONK</div>

        {/* Center: Dummy links */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-black">Tools</span>
          <span className="cursor-pointer hover:text-black">Practice</span>
          <span className="cursor-pointer hover:text-black">Events</span>
          <span className="cursor-pointer hover:text-black">Job Board</span>
        </nav>

        {/* Right: Action */}
  <Button
  onClick={onAddBlogClick}
  style={{ backgroundColor: "#5755D9", color: "white" }}
>
  Add Blog
</Button>

      </div>
    </header>
  )
}
