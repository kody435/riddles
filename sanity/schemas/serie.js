export default {
  name: "series",
  title: "Series",
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
      title: 'Url - https://vidsrc.me/',
      name: 'url',
      type: 'array',
      of: [{type: 'string'}]
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
