import {defineType, defineArrayMember} from 'sanity'

export const blockGallery = defineType ({
  title: "Block Gallery",
  name: "blockGallery",
  type: "array",
  of: [
    defineArrayMember({
      title: "Image",
      name: "image",
      type: "image",
      fields: [
        {
          name: 'caption',
          type: 'string', 
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'alt',
          type: 'string',
          title: 'Alt',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        }
      ]
    }),
  ],
});
