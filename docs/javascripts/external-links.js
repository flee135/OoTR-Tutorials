// Open external links in a new tab.
// Internal MkDocs links are relative, so they won't match `http`.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
});
