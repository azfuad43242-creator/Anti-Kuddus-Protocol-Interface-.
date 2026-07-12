# 🛡️ Anti-Kuddus Protocol

> A student-led resistance system against the tyrannical reign of Kodu Kuddus — built for the **BAIUST CSE Spring Fest 2026** Hackathon.

The Anti-Kuddus Protocol is a cyberpunk-themed web application that empowers the general students of Class 7, Section B to organize, document, and ultimately impeach the corrupt 1st Captain. It includes a Secure Student Hub and an Administrative Command Center with full persistence to IndexedDB.

---

## ⚡ Quick Start

### Windows:
1. Double-click **`start.bat`**
2. Browser opens automatically at `http://localhost:3000`

### macOS / Linux:
```bash
chmod +x start.sh
./start.sh
```

### Manual:
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Serve the production build
npx serve dist
# Open http://localhost:3000 in your browser
```

### During development:
```bash
npm run dev
# Open http://localhost:5173
```

### ⚠️ Why can't I just open `dist/index.html` directly?

Modern browsers **block ES Modules and IndexedDB** when opening files via the `file://` protocol for security reasons. The build produces a single self-contained HTML file, but it **must be served over HTTP** to work correctly.

| Method | Command | Use case |
|---|---|---|
| **Dev server** | `npm run dev` | Live development |
| **Production preview** | `npx serve dist` | Final demo |
| **Python server** | `cd dist && python3 -m http.server 8000` | No extra install |

---

## 🎯 Hackathon Mission Coverage (All Sub-Cases)