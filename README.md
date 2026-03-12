# Hackerspace Valencia Website

This is the official website repository for [Hackerspace Valencia](https://hackvlc.es/), built with [Hugo](https://gohugo.io/) and featuring a custom maker-inspired theme.

## 🚀 Getting Started

### Prerequisites
- **Hugo** (Extended version recommended): `brew install hugo` (macOS) or download from [Hugo Releases](https://github.com/gohugoio/hugo/releases).
- **Node.js & npm** (optional, for CMS integration and package management).

### Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HackerspaceVLC/hackvlc-website.git
   cd hackvlc-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # OR use hugo directly:
   hugo serve
   ```
   The site will be available at `http://localhost:1313/`.

4. **Build for production:**
   ```bash
   npm run build
   # OR
   hugo --minify
   ```

## 📁 Project Structure

- `content/`: Contains the markdown files for the website content, separated by language (`english/` and `spanish/`).
  - `pages/`: General pages like About or Signup.
  - `proyectos/`: Individual project portfolios and galleries.
  - `workshops/`: Information about past and upcoming workshops.
  - `socios/`: Member profiles.
- `data/`: YAML files containing structured data (e.g., portfolio lists, team members, features) for both `en/` and `es/`.
- `static/`: Static assets like images, fonts, and documents that are served directly.
  - `images/portfolio/`: Optimized project thumbnails.
- `themes/hackvlc/`: The custom Hugo theme used for the website.
- `tina/`: Configuration for TinaCMS (headless CMS for content editing).

## 📝 Adding Content

### Projects
To add a new project:
1. Create a new directory and `index.md` inside `content/spanish/proyectos/<project-name>/` and `content/english/proyectos/<project-name>/`.
2. Add your optimized thumbnail to `static/images/portfolio/<project-name>.webp`.
3. Include the necessary frontmatter in your `index.md` (check existing projects like `1-videojuego` for examples).

### 🖼️ Image Guidelines (Important)
To keep the repository small and the website fast, please adhere to these strict image guidelines:
- **Format:** Always use **WebP** (`.webp`) format for images. Do NOT use `.jpg`, `.png`, or `.gif`.
- **Thumbnails (`static/images/portfolio/`):** Max width **800px**.
- **Gallery/Content/Background Images:** Max width **1920px**.
- Always optimize and compress files before committing. You can use tools like `cwebp` to easily convert images.

## 🌍 Multilingual Support

The website supports both Spanish (default) and English. When adding or editing content, ensure you update both the `content/spanish/` and `content/english/` directories, as well as the respective `data/es/` and `data/en/` files to keep translations in sync.

## 📄 License
Everything we do is GPL-3.0 · Made with ❤️ in Valencia.
