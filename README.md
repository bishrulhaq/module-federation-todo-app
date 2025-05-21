# Module Federation Todo App

A modern micro-frontend Todo application built with Vue 3, demonstrating Module Federation with Vite, shared state management using Pinia, and a lightweight Express + SQLite backend.

## Project Overview

This project demonstrates a micro-frontend architecture using Module Federation, where multiple independent applications work together to create a seamless user experience.

### Architecture Components

1. **Host Application** (`todo-host/`)
   - Main container application
   - Dynamically loads remote modules

2. **Remote Application** (`todo-remote/`)
   - Contains core Todo UI components
   - Exposes components to the host

3. **Statistics Application** (`todo-stat/`)
   - Provides analytics and statistics features
   - Loaded as a remote module

4. **Backend** (`backend/`)
   - Express.js server with SQLite database
   - Handles CRUD operations
   - Uses `db.sqlite` for data persistence

5. **Shared Module** (`shared/todo-store/`)
   - Centralized Pinia store
   - Manages shared state across microfrontends
   - Ensures consistent state management

## Key Features

- **Module Federation**: Runtime integration of remote modules
- **Shared State Management**: Centralized Pinia store
- **Independent Deployment**: Each application can be versioned and deployed separately
- **Dynamic Imports**: On-demand code loading for optimized performance
- **Modern Stack**: Vue 3, Vite, Pinia, Express, SQLite
- **Hot Reloading**: Development experience with instant updates

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Quick Start (Windows)

We provide convenient batch scripts for Windows users:

1. **Install Dependencies**
   ```bash
   # Double click install-all.bat
   # or run from command prompt:
   install-all.bat
   ```

2. **Start Applications**
   ```bash
   # Double click start-all.bat
   # or run from command prompt:
   start-all.bat
   ```

This will start all applications:
- Backend: http://localhost:3000
- Host: http://localhost:5173
- Remote: http://localhost:5174
- Statistics: http://localhost:5175

### Manual Setup

If you prefer manual installation or are using a different OS:

1. **Install Dependencies**
   ```bash
   # Install for each application
   cd todo-host && npm install
   cd ../todo-remote && npm install
   cd ../todo-stat && npm install
   cd ../backend && npm install
   ```

2. **Start Applications**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev

   # Terminal 2 - Host
   cd todo-host && npm run dev

   # Terminal 3 - Remote
   cd todo-remote && npm run dev

   # Terminal 4 - Statistics
   cd todo-stat && npm run dev
   ```

## Development

### Project Structure
```
module-federation-todo-app/
├── todo-host/          # Main container application
├── todo-remote/        # Todo UI components
├── todo-stat/          # Statistics module
├── backend/            # Express + SQLite backend
├── shared/             # Shared resources
│   └── todo-store/     # Shared Pinia store
├── install-all.bat     # Windows dependency installer
└── start-all.bat       # Windows application starter
```

### Development Workflow
- Each application can be developed independently
- Changes trigger hot reloading
- The host application dynamically loads remote modules
- Shared store ensures consistent state across applications

## Production Build

To build all applications for production:
```bash
# In each application directory
npm run build
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.