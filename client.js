import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export default sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}