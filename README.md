# Priyanshi Kalsariya | Full Stack Web Developer Portfolio

A modern, high-performance developer portfolio designed with a "Dark Luxury" aesthetic. This project showcases my professional experience, technical skills, and key projects through an immersive, interactive interface.

## ✨ Key Features

- **AI Assistant Chat**: A real-time chat interface powered by **Google Gemini**, pre-trained on my resume data to answer questions about my background and skills.
- **Immersive UX**: Smooth page transitions and layout animations powered by **Framer Motion**.
- **Responsive Design**: Fully optimized for all devices using **Tailwind CSS 4**.
- **Interactive Project Showcase**: Detailed project cards with technology tags and demo/repo links.
- **Dynamic Content**: Centralized data management via `constants.ts` for easy updates.

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4, Lucide Icons
- **Animation**: Framer Motion
- **AI Integration**: Google Gemini API (@google/genai)
- **Markdown**: React Markdown (for AI responses)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Google Gemini API Key (get one at [aistudio.google.com](https://aistudio.google.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Priyanshi02612/react-example.git
   cd react-example
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/components/`: Reusable UI components (AIChat, Project cards, etc.)
- `src/constants.ts`: Central source of truth for all portfolio data.
- `src/App.tsx`: Main application layout and sections.
- `src/index.css`: Global styles and Tailwind configuration.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
