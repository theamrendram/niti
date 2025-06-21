# Niti - Project Management Application

A modern project management application built with React, Node.js, and TypeScript with a clean separation between frontend and backend.

## 🏗️ Project Structure

```
niti/
├── client/              # React frontend application
│   ├── src/             # Source code
│   ├── public/          # Static assets
│   ├── package.json     # Frontend dependencies
│   └── vite.config.ts   # Vite configuration
├── server/              # Node.js backend API
│   ├── src/             # Source code
│   ├── prisma/          # Database schema and migrations
│   ├── package.json     # Backend dependencies
│   └── server.ts        # Server entry point
├── scripts/             # Setup and utility scripts
├── readme.md           # This file
└── CONTRIBUTING.md     # Contribution guidelines
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/theamrendram/niti
   cd niti
   ```

2. **Install dependencies**

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Environment Setup**

   Create `.env` files in the appropriate directories:

   **Server Environment** (`server/.env`):

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/niti_db"
   JWT_SECRET="your-jwt-secret-key"
   PORT=3000
   NODE_ENV=development
   ```

   **Client Environment** (`client/.env`):

   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. **Database Setup**

   ```bash
   cd server
   npx prisma generate
   npx prisma db push
   ```

5. **Start Development Servers**

   **Start the backend server:**

   ```bash
   cd server
   npm run dev
   ```

   **Start the frontend client (in a new terminal):**

   ```bash
   cd client
   npm run dev
   ```

   The frontend will be available at http://localhost:5173 and the backend at http://localhost:3000.

## 📦 Available Scripts

### Server Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start server in development mode with nodemon |
| `npm run build` | Build TypeScript to JavaScript                |
| `npm run start` | Start production server                       |
| `npm run watch` | Watch TypeScript files for changes            |

### Client Scripts

| Script            | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start Vite development server |
| `npm run build`   | Build for production          |
| `npm run preview` | Preview production build      |
| `npm run lint`    | Run ESLint                    |

### Database Scripts

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Run migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```

## 🏛️ Architecture

### Frontend (Client)

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + Shadcn UI
- **State Management**: React Hooks
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Drag & Drop**: @dnd-kit for Kanban boards
- **Tables**: TanStack Table
- **Notifications**: Sonner

### Backend (Server)

- **Framework**: Node.js with Express
- **Language**: TypeScript
- **Database ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: JWT with bcryptjs
- **Validation**: Built-in validation with error handling
- **CORS**: Enabled for cross-origin requests
- **Development**: Nodemon for auto-restart

## 🗄️ Database Schema

The application uses the following main entities:

- **Users**: Authentication and user management
- **Organizations**: Multi-tenant organization support
- **Projects**: Project management within organizations
- **Issues**: Task tracking with Kanban boards
- **Comments**: Issue discussions
- **Sprints**: Agile sprint planning

## 🔧 Development

### Adding New Dependencies

```bash
# Add to server
cd server
npm install package-name

# Add to client
cd client
npm install package-name
```

### Code Style

The project uses:

- **ESLint**: For code linting
- **TypeScript**: For type safety
- **Prettier**: For code formatting (via editor integration)

### Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests and linting: `npm run lint` (in both client and server)
4. Commit your changes with conventional commit format
5. Push and create a pull request

### Conventional Commits

Follow the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## 🚀 Deployment

### Backend Deployment

1. Build the server:

   ```bash
   cd server
   npm run build
   ```

2. Set up environment variables for production
3. Deploy the `dist` folder and `package.json`

### Frontend Deployment

1. Build the client:

   ```bash
   cd client
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

## 🤝 Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](CONTRIBUTING.md)
2. Search existing [issues](../../issues)
3. Create a new issue with detailed information

## 🔗 Links

- [Frontend Application](http://localhost:5173) (development)
- [Backend API](http://localhost:3000) (development)
- [API Documentation](http://localhost:3000/api-docs) (if available)
- [Prisma Studio](http://localhost:5555) (database management)
