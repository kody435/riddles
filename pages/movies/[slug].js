/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import {sanityClient} from '../../sanity'

const recipeQuery = `*[_type == 'movies' && slug.current == $slug][0]{
  title,
  slug,
  description,
  url,
  image
}`;

export default function Post({data}) {
  const { movie } = data;
  return (
    <div>
      <iframe src={movie.url} className="w-screen h-96" allowFullScreen />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "movies" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  )

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const movie = await sanityClient.fetch(recipeQuery, { slug });
  return {
    props: {
      data: { movie }
    }
  }
}
