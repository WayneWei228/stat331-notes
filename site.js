(() => {
  const side = document.getElementById('side');
  const btn = document.getElementById('menu');
  const scrim = document.querySelector('.scrim');
  const narrow = matchMedia('(max-width: 959px)');

  function setOpen(open) {
    document.body.classList.toggle('nav-open', open);
    if (btn) btn.setAttribute('aria-expanded', String(open));
    if (open) (side.querySelector('a.on, li.cur > a') || side.querySelector('a')).focus({ preventScroll: true });
    else if (btn && narrow.matches) btn.focus({ preventScroll: true });
  }
  if (btn) btn.addEventListener('click', () => setOpen(!document.body.classList.contains('nav-open')));
  if (scrim) scrim.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) setOpen(false);
  });
  side.addEventListener('click', e => { if (e.target.closest('a') && narrow.matches) setOpen(false); });

  // Copy buttons on the index page
  document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; }
    catch { b.textContent = 'Copy failed'; }
    setTimeout(() => { b.textContent = 'Copy link'; }, 1600);
  }));

  // Highlight the unit and subsection you are reading, and fill the reading line
  const links = [...side.querySelectorAll('a[data-t]')];
  const pairs = links.map(a => [a, document.getElementById(a.dataset.t)]).filter(p => p[1]);
  const main = document.querySelector('main');
  if (!pairs.length || !main) return;
  let last = null, ticking = false;

  function update() {
    ticking = false;
    const line = innerHeight * 0.3;
    let cur = null, unit = null;
    for (const [a, el] of pairs) {
      if (el.getBoundingClientRect().top > line) break;
      if (a.closest('.subs')) cur = a; else { unit = a; cur = null; }
    }
    if (!unit) unit = pairs[0][0];
    const key = (cur || unit).dataset.t;
    if (key !== last) {
      last = key;
      side.querySelectorAll('.on').forEach(el => el.classList.remove('on'));
      unit.parentElement.classList.add('on');
      if (cur) cur.classList.add('on');
      if (!narrow.matches) (cur || unit).scrollIntoView({ block: 'nearest' });
    }
    const r = main.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
    side.style.setProperty('--read', p.toFixed(4));
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  update();
})();
