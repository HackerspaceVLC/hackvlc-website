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
            mediaRoot: "uploads",
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
        ],
    },
});
