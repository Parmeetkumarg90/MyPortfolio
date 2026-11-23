# 🏆 Master Portfolio Redesign Plan & Visual Showcase
**Prepared for:** Parmeet Kumar (`https://birwal-portfolio.vercel.app/`)  
**Role:** Backend & Distributed Systems Engineer  
**Stitch MCP Project ID:** `12000249232782203011` (`Parmeet Kumar Portfolio Redesign`)  
**Current Selected Master Screen ID:** `37ff7182b3604a62b74410777ea4d414`  
**Status:** 🟡 Wide Layout Edition Generated — Ready for User Confirmation

---

## 🌟 THE NEW MASTER DESIGN: "Obsidian Craft — Wide & Balanced Layout Edition"
> **Padding Fix Applied:** Removed the restrictive 700px narrow column and excessive side margins. The layout now comfortably spans an **expansive `1180px` container** with balanced horizontal padding (`24px`–`32px` / `0 5%`), utilizing screen real estate naturally with 2-column project grids, wide timeline cards, and high-impact systems telemetry.

![Obsidian Craft — Wide & Balanced Layout Edition](stitch_screens/obsidian_craft_wide.png)

---

### 📐 What Changed to Fix the Side Padding?
1. **Container Width Expanded:** Moved from narrow centered single-column (`max-width: 760px`) to a modern expansive desktop grid (`max-width: 1180px; margin: 0 auto; padding: 0 32px`).
2. **Side Gutter Elimination:** Balanced margin ratio from `~45% empty margin` down to a comfortable `5%–8%` gutter, giving content room to breathe without leaving vast empty black voids on the left and right.
3. **2-Column Responsive Project Grid:** Projects (`Modular Monolith`, `RabbitMQ Event Pipeline`, `Document Signature`, `AI Resume Builder`) now sit in a balanced 2-column card grid across desktop screens, perfectly filling width while remaining clean and readable.
4. **Expansive Header & Experience Timeline:** Profile header and Zenmonk/CodeQuotient experience cards stretch comfortably across the layout with clear horizontal hierarchy.

---

### 🎨 Visual Identity & Design Tokens

* **Stitch Screen ID:** `37ff7182b3604a62b74410777ea4d414`
* **Base Canvas:** Deep Soft Obsidian Slate (`#0C0E14`) with subtle ambient radial glow.
* **Card Elevation:** Muted Charcoal-Black (`#141721` / `#12141D`) with ultra-fine 1px hairline borders (`rgba(255, 255, 255, 0.08)` to `rgba(16, 185, 129, 0.2)` on hover).
* **Primary Accent:** Electric Emerald (`#10B981`) — represents healthy microservices, sub-10ms response times, and active telemetry.
* **Secondary Accent:** Telemetry Cyan (`#06B6D4`) — message broker streams and tech badges.
* **Typography:** `Plus Jakarta Sans` / `Inter` for crisp headlines and prose, paired with `Fira Code` / `JetBrains Mono` for monospace telemetry.

---

### 📑 Linear Content Architecture (Strictly From Resume)

```mermaid
graph TD
    Hero["1. Expansive Profile Header<br/>Avatar · Live Status Radar · Systems Bio · Action Pills"]
    Hero --> Exp["2. Professional Experience<br/>Zenmonk (Full Stack Intern) · CodeQuotient (MERN Intern)"]
    Exp --> Proj["3. Key Architecture Projects (2-Column Grid)<br/>Modular Monolith · RabbitMQ Event Pipeline · Document Signature · AI Resume Builder"]
    Proj --> Skills["4. Technical Competencies<br/>Languages · Backend & APIs · Databases & Queues · AI, Payments & Tools"]
    Skills --> Edu["5. Education & Honors<br/>MCA (Chandigarh Univ) · BCA (Kurukshetra Univ, 7.5 CGPA) · Zerone IT Fest 1st Place"]
    Edu --> Contact["6. Minimalist Contact<br/>One-Click Email Copy with Toast · Direct Message"]
```

#### 1. Profile Header (Wide Hero)
- **Avatar:** Circular profile photo with pulsing live status radar:  
  `🟢 SYSTEM: ONLINE // AVAILABLE FOR HIGH-IMPACT BACKEND ROLES`
- **Name & Title:** **Parmeet Kumar** — *Backend & Distributed Systems Engineer · Panipat, Haryana, India*
- **Punchy Systems Bio:**  
  *"Architecting modular microservices platforms, high-concurrency event-driven pipelines (RabbitMQ, BullMQ), and scalable NestJS/Node.js systems using Domain-Driven Design (DDD) & CQRS. Solved 220+ Data Structures & Algorithms challenges on LeetCode."*
- **Action Pills:**
  - `Email: parmeetkumarg90@gmail.com` (one-click copy with toast feedback)
  - `GitHub: github.com/Parmeetkumarg90`
  - `LinkedIn: linkedin.com/in/...`
  - `LeetCode: leetcode.com/u/parmeetkumarg90`
  - `Download Resume.pdf`

#### 2. Professional Experience (Wide Timeline Cards)
- **Zenmonk Software & Services** | Full Stack Developer Intern (Nov 2025 – Present, Mohali)
  - Modular microservices with NestJS, Next.js, and TypeORM persistence models.
  - Resilient asynchronous event-driven pipelines using RabbitMQ, BullMQ, and Docker.
  - Integrated PayMongo, GWallet, and architected Stripe Connected Accounts for automated payouts.
  - DDD and CQRS patterns optimizing high-concurrency order dispatch routes.
- **CodeQuotient** | MERN Stack Intern (Feb 2025 – Oct 2025, Panchkula)
  - Full-stack applications with MongoDB, Mongoose, Express, React, and Node.js.
  - Core computer science principles and 220+ LeetCode challenges solved in C++.

#### 3. Key Architecture Projects (2-Column Expansive Grid)
- **Modular Monolith E-Commerce Backend** (`NestJS`, `RabbitMQ`, `PostgreSQL`, `TypeORM`, `CQRS`)  
  *Isolated domain contexts across payment, catalog, and ordering with CQRS event dispatchers and Socket.io.*
- **RabbitMQ Event Broker Decoupling Pipeline** (`Node.js`, `RabbitMQ`, `amqplib`, `DLX`)  
  *Event-driven publish-subscribe network with Dead Letter Exchanges (DLX) and transactional Outbox patterns.*
- **Digital Document Signature Service** (`Node.js`, `MongoDB`, `Redis`, `BullMQ`, `Socket.io`)  
  *SHA-256 cryptographic file verification server paired with BullMQ queue scheduling over Redis.*
- **AI Resume Builder & Profile Parser** (`Google GenAI`, `OpenAI`, `Redis`, `BullMQ`)  
  *LLM extraction pipeline converting unstructured data to validated JSON with BullMQ background rendering.*

#### 4. Technical Competencies (Wide Categorized Pill Groups)
- **Languages:** `C++`, `TypeScript`, `JavaScript (ES6+)`, `Python`, `Java`, `SQL`, `C`
- **Backend & APIs:** `NestJS`, `Node.js`, `Express.js`, `WebSockets`, `Socket.io`, `Microservices`, `DDD`, `CQRS`, `EDA`
- **Databases & Queues:** `PostgreSQL`, `MongoDB`, `Redis`, `MySQL`, `TypeORM`, `RabbitMQ`, `BullMQ`
- **AI, Payments & Tools:** `LangChain`, `Google Gemini API`, `Stripe Connect`, `Docker`, `Git`, `Linux CLI`, `Postman`, `Next.js`

#### 5. Education & Honors
- **Master of Computer Applications (MCA)** · Chandigarh University · 2025 – 2027
- **Bachelor of Computer Applications (BCA)** · Kurukshetra University · CGPA: 7.5 · 2022 – 2025
- **Honors:** 🥇 1st Place On-Spot Coding & 🥈 2nd Place Bug Hunt (Zerone IT Fest), NCC Cadet & NSS Volunteer.

#### 6. Minimalist Contact
- Direct closing invitation, one-click email copy button with toast notification, and clean message form.

---

## 🗄️ Full Archive of Previous Screen Designs

### Previous Hybrid Version (Narrow 760px Container)
![Obsidian Craft Narrow](stitch_screens/final_hybrid_obsidian_craft.png)

### Collection A: 6 Minimalist & Editorial Designs
- **Clera Warm Linen & Terracotta:** `stitch_screens/clera_minimalist.png`
- **Swiss Monolith (Dieter Rams):** `stitch_screens/minimal_swiss.png`
- **Stripe Press / Editorial Ivory:** `stitch_screens/minimal_ivory.png`
- **Notion & Craft Soft Dark:** `stitch_screens/minimal_notion_dark.png`
- **Japanese Zen Sand & Matcha:** `stitch_screens/minimal_zen_sand.png`
- **Linear Clean White:** `stitch_screens/minimal_linear_white.png`

### Collection B: 6 High-Tech Systems Dark Themes
- **Theme 1: Obsidian Telemetry:** `stitch_screens/theme1.png`
- **Theme 2: Cybernetic Monolith:** `stitch_screens/theme2.png`
- **Theme 3: Tokyo Night:** `stitch_screens/theme3.png`
- **Theme 4: Nordic Blueprint:** `stitch_screens/theme4.png`
- **Theme 5: Monochrome Precision:** `stitch_screens/theme5.png`
- **Theme 6: Solarized Amber Mainframe:** `stitch_screens/theme6.png`

---

## 🚀 Next Step: Implementation
Once you review this wide, balanced layout edition, reply **"Implement"** and I will immediately write the code into `index.html`, `index.css`, and `index.js`!
