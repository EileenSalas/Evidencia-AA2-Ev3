// Mensaje de bienvenida y pequeña interacción
window.addEventListener('DOMContentLoaded', function(){
  const name = 'Eileen Salas';
  const welcome = `¡Bienvenido al sitio de herramientas TIC de ${name}!`;
  console.log(welcome);

  // Mostrar notificación breve en pantalla
  const notice = document.createElement('div');
  notice.textContent = welcome;
  notice.style.position = 'fixed';
  notice.style.right = '1rem';
  notice.style.bottom = '1rem';
  notice.style.background = 'rgba(11,102,195,0.95)';
  notice.style.color = '#fff';
  notice.style.padding = '0.6rem 0.9rem';
  notice.style.borderRadius = '8px';
  notice.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
  notice.style.zIndex = '9999';
  notice.style.fontFamily = 'inherit';
  notice.style.fontSize = '0.95rem';
  document.body.appendChild(notice);

  setTimeout(() => {
    notice.style.transition = 'opacity .6s ease';
    notice.style.opacity = '0';
    setTimeout(() => notice.remove(), 650);
  }, 3500);
});