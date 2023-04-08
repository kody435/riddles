export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mainImg",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
