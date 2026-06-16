
(function(){
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-toggle');
  if(toggle){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  function pushLeadEvent(eventName, label){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      company: 'LED Foco',
      lead_type: label || eventName,
      page_path: window.location.pathname
    });
  }

  document.querySelectorAll('[data-lead-event]').forEach(function(el){
    el.addEventListener('click', function(){
      pushLeadEvent(el.getAttribute('data-lead-event'), el.getAttribute('data-lead-label'));
    });
  });
})();
