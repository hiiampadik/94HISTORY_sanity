import {defineArrayMember, defineField} from 'sanity'

export default {
  name: "projects",
  title: "Projects",
  type: "document",


  fieldsets: [
    {
      name: "info",
      title: "Info",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],

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
      type: "array",
      of: [defineArrayMember({ type: 'image' })]
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
