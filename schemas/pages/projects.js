import {defineField} from 'sanity'

export default {
  name: "projects",
  title: "Projects",
  type: "document",

  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "info",

      options: {
        source: "title.cs",
        maxLength: 96,
      },
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      fieldset: "info",
    }),
    defineField({
      name: "myTags",
      title: "Tags",
      type: "tags",
      fieldset: "info",
      options: {
        includeFromRelated: "myTags",
      },
    }),
    defineField({
      title: "Cover",
      name: "cover",
      type: "image",
      fieldset: "info",
    }),

    defineField({
      name: "text",
      title: "Text",
      type: "blockContent",
    }),
      defineField({
      title: "Gallery",
      name: "gallery",
      type: 'blockGallery',
    }),

  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date"
    }
  },
};
