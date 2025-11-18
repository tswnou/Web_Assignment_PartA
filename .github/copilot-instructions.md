# Copilot Instructions - Web_Assignment_PartA

## Project Overview

**E-Learning Platform Frontend** - A modern web-based educational platform built with vanilla HTML, CSS, and JavaScript. This is Part A (frontend) of a web assignment focusing on a responsive, accessible learning management interface.

### Key Project Characteristics
- **Tech Stack**: Vanilla HTML5, CSS3, JavaScript (no frameworks)
- **Language**: Greek (Greek text throughout, lang="el" in HTML)
- **Scope**: Frontend only (Part A) - HTML pages, styling, and client-side interactivity
- **Status**: Partially scaffolded - HTML structure exists with CSS/JS framework in place, most implementation files are empty stubs

---

## Architecture & File Organization

### Page Structure
The platform uses multi-page architecture with linked HTML files:
- **index.html** - Homepage with hero banner and course categories
- **courses.html** - Course listing page
- **books.html** - Educational resources/books page
- **about.html** - About page
- **register.html** - User registration form
- **course-details.html** - Individual course detail view

Each page includes:
- Consistent header with navigation menu (ID: `main-nav`)
- Hamburger menu toggle for mobile (ID: `menu-toggle` button)
- Main content area
- Footer

### Asset Directory Structure
```
assets/
├── css/           # Four separate stylesheets (loaded in order)
│   ├── reset.css         # Global resets (CSS normalize)
│   ├── theme.css         # Design tokens, colors, fonts
│   ├── layout.css        # Layout and container styles
│   └── components.css    # Component styles (cards, buttons, modals)
├── js/
│   ├── app.js            # Main application initialization (EMPTY - entry point)
│   ├── data/             # Data modules (empty stubs)
│   │   ├── courses.js    # Course data definition
│   │   ├── books.js      # Books data definition
│   │   └── videos.js     # Video data definition
│   ├── forms/            # Form handling
│   │   └── register-form.js  # Registration form logic
│   └── ui/               # UI interaction modules
│       ├── menu.js       # Mobile menu toggle behavior
│       ├── modal.js      # Modal dialog handling
│       └── responsive.js # Responsive behavior utilities
└── img/                  # Images (logo, banner, etc.)
```

### Script Loading Order
Scripts load at end of body in this order (important for dependency):
1. `ui/menu.js` - Menu interaction
2. `data/courses.js` - Course data
3. `app.js` - Main app initialization

---

## Key Patterns & Conventions

### CSS Architecture
- **Four-layer CSS approach**: Reset → Theme → Layout → Components
- **Grid system**: Uses `grid-3` class for 3-column layouts (e.g., `.grid-3` in categories section)
- **Container pattern**: Content wrapped in `.container` class for max-width/centering
- **Semantic classes**: Card-based UI (`.card` class for content blocks)

### HTML Conventions
- **Language**: `lang="el"` for Greek language
- **Accessibility**: 
  - `aria-label` on interactive elements (e.g., menu toggle button)
  - Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Button styling**: `.btn-primary` class for primary call-to-action buttons
- **Navigation**: Link-based navigation between pages (traditional multi-page app)

### JavaScript Patterns
- **Event-driven**: UI interactions trigger from button clicks and user input
- **Data-driven rendering**: Course data in separate JS files populates page sections dynamically
- **Module pattern**: Each JS file handles one responsibility:
  - `menu.js` → Menu toggle behavior
  - `register-form.js` → Form validation and submission
  - `modal.js` → Modal dialog management
  - `responsive.js` → Mobile/responsive utilities
  - `app.js` → Orchestrates initialization and wires modules together

### Dynamic Content Areas
- Element ID `course-list` - div populated with course cards dynamically from `courses.js`
- Courses should be objects with properties: title, description, category, etc.
- Similar patterns for books and videos in their respective pages

---

## Critical Developer Workflows

### File Modifications by Feature Type

**Adding a new page**: 
1. Create new `.html` file with same header/footer structure as `index.html`
2. Update navigation links in header `<nav>` across all pages

**Adding dynamic content**:
1. Define data in corresponding `js/data/*.js` file
2. Add DOM manipulation logic in `app.js` or corresponding UI module
3. Reference the data and render to appropriate list div (ID pattern: `*-list`)

**Styling changes**:
1. Layout issues → `layout.css`
2. Color/font/theme → `theme.css`
3. Component-specific → `components.css`

**Form handling**:
- See `register-form.js` pattern for validation and submission
- Wire form submission in `app.js`

### No Build Tools
- This is a **static site** - no build step, no bundler
- Open `index.html` directly in browser or use a simple HTTP server
- CSS and JS load as-is from `assets/` directory
- Any code written must work in vanilla JavaScript (no transpilation)

---

## Key Integration Points

### DOM Ready Pattern
Watch for page load readiness in scripts. Use:
```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Safe to query DOM
});
```

### Data to View Flow
1. Data modules (`data/*.js`) export course/book/video objects
2. `app.js` fetches data and passes to rendering functions
3. Rendering functions create DOM elements and append to appropriate containers
4. Event handlers in UI modules attach click/submit listeners

### Header/Navigation Integration
- All pages share similar header structure
- Update navigation when adding pages
- Mobile menu controlled by button with ID `menu-toggle` → `menu.js`

---

## Quick Reference

| Need | Location | Pattern |
|------|----------|---------|
| Add course data | `js/data/courses.js` | Export array of course objects |
| Style courses list | `assets/css/components.css` | `.card` and `.grid-3` classes |
| Handle form submit | `js/forms/register-form.js` | Event listener + validation |
| Mobile menu toggle | `js/ui/menu.js` | Listen to menu-toggle button click |
| Initialize page | `js/app.js` | DOMContentLoaded listener |
| Global styles | `assets/css/theme.css` | CSS variables, fonts, colors |

---

## Notes for AI Agents

- **Most JS/CSS files are empty stubs** - check the structure but expect to write implementation
- **Greek language** is used throughout - preserve Greek text in UI
- **No external dependencies** - vanilla JavaScript and CSS only
- **Mobile-first responsive** - menu toggle and responsive utilities support mobile design
- **Accessibility matters** - maintain semantic HTML and ARIA labels when adding features
