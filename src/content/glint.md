## Goals
---

* **Productivity-Centered Design:** Focused on reducing cognitive load by organizing tasks into workspaces and contextual notes.
* **Centralized Task Management:** Enables tracking and managing tasks from a single, unified platform.


## Tech Stack
---
Glint was developed using a modern JavaScript-based full-stack approach, combining a reactive frontend with a reliable backend and a relational database.

### Technical Specifications
| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Frontend** | React | User interface and state management |
| **Backend** | Node.js (Express) | REST API and application logic |
| **Database** | MySQL (mysql2) | Persistent data storage for tasks, workspaces, and notes |
| **Architecture** | Monolithic | Unified deployment of frontend and backend |

### Infrastructure & Tooling
* **Cloud Hosting:** Deployed on Microsoft Azure using Virtual Machines (IaaS).
* **Server Environment:** Linux-based VM running the Node.js application.
* **Version Control:** Git for source code management and collaboration.


## Key Highlights
---
### 1. Workspace-Based Task Organization
Glint introduces a workspace system that allows to separate tasks by projects, personal goals, or contexts. This structure improves clarity and helps focus on what matters most without overwhelming task lists.

> **Note:** Each workspace can contain its own set of tasks and notes, enabling better contextual organization.

### 2. Integrated Notes System
* **Contextual Notes:** Notes can be attached to specific workspaces to capture ideas, references, or reminders.
* **Lightweight Editing:** Designed for quick input without disrupting the workflow.

---

### Getting Started
1. `git clone https://github.com/morachris/glint-app.git`
2. `npm install`
3. `npm run dev`
