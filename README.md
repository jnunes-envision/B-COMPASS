# B-COMPASS

A modern full-stack web application built with React and Express.

## Project Structure

```
B-COMPASS/
├── backend/          # Express.js + TypeScript backend
│   └── src/         # Backend source code
├── frontend/        # React + Vite + TypeScript frontend
│   └── src/         # Frontend source code
└── README.md        # This file
```

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd B-COMPASS
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Development

#### Backend
```bash
cd backend
npm run dev
```
The backend will start on `http://localhost:3000`

#### Frontend
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:5173`

### Building for Production

#### Backend
```bash
cd backend
npm run build
npm start
```

#### Frontend
```bash
cd frontend
npm run build
```

## Available Scripts

### Backend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production build

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT
