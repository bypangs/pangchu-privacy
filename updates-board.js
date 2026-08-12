(() => {
  const pageSections = Array.from(document.querySelectorAll("[data-notice-page]"));
  const pageLinks = Array.from(document.querySelectorAll("[data-page-link]"));
  const pageStatus = document.querySelector("[data-page-status]");
  const requestedPage = Number.parseInt(new URLSearchParams(window.location.search).get("page") || "1", 10);
  const pageCount = Math.max(1, pageSections.length);
  const currentPage = Number.isFinite(requestedPage) ? Math.min(Math.max(requestedPage, 1), pageCount) : 1;

  pageSections.forEach(section => {
    section.hidden = Number(section.dataset.noticePage) !== currentPage;
  });

  pageLinks.forEach(link => {
    const isCurrent = Number(link.dataset.pageLink) === currentPage;
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (pageStatus) pageStatus.textContent = currentPage + " / " + pageCount;

  document.querySelectorAll(".notice-row").forEach(row => {
    row.addEventListener("toggle", () => {
      if (!row.open) return;
      document.querySelectorAll(".notice-row[open]").forEach(other => {
        if (other !== row) other.open = false;
      });
    });
  });
})();
