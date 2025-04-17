# Jayelle May - Resume Website

A professional portfolio website for Jayelle May, Full Stack Engineer, built with React, TypeScript, and Chakra UI.

## Features

- Modern, responsive design with Chakra UI components
- Component-based architecture
- TypeScript for type safety
- Custom theme with brand colors
- Lucide React for icons

## Project Structure

```
resume-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── resumeData.ts
│   ├── theme.ts
│   ├── App.tsx
│   ├── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

The resume data is centralized in `src/data/resumeData.ts`. Update this file to customize the content of the website.

The theme configuration is in `src/theme.ts`. You can adjust colors, fonts, and component styles here.

## Building for Production

```bash
npm run build
# or
yarn build
```

The build files will be in the `build` folder and ready to be deployed.

## License

This project is licensed under the MIT License.