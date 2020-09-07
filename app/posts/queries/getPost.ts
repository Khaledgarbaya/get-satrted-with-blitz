import { NotFoundError } from "blitz"
import db, { FindOnePostArgs } from "db"

type GetPostInput = {
  where: FindOnePostArgs["where"]
}

export default async function getProduct({ where }: GetPostInput) {
  const post = await db.post.findOne({ where })
  console.log(post)
  return post
}
