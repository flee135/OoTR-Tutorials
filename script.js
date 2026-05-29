const nav = document.getElementById('sidebar-nav');
const footerEl = document.getElementById('sidebar-footer');
const articleEl = document.getElementById('article');
const breadcrumbEl = document.getElementById('breadcrumb');
const articleNavEl = document.getElementById('article-nav');

// Articles are addressed by a composite "section-slug/id" key, so an `id`
// only needs to be unique within its section (e.g. each section can have its
// own `intro`). Standalone pages have no section and are keyed by id alone.
const keyToFile = {};
const keyToTitle = {};
const keyToSection = {};
const flatOrder = []; // [{ key, id, title, section }] in document order

function slugify(s) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function articleKey(section, id) {
  return slugify(section) + '-' + id;
}

ARTICLES.forEach((group) => {
  group.items.forEach((item) => {
    const key = articleKey(group.section, item.id);
    keyToFile[key] = item.file;
    keyToTitle[key] = item.title;
    keyToSection[key] = group.section;
    flatOrder.push({ key, id: item.id, title: item.title, section: group.section });
  });
});

// Standalone pages resolve like articles but stay out of flatOrder, so they
// have no prev/next navigation and no section breadcrumb.
const standalonePages = window.STANDALONE_PAGES || [];
standalonePages.forEach((item) => {
  keyToFile[item.id] = item.file;
  keyToTitle[item.id] = item.title;
});

function buildSidebar() {
  ARTICLES.forEach((group) => {
    const wrap = document.createElement('div');
    wrap.className = 'nav-group';
    if (group.open) wrap.setAttribute('data-open', 'true');

    const toggle = document.createElement('button');
    toggle.className = 'nav-group-toggle';
    toggle.textContent = group.section;
    toggle.setAttribute('aria-expanded', String(!!group.open));
    toggle.addEventListener('click', () => {
      const open = wrap.getAttribute('data-open') === 'true';
      wrap.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });

    const list = document.createElement('ul');
    list.className = 'nav-list';

    group.items.forEach((item) => {
      const key = articleKey(group.section, item.id);
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + key;
      a.className = 'nav-link';
      a.dataset.key = key;
      a.textContent = item.title;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        showArticle(key);
        history.replaceState(null, '', '#' + key);
      });
      li.appendChild(a);
      list.appendChild(li);
    });

    wrap.appendChild(toggle);
    wrap.appendChild(list);
    nav.appendChild(wrap);
  });
}

function buildFooter() {
  standalonePages.forEach((item) => {
    const a = document.createElement('a');
    a.href = '#' + item.id;
    a.className = 'footer-link';
    a.dataset.key = item.id;
    a.textContent = item.title;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      showArticle(item.id);
      history.replaceState(null, '', '#' + item.id);
    });
    footerEl.appendChild(a);
  });
}

function renderBreadcrumb(key) {
  const section = keyToSection[key];
  const title = keyToTitle[key];
  if (!section || !title) {
    breadcrumbEl.innerHTML = '';
    return;
  }
  breadcrumbEl.innerHTML =
    '<span class="crumb">' + section + '</span>' +
    '<span class="crumb-sep">/</span>' +
    '<span class="crumb crumb-current">' + title + '</span>';
}

function renderArticleNav(key) {
  const idx = flatOrder.findIndex((a) => a.key === key);
  const prev = idx > 0 ? flatOrder[idx - 1] : null;
  const next = idx >= 0 && idx < flatOrder.length - 1 ? flatOrder[idx + 1] : null;

  const linkHtml = (item, dir) => {
    if (!item) return '<span></span>';
    const arrow = dir === 'prev' ? '←' : '→';
    const label = dir === 'prev' ? 'Previous' : 'Next';
    return (
      '<a class="article-nav-link article-nav-' + dir + '" href="#' + item.key + '" data-key="' + item.key + '">' +
        '<span class="article-nav-label">' + arrow + ' ' + label + '</span>' +
        '<span class="article-nav-title">' + item.title + '</span>' +
      '</a>'
    );
  };

  articleNavEl.innerHTML = linkHtml(prev, 'prev') + linkHtml(next, 'next');

  articleNavEl.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const targetKey = a.dataset.key;
      showArticle(targetKey);
      history.replaceState(null, '', '#' + targetKey);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

async function showArticle(key) {
  const file = keyToFile[key];
  if (!file) {
    articleEl.innerHTML = '<h2>Not found</h2><p>No article with key <code>' + key + '</code>.</p>';
    breadcrumbEl.innerHTML = '';
    articleNavEl.innerHTML = '';
    return;
  }

  document.querySelectorAll('.nav-link, .footer-link').forEach((l) => {
    l.classList.toggle('active', l.dataset.key === key);
  });
  const activeLink = document.querySelector('.nav-link.active');
  if (activeLink) {
    const group = activeLink.closest('.nav-group');
    group.setAttribute('data-open', 'true');
    group.querySelector('.nav-group-toggle').setAttribute('aria-expanded', 'true');
  }

  renderBreadcrumb(key);

  try {
    const res = await fetch('articles/' + file, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.status);
    const md = await res.text();
    articleEl.innerHTML = marked.parse(md);
    articleEl.querySelectorAll('a[href^="http"]').forEach((a) => {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    });
    document.title = keyToTitle[key] + ' — OoTR Tutorials';
    renderArticleNav(key);
  } catch (err) {
    articleEl.innerHTML =
      '<h2>Could not load article</h2>' +
      '<p>Failed to fetch <code>articles/' + file + '</code>.</p>' +
      '<p>If you are opening <code>index.html</code> directly via <code>file://</code>, ' +
      'browsers block local fetches. To preview locally, run a small dev server from this folder:</p>' +
      '<pre><code>python -m http.server</code></pre>' +
      '<p>Then visit <a href="http://localhost:8000">http://localhost:8000</a>. ' +
      'On GitHub Pages this works without any setup.</p>';
    articleNavEl.innerHTML = '';
  }
}

buildSidebar();
buildFooter();
const initial = location.hash
  ? location.hash.slice(1)
  : articleKey(ARTICLES[0].section, ARTICLES[0].items[0].id);
showArticle(initial);
