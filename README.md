# Fastify TypeScript API Template

This is a template for building REST APIs using Fastify and TypeScript, following an API-first approach with Swagger UI integration.

## Features

- TypeScript support
- Fastify for high-performance REST APIs
- API documentation with Swagger UI
- Hot reloading for development
- Structured project layout
- Type-safe request/response handling

## Project Structure

```
src/
├── app.ts           # Main application setup
├── server.ts        # Server entry point
├── routes/          # Route definitions
├── controllers/     # Request handlers
└── types/          # TypeScript type definitions
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm start
   ```

## API Documentation

Once the server is running, you can access the Swagger UI documentation at:

```
http://localhost:3000/documentation
```

## Development

The project uses `ts-node-dev` for development, which provides hot reloading. Any changes you make to the source files will automatically restart the server.

## API-First Development

This template follows an API-first approach:

1. Define your API schema in the route files using Fastify's schema definitions
2. Implement the controllers
3. The TypeScript compiler will ensure type safety between your schema and implementation

## Production

For production deployment:

1. Build the project: `npm run build`
2. Start the server: `npm start`
