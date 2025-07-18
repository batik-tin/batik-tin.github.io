import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const posts = await getCollection('batik')
  return rss({
    title: 'Batik Tin Gundih',
    description: 'Galeri Batik Tin Gundih Surabaya',
    site: context.site,
    items: posts.map(post => ({
      ...post.data,
      link: `/batik/${post.id}/`,
    })),
  })
}
