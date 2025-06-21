# Contributing to Niti

Thank you for your interest in contributing to Niti! This document provides guidelines and information for contributors.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style and Standards](#code-style-and-standards)
- [Git Workflow](#git-workflow)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Code Review Guidelines](#code-review-guidelines)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)
- [Community Guidelines](#community-guidelines)

## Project Overview

Niti is a project management application built with a clean separation between frontend and backend:

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Shadcn UI, Radix UI
- **Backend**: Node.js, Express, TypeScript, Prisma ORM
- **Database**: PostgreSQL (via Prisma)
- **Build Tools**: Vite (frontend), TypeScript compiler (backend)

### Project Structure

Our project uses a simple structure with separate client and server directories:

```
niti/
├── client/              # React + Vite frontend application
│   ├── src/             # Source code
│   ├── public/          # Static assets
│   ├── package.json     # Frontend dependencies
│   └── vite.config.ts   # Vite configuration
├── server/              # Node.js + Express backend API
│   ├── src/             # Source code
│   ├── prisma/          # Database schema and migrations
│   ├── package.json     # Backend dependencies
│   └── server.ts        # Server entry point
├── scripts/             # Setup and utility scripts
├── readme.md           # Project documentation
└── CONTRIBUTING.md     # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- PostgreSQL database
- Git

### Development Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/theamrendram/niti
    cd niti
    ```

2.  **Install dependencies**

    Install dependencies for both client and server:

    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Environment Setup**

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

4.  **Database Setup**

    With your `.env` file configured, set up your database schema:

    ```bash
    cd server
    npx prisma generate
    npx prisma db push
    ```

    To seed the database, you can run the seed script if one is available.

## Development Workflow

### Starting Development Servers

You need to start both the frontend and backend servers separately:

```bash
# Start the backend server (Terminal 1)
cd server
npm run dev

# Start the frontend client (Terminal 2)
cd client
npm run dev
```

The frontend will be available at http://localhost:5173 and the backend at http://localhost:3000.

### Common Commands

- `npm run build`: Build the application for production
- `npm run lint`: Lint the code
- `npm run dev`: Start development server

## Code Style and Standards

### TypeScript

- Use strict TypeScript configuration.
- Avoid the `any` type; use `unknown` when necessary.
- Define proper interfaces and types for all data structures.

### React/Frontend (`client/`)

- Use functional components with hooks.
- All components should be typed with TypeScript.
- Use Tailwind CSS for styling.
- Follow the component structure in `src/components/`.
- Use React Hook Form with Zod for form validation.

### Backend (`server/`)

- Follow RESTful API conventions for your Express.js API.
- Use Prisma client for all database operations.
- Validate input data for all incoming requests.
- Use proper error handling middleware.
- Follow the controller-service pattern in `src/controllers/`.

### File Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`)
- **Controllers/Services**: camelCase (e.g., `auth.controller.ts`)
- **Types**: PascalCase (e.g., `User.types.ts`)
- **Pages**: kebab-case (e.g., `dashboard-home.tsx`)

### Code Formatting

- **ESLint**: Adhere to the linting rules defined in the configuration.
- **TypeScript**: Ensure all code is properly typed.
- **Comments**: Add JSDoc comments for complex functions and exports.

## Git Workflow

### Branch Naming

Use the following branch naming convention:

- `feature/feature-name` - for new features
- `bugfix/bug-description` - for bug fixes
- `refactor/component-name` - for refactoring
- `docs/documentation-update` - for documentation

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

```
type(scope): description

[optional body]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:

- `feat(auth): add JWT authentication`
- `fix(kanban): resolve drag and drop issue`
- `docs(readme): update installation instructions`

## Making Changes

### Before You Start

1. Check existing issues and pull requests to avoid duplication
2. Create a new issue if you're planning a significant change
3. Fork the repository and create a feature branch

### Development Process

1. **Set up your development environment** (see Getting Started above)
2. **Make your changes** following the code style guidelines
3. **Test your changes** thoroughly
4. **Run linting** in both client and server directories
5. **Commit your changes** with conventional commit format
6. **Push your branch** and create a pull request

### Testing Your Changes

```bash
# Test the backend
cd server
npm run lint

# Test the frontend
cd client
npm run lint
```

## Pull Request Process

### Before Submitting

1. **Ensure your code follows the style guidelines**
2. **Test your changes** in both development and production builds
3. **Update documentation** if your changes affect user-facing features
4. **Add tests** if applicable

### Pull Request Template

When creating a pull request, please include:

- **Description**: What does this PR do?
- **Type of change**: Bug fix, feature, documentation, etc.
- **Testing**: How have you tested these changes?
- **Breaking changes**: Are there any breaking changes?
- **Screenshots**: If applicable, include screenshots of UI changes

### Review Process

1. **Automated checks** must pass (linting, type checking)
2. **Code review** by maintainers
3. **Testing** on different environments
4. **Approval** from at least one maintainer

## Code Review Guidelines

### For Contributors

- **Be responsive** to review comments
- **Explain your reasoning** for complex changes
- **Keep commits atomic** and well-described
- **Address all feedback** before requesting re-review

### For Reviewers

- **Be constructive** and specific in feedback
- **Focus on the code** rather than the person
- **Suggest improvements** when possible
- **Approve promptly** when satisfied

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear description** of the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Environment details** (OS, browser, Node.js version)
- **Screenshots** if applicable
- **Console errors** if any

### Feature Requests

When requesting features, please include:

- **Clear description** of the feature
- **Use case** and benefits
- **Proposed implementation** (if you have ideas)
- **Mockups** or examples (if applicable)

## Community Guidelines

### Code of Conduct

- **Be respectful** and inclusive
- **Help others** learn and grow
- **Give constructive feedback**
- **Follow the project's coding standards**

### Communication

- **Use clear language** in issues and PRs
- **Be patient** with responses
- **Ask questions** when unsure
- **Share knowledge** with the community

## Getting Help

If you need help with contributing:

1. **Check the documentation** first
2. **Search existing issues** for similar problems
3. **Create a new issue** with clear details
4. **Join discussions** in existing issues

## Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **Release notes** for significant contributions
- **Project documentation** where applicable

Thank you for contributing to Niti! 🚀
