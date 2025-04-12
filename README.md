# HackVLC Hugo Theme

A custom Hugo theme for Hackerspace Valencia with light and dark mode support, inspired by maker/hacker aesthetics.

## Features

- 🌓 Light and Dark mode with toggle
- 🎨 Vibrant teal and coral color scheme
- 📱 Fully responsive design
- 🌐 Multilingual support
- 🖼️ Project showcase templates
- 📝 Blog support
- 📊 Custom components for community activities

## Installation

### As a Hugo Module (recommended)

1. Initialize Hugo Module system if you haven't already:
```bash
hugo mod init github.com/username/my-site
```

2. Add the theme to your `config.toml`:
```toml
[module]
  [[module.imports]]
    path = "github.com/hackvlc/hackvlc-hugo-theme"
```

3. Get the theme:
```bash
hugo mod get -u
```

### Manual Installation

1. Download the theme:
```bash
git clone https://github.com/hackvlc/hackvlc-hugo-theme.git themes/hackvlc
```

2. Add the theme to your `config.toml`:
```toml
theme = "hackvlc"
```

## Configuration

Here's an example configuration:

```toml
baseURL = "https://hackerspacevalencia.com/"
languageCode = "es"
title = "Hackerspace Valencia"
theme = "hackvlc"

[params]
  description = "Comunidad maker y espacio de aprendizaje tecnológico en Valencia"
  # darkMode = true  # Uncomment to enable dark mode by default
  
  # Hero section
  heroImage = "/images/hero-image.png"
  primaryButtonText = "Sobre Nosotros"
  primaryButtonURL = "/sobre-nosotros"
  secondaryButtonText = "Ver Proyectos"
  secondaryButtonURL = "/proyectos"
  
  # Social media links
  [params.social]
    github = "https://github.com/hackerspacevalencia"
    twitter = "https://twitter.com/hackerspaceVLC"
    instagram = "https://instagram.com/hackerspaceVLC"
```

## Project Structure

To create a new project:

1. Create a new markdown file in `content/projects/`:
```markdown
---
title: "Robot Destructor"
date: 2023-05-12
authors: ["José Gil (Genio del Mal)"]
technologies: ["ESP32", "Servos", "Lanzallamas", "¡Camuflaje ninja!"]
qr_info: "/images/qr-info.png"
qr_code: "/images/qr-code.png"
---

Proyecto con fines malvados de dominación mundial.
Lanzallamas, camuflaje ninja, y más armas poderosas ocultas
servirán para llegar a este fin.
```

## Customization

### Colors

To customize the theme colors, override these CSS variables in your `assets/css/custom.css`:

```css
:root {
  --primary-color: #00BFB3; /* Teal */
  --accent-color: #FF6347; /* Coral */
  /* Add other variables to override */
}
```

## License

This theme is released under the MIT license.