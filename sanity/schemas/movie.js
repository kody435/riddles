export default {
  name: "movies",
  title: "Movies",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
    {
      name: "imdb",
      title: "IMDB ID",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "releaseDate",
      title: "Release Year",
      type: "string",
    },
  ],
};
