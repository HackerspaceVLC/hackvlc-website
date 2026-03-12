import { defineConfig } from "tinacms";

export default defineConfig({
    branch: "main",
    clientId: process.env.TINA_CLIENT_ID || "",
    token: process.env.TINA_TOKEN || "",
    build: {
        outputFolder: "admin",
        publicFolder: "static",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "static",
        },
    },
    schema: {
        collections: [
            {
                label: "Proyectos (ES)",
                name: "proyectos_es",
                path: "content/spanish/proyectos",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Título", isTitle: true, required: true },
                    { type: "datetime", name: "date", label: "Fecha" },
                    { type: "image", name: "image", label: "Imagen" },
                    { type: "string", name: "summary", label: "Resumen", ui: { component: "textarea" } },
                    { type: "string", name: "description", label: "Descripción", ui: { component: "textarea" } },
                    { type: "string", name: "tags", label: "Etiquetas", list: true },
                    { type: "string", name: "categories", label: "Categorías", list: true },
                    { type: "boolean", name: "featured", label: "Destacado" },
                    { type: "string", name: "status", label: "Estado" },
                    { type: "string", name: "tech_stack", label: "Tecnologías", list: true },
                    { type: "rich-text", name: "body", label: "Contenido", isBody: true },
                ],
            },
            {
                label: "Proyectos (EN)",
                name: "proyectos_en",
                path: "content/english/proyectos",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "datetime", name: "date", label: "Date" },
                    { type: "image", name: "image", label: "Image" },
                    { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
                    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    { type: "string", name: "tags", label: "Tags", list: true },
                    { type: "string", name: "categories", label: "Categories", list: true },
                    { type: "boolean", name: "featured", label: "Featured" },
                    { type: "string", name: "status", label: "Status" },
                    { type: "string", name: "tech_stack", label: "Tech Stack", list: true },
                    { type: "rich-text", name: "body", label: "Body", isBody: true },
                ],
            },
            {
                label: "Workshops (ES)",
                name: "workshops_es",
                path: "content/spanish/workshops",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Título", isTitle: true, required: true },
                    { type: "datetime", name: "date", label: "Fecha" },
                    { type: "image", name: "image", label: "Imagen" },
                    { type: "string", name: "socios", label: "Socios", list: true },
                    { type: "string", name: "description", label: "Descripción", ui: { component: "textarea" } },
                    { type: "string", name: "tags", label: "Etiquetas", list: true },
                    { type: "rich-text", name: "body", label: "Contenido", isBody: true },
                ],
            },
            {
                label: "Workshops (EN)",
                name: "workshops_en",
                path: "content/english/workshops",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "datetime", name: "date", label: "Date" },
                    { type: "image", name: "image", label: "Image" },
                    { type: "string", name: "socios", label: "Members", list: true },
                    { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                    { type: "string", name: "tags", label: "Tags", list: true },
                    { type: "rich-text", name: "body", label: "Body", isBody: true },
                ],
            },
            {
                label: "Pages (ES)",
                name: "pages_es",
                path: "content/spanish/pages",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Título", isTitle: true, required: true },
                    { type: "image", name: "image", label: "Imagen" },
                    { type: "rich-text", name: "body", label: "Contenido", isBody: true },
                ],
            },
            {
                label: "Pages (EN)",
                name: "pages_en",
                path: "content/english/pages",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "image", name: "image", label: "Image" },
                    { type: "rich-text", name: "body", label: "Body", isBody: true },
                ],
            },
        ],
    },
    search: {
        tina: {
            indexerToken: process.env.TINA_SEARCH_TOKEN || "",
            stopwordLanguages: ["eng", "spa"],
        },
        indexBatchSize: 100,
        maxSearchIndexFieldLength: 100,
    },
});
