import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  token: '4d35f5b6c3265ab8ec5d279673687fb8703780b1', // Get this from tina.io
  clientId: '245d5579-bc1c-46cb-b995-0d1af0996847', // Get this from tina.io
  branch,


  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "bio",
            label: "Author Bio",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "pubDate",
            label: "Date Posted (e.g. Nov 10, 2020)",
            required: true,
          },
          {
            type: "string",
            name: "imgUrl",
            label: "Banner Image URL",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: [{
              value: "../../layouts/BlogPost.astro",
              label: "Default"
            }],
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Article text (for new lines, use HTML <br> tag)",
            isBody: true,
          },
        ],
      }, 
      
      {
        name: "feature",
        label: "Features",
        path: "src/content/feature",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "bio",
            label: "Author Bio",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "pubDate",
            label: "Date Posted (e.g. Nov 10, 2020)",
            required: true,
          },
          {
            type: "string",
            name: "imgUrl",
            label: "Banner Image URL",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            required: false,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            options: [{
              value: "../../layouts/BlogPost.astro",
              label: "Default"
            }],
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Article text (for new lines, use HTML <br> tag)",
            isBody: true,
          },
        ],
      },

    ],
  },
});
