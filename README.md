# 🦾 Monsters Rolodex (React + Vite)

A simple React + Vite app that displays robot “technicians” fetched from an API, with real-time search filtering.

---

## ✨ Features

- 🔍 Search robot technicians by name
- ⚙️ Built with functional components and hooks
- 🎨 Clean separation of concerns
  - **App.jsx**: Main state management (fetch + filter)
  - **CardList.jsx**: Displays list of cards
  - **Card.jsx**: Individual monster card
  - **SearchBox.jsx**: Input component for searching

---

## 🧑‍💻 Installation & Running

```bash
# 1. Clone the repo
git clone https://github.com/yinjuchen/monsters-rolodex.git

# 2. Go into the project folder
cd monsters-rolodex

# 3. Install dependencies
npm install

# 4. Run locally
npm run dev

# 5. Open in your browser
http://localhost:5173
