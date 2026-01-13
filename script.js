// Minimal JS: mobile nav toggle, update year, smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = mainNav.style.display === 'flex';
    mainNav.style.display = expanded ? 'none' : 'flex';
    mainNav.style.flexDirection = 'column';
  });

  // Update copyright year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile menu
        if(window.innerWidth < 900) mainNav.style.display = 'none';
      }
    });
  });
});