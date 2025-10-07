# Book Directory Backend

A RESTful API for managing a book directory, built with Node.js, Express, TypeScript, and MongoDB.

## Features

- User registration and login (JWT authentication)
- Role-based access control (admin/user)
- CRUD operations for books
- Error handling middleware
- Environment configuration via `.env`
- Modular code structure

## Project Structure

```
.env
package.json
tsconfig.json
src/
  app.ts
  server.ts
  app/
    config/
      index.ts
    data/
      book.json
    middlewares/
      auth.middleware.ts
      errorHandler.ts
    modules/
      auth/
        user.controller.ts
        user.interface.ts
        user.model.ts
        user.routes.ts
        user.services.ts
      books/
        book.controller.ts
        book.interface.ts
        book.model.ts
        book.routes.ts
        book.services.ts
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd book-directory-backend-project
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   PORT=8000
   MONGODB_URL="mongodb://localhost:27017"
   JWT_SECRET='your-secret-key'
   ```

4. Build the project:
   ```sh
   npm run build
   ```

5. Start the server:
   ```sh
   npm start
   ```
   Or for development with hot-reload:
   ```sh
   npm run dev
   ```

## API Endpoints

### Books

- `GET /api/books` — List all books
- `GET /api/books/:id` — Get a single book (auth required)
- `POST /api/books` — Create a new book (admin only)
- `PUT /api/books/:id` — Update a book (admin only)
- `DELETE /api/books/:id` — Delete a book (admin only)

### Users

- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and receive JWT

## Environment Variables

See [src/app/config/index.ts](src/app/config/index.ts) for usage.

## License

ISC

## Author

Mehedi Hasan