import React from 'react'
import { Jumbotron, Prose } from '@madetech/frontend'
import PostAboutAuthor from './AboutAuthor'
import PostMeta from './Meta'
import PostScripts from './Scripts'
import PostTags from './Tags'
import { Hiring } from '../../components/Marketing'
import initGists from './initGists'
import trackTags from './trackTags'
import EbookPreview from '../Contentful/EbookPreview'

export default class Post extends React.Component {
  componentDidMount() {
    initGists()
    trackTags(this.props.post.categories, this.props.post.tags)
  }

  render() {
    const { post, withPrefix, content } = this.props
    return (
      <>
        <Jumbotron extraClassName="mb-3 py-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <strong>
                  <a href={withPrefix('/blog')}>Made Tech Blog</a>
                </strong>
              </div>
            </div>
          </div>
        </Jumbotron>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <article
                className="post"
                itemScope
                itemType="http://schema.org/BlogPosting"
              >
                <Prose>
                  <meta itemProp="datePublished" content="{{ post.date }}" />
                  <meta itemProp="headline" content="{{post.title}}" />

                  <h1
                    className="post__title"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

                  <PostMeta post={post} withPrefix={withPrefix} />

                  <div
                    className="post__body"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  <PostAboutAuthor author={post.author} />

                  <Hiring />

                  {/* ConvertFlow Area */}
                  <div className="cf-1407-area-4492" />

                  <PostScripts withPrefix={withPrefix} />
                </Prose>
              </article>
            </div>
          </div>
        </div>

        <EbookPreview content={content} />
      </>
    )
  }
}

export { PostMeta, PostTags }
