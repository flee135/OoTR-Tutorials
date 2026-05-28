// Add, remove, or reorder articles here. The sidebar and routing
// are generated from this list. Each entry's `file` is loaded from /articles.
//
// Filenames are prefixed with a 3-digit number (000-, 001-, ...) so they
// sort in the filesystem in the same order as they appear on the site.
window.ARTICLES = [
  {
    section: 'Home',
    open: true,
    items: [
      { id: 'intro',             title: 'Intro',                   file: 'home/000-intro.md' },
    ],
  },
  {
    section: 'Beginner',
    items: [
      { id: 'setting-up',   title: 'Setting Up',              file: 'beginner/000-setting-up.md' },
      { id: 'first-seed',   title: 'First Seed',              file: 'beginner/001-first-seed.md' },
    ],
  },
  {
    section: 'Intermediate',
    items: [
    ],
  },
  {
    section: 'Advanced',
    items: [
    ],
  },
  {
    section: 'Miscellaneous',
    items: [
    ],
  },
];

// Standalone pages: reachable via the sidebar footer, but kept out of the
// tutorial sequence (no prev/next navigation, no section grouping).
window.STANDALONE_PAGES = [
  { id: 'about', title: 'About', file: 'standalone/about.md' },
];
