## Goal
---

* **Personal Productivity Focus:** Build a structured habit-tracking system centered on consistency, progress, and long-term behavioral improvement.
* **Backend-Centered Architecture:** Design a robust backend capable of supporting complex habit logic before prioritizing UI completeness.
* **Domain-Driven Approach:** Model habits and their lifecycle as first-class entities to ensure clarity and extensibility.
* **Iterative Development (In Progress):** The project is actively evolving, with core backend features currently under construction.


## Tech Stack
---
Lumidir Habits is being developed as a full-stack web application, following a **backend-first strategy** to guarantee architectural soundness before frontend expansion.

### Technical Specifications
| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Frontend** | Next.js | Future dashboard and client-side interaction |
| **Styling** | SASS | Modular and maintainable styling system |
| **Backend** | FastAPI | REST API and application logic |
| **ORM** | SQLAlchemy | Database interaction and domain modeling |
| **Database** | PostgreSQL (Supabase-hosted) | Persistent relational data storage |
| **Authentication** | JWT + bcrypt | Custom user authentication and security |
| **Migrations** | Alembic | Versioned database schema management |
| **Architecture** | Layered / API-centric | Separation of concerns and scalability |

### Infrastructure & Tooling
* **Local Development Environment:** Configured to mirror real-world backend workflows.
* **Version Control:** Git-based development with incremental feature delivery.


## Key Highlights
---

### 1. Backend-First Design Philosophy
The project prioritizes backend stability and correctness over early UI completeness.  
Core effort has been placed on:

* API structure and routing
* Database modeling
* Authentication flow design
* Long-term scalability considerations

This approach ensures that future frontend features are built on a reliable foundation rather than retrofitted later.

---

### 2. Explicit Domain Modeling
Lumidir Habits is structured around clearly defined backend entities, such as:

- Users
- Habits
- Habit progress and completion records

Each entity is designed to reflect real-world behavior rather than UI convenience, enabling:

* Cleaner business rules
* Easier feature expansion
* Reduced technical debt over time

> **Note:** Domain logic is intentionally isolated from presentation concerns.

---

### 3. REST API Development (In Progress)
The backend exposes a RESTful API built with FastAPI, currently focused on core habit management.

Key characteristics include:
* Clear request/response schemas
* Asynchronous database interactions
* Initial endpoints for habit creation and persistence

The API-first approach allows the system to support multiple potential clients (web, mobile, etc.) in the future.

---

### 4. Authentication & Security Strategy
Authentication is implemented through a **custom JWT-based system**, with password handling secured via hashing mechanisms.

This decision was made to:
* Maintain full control over authentication logic
* Deepen understanding of real-world backend security patterns
* Avoid reliance on external authentication platforms

Sensitive implementation details are intentionally abstracted at this level.

---

### 5. Database & Persistence Layer
* **PostgreSQL** is used as the primary relational database.
* **Supabase** serves strictly as a managed database host, without reliance on its platform services.
* **Alembic migrations** ensure controlled and traceable schema evolution.

This setup balances flexibility, reliability, and learning-oriented development.

---

### 6. Frontend Status
The frontend is currently in an **early stage of development**:

* Built with Next.js to support future routing and rendering needs
* Styled using SASS for scalable UI organization
* Only an initial portion of the dashboard interface is implemented

UI development is intentionally secondary to backend consolidation.

---

### 7. Scope and Intent
Lumidir Habits is a **personal portfolio project**, not a production-ready commercial application.

Its primary goals are:
* Demonstrating backend architecture and design reasoning
* Applying real-world patterns in a controlled environment
* Serving as a foundation for continued iteration and feature growth

The project is explicitly marked as ***in progress***, with ongoing development planned around:
- Habit completion tracking
- Progress visualization
- Streak and consistency logic
- Dashboard data aggregation

---

### Getting Started
1. `git clone https://github.com/morachris/lumidir-habits.git`
2. Set up a local development environment.
3. Install backend dependencies.
4. Apply database migrations.
5. Start the FastAPI development server.
