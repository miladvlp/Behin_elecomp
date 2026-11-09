/* Content links for the retained, compiled Nuxt experience. */
(() => {
  const email = 'info@behinrpco.com';
  const subject = (name) => `mailto:${email}?subject=${encodeURIComponent(name)}`;
  const anchors = [
    ['.customization', 'how-it-works'],
    ['.agents', 'mcp'], ['.devices', 'oodin'], ['.pricing', 'pricing'],
    ['.shortcut', 'about'], ['.start', 'contact']
  ];
  function refresh() {
    document.documentElement.lang = 'fa';
    for (const [selector, id] of anchors) {
      const element = document.querySelector(selector);
      if (element && element.id !== id) element.id = id;
    }
    document.querySelectorAll('a').forEach((a) => {
      let next;
      const href = a.getAttribute('href') || '';
      if (href.includes('app.premotio.com')) {
        if (a.closest('.pricing__plan')) {
          const name = a.closest('.pricing__plan').querySelector('.pricing__name')?.textContent.trim();
          next = subject(`گفت‌وگو دربارهٔ ${name}`);
        } else if (a.classList.contains('app-nav__signin') || href.includes('signin')) next = '/#about';
        else if (a.closest('.library') || a.textContent.includes('آشنایی با راهکارها')) next = '/#how-it-works';
        else next = subject('درخواست جلسه در نمایشگاه اتوکام ۱۴۰۵');
      } else if (href.includes('support@premotio.com')) next = `mailto:${email}`;
      else if (/twitter\.com|x\.com/.test(href)) next = 'tel:+983136619383';
      else if (href.includes('instagram.com')) next = `mailto:${email}`;
      else if (href.includes('emotion-agency.com')) next = '/#about';
      else if (href.startsWith('/legal/')) {
        const target = {terms:'about',privacy:'oodin',cookies:'mcp',refunds:'mcp',license:'how-it-works','acceptable-use':'contact'}[href.split('/').pop()];
        if (target) next = '/#'+target;
      }
      if (next && href !== next) a.setAttribute('href', next);
      if (next || href.startsWith('/#')) { a.removeAttribute('target'); a.removeAttribute('rel'); }
    });
    document.querySelectorAll('img').forEach((img) => {
      if (img.alt === 'premotio') img.alt = 'بهین‌تک';
    });
  }
  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; refresh(); });
  });
  refresh();
  observer.observe(document.body,{childList:true,subtree:true});
  // Preserve mail/telephone browser behavior and avoid Vue's original app handoff.
  document.addEventListener('click', (event) => {
    const a = event.target.closest?.('a');
    if (!a) return;
    refresh();
    const href = a.getAttribute('href');
    if (href?.startsWith('mailto:') || href?.startsWith('tel:')) event.stopImmediatePropagation();
  }, true);
})();
