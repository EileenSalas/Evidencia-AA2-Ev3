// Theme toggle + translation + menú hamburguesa funcional con animación reiniciable
(function(){
  const AUTHOR = 'Eileen Salas';
  const THEME_KEY = 'site-theme';
  const LANG_KEY = 'site-lang';

  // Simple translations map (data-i18n keys)
  const TRANSLATIONS = {
    'es': {
      'title_index':'Bienvenido • Sitio personal — Eileen Salas',
      'heading':'Bienvenido a mi sitio web personal',
      'nav_home':'Inicio',
      'nav_map':'Mapa Mental',
      'nav_comic':'Historieta',
      'hi_im':'Hola — Soy Eileen Salas',
      'program':'Aprendiz del SENA | [Tu programa de formación]',
      'about_title':'Sobre mí',
      'label_name':'Nombre:',
      'name':'Eileen Salas',
      'label_program':'Programa:',
      'program_name':'[Escribe aquí tu programa de formación]',
      'bio':'Soy aprendiz interesada en el uso de las TIC para la creación de contenidos educativos, diseño web y metodologías activas. Este espacio muestra evidencias y recursos creados durante mi formación.',
      'purpose_title':'Propósito del sitio',
      'purpose_text':'Este sitio fue desarrollado para la actividad "Implementar las herramientas TIC" (Evidencia AA2-Ev3). Aquí presento un mapa mental sobre organización de herramientas TIC y una historieta que ilustra su uso en la educación.',
      'btn_map':'Ver mapa mental',
      'btn_comic':'Ver historieta',
      'map_heading':'Mapa Mental: Herramientas TIC',
      'map_q':'¿Qué representa el mapa mental?',
      'map_desc':'El mapa mental sintetiza cómo organizo las herramientas TIC: categorías principales (comunicación, creación, colaboración y evaluación), ejemplos concretos y conexiones para diseñar actividades educativas integradas.',
      'map_caption':'Mapa mental elaborado como parte de la Evidencia AA2-Ev2',
      'comic_heading':'Historieta: Las TIC en la educación',
      'comic_about':'Acerca de la historieta',
      'comic_topic_label':'Tema:',
      'comic_topic':'Cómo las TIC potencian la enseñanza y la comunicación en el aula.',
      'comic_tool_label':'Herramienta utilizada:',
      'comic_tool':'Canva (o la que hayas elegido).',
      'comic_message':'Mensaje: La tecnología no reemplaza al docente, pero permite nuevas formas de explicar, colaborar y evaluar.',
      'comic_caption':'Historieta elaborada para la Evidencia AA2-Ev3 (una única historieta)',
      'comic_quote':'“La tecnología no reemplaza al maestro, pero potencia su enseñanza.”',
      'footer_map':'Eileen Salas — Evidencia AA2-Ev2 / AA2-Ev3 — ',
      'footer_comic':'Eileen Salas — '
    },
    'en': {
      'title_index':'Welcome • Personal site — Eileen Salas',
      'heading':'Welcome to my personal website',
      'nav_home':'Home',
      'nav_map':'Mind Map',
      'nav_comic':'Comic',
      'hi_im':'Hi — I am Eileen Salas',
      'program':'SENA Apprentice | [Your training program]',
      'about_title':'About me',
      'label_name':'Name:',
      'name':'Eileen Salas',
      'label_program':'Program:',
      'program_name':'[Write your training program here]',
      'bio':'I am an apprentice interested in using ICT to create educational content, web design and active methodologies. This space shows evidence and resources created during my training.',
      'purpose_title':'Site purpose',
      'purpose_text':'This site was developed for the learning activity "Implement ICT tools" (Evidence AA2-Ev3). Here I present a mind map about organizing ICT tools and a comic that illustrates their use in education.',
      'btn_map':'View mind map',
      'btn_comic':'View comic',
      'map_heading':'Mind Map: ICT Tools',
      'map_q':'What does the mind map represent?',
      'map_desc':'The mind map summarizes how I organize ICT tools: main categories (communication, creation, collaboration and assessment), concrete examples and connections to design integrated educational activities.',
      'map_caption':'Mind map created as part of Evidence AA2-Ev2',
      'comic_heading':'Comic: ICT in education',
      'comic_about':'About the comic',
      'comic_topic_label':'Topic:',
      'comic_topic':'How ICT enhance teaching and communication in the classroom.',
      'comic_tool_label':'Tool used:',
      'comic_tool':'Canva (or the one you used).',
      'comic_message':'Message: Technology does not replace the teacher, but enables new ways to explain, collaborate and assess.',
      'comic_caption':'Comic created for Evidence AA2-Ev3 (single comic)',
      'comic_quote':'“Technology does not replace the teacher, but enhances their teaching.”',
      'footer_map':'Eileen Salas — Evidence AA2-Ev2 / AA2-Ev3 — ',
      'footer_comic':'Eileen Salas — '
    }
  };

  // --- FUNCIONES DE TRADUCCIÓN ---
  function applyLang(lang){
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(n => {
      const key = n.getAttribute('data-i18n');
      const text = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || '';
      if(n.tagName.toLowerCase() === 'title'){
        document.title = text;
      } else {
        n.textContent = text;
      }
    });
    const langBtns = document.querySelectorAll('[id^="btn-lang"]');
    langBtns.forEach(b => b.textContent = (lang === 'es') ? 'EN' : 'ES');
    localStorage.setItem(LANG_KEY, lang);
  }

  // --- FUNCIONES DE TEMA ---
  function setTheme(theme){
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      setThemeIcons('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setThemeIcons('light');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  function setThemeIcons(theme){
    const moon = '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="#fff"/></svg>';
    const sun = '<svg width="18" height="18" viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79L3.5 3.52 5.29 5.3l1.47-.46zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zM18.54 5.46l1.41-1.41L21.9 5.09l-1.41 1.41-1.95-1.04zM20 13h3v-2h-3v2zM6.76 19.16l-1.47.46-1.79 1.79 1.46-1.46 1.8-.79zM13 1h-2v3h2V1zm4.24 18.36l1.8 1.79 1.79-1.79-1.79 1.79-1.8-1.79zM12 7a5 5 0 100 10 5 5 0 000-10z" fill="#fff"/></svg>';
    const themeBtns = document.querySelectorAll('[id^="btn-theme"]');
    themeBtns.forEach(b => {
      b.innerHTML = (theme === 'dark') ? sun : moon;
    });
  }

  // --- EVENTOS ---
  document.addEventListener('DOMContentLoaded', function(){
    // 🟡 MENÚ HAMBURGUESA FUNCIONAL CON ANIMACIÓN REINICIABLE
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const iconOpen = menuToggle?.querySelector('.icon-menu-open');
    const iconClose = menuToggle?.querySelector('.icon-menu-close');

    if (menuToggle && mainNav && iconOpen && iconClose) {
      menuToggle.addEventListener('click', function() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        const nowExpanded = !isExpanded;
        
        // Alternar menú
        mainNav.classList.toggle('is-open', nowExpanded);
        menuToggle.setAttribute('aria-expanded', nowExpanded);

        // Reiniciar animaciones (resetea para repetirse)
        [iconOpen, iconClose].forEach(icon => {
          icon.style.animation = 'none';
          icon.offsetHeight; // fuerza reflow
          icon.style.animation = null;
        });

        // Alternar visibilidad con animación
        if (nowExpanded) {
          iconOpen.style.display = 'none';
          iconClose.style.display = 'flex';
          iconClose.classList.add('rotate-in');
          iconOpen.classList.remove('rotate-in');
        } else {
          iconClose.style.display = 'none';
          iconOpen.style.display = 'flex';
          iconOpen.classList.add('rotate-in');
          iconClose.classList.remove('rotate-in');
        }
      });
    }

    // 🟣 CARGAR TEMA
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    setTheme(savedTheme);

    // 🟢 CARGAR IDIOMA
    const savedLang = localStorage.getItem(LANG_KEY) || 'es';
    applyLang(savedLang);

    // 🟠 BOTONES DE TEMA
    const themeBtns = document.querySelectorAll('[id^="btn-theme"]');
    themeBtns.forEach(b => b.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    }));

    // 🔵 BOTONES DE IDIOMA
    const langBtns = document.querySelectorAll('[id^="btn-lang"]');
    langBtns.forEach(b => b.addEventListener('click', () => {
      const current = localStorage.getItem(LANG_KEY) || 'es';
      const next = current === 'es' ? 'en' : 'es';
      applyLang(next);
    }));

    // 🟤 TOAST DE BIENVENIDA
    const toastText = (savedLang === 'es') ? 
      `¡Bienvenido al sitio de herramientas TIC de ${AUTHOR}!` : 
      `Welcome to the ICT tools site of ${AUTHOR}!`;
    const toast = document.createElement('div');
    toast.className = 'site-toast';
    toast.textContent = toastText;
    document.body.appendChild(toast);
    setTimeout(()=>{ 
      toast.style.transition='opacity .5s'; 
      toast.style.opacity='0'; 
      setTimeout(()=>toast.remove(),520); 
    }, 2600);
  });
})();
