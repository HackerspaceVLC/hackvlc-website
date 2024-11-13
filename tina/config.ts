import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main", // your main branch name
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  media: {
    tina: {
      mediaRoot: "../static/images",
      publicFolder: "static",
    },
  },

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },

  schema: {
    collections: [
      // Example for blog posts
      {
        name: "post",
        label: "Posts",
        path: "content/posts", // match your content directory
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          // Match your front matter fields
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // Example for pages
      {
        name: "page",
        label: "Pages",
        path: "content",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      }
    ],
  },
});