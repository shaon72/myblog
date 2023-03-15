import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSession } from 'next-auth/react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Home = ({ posts }) => {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  
  return (
    
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mx-auto py-10 px-4 sm:px-6 lg:px-8">
        
        {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden m-5 lg:mb-10 cursor-pointer" >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image
                    src={post.frontMatter.thumbnailUrl}
                    className="h-full w-full object-cover md:w-80"
                    alt="thumbnail"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="post-desc bg-gray-300 p-4">
                  <h2 className="text-center text-2xl font-bold mb-8">{post.frontMatter.title}</h2>
                  <p className="text-base mb-2">{post.frontMatter.description}</p>
                  <span className="text-sm font-medium">{post.frontMatter.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>
      <Footer />
    </div>

  )
}

export default Home

export const getStaticProps = async () => {
  
  const files = fs.readdirSync('_posts', { withFileTypes: true })
  .filter(file => file.isFile() && !file.name.startsWith('.'))
  .map(file => file.name)
  
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('_posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  
  return {
    props: {
      posts
    }
  }
}
