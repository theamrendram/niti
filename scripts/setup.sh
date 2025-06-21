#!/bin/bash

# Niti Monorepo Setup Script
# This script sets up the development environment for the Niti project

set -e

echo "🚀 Setting up Niti Monorepo Development Environment"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install workspace dependencies
echo "📦 Installing workspace dependencies..."
npm run install:workspaces

# Build shared package
echo "🔨 Building shared package..."
npm run build --workspace=@niti/shared

# Check if .env files exist
echo "🔧 Checking environment files..."

# Server .env
if [ ! -f "packages/server/.env" ]; then
    echo "⚠️  Creating packages/server/.env template..."
    cat > packages/server/.env << EOF
DATABASE_URL="postgresql://username:password@localhost:5432/niti_db"
JWT_SECRET="your-jwt-secret-key-here"
PORT=3000
NODE_ENV=development
EOF
    echo "📝 Please update packages/server/.env with your database credentials"
fi

# Client .env
if [ ! -f "packages/client/.env" ]; then
    echo "⚠️  Creating packages/client/.env template..."
    cat > packages/client/.env << EOF
VITE_API_URL=http://localhost:3000
EOF
    echo "📝 Please update packages/client/.env if needed"
fi

# Check if PostgreSQL is running
echo "🗄️  Checking PostgreSQL connection..."
if command -v pg_isready &> /dev/null; then
    if pg_isready -q; then
        echo "✅ PostgreSQL is running"
    else
        echo "⚠️  PostgreSQL is not running. Please start PostgreSQL before running the application."
    fi
else
    echo "⚠️  pg_isready not found. Please ensure PostgreSQL is installed and running."
fi

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npm run db:generate

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Update packages/server/.env with your database credentials"
echo "2. Run 'npm run db:push' to set up the database schema"
echo "3. Run 'npm run dev' to start both client and server"
echo ""
echo "Useful commands:"
echo "- npm run dev          # Start both client and server"
echo "- npm run dev:client   # Start only client"
echo "- npm run dev:server   # Start only server"
echo "- npm run build        # Build all packages"
echo "- npm run lint         # Lint all packages"
echo "- npm run db:studio    # Open Prisma Studio"
echo ""
echo "Happy coding! 🚀" 