/* ==========================================================================
   Notes navigation: a small "Home › Notes › Category" bar for note pages.
   Rendered inside a Shadow DOM and position:fixed, so it neither inherits the
   note's styles nor changes the note's layout. Include after notes-index.js:
     <script src="../notes-index.js"></script>
     <script src="../notes-nav.js"></script>
   Add data-position="br" | "tl" | "tr" to move it off a simulator's controls.
   ========================================================================== */
(function () {
  var me = document.currentScript;
  var blogBase = new URL('../', me ? me.src : location.href);          // …/blog/
  var idx = window.NOTES_INDEX || { categories: [], notes: [] };
  var path = decodeURIComponent(location.pathname);
  var note = idx.notes.filter(function (n) { return path.slice(-n.path.length) === n.path; })[0];
  var catId = note ? note.category : (path.match(/\/notes\/([^/]+)\/[^/]*$/) || [])[1];
  var cat = idx.categories.filter(function (c) { return c.id === catId; })[0];

  var home = new URL('../index.html', blogBase).href;
  var hub = new URL('notes.html', blogBase).href;
  var catHref = hub + (cat ? '#' + cat.id : '');

  function mount() {
    if (document.getElementById('notes-nav-host')) return;
    var host = document.createElement('div');
    host.id = 'notes-nav-host';
    // optional data-position on the script tag: bl (default), br, tl, tr — for full-screen simulators
    var pos = (me && me.getAttribute('data-position')) || 'bl';
    var place = (pos.charAt(0) === 't' ? 'top:12px;' : 'bottom:12px;') + (pos.charAt(1) === 'r' ? 'right:12px;' : 'left:12px;');
    host.setAttribute('style', 'all:initial;position:fixed;' + place + 'z-index:2147483000;');
    var root = host.attachShadow ? host.attachShadow({ mode: 'open' }) : host;
    root.innerHTML =
      '<style>' +
      ':host{all:initial}' +
      'nav{font:500 13px/1.3 Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#2c3e50;background:rgba(255,255,255,.96);' +
      'border:1px solid rgba(44,62,80,.14);border-radius:999px;box-shadow:0 4px 14px rgba(0,0,0,.12);display:flex;align-items:center;gap:2px;padding:5px 6px 5px 12px;max-width:calc(100vw - 24px);box-sizing:border-box}' +
      'a{color:#2c3e50;text-decoration:none;padding:3px 5px;border-radius:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      'a:hover,a:focus-visible{background:#eef6ff;color:#1f6fb2;outline:none}' +
      'a.cur{color:#3498db;font-weight:600;min-width:0}' +
      '.sep{color:#9aa7b4;padding:0 1px}' +
      'button{all:unset;cursor:pointer;color:#7a8794;font-size:15px;line-height:1;padding:3px 7px;border-radius:999px;margin-left:4px}' +
      'button:hover,button:focus-visible{background:#f1f3f5;color:#2c3e50}' +
      'nav.min .full{display:none}nav:not(.min) .mini{display:none}' +
      '@media (max-width:520px){.home{display:none}.sep.h{display:none}nav{font-size:12.5px}}' +
      '@media print{nav{display:none}}' +
      '</style>' +
      '<nav aria-label="Notes navigation">' +
      '<span class="full"><a class="home" href="' + home + '">Home</a><span class="sep h">›</span>' +
      '<a href="' + hub + '">Notes</a>' +
      (cat ? '<span class="sep">›</span><a class="cur" href="' + catHref + '" title="' + cat.title + '">' + cat.title + '</a>' : '') +
      '</span>' +
      '<a class="mini" href="' + hub + '">← Notes</a>' +
      '<button type="button" aria-label="Collapse notes navigation" title="Collapse">‹</button>' +
      '</nav>';
    var nav = root.querySelector('nav'), btn = root.querySelector('button');
    btn.addEventListener('click', function () {
      var min = nav.classList.toggle('min');
      btn.textContent = min ? '›' : '‹';
      btn.setAttribute('aria-label', (min ? 'Expand' : 'Collapse') + ' notes navigation');
    });
    document.body.appendChild(host);
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
})();
