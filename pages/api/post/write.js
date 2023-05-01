import { createPost } from "../../../lib/posts"
import format from "date-fns/format"

export default async function handler (req, res) {
  const { id, title, content } = req.body

  try {
    await createPost({ id, title, date: format(new Date(), 'yyyy-mm-dd'), content})

    res.status(200).json({ message: "create success"})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "create fail"})
  }
} 