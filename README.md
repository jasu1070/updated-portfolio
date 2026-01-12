

live at>https://jasu1070.github.io/updated-portfolio/

# Industrial Operations Portfolio - Jashvantbhai Parmar

A high-motion, cinematically styled portfolio web application designed for industrial professionals. This project showcases 9+ years of expertise in Production and Quality Operations through a modern, interactive interface.

## 🚀 Live Features

- **Industrial Motion UI**: Heavy use of `framer-motion` for professional, high-performance animations that mirror industrial precision.
- **Dynamic Resume Export**: A specialized "Print to PDF" feature that re-renders the webapp into a clean, professional document layout.
- **Responsive Engineering**: Fully optimized for mobile, tablet, and desktop viewing.
- **Dark Industrial Aesthetic**: High-contrast theme using Tailwind CSS with custom amber/orange gradients and glassmorphism.

## 🖼️ Asset Configuration (Replacement Guide)

To replace the images and links with your own, update the `RESUME_DATA` object in `constants.tsx`:

| Asset Name | Current File | Key in `RESUME_DATA` | Description |
|:---|:---|:---|:---|
| **Profile Image** | `constants.tsx` | `profile_image` | The main industrial photo in the "About" section. |
| **Resume PDF** | `constants.tsx` | `resume_url` | Link to your actual PDF file (e.g., hosted on Google Drive or Dropbox). |
| **Icons** | `constants.tsx` | `skills[].icon` | Uses `lucide-react` icons. Change them as needed. |

## 🛠️ Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS (JIT)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Hosting Compatibility**: Designed for zero-config deployment on GitHub Pages or Vercel.

## 📦 Project Structure

- `index.html`: Main entry point with SEO metadata and ESM import maps.
- `index.tsx`: React mounting logic.
- `App.tsx`: Main layout, scroll orchestration, and section management.
- `constants.tsx`: **Single source of truth** for all portfolio data (Resume content, Skills, Experience, Assets).
- `components/`: Modular UI elements (Background, Cards, Navigation).
- `types.ts`: TypeScript interfaces for data safety.

## 💻 Deployment to GitHub Pages

This app is pre-configured for static hosting.

1. **Host Files**: Upload the root directory files to your GitHub repository.
2. **Enable Pages**: 
   - Go to **Settings** > **Pages** in your repository.
   - Set the source to **Deploy from a branch**.
   - Select the `main` branch and the root (`/`) folder.

*Note: The app uses ESM.sh for dependency management, meaning no `npm install` or build step is strictly required.*

## 🎯 Use Cases

- **Personal Branding**: Elevate your professional presence beyond a standard LinkedIn profile.
- **Interactive Digital Resume**: Share a link with recruiters that provides an immersive look at your career.
- **Lead Generation**: Use the built-in contact form and direct-dial/email links.

---
Created for **Jashvantbhai Parmar** - Production & Quality Operations Specialist.