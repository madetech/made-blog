import React from 'react'
import { PostMeta } from '../Post'

export default function PostListItem ({ post }) {
  return (
    <div className='post_list_item'>
      <h2>
        <a href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }} />
      </h2>

      <div className='lead' dangerouslySetInnerHTML={{ __html: post.excerpt }} />

      <PostMeta post={post} />
    </div>
  )
}
