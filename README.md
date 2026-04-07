<p align="center">
  <a href="https://github.com/iamayuu/ai-engineer-roadmap/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Static%20site-✓-2ea043?style=for-the-badge" alt="Static site" />
</p>

<h1 align="center">🗺️ AI Engineer Roadmap — 12-Week Plan</h1>

<p align="center">
  A polished, static <strong>personal learning roadmap</strong>: daily topics, tasks, resources, and progress tracking — with <strong>task-level completion</strong>, <strong>day-level sync</strong>, and <strong>export / import</strong> for moving progress between devices.
</p>

<p align="center">
  <a href="https://github.com/iamayuu/ai-engineer-roadmap"><strong>Repository</strong></a>
  &nbsp;·&nbsp;
  <!-- TODO: replace # with your hosted demo URL -->
  <a href="#"><strong>Live demo</strong> (coming soon)</a>
</p>

---

## ✨ Features

|                              |                                                                      |
| ---------------------------- | -------------------------------------------------------------------- |
| 📅 **84-day curriculum**     | Phased roadmap with topics, hours, tags, and curated links           |
| ✅ **Task-level completion** | Check off individual tasks; progress updates immediately             |
| 🔁 **Day ↔ tasks sync**      | All tasks done → day completes; day checked → all tasks complete     |
| 📊 **Granular progress**     | Completion % with **two decimal places** (visible per-task impact)   |
| 💾 **Local persistence**     | Progress saved in the browser (`localStorage`)                       |
| 📤 **Export / Import**       | JSON to clipboard or file — sync across browsers / machines          |
| 🔎 **Search & filters**      | Filter by track (Python, LLMs, MLOps, CV, etc.) and full-text search |
| 🎨 **UI**                    | Dark theme, subtle grid/noise, responsive table layout               |

---

## 🚀 Quick start

### Clone

```bash
git clone https://github.com/iamayuu/ai-engineer-roadmap.git
cd ai-engineer-roadmap
```

### Run locally

Open `index.html` in a browser, or serve the folder (recommended):

    python -m http.server 8080

Then open `http://localhost:8080`.

### Deploy

Push to **GitHub Pages**, **Netlify**, **Vercel**, **Cloudflare Pages**, or any static host — **no build step**.

> **Live demo:** add your public URL here once hosted:  
> `https://your-demo-url.example`

---

## 💾 Progress & backup

Stored per **origin** (site URL) under:

- **Storage key:** `ai-roadmap-done-v2`
- **Task keys:** `"<dayNumber>:<taskIndex>"` (e.g. `"12:2"`)

### 📤 Export

Toolbar → **Export** — copies JSON (or downloads `ai-roadmap-progress.json` if clipboard isn’t available).

### 📥 Import

Toolbar → **Import** — paste JSON → **Apply import** (replaces progress in the current browser).

---

## 🧱 Project structure

```
ai-engineer-roadmap/
├── index.html    # Layout & shell
├── style.css     # Theme, table, dialogs, responsive styles
├── app.js        # UI, progress, filters, export/import
└── data.js       # Roadmap content (phases, days, tasks, links)
```

---

## 🛠️ Stack

- Vanilla **HTML / CSS / JavaScript**
- **Google Fonts** (e.g. Inter, Space Grotesk, JetBrains Mono, Syne)

---

## 📄 License

This project is licensed under the **MIT License** — see [`LICENSE`](https://github.com/iamayuu/ai-engineer-roadmap/blob/main/LICENSE).

---

<p align="center">
  Built for focus — track daily, ship weekly. 🚀
</p>
