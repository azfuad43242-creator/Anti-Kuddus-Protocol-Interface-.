#!/bin/bash

echo ""
echo "==============================================="
echo "   ANTI-KUDDUS PROTOCOL - Local Server"
echo "==============================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo ""
fi

# Build if dist folder doesn't exist
if [ ! -d "dist" ]; then
    echo "Building project..."
    npm run build
    echo ""
fi

# Start the server
echo "Starting local server on http://localhost:3000"
echo "Press Ctrl+C to stop."
echo ""
npx serve dist -l 3000
