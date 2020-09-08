import { useParams, useQuery } from "blitz"
import getPost from "../../posts/queries/getPost"
import { Suspense } from "react"

const Page = () => {
  const [post] = useQuery(getPost, { where: { id: 1 } })
  return (
    <div>
      <h1>Post:{post.title}</h1>
    </div>
  )
}

const PostPage = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <Page />
  </Suspense>
)

export default PostPage
