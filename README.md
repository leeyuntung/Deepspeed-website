# DeepSpeed Website

This is a monorepo managed by [Turbo](https://turbo.build/repo). It contains a Next.js web application and an Express API.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v10 or higher)

## Getting Started

1.  **Install Dependencies**

    From the root of the repository, run:

    ```bash
    npm install
    ```

2.  **Run Development Server**

    To start both the web application and the API in development mode, run:

    ```bash
    npm run dev
    ```

    This will start the following services:
    - **Web App**: Available at [http://localhost:3000](http://localhost:3000)
    - **API**: Runs the API server (currently a placeholder)

## Project Structure

- `apps/web`: The Next.js frontend application.
- `apps/api`: The Express backend API.
- `packages/`: Shared packages used by the applications.

## Building for Production

To build all applications for production, run:

```bash
npm run build
```

## Linting

To run the linter across all workspaces:

```bash
npm run lint
```
