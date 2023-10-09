
export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "About",
      };
    },
  },
};
