# 67Lab.ai Brand Guidelines

This document serves as the absolute source of truth for the visual identity, tone, and UX/UI aesthetic for 67Lab.ai and its associated products.

## Core Identity

67Lab.ai represents the convergence of **financial precision** and **AI intelligence**. We build production-ready agentic workflows and premium custom LLM integrations. Our products are not just tools; they are high-tech, reliable "AI Employees."

*   **Motto:** "Stop using wrappers. Start using engineering." / "Let Them Cook."
*   **Vibe:** Professional, authoritative, cutting-edge, premium, un-bloated functionality.

### The "Brand DNA" Philosophy
While this document sets the global standard, it provides the brand's **DNA**, not a rigid template. Every project under the 67Lab.ai umbrella should feel related—sharing the same high-quality aesthetic, typography, and dark-mode foundation—but **each must retain its own unique identity, color accents, and interactive flair.** No two products should be identical clones.

## Color Palette

Our aesthetic relies heavily on high contrast, deep backgrounds, and piercing electric accents.

*   **Background (Deep Slate):**
    *   Dark Mode Hex: `#020617`
    *   CSS Variables: `--background`, `--sidebar`
*   **Primary (Electric Cyan):**
    *   Dark Mode Hex: `#06b6d4`
    *   Use Case: Primary buttons, glowing borders, active states, key data highlights.
    *   CSS Variable: `--primary`, `--ring`
*   **Accent (Electric Blue):**
    *   Dark Mode Hex: `#0ea5e9`
    *   Use Case: Gradients (paired with Primary), secondary badges, subtle accents.
    *   CSS Variable: `--accent`
*   **Typography Colors:**
    *   Primary Text: `#ffffff` (White)
    *   Muted Text: `#94a3b8` (Muted Slate)

## Typography

We use clean, modern, monospace-leaning fonts to emphasize the "engineering" aspect of the brand.

*   **Primary Font (Sans-serif):** `Geist Sans`
*   **Secondary/Code Font (Monospace):** `Geist Mono`

## Visual & UI Elements

All 67Lab.ai web properties must incorporate the following design patterns:

1.  **Glassmorphism (Frosted Glass):**
    *   Use `backdrop-blur` utility classes heavily for cards, navbars, and floating elements over complex or gradient backgrounds.
    *   Example: `bg-card/60 backdrop-blur-md`
2.  **Glowing Borders & Shadows:**
    *   Primary interactive elements and "hero" cards should feature colored glowing borders or drop shadows to emphasize their importance.
    *   Example: `shadow-[0_0_20px_rgba(6,182,212,0.5)]` or animated gradient borders.
3.  **Fluid Micro-Animations:**
    *   Interfaces must feel "alive." Implement subtle continuous animations (like `spotlight`, `shimmer`, `pulse`) and reactive hover states (scale up, increased glow).
    *   Use Framer Motion for smooth entrance animations (e.g., `fade-in-up`).
4.  **Dark Mode First:**
    *   The brand is inherently dark mode. Light mode is secondary and should only be implemented if explicitly required.

## Tone of Voice

### Do:
*   Sound confident, highly technical but accessible, and outcome-oriented.
*   Use terms like "Precision-engineered," "Contextual Intelligence," "Enterprise-Grade," and "ROI."
*   Treat AI products as "Teammates," "Agents," or "Employees."

### Don't:
*   Don't use overly casual, goofy, or meme-heavy language (unless deployed in a very specific, isolated community persona).
*   Avoid referring to our flagship products as simple "bots" or "wrappers."
