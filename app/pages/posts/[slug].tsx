import { useParams, useQuery } from "blitz"
import getPost from "../../posts/queries/getPost"

const PostPage = () => {
  try {
    const [post] = useQuery(getPost, { where: { id: 1 } })
    return (
      <div>
        <h1>Post:{post.title}</h1>
      </div>
    )
  } catch (e) {
    console.log(e)
  }
  return null
}

export default PostPage
