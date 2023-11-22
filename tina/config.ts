import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  token: 'bb632600dfba22399f22134d10129276114d0c13', // Get this from tina.io
  clientId: 'ed45afc8-bbe8-4816-9d20-9de93dc6b82b', // Get this from tina.io
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
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
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
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
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
