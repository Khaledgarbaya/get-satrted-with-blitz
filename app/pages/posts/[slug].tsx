import { useParams } from "blitz"

const Post = () => {
  const params = useParams()
  return (
    <div>
      <h1>Post: {params.slug}</h1>
    </div>
  )
}

export default Post
