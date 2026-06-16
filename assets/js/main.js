
(function(){
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.menu-button');
  if(btn && nav){
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  function pushEvent(el){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: el.dataset.leadEvent,
      lead_intent: el.dataset.leadIntent || '',
      lead_source: 'site_led_foco',
      page_path: location.pathname
    });
  }

  document.querySelectorAll('[data-lead-event]').forEach(el => {
    el.addEventListener('click', () => pushEvent(el));
  });
})();
