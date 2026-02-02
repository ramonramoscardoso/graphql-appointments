# 📚 GraphQL Study API

A simple GraphQL API built for study purposes using **TypeGraphQL** and **Apollo Server**.

This project exposes a GraphQL server with resolvers for managing **customers** and **appointments**.

---

## 🚀 Tech Stack

- Node.js
- TypeScript
- GraphQL
- TypeGraphQL
- Apollo Server

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

Install dependencies:

```bash
npm install
```

▶️ Running the Project

To start the server in development mode:

```bash
npm run dev
```

After starting, you should see something like:

```bash
🚀 HTTP server running on http://localhost:4000/
```

🔍 Sample Query

```bash
query {
  customers {
    id
    name
  }
}
```
