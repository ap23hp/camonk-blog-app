import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { CreateBlogForm } from "./CreateBlogForm"

type Props = {
  open: boolean
  onClose: () => void
}

export const CreateBlogModal = ({ open, onClose }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Create New Blog</DialogTitle>
        </DialogHeader>

        <CreateBlogForm />
      </DialogContent>
    </Dialog>
  )
}
