/*  MENÚ DE CONTACTO DESPLEGABLE */

function crearMenuContacto() {
  const nav = document.querySelector('nav ul');
  if (!nav) return;

  const li = document.createElement('li');
  li.className = 'contacto-wrapper';

  const btn = document.createElement('span');
  btn.className = 'contacto-btn';
  btn.textContent = '📞 Contacto';
  btn.setAttribute('role', 'button');
  btn.setAttribute('tabindex', '0');
  btn.setAttribute('aria-haspopup', 'true');
  btn.setAttribute('aria-expanded', 'false');

  const panel = document.createElement('div');
  panel.id = 'contacto-panel';
  panel.className = 'contacto-panel';
  panel.setAttribute('role', 'tooltip');

  panel.innerHTML = `
    <h3 class="contacto-panel__titulo">📬 Información de Contacto</h3>
    <p class="contacto-panel__item">
      <strong>📱 Teléfono:</strong><br>
      <a href="tel:+573147597960">+57 314 759 7960</a>
    </p>
    <p class="contacto-panel__item">
      <strong>✉️ Correo:</strong><br>
      <a href="mailto:cm.jhon.a@gmail.com">cm.jhon.a@gmail.com</a>
    </p>
    <p class="contacto-panel__item">
      <strong>📍 Dirección:</strong><br>
      Medellín, Colombia
    </p>
  `;

  li.addEventListener('mouseover', () => {
    panel.classList.add('contacto-panel--visible');
    btn.setAttribute('aria-expanded', 'true');
  });

  li.addEventListener('mouseout', (e) => {
    if (!li.contains(e.relatedTarget)) {
      panel.classList.remove('contacto-panel--visible');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const visible = panel.classList.contains('contacto-panel--visible');
      panel.classList.toggle('contacto-panel--visible', !visible);
      btn.setAttribute('aria-expanded', String(!visible));
    }
  });

  li.appendChild(btn);
  li.appendChild(panel);
  nav.appendChild(li);
}


/* SLIDER DE IMÁGENES EN LA SECCIÓN INICIO */

const sliderImagenes = [
  { src: 'images/image_carnaval.jpg',           alt: 'Carnaval de Brasil',  titulo: '🎭 Carnaval' },
  { src: 'images/image_festivaldeparintins.jpg', alt: 'Festival de Parintins', titulo: '🐂 Festival de Parintins' },
  { src: 'images/image_festasjuninas.jpg',       alt: 'Festas Juninas',      titulo: '🌽 Festas Juninas' },
  { src: 'images/image_ciriodenazare.jpg',       alt: 'Círio de Nazaré',     titulo: '🕯️ Círio de Nazaré' },
  { src: 'images/image_navidadyañonuevo.jpg',    alt: 'Navidad y Año Nuevo', titulo: '🎆 Navidad y Año Nuevo' },
];

let sliderIndex    = 0;
let sliderInterval = null;

function crearSlider() {
  const seccionInicio = document.getElementById('inicio');
  if (!seccionInicio) return;

  const sliderWrapper = document.createElement('div');
  sliderWrapper.id = 'slider-brasil';
  sliderWrapper.className = 'slider';
  sliderWrapper.setAttribute('aria-label', 'Galería de festividades de Brasil');
  sliderWrapper.setAttribute('role', 'region');

  const img = document.createElement('img');
  img.id        = 'slider-img';
  img.className = 'slider__img';
  img.src       = sliderImagenes[0].src;
  img.alt       = sliderImagenes[0].alt;

  const titulo = document.createElement('div');
  titulo.id        = 'slider-titulo';
  titulo.className = 'slider__titulo';
  titulo.textContent = sliderImagenes[0].titulo;

  const btnPrev = crearBtnSlider('❮', 'Imagen anterior', 'slider__btn slider__btn--prev');
  btnPrev.addEventListener('click', () => moverSlider(-1));

  const btnNext = crearBtnSlider('❯', 'Imagen siguiente', 'slider__btn slider__btn--next');
  btnNext.addEventListener('click', () => moverSlider(1));

  const dotsWrapper = document.createElement('div');
  dotsWrapper.id        = 'slider-dots';
  dotsWrapper.className = 'slider__dots';

  sliderImagenes.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider__dot' + (i === 0 ? ' slider__dot--active' : '');
    dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
    dot.dataset.index = i;
    dot.addEventListener('click', () => irASlide(i));
    dotsWrapper.appendChild(dot);
  });

  sliderWrapper.appendChild(img);
  sliderWrapper.appendChild(titulo);
  sliderWrapper.appendChild(btnPrev);
  sliderWrapper.appendChild(btnNext);
  sliderWrapper.appendChild(dotsWrapper);

  const hero = seccionInicio.querySelector('.hero');
  if (hero && hero.nextSibling) {
    seccionInicio.insertBefore(sliderWrapper, hero.nextSibling);
  } else {
    seccionInicio.insertBefore(sliderWrapper, seccionInicio.firstChild);
  }

  iniciarAutoplay();
  sliderWrapper.addEventListener('mouseover', detenerAutoplay);
  sliderWrapper.addEventListener('mouseout',  iniciarAutoplay);
}

function crearBtnSlider(icono, label, className) {
  const btn = document.createElement('button');
  btn.innerHTML = icono;
  btn.className = className;
  btn.setAttribute('aria-label', label);
  return btn;
}

function actualizarSlider(index) {
  const img    = document.getElementById('slider-img');
  const titulo = document.getElementById('slider-titulo');
  const dots   = document.querySelectorAll('#slider-dots .slider__dot');

  if (!img || !titulo) return;

  img.classList.add('slider__img--hidden');
  setTimeout(() => {
    img.src            = sliderImagenes[index].src;
    img.alt            = sliderImagenes[index].alt;
    titulo.textContent = sliderImagenes[index].titulo;
    img.classList.remove('slider__img--hidden');
  }, 250);

  dots.forEach((d, i) => {
    d.classList.toggle('slider__dot--active', i === index);
  });
}

function moverSlider(direccion) {
  sliderIndex = (sliderIndex + direccion + sliderImagenes.length) % sliderImagenes.length;
  actualizarSlider(sliderIndex);
}

function irASlide(index) {
  sliderIndex = index;
  actualizarSlider(sliderIndex);
}

function iniciarAutoplay() {
  detenerAutoplay();
  sliderInterval = setInterval(() => moverSlider(1), 4000);
}

function detenerAutoplay() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }
}


/* MENSAJES DINÁMICOS SEGÚN HORA E IDIOMA */

const mensajes = {
  es: {
    madrugada: [
      '🌙 ¡Buenas noches! En Brasil, el Carnaval no duerme... ¡y tú tampoco deberías!',
      '🌙 La madrugada en Río es mágica durante el Carnaval. ¡Bienvenido al Brasil nocturno!',
    ],
    manana: [
      '☀️ ¡Buenos días! Comienza tu día con la energía del Carnaval brasileño.',
      '☀️ ¡Buenos días! En Brasil, las Festas Juninas empiezan con el canto del gallo. ¡Arriba!',
    ],
    tarde: [
      '🌤️ ¡Buenas tardes! Es el momento perfecto para explorar las festividades de Brasil.',
      '🌤️ ¡Buenas tardes! El ritmo del forró suena mejor a esta hora. ¡Descubre las Festas Juninas!',
    ],
    noche: [
      '🌆 ¡Buenas noches! Las playas de Río se iluminan con el Año Nuevo. ¡Explora las tradiciones!',
      '🌆 ¡Buenas noches! El Círio de Nazaré ilumina la noche en Belém. ¡Conócelo!',
    ],
  },
  en: {
    madrugada: [
      '🌙 Good night! In Brazil, Carnival never sleeps... and neither should you!',
      '🌙 The early hours in Rio are magical during Carnival. Welcome to nocturnal Brazil!',
    ],
    manana: [
      '☀️ Good morning! Start your day with the energy of Brazilian Carnival.',
      '☀️ Good morning! In Brazil, Festas Juninas begin at dawn. Rise and shine!',
    ],
    tarde: [
      '🌤️ Good afternoon! The perfect time to explore Brazil\'s vibrant festivals.',
      '🌤️ Good afternoon! Forró rhythms sound best at this hour. Discover Festas Juninas!',
    ],
    noche: [
      '🌆 Good evening! Rio\'s beaches light up for New Year. Explore the traditions!',
      '🌆 Good evening! The Círio de Nazaré illuminates the night in Belém. Discover it!',
    ],
  },
};

let idiomaActual = 'es';

function obtenerPeriodoDia() {
  const hora = new Date().getHours();
  if (hora >= 0  && hora < 6)  return 'madrugada';
  if (hora >= 6  && hora < 12) return 'manana';
  if (hora >= 12 && hora < 20) return 'tarde';
  return 'noche';
}

function obtenerMensaje(idioma) {
  const periodo = obtenerPeriodoDia();
  const lista   = mensajes[idioma]?.[periodo] || mensajes['es'][periodo];
  return lista[Math.floor(Math.random() * lista.length)];
}

function crearBannerMensaje() {
  const seccionInicio = document.getElementById('inicio');
  if (!seccionInicio) return;

  const banner = document.createElement('div');
  banner.id        = 'mensaje-dinamico';
  banner.className = 'banner-mensaje';
  banner.setAttribute('role', 'status');
  banner.setAttribute('aria-live', 'polite');

  actualizarMensajeBanner(banner);
  seccionInicio.appendChild(banner);

  setInterval(() => {
    if (document.getElementById('inicio')?.classList.contains('active')) {
      actualizarMensajeBanner(banner);
    }
  }, 30000);
}

function actualizarMensajeBanner(bannerEl) {
  const el = bannerEl || document.getElementById('mensaje-dinamico');
  if (!el) return;

  el.classList.add('banner-mensaje--oculto');
  setTimeout(() => {
    el.textContent = obtenerMensaje(idiomaActual);
    el.classList.remove('banner-mensaje--oculto');
  }, 300);
}

/* FUNCIONES DEL SITIO */

function showSection(id, event) {
  if (event) event.preventDefault();
  document.querySelectorAll('main > section').forEach(sec => sec.classList.remove('active'));
  const section = document.getElementById(id);
  if (section) {
    section.classList.add('active');
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFestividad(id, btn) {
  document.querySelectorAll('.tab-content article').forEach(art => art.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.tabs button').forEach(b => b.setAttribute('aria-selected', 'false'));
  btn.setAttribute('aria-selected', 'true');
}

function changeLanguage(val) {
  idiomaActual = val;
  console.log('Idioma cambiado a: ' + val);
  actualizarMensajeBanner();
}


/* INICIALIZACIÓN */

document.addEventListener('DOMContentLoaded', () => {
  crearMenuContacto();
  crearSlider();
  crearBannerMensaje();
});