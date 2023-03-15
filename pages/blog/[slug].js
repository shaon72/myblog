import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { DiscussionEmbed } from 'disqus-react'

const PostPage = ({ frontMatter: { title, date }, mdxSource, url }) => {
  return (
    <div className="mx-auto mt-4 max-w-4xl">
      <h1 className="text-center text-4xl font-bold mb-4">{title}</h1>
      <div className="text-gray-600 mb-4">{date}</div>
      <div className="prose">
        <MDXRemote {...mdxSource}/>
      </div>

      <DiscussionEmbed
        shortname="myblog-disqus-com"
        config={
          {
              url: url
          }
        }
      />
    </div>
  )
}
  

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('_posts'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('_posts',
    slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
