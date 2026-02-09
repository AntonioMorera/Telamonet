# GEMINI.md - TelamoNet Project Context

This document provides essential context and instructions for AI agents working on the TelamoNet project.

## Project Overview
TelamoNet is an educational social network designed to connect schools and students, facilitating academic event diffusion and peer-to-peer support.
- **Target Audience:** Schools and students (initially focused on Lanzarote).
- **Main Features (Planned):** Event management for schools, Q&A system for students, reputation system.
- **Current Status:** In early development (Prototype phase).

## Tech Stack
### Frontend
- **Framework:** Vue 3 (Composition API with `<script setup>`)
- **Build Tool:** Vite
- **Routing:** Vue Router
- **State Management:** Pinia (seen in `src/stores/`, though currently minimal)
- **Styling:** Tailwind CSS, PostCSS, SASS
- **Internationalization:** Vue I18n (translations in `src/translations/`)

### Backend & Database
- **Backend:** Node.js (Current implementation is minimal in `backend/` directory)
- **Database:** MySQL 8.0
- **Infrastructure:** Docker & Docker Compose

## Development Setup

### Using Docker (Recommended)
This starts the frontend, MySQL database, and phpMyAdmin.
```bash
docker-compose up --build
```
- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **phpMyAdmin:** [http://localhost:8080](http://localhost:8080)
- **Database Port:** 3307 (External) / 3306 (Internal)

### Manual Frontend Setup
```bash
npm install
npm run dev
```

## Architecture & Conventions
- **Source Directory (`src/`):**
  - `@/` alias points to `src/`.
  - `components/`: Reusable UI components.
  - `views/`: Page-level components.
  - `stores/`: Data management.
  - `translations/`: Multi-language support (ES/EN).
- **Styles:** Main styles are in `src/sytles/` (Note: "sytles" typo in folder name).
- **Backend:** Located in `backend/`. Uses `mysql2` for database connection.

## Key Files
- `docker-compose.yml`: Defines the full environment (App, DB, phpMyAdmin).
- `vite.config.js`: Vite configuration with aliases and CSS preprocessors.
- `src/main.js`: Frontend entry point.
- `backend/server.js`: Backend entry point (Basic DB connection).
- `src/router/index.js`: Route definitions.

## Project Notes & Inconsistencies
- **Backend Tech:** The `README.md` mentions Laravel, but the current implementation uses Node.js/MySQL. Priority should be given to the existing Node.js structure unless instructed to migrate to Laravel.
- **Supabase:** `src/supabase.js` exists but is currently empty.
- **Folder Naming:** There is a typo in the styles directory: `src/sytles/` instead of `styles/`.
- **Backend Progress:** The backend is currently just a database connection script; no API routes or Express/Fastify server are fully implemented yet.
