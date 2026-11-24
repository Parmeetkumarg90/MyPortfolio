# Clera & Apple Glass Design System

## Core Aesthetic & Philosophy
Inspired by Clera (getclera.com) and Apple's visionOS/macOS frosted glassmorphism:
- Editorial warmth meets high-precision glass engineering.
- Heavy frosted backdrop blurs (`backdrop-filter: blur(24px) saturate(180%)`).
- Floating capsule navigation bars and rounded corner containers.
- Clean editorial serif headlines paired with high-legibility sans-serif and monospace technical labels.

## Color Palette
- Canvas Background (Light): Warm Ivory / Alabaster `#FAF8F5`
- Canvas Background (Dark): Obsidian Glass `#0A0D14` or Midnight Petrol Teal `#071A1A`
- Frosted Glass Fill (Light): `rgba(255, 255, 255, 0.70)` with `rgba(255, 255, 255, 0.40)` specular border
- Frosted Glass Fill (Dark): `rgba(18, 22, 34, 0.72)` with `rgba(255, 255, 255, 0.10)` specular border
- Primary Accent: Deep Forest Teal `#0A4D46` / Vivid Emerald `#10B981`
- Secondary Accent: Electric Cyan `#06B6D4` / Warm Amber `#D97706`
- Text Primary: `#18181B` (light) / `#F4F4F5` (dark)
- Text Secondary: `#52525B` (light) / `#A1A1AA` (dark)

## Interactive Components Specifications

### 1. Floating Frosted Capsule Navbar
- Container: Floating pill capsule (`border-radius: 9999px`) pinned 24px from top, centered horizontally.
- Background: Translucent frosted glass with 24px backdrop blur and subtle shadow (`0 8px 32px rgba(0,0,0,0.08)`).
- Content: Brand logo with live status indicator dot, nav links (`Architecture ▾`, `Projects`, `Experience`, `Stack`), and primary pill CTA button (`Resume / Connect`).

### 2. Interactive Navigation Popover (Dropdown Menu)
- Trigger: Hover or click on `Architecture ▾` or `Systems ▾`.
- Container: Floating rounded card (`border-radius: 20px`) suspended directly beneath the navbar pill.
- Layout: 2-column structure:
  - Column 1 ('CORE DOMAINS'): Links with subtitle descriptions for Distributed Systems, Event-Driven Queues (RabbitMQ DLX), Cryptographic Services, and GenAI LLM Pipelines.
  - Column 2 ('FEATURED ARCHITECTURE'): Highlight card previewing the Modular Monolith E-Commerce system with latency metrics and direct codebase action.

### 3. Open System Architecture Inspection Modal
- Backdrop: Heavy frosted glass overlay (`rgba(0, 0, 0, 0.35)` with `backdrop-filter: blur(12px)`).
- Dialog Card: Floating centered card (`border-radius: 24px`) with frosted glass styling and subtle 1px border.
- Header: Breadcrumb badge (`01 // PRODUCTION ARCHITECTURE`), title, and clean circular close button (×).
- Body: Technical deep dive with architecture diagram preview, domain contexts (Catalog, Orders, Payments, Notifications), throughput metrics, and technology tag chips.
- Actions: 'View GitHub Codebase' pill button and 'Blueprint Schema' secondary button.

### 4. Search / Command Bar & Filter Chips
- Pill search input with circular action icon button.
- Floating filter chips with rounded pill borders (`NestJS`, `RabbitMQ`, `PostgreSQL`, `BullMQ`, `Redis`, `C++`).

### 5. Buttons & Badges
- Primary: Pill shape, deep solid fill, white text, subtle hover lift.
- Secondary: Glassy pill with translucent fill and 1px specular border.
- Badges: Micro-pills with status dots (e.g. green pulse for 'Available for Distributed Systems Roles').
