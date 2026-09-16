// Light/dark switch, small-screen menu, and re-fitting the header links.
// The header itself runs first (see _includes/masthead.html) and provides window.siteHeader.
(function () {
  var root = document.documentElement;
  var header = window.siteHeader || { fit: function () {}, syncMode: function () {} };
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentMode() {
    return root.getAttribute("data-mode") || (systemDark.matches ? "dark" : "light");
  }

  function defaultMode() {
    var d = root.getAttribute("data-mode-default");
    return d === "light" || d === "dark" ? d : (systemDark.matches ? "dark" : "light");
  }

  var modeToggle = document.querySelector(".mode-toggle");
  if (modeToggle) {
    modeToggle.addEventListener("click", function () {
      var next = currentMode() === "dark" ? "light" : "dark";
      root.setAttribute("data-mode", next);
      try {
        // Remember the visitor's choice only when it differs from the site default.
        if (next === defaultMode()) localStorage.removeItem("mode");
        else localStorage.setItem("mode", next);
      } catch (e) {}
      header.syncMode();
    });
    if (systemDark.addEventListener) systemDark.addEventListener("change", header.syncMode);
  }

  var navToggle = document.querySelector(".nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var open = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(open));
      root.classList.toggle("nav-open", open);
    });
  }

  // Web fonts and window size change how much room the header links need.
  var queued = false;
  window.addEventListener("resize", function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; header.fit(); });
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(header.fit);
})();
