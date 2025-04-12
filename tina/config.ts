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
            // Define tus colecciones aquí
        ],
    },
});