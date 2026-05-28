/* ============================================================
   SISTEMA DE TRADUCCIONES
   ============================================================ */

const traducciones = {
  es: {
    nav_inicio:       'Inicio',
    nav_festividades: 'Festividades',
    nav_cultura:      'Cultura',
    nav_guia:         'Guía de viaje',
    nav_galeria:      'Galería',
    header_subtitle:  'Descubre las festividades más vibrantes y coloridas de Brasil',
    hero_titulo:      'Bienvenido a Brasil',
    hero_subtitulo:   'Descubre las celebraciones, cultura y tradiciones',
    hero_btn:         'Explorar Festividades',
    inicio_titulo:    'Bienvenido',
    inicio_p1:        'Explora las celebraciones más importantes de Brasil y conoce su riqueza cultural, Brasil es un país reconocido mundialmente por su diversidad cultural y sus festividades llenas de color, música y tradición.',
    inicio_p2:        'Cada celebración refleja la alegría de su gente y la riqueza de sus raíces.',
    inicio_h3_1:      'Cultura y Tradición',
    inicio_p3:        'Las festividades brasileñas combinan influencias indígenas, africanas y europeas, creando experiencias únicas que atraen a millones de visitantes cada año.',
    inicio_h3_2:      'Principales Festividades',
    inicio_p4:        'Descúbrelas en la sección de <strong>Festividades</strong>.',
    inicio_btn:       '🌟 Explorar Festividades',
    tab_carnaval:     'Carnaval',
    tab_parintins:    'Festival de Parintins',
    tab_juninas:      'Festas Juninas',
    tab_cirio:        'Círio de Nazaré',
    tab_navidad:      'Navidad y Año Nuevo',
    carnaval_titulo:  'Carnaval',
    carnaval_desc:    'La fiesta más grande de Brasil, con desfiles espectaculares, samba, disfraces coloridos y celebraciones en las calles de Río de Janeiro, Salvador y otras ciudades.',
    carnaval_ubi_h:   '📍 Ubicación', carnaval_ubi:   'Río de Janeiro, Salvador, São Paulo y otras ciudades principales.',
    carnaval_asis_h:  '👥 Asistencia', carnaval_asis:  'Millones de personas en todo el país.',
    carnaval_trad_h:  '🎭 Tradiciones y Actividades',
    carnaval_trad1:   'Desfiles de escolas de samba con carros alegóricos espectaculares.',
    carnaval_trad2:   'Blocos de rua (grupos callejeros) que recorren las ciudades.',
    carnaval_trad3:   'Concursos de disfraces y fantasías elaboradas.',
    carnaval_trad4:   'Bailes de máscaras en clubes y hoteles.',
    carnaval_trad5:   'Sambódromo: estadio especial para los desfiles principales.',
    carnaval_comida_h:'🍴 Comida Típica', carnaval_comida: 'Feijoada, Caipirinha, Acarajé, Pastel, Churrasco, Brigadeiro.',
    carnaval_musica_h:'🎶 Música y Danza', carnaval_musica: 'Samba, Samba-enredo, Marchinha, Axé, Frevo, Maracatu.',
    parintins_titulo: 'Festival de Parintins',
    parintins_desc:   'Competencia folclórica entre los grupos Boi Garantido y Boi Caprichoso con espectáculos de música, danza y mitología amazónica.',
    parintins_ubi_h:  '📍 Ubicación', parintins_ubi:  'Parintins, Amazonas.',
    parintins_asis_h: '👥 Asistencia', parintins_asis: 'Más de 100.000 personas.',
    parintins_trad_h: '🎭 Tradiciones y Actividades',
    parintins_trad1:  'Competencia entre Boi Garantido (rojo) y Boi Caprichoso (azul).',
    parintins_trad2:  'Espectáculos con mitología amazónica.',
    parintins_trad3:  'Danzas folclóricas.',
    parintins_trad4:  'Carrozas gigantes y alegorías.',
    parintins_comida_h:'🍴 Comida Típica',
    parintins_comida1: 'Tacacá.', parintins_comida2: 'Pato no tucupi.', parintins_comida3: 'Maniçoba.',
    parintins_musica_h:'🎶 Música y Danza',
    parintins_musica1: 'Toadas.', parintins_musica2: 'Ritmos amazónicos.',
    juninas_titulo:   'Festas Juninas',
    juninas_desc:     'Fiestas populares en junio que celebran a San Antonio, San Juan y San Pedro, con bailes, comidas típicas y ambiente rural.',
    juninas_ubi_h:    '📍 Ubicación', juninas_ubi:   'Todo Brasil, especialmente en el nordeste.',
    juninas_asis_h:   '👥 Asistencia', juninas_asis:  'Millones de personas en comunidades rurales y urbanas.',
    juninas_trad_h:   '🎭 Tradiciones y Actividades',
    juninas_trad1:    'Bailes de quadrilha.', juninas_trad2: 'Fogatas.',
    juninas_trad3:    'Concursos de disfraces campesinos.', juninas_trad4: 'Juegos típicos.',
    juninas_comida_h: '🍴 Comida Típica',
    juninas_comida1:  'Pamonha.', juninas_comida2: 'Canjica.', juninas_comida3: 'Maíz asado.', juninas_comida4: 'Bolo de fubá.',
    juninas_musica_h: '🎶 Música y Danza',
    juninas_musica1:  'Forró.', juninas_musica2: 'Baión.', juninas_musica3: 'Xote.',
    cirio_titulo:     'Círio de Nazaré',
    cirio_desc:       'Una de las mayores manifestaciones religiosas del mundo, celebrada en Belém en honor a la Virgen de Nazaré.',
    cirio_ubi_h:      '📍 Ubicación', cirio_ubi:    'Belém, Pará.',
    cirio_asis_h:     '👥 Asistencia', cirio_asis:   'Más de 2 millones de personas.',
    cirio_trad_h:     '🎭 Tradiciones y Actividades',
    cirio_trad1:      'Procesión con la imagen de la Virgen de Nazaré.',
    cirio_trad2:      'Misas y novenas.', cirio_trad3: 'Eventos culturales y religiosos.',
    cirio_comida_h:   '🍴 Comida Típica',
    cirio_comida1:    'Maniçoba.', cirio_comida2: 'Pato no tucupi.',
    cirio_musica_h:   '🎶 Música y Danza',
    cirio_musica1:    'Cantos religiosos.', cirio_musica2: 'Música sacra.',
    navidad_titulo:   'Navidad y Año Nuevo',
    navidad_desc:     'La Navidad se celebra con cenas familiares y decoraciones luminosas, mientras que el Año Nuevo se vive en las playas con millones de personas vestidas de blanco.',
    navidad_ubi_h:    '📍 Ubicación', navidad_ubi:   'Todo Brasil, especialmente Río de Janeiro.',
    navidad_asis_h:   '👥 Asistencia', navidad_asis:  'Millones de personas en las playas.',
    navidad_trad_h:   '🎭 Tradiciones y Actividades',
    navidad_trad1:    'Cenas familiares en Navidad.', navidad_trad2: 'Decoraciones luminosas.',
    navidad_trad3:    'Celebración de Año Nuevo en Copacabana.',
    navidad_trad4:    'Ofrendas a Yemanjá.', navidad_trad5: 'Fuegos artificiales sobre el mar.',
    navidad_comida_h: '🍴 Comida Típica',
    navidad_comida1:  'Panettone.', navidad_comida2: 'Peru asado.', navidad_comida3: 'Rabanada.',
    navidad_musica_h: '🎶 Música y Danza',
    navidad_musica1:  'Villancicos.', navidad_musica2: 'Samba.', navidad_musica3: 'Axé.',
    cultura_titulo:   '🌎 Cultura Brasileña',
    cultura_desc:     'La cultura de Brasil es una mezcla vibrante de influencias indígenas, africanas y europeas, que se refleja en su música, danza, gastronomía y tradiciones.',
    cultura_musica_h: '🎶 Música',
    cultura_musica:   'Brasil es la cuna de ritmos mundialmente conocidos como la <strong>samba</strong>, la <strong>bossa nova</strong> y el <strong>forró</strong>.',
    cultura_danza_h:  '💃 Danza',
    cultura_danza:    'La danza es parte esencial de la identidad cultural, desde el samba en Río de Janeiro hasta la capoeira.',
    cultura_gastro_h: '🍴 Gastronomía',
    cultura_gastro1:  'Feijoada.', cultura_gastro2: 'Acarajé.', cultura_gastro3: 'Moqueca.', cultura_gastro4: 'Churrasco.',
    cultura_arte_h:   '🎨 Arte y Tradición',
    cultura_arte:     'El arte brasileño combina expresiones modernas con tradiciones populares.',
    cultura_religion_h:'🙏 Religión y Creencias',
    cultura_religion: 'Brasil es mayoritariamente católico, pero también se practican religiones afrobrasileñas como el <strong>Candomblé</strong> y la <strong>Umbanda</strong>.',
    guia_titulo:      '✈️ Guía de viaje',
    guia_desc:        'Consejos prácticos para viajar a Brasil: transporte, alojamiento, seguridad y recomendaciones turísticas.',
    guia_li1:         'Mejor época para viajar: diciembre a marzo (verano).',
    guia_li2:         'Transporte: vuelos internos, autobuses y metro en grandes ciudades.',
    guia_li3:         'Seguridad: precaución en áreas turísticas y uso de transporte oficial.',
    guia_li4:         'Recomendaciones: visitar Río de Janeiro, Salvador, Amazonas y Cataratas del Iguazú.',
    galeria_titulo:   '📸 Galería de Celebraciones',
    galeria_desc:     'Explora visualmente la magia y el color de nuestras festividades.',
    galeria_1: 'Carnaval en Río', galeria_2: 'Boi de Parintins', galeria_3: 'Festas Juninas',
    galeria_4: 'Círio de Nazaré', galeria_5: 'Año Nuevo', galeria_6: 'Playas de Brasil',
    footer:           '&copy; 2026 Festividades de Brasil | Diseñado por Jhon Cano',
    contacto_btn:     '📞 Contacto',
    contacto_titulo:  '📬 Información de Contacto',
    contacto_telefono_h: '📱 Teléfono:', contacto_correo_h: '✉️ Correo:',
    contacto_dir_h:   '📍 Dirección:', contacto_dir: 'Medellín, Colombia',
    menu_abrir:       'Abrir menú de navegación',
    menu_cerrar:      'Cerrar menú de navegación',
  },
  en: {
    nav_inicio:       'Home',
    nav_festividades: 'Festivities',
    nav_cultura:      'Culture',
    nav_guia:         'Travel Guide',
    nav_galeria:      'Gallery',
    header_subtitle:  'Discover the most vibrant and colorful festivities of Brazil',
    hero_titulo:      'Welcome to Brazil',
    hero_subtitulo:   'Discover the celebrations, culture and traditions',
    hero_btn:         'Explore Festivities',
    inicio_titulo:    'Welcome',
    inicio_p1:        'Explore the most important celebrations of Brazil and discover its cultural richness. Brazil is a country recognized worldwide for its cultural diversity and festivities full of color, music and tradition.',
    inicio_p2:        'Each celebration reflects the joy of its people and the richness of its roots.',
    inicio_h3_1:      'Culture and Tradition',
    inicio_p3:        'Brazilian festivities combine indigenous, African and European influences, creating unique experiences that attract millions of visitors every year.',
    inicio_h3_2:      'Main Festivities',
    inicio_p4:        'Discover them in the <strong>Festivities</strong> section.',
    inicio_btn:       '🌟 Explore Festivities',
    tab_carnaval:     'Carnival',
    tab_parintins:    'Parintins Festival',
    tab_juninas:      'June Festivals',
    tab_cirio:        'Círio de Nazaré',
    tab_navidad:      'Christmas & New Year',
    carnaval_titulo:  'Carnival',
    carnaval_desc:    'The biggest party in Brazil, with spectacular parades, samba, colorful costumes and street celebrations in Rio de Janeiro, Salvador and other cities.',
    carnaval_ubi_h:   '📍 Location', carnaval_ubi:   'Rio de Janeiro, Salvador, São Paulo and other major cities.',
    carnaval_asis_h:  '👥 Attendance', carnaval_asis:  'Millions of people across the country.',
    carnaval_trad_h:  '🎭 Traditions & Activities',
    carnaval_trad1:   'Samba school parades with spectacular floats.',
    carnaval_trad2:   'Blocos de rua (street groups) parading through the cities.',
    carnaval_trad3:   'Costume and elaborate fantasy contests.',
    carnaval_trad4:   'Masquerade balls at clubs and hotels.',
    carnaval_trad5:   'Sambódromo: special stadium for the main parades.',
    carnaval_comida_h:'🍴 Typical Food', carnaval_comida: 'Feijoada, Caipirinha, Acarajé, Pastel, Churrasco, Brigadeiro.',
    carnaval_musica_h:'🎶 Music & Dance', carnaval_musica: 'Samba, Samba-enredo, Marchinha, Axé, Frevo, Maracatu.',
    parintins_titulo: 'Parintins Festival',
    parintins_desc:   'Folkloric competition between the Boi Garantido and Boi Caprichoso groups with music, dance and Amazonian mythology shows.',
    parintins_ubi_h:  '📍 Location', parintins_ubi:  'Parintins, Amazonas.',
    parintins_asis_h: '👥 Attendance', parintins_asis: 'More than 100,000 people.',
    parintins_trad_h: '🎭 Traditions & Activities',
    parintins_trad1:  'Competition between Boi Garantido (red) and Boi Caprichoso (blue).',
    parintins_trad2:  'Shows featuring Amazonian mythology.',
    parintins_trad3:  'Folk dances.', parintins_trad4: 'Giant floats and allegories.',
    parintins_comida_h:'🍴 Typical Food',
    parintins_comida1: 'Tacacá.', parintins_comida2: 'Pato no tucupi.', parintins_comida3: 'Maniçoba.',
    parintins_musica_h:'🎶 Music & Dance',
    parintins_musica1: 'Toadas.', parintins_musica2: 'Amazonian rhythms.',
    juninas_titulo:   'June Festivals',
    juninas_desc:     'Popular June festivals celebrating Saint Anthony, Saint John and Saint Peter, with dances, typical food and a rural atmosphere.',
    juninas_ubi_h:    '📍 Location', juninas_ubi:   'All of Brazil, especially the northeast.',
    juninas_asis_h:   '👥 Attendance', juninas_asis:  'Millions of people in rural and urban communities.',
    juninas_trad_h:   '🎭 Traditions & Activities',
    juninas_trad1:    'Quadrilha dances.', juninas_trad2: 'Bonfires.',
    juninas_trad3:    'Peasant costume contests.', juninas_trad4: 'Traditional games.',
    juninas_comida_h: '🍴 Typical Food',
    juninas_comida1:  'Pamonha.', juninas_comida2: 'Canjica.', juninas_comida3: 'Roasted corn.', juninas_comida4: 'Bolo de fubá.',
    juninas_musica_h: '🎶 Music & Dance',
    juninas_musica1:  'Forró.', juninas_musica2: 'Baião.', juninas_musica3: 'Xote.',
    cirio_titulo:     'Círio de Nazaré',
    cirio_desc:       'One of the greatest religious manifestations in the world, celebrated in Belém in honor of the Virgin of Nazareth.',
    cirio_ubi_h:      '📍 Location', cirio_ubi:    'Belém, Pará.',
    cirio_asis_h:     '👥 Attendance', cirio_asis:   'More than 2 million people.',
    cirio_trad_h:     '🎭 Traditions & Activities',
    cirio_trad1:      'Procession with the image of the Virgin of Nazareth.',
    cirio_trad2:      'Masses and novenas.', cirio_trad3: 'Cultural and religious events.',
    cirio_comida_h:   '🍴 Typical Food',
    cirio_comida1:    'Maniçoba.', cirio_comida2: 'Pato no tucupi.',
    cirio_musica_h:   '🎶 Music & Dance',
    cirio_musica1:    'Religious chants.', cirio_musica2: 'Sacred music.',
    navidad_titulo:   'Christmas & New Year',
    navidad_desc:     'Christmas is celebrated with family dinners and festive lights, while New Year is experienced on the beaches with millions of people dressed in white.',
    navidad_ubi_h:    '📍 Location', navidad_ubi:   'All of Brazil, especially Rio de Janeiro.',
    navidad_asis_h:   '👥 Attendance', navidad_asis:  'Millions of people on the beaches.',
    navidad_trad_h:   '🎭 Traditions & Activities',
    navidad_trad1:    'Family dinners at Christmas.', navidad_trad2: 'Festive light decorations.',
    navidad_trad3:    'New Year celebration at Copacabana.',
    navidad_trad4:    'Offerings to Yemanjá.', navidad_trad5: 'Fireworks over the sea.',
    navidad_comida_h: '🍴 Typical Food',
    navidad_comida1:  'Panettone.', navidad_comida2: 'Roast turkey.', navidad_comida3: 'Rabanada.',
    navidad_musica_h: '🎶 Music & Dance',
    navidad_musica1:  'Christmas carols.', navidad_musica2: 'Samba.', navidad_musica3: 'Axé.',
    cultura_titulo:   '🌎 Brazilian Culture',
    cultura_desc:     "Brazil's culture is a vibrant mix of indigenous, African and European influences, reflected in its music, dance, gastronomy and traditions.",
    cultura_musica_h: '🎶 Music',
    cultura_musica:   'Brazil is the birthplace of world-famous rhythms such as <strong>samba</strong>, <strong>bossa nova</strong> and <strong>forró</strong>.',
    cultura_danza_h:  '💃 Dance',
    cultura_danza:    'Dance is an essential part of cultural identity, from samba in Rio de Janeiro to capoeira.',
    cultura_gastro_h: '🍴 Gastronomy',
    cultura_gastro1:  'Feijoada.', cultura_gastro2: 'Acarajé.', cultura_gastro3: 'Moqueca.', cultura_gastro4: 'Churrasco.',
    cultura_arte_h:   '🎨 Art and Tradition',
    cultura_arte:     'Brazilian art combines modern expressions with popular traditions.',
    cultura_religion_h:'🙏 Religion and Beliefs',
    cultura_religion: 'Brazil is predominantly Catholic, but Afro-Brazilian religions such as <strong>Candomblé</strong> and <strong>Umbanda</strong> are also practiced.',
    guia_titulo:      '✈️ Travel Guide',
    guia_desc:        'Practical tips for traveling to Brazil: transportation, accommodation, safety and tourist recommendations.',
    guia_li1:         'Best time to visit: December to March (summer).',
    guia_li2:         'Transportation: domestic flights, buses and metro in major cities.',
    guia_li3:         'Safety: be cautious in tourist areas and use official transportation.',
    guia_li4:         'Recommendations: visit Rio de Janeiro, Salvador, Amazonas and Iguazu Falls.',
    galeria_titulo:   '📸 Celebrations Gallery',
    galeria_desc:     'Visually explore the magic and color of our festivities.',
    galeria_1: 'Carnival in Rio', galeria_2: 'Boi de Parintins', galeria_3: 'June Festivals',
    galeria_4: 'Círio de Nazaré', galeria_5: 'New Year', galeria_6: 'Brazilian Beaches',
    footer:           '&copy; 2026 Festivities of Brazil | Designed by Jhon Cano',
    contacto_btn:     '📞 Contact',
    contacto_titulo:  '📬 Contact Information',
    contacto_telefono_h: '📱 Phone:', contacto_correo_h: '✉️ Email:',
    contacto_dir_h:   '📍 Address:', contacto_dir: 'Medellín, Colombia',
    menu_abrir:       'Open navigation menu',
    menu_cerrar:      'Close navigation menu',
  }
};

function aplicarTraduccion(idioma) {
  const t = traducciones[idioma];
  if (!t) return;
  const setText = (sel, key)  => { const el = document.querySelector(sel); if (el && t[key] !== undefined) el.textContent = t[key]; };
  const setHTML = (sel, key)  => { const el = document.querySelector(sel); if (el && t[key] !== undefined) el.innerHTML  = t[key]; };

  setText('nav ul li:nth-child(1) a', 'nav_inicio');
  setText('nav ul li:nth-child(2) a', 'nav_festividades');
  setText('nav ul li:nth-child(3) a', 'nav_cultura');
  setText('nav ul li:nth-child(4) a', 'nav_guia');
  setText('nav ul li:nth-child(5) a', 'nav_galeria');
  setText('header .header-content p', 'header_subtitle');
  setText('.hero-content h1', 'hero_titulo');
  setText('.hero-content p',  'hero_subtitulo');
  document.querySelectorAll('.hero-content .btn-explorar').forEach(b => b.textContent = t['hero_btn']);
  setText('#inicio .inicio-texto h2', 'inicio_titulo');
  const inicioPs = document.querySelectorAll('#inicio .inicio-texto p');
  if (inicioPs[0]) inicioPs[0].textContent = t['inicio_p1'];
  if (inicioPs[1]) inicioPs[1].textContent = t['inicio_p2'];
  const h3s = document.querySelectorAll('#inicio .inicio-texto h3');
  if (h3s[0]) h3s[0].textContent = t['inicio_h3_1'];
  if (h3s[1]) h3s[1].textContent = t['inicio_h3_2'];
  if (inicioPs[2]) inicioPs[2].textContent = t['inicio_p3'];
  if (inicioPs[3]) inicioPs[3].innerHTML   = t['inicio_p4'];
  const inicioBtn = document.querySelector('#inicio .inicio-texto .btn-secundario');
  if (inicioBtn) inicioBtn.textContent = t['inicio_btn'];
  setText('#tab-carnaval', 'tab_carnaval'); setText('#tab-parintins', 'tab_parintins');
  setText('#tab-juninas', 'tab_juninas');   setText('#tab-cirio', 'tab_cirio');
  setText('#tab-navidad', 'tab_navidad');
  setText('#carnaval h2', 'carnaval_titulo');
  const carPs = document.querySelectorAll('#carnaval > p');
  if (carPs[0]) carPs[0].textContent = t['carnaval_desc'];
  if (carPs[1]) carPs[1].textContent = t['carnaval_ubi'];
  if (carPs[2]) carPs[2].textContent = t['carnaval_asis'];
  if (carPs[3]) carPs[3].textContent = t['carnaval_comida'];
  if (carPs[4]) carPs[4].textContent = t['carnaval_musica'];
  const carH3 = document.querySelectorAll('#carnaval h3');
  [['carnaval_ubi_h'],['carnaval_asis_h'],['carnaval_trad_h'],['carnaval_comida_h'],['carnaval_musica_h']].forEach(([k],i) => { if (carH3[i]) carH3[i].textContent = t[k]; });
  const carLis = document.querySelectorAll('#carnaval ul:first-of-type li');
  ['carnaval_trad1','carnaval_trad2','carnaval_trad3','carnaval_trad4','carnaval_trad5'].forEach((k,i) => { if (carLis[i]) carLis[i].textContent = t[k]; });
  setText('#parintins h2', 'parintins_titulo');
  const parPs = document.querySelectorAll('#parintins > p');
  if (parPs[0]) parPs[0].textContent = t['parintins_desc'];
  const parH3 = document.querySelectorAll('#parintins h3');
  [['parintins_ubi_h'],['parintins_asis_h'],['parintins_trad_h'],['parintins_comida_h'],['parintins_musica_h']].forEach(([k],i) => { if (parH3[i]) parH3[i].textContent = t[k]; });
  const parSecPs = document.querySelectorAll('#parintins p');
  if (parSecPs[1]) parSecPs[1].textContent = t['parintins_ubi'];
  if (parSecPs[2]) parSecPs[2].textContent = t['parintins_asis'];
  const parUls = document.querySelectorAll('#parintins ul');
  if (parUls[0]) { const lis = parUls[0].querySelectorAll('li'); ['parintins_trad1','parintins_trad2','parintins_trad3','parintins_trad4'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (parUls[1]) { const lis = parUls[1].querySelectorAll('li'); ['parintins_comida1','parintins_comida2','parintins_comida3'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (parUls[2]) { const lis = parUls[2].querySelectorAll('li'); ['parintins_musica1','parintins_musica2'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  setText('#juninas h2', 'juninas_titulo');
  const junPs = document.querySelectorAll('#juninas > p');
  if (junPs[0]) junPs[0].textContent = t['juninas_desc'];
  const junH3 = document.querySelectorAll('#juninas h3');
  [['juninas_ubi_h'],['juninas_asis_h'],['juninas_trad_h'],['juninas_comida_h'],['juninas_musica_h']].forEach(([k],i) => { if (junH3[i]) junH3[i].textContent = t[k]; });
  const junSecPs = document.querySelectorAll('#juninas p');
  if (junSecPs[1]) junSecPs[1].textContent = t['juninas_ubi'];
  if (junSecPs[2]) junSecPs[2].textContent = t['juninas_asis'];
  const junUls = document.querySelectorAll('#juninas ul');
  if (junUls[0]) { const lis = junUls[0].querySelectorAll('li'); ['juninas_trad1','juninas_trad2','juninas_trad3','juninas_trad4'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (junUls[1]) { const lis = junUls[1].querySelectorAll('li'); ['juninas_comida1','juninas_comida2','juninas_comida3','juninas_comida4'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (junUls[2]) { const lis = junUls[2].querySelectorAll('li'); ['juninas_musica1','juninas_musica2','juninas_musica3'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  setText('#cirio h2', 'cirio_titulo');
  const cirPs = document.querySelectorAll('#cirio > p');
  if (cirPs[0]) cirPs[0].textContent = t['cirio_desc'];
  const cirH3 = document.querySelectorAll('#cirio h3');
  [['cirio_ubi_h'],['cirio_asis_h'],['cirio_trad_h'],['cirio_comida_h'],['cirio_musica_h']].forEach(([k],i) => { if (cirH3[i]) cirH3[i].textContent = t[k]; });
  const cirSecPs = document.querySelectorAll('#cirio p');
  if (cirSecPs[1]) cirSecPs[1].textContent = t['cirio_ubi'];
  if (cirSecPs[2]) cirSecPs[2].textContent = t['cirio_asis'];
  const cirUls = document.querySelectorAll('#cirio ul');
  if (cirUls[0]) { const lis = cirUls[0].querySelectorAll('li'); ['cirio_trad1','cirio_trad2','cirio_trad3'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (cirUls[1]) { const lis = cirUls[1].querySelectorAll('li'); ['cirio_comida1','cirio_comida2'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (cirUls[2]) { const lis = cirUls[2].querySelectorAll('li'); ['cirio_musica1','cirio_musica2'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  setText('#navidad h2', 'navidad_titulo');
  const navPs = document.querySelectorAll('#navidad > p');
  if (navPs[0]) navPs[0].textContent = t['navidad_desc'];
  const navH3 = document.querySelectorAll('#navidad h3');
  [['navidad_ubi_h'],['navidad_asis_h'],['navidad_trad_h'],['navidad_comida_h'],['navidad_musica_h']].forEach(([k],i) => { if (navH3[i]) navH3[i].textContent = t[k]; });
  const navSecPs = document.querySelectorAll('#navidad p');
  if (navSecPs[1]) navSecPs[1].textContent = t['navidad_ubi'];
  if (navSecPs[2]) navSecPs[2].textContent = t['navidad_asis'];
  const navUls = document.querySelectorAll('#navidad ul');
  if (navUls[0]) { const lis = navUls[0].querySelectorAll('li'); ['navidad_trad1','navidad_trad2','navidad_trad3','navidad_trad4','navidad_trad5'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (navUls[1]) { const lis = navUls[1].querySelectorAll('li'); ['navidad_comida1','navidad_comida2','navidad_comida3'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  if (navUls[2]) { const lis = navUls[2].querySelectorAll('li'); ['navidad_musica1','navidad_musica2','navidad_musica3'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  setText('#cultura h2', 'cultura_titulo');
  const culPs = document.querySelectorAll('#cultura > p');
  if (culPs[0]) culPs[0].textContent = t['cultura_desc'];
  const culH3 = document.querySelectorAll('#cultura h3');
  [['cultura_musica_h'],['cultura_danza_h'],['cultura_gastro_h'],['cultura_arte_h'],['cultura_religion_h']].forEach(([k],i) => { if (culH3[i]) culH3[i].textContent = t[k]; });
  const culAllPs = document.querySelectorAll('#cultura p');
  if (culAllPs[1]) culAllPs[1].innerHTML  = t['cultura_musica'];
  if (culAllPs[2]) culAllPs[2].textContent = t['cultura_danza'];
  if (culAllPs[3]) culAllPs[3].textContent = t['cultura_arte'];
  if (culAllPs[4]) culAllPs[4].innerHTML  = t['cultura_religion'];
  const culUl = document.querySelector('#cultura ul');
  if (culUl) { const lis = culUl.querySelectorAll('li'); ['cultura_gastro1','cultura_gastro2','cultura_gastro3','cultura_gastro4'].forEach((k,i) => { if (lis[i]) lis[i].textContent = t[k]; }); }
  setText('#guia h2', 'guia_titulo');
  const guiaPs = document.querySelectorAll('#guia > p');
  if (guiaPs[0]) guiaPs[0].textContent = t['guia_desc'];
  const guiaLis = document.querySelectorAll('#guia ul li');
  ['guia_li1','guia_li2','guia_li3','guia_li4'].forEach((k,i) => { if (guiaLis[i]) guiaLis[i].textContent = t[k]; });
  setText('#galeria h2', 'galeria_titulo');
  const galPs = document.querySelectorAll('#galeria > p');
  if (galPs[0]) galPs[0].textContent = t['galeria_desc'];
  const galItems = document.querySelectorAll('.galeria-item p');
  ['galeria_1','galeria_2','galeria_3','galeria_4','galeria_5','galeria_6'].forEach((k,i) => { if (galItems[i]) galItems[i].textContent = t[k]; });
  const footer = document.querySelector('footer p');
  if (footer) footer.innerHTML = t['footer'];
  const contactoBtn = document.querySelector('.contacto-btn');
  if (contactoBtn) contactoBtn.textContent = t['contacto_btn'];
  const contactoTitulo = document.querySelector('.contacto-panel__titulo');
  if (contactoTitulo) contactoTitulo.textContent = t['contacto_titulo'];
  const contactoItems = document.querySelectorAll('.contacto-panel__item strong');
  if (contactoItems[0]) contactoItems[0].textContent = t['contacto_telefono_h'];
  if (contactoItems[1]) contactoItems[1].textContent = t['contacto_correo_h'];
  if (contactoItems[2]) contactoItems[2].textContent = t['contacto_dir_h'];
  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) hamburger.setAttribute('aria-label', t['menu_abrir']);
  document.documentElement.lang = idioma;
}


/* ============================================================
   MENÚ HAMBURGER PARA MÓVIL
   ============================================================ */

function crearHamburger() {
  const nav    = document.querySelector('nav');
  const navUl  = document.querySelector('nav ul');
  if (!nav || !navUl) return;

  /* Botón hamburger */
  const btn = document.createElement('button');
  btn.id = 'hamburger-btn';
  btn.setAttribute('aria-label', 'Abrir menú de navegación');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'nav-menu');
  btn.innerHTML = `
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
    <span class="ham-bar"></span>
  `;

  /* Estilos del botón (solo JS, no toca CSS) */
  Object.assign(btn.style, {
    display:        'none',
    background:     'transparent',
    border:         '2px solid rgba(255,255,255,0.5)',
    borderRadius:   '6px',
    cursor:         'pointer',
    padding:        '8px 10px',
    flexDirection:  'column',
    gap:            '5px',
    alignItems:     'center',
    justifyContent: 'center',
    position:       'absolute',
    right:          '16px',
    top:            '50%',
    transform:      'translateY(-50%)',
    zIndex:         '200',
    minWidth:       '44px',
    minHeight:      '44px',
  });

  /* Estilos de las barras */
  btn.querySelectorAll('.ham-bar').forEach(bar => {
    Object.assign(bar.style, {
      display:         'block',
      width:           '22px',
      height:          '3px',
      background:      '#ffffff',
      borderRadius:    '2px',
      transition:      'transform 0.3s ease, opacity 0.3s ease',
      transformOrigin: 'center',
    });
  });

  /* ID para aria-controls */
  navUl.id = 'nav-menu';

  /* Estilos del overlay de fondo */
  const overlay = document.createElement('div');
  overlay.id = 'nav-overlay';
  Object.assign(overlay.style, {
    display:    'none',
    position:   'fixed',
    inset:      '0',
    background: 'rgba(0,0,0,0.45)',
    zIndex:     '98',
  });
  document.body.appendChild(overlay);

  nav.style.position = 'sticky';
  nav.appendChild(btn);

  let menuAbierto = false;

  function abrirMenu() {
    menuAbierto = true;
    navUl.style.display      = 'flex';
    navUl.style.flexDirection= 'column';
    navUl.style.position     = 'absolute';
    navUl.style.top          = '100%';
    navUl.style.left         = '0';
    navUl.style.right        = '0';
    navUl.style.background   = '#006400';
    navUl.style.padding      = '0.5rem 0 1rem';
    navUl.style.zIndex       = '199';
    navUl.style.boxShadow    = '0 8px 20px rgba(0,0,0,0.35)';
    navUl.style.gap          = '0';
    overlay.style.display    = 'block';
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', traducciones[idiomaActual].menu_cerrar);
    /* Animación de barras → X */
    const bars = btn.querySelectorAll('.ham-bar');
    bars[0].style.transform = 'translateY(8px) rotate(45deg)';
    bars[1].style.opacity   = '0';
    bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    /* Foco accesible */
    const primerEnlace = navUl.querySelector('a, .contacto-btn, select');
    if (primerEnlace) primerEnlace.focus();
  }

  function cerrarMenu() {
    menuAbierto = false;
    navUl.style.display  = '';
    navUl.style.position = '';
    navUl.style.top      = '';
    navUl.style.left     = '';
    navUl.style.right    = '';
    navUl.style.background= '';
    navUl.style.padding  = '';
    navUl.style.zIndex   = '';
    navUl.style.boxShadow= '';
    navUl.style.gap      = '';
    navUl.style.flexDirection = '';
    overlay.style.display = 'none';
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', traducciones[idiomaActual].menu_abrir);
    const bars = btn.querySelectorAll('.ham-bar');
    bars[0].style.transform = '';
    bars[1].style.opacity   = '';
    bars[2].style.transform = '';
  }

  btn.addEventListener('click', () => menuAbierto ? cerrarMenu() : abrirMenu());
  overlay.addEventListener('click', cerrarMenu);

  /* Cerrar con Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuAbierto) { cerrarMenu(); btn.focus(); }
  });

  /* Mostrar/ocultar según ancho */
  function ajustarNav() {
    if (window.innerWidth <= 768) {
      btn.style.display = 'flex';
      if (!menuAbierto) {
        navUl.style.display = 'none';
      }
      nav.style.position = 'sticky';
    } else {
      btn.style.display = 'none';
      navUl.style.display = '';
      navUl.style.position = '';
      navUl.style.flexDirection = '';
      navUl.style.background = '';
      navUl.style.padding = '';
      navUl.style.top = '';
      navUl.style.left = '';
      navUl.style.right = '';
      navUl.style.zIndex = '';
      navUl.style.boxShadow = '';
      navUl.style.gap = '';
      overlay.style.display = 'none';
      menuAbierto = false;
    }
  }

  window.addEventListener('resize', ajustarNav);
  ajustarNav();

  /* Exponer cerrarMenu globalmente para usarlo desde showSection */
  window._cerrarMenuMovil = cerrarMenu;
}


/* ============================================================
   MENÚ DE CONTACTO DESPLEGABLE
   ============================================================ */

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
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Información de contacto');

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

  /* En móvil el panel debe abrirse hacia la izquierda para no salirse */
  function ajustarPosicionPanel() {
    if (window.innerWidth <= 768) {
      panel.style.right    = 'auto';
      panel.style.left     = '50%';
      panel.style.transform= 'translateX(-50%)';
      panel.style.minWidth = 'min(260px, 90vw)';
    } else {
      panel.style.right    = '0';
      panel.style.left     = '';
      panel.style.transform= '';
      panel.style.minWidth = '';
    }
  }

  window.addEventListener('resize', ajustarPosicionPanel);
  ajustarPosicionPanel();

  li.addEventListener('mouseover', () => {
    if (window.innerWidth > 768) {
      panel.classList.add('contacto-panel--visible');
      btn.setAttribute('aria-expanded', 'true');
    }
  });

  li.addEventListener('mouseout', (e) => {
    if (window.innerWidth > 768 && !li.contains(e.relatedTarget)) {
      panel.classList.remove('contacto-panel--visible');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  btn.addEventListener('click', () => {
    const visible = panel.classList.contains('contacto-panel--visible');
    panel.classList.toggle('contacto-panel--visible', !visible);
    btn.setAttribute('aria-expanded', String(!visible));
    ajustarPosicionPanel();
  });

  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const visible = panel.classList.contains('contacto-panel--visible');
      panel.classList.toggle('contacto-panel--visible', !visible);
      btn.setAttribute('aria-expanded', String(!visible));
      ajustarPosicionPanel();
    }
    if (e.key === 'Escape') {
      panel.classList.remove('contacto-panel--visible');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  /* Cerrar panel si se hace clic fuera */
  document.addEventListener('click', (e) => {
    if (!li.contains(e.target)) {
      panel.classList.remove('contacto-panel--visible');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  li.appendChild(btn);
  li.appendChild(panel);
  nav.appendChild(li);
}


/* ============================================================
   SLIDER DE IMÁGENES EN LA SECCIÓN INICIO
   ============================================================ */

const sliderImagenes = [
  { src: 'images/image_carnaval.jpg',           alt: 'Carnaval de Brasil',     titulo: '🎭 Carnaval' },
  { src: 'images/image_festivaldeparintins.jpg', alt: 'Festival de Parintins',  titulo: '🐂 Festival de Parintins' },
  { src: 'images/image_festasjuninas.jpg',       alt: 'Festas Juninas',         titulo: '🌽 Festas Juninas' },
  { src: 'images/image_ciriodenazare.jpg',       alt: 'Círio de Nazaré',        titulo: '🕯️ Círio de Nazaré' },
  { src: 'images/image_navidadyañonuevo.jpg',    alt: 'Navidad y Año Nuevo',    titulo: '🎆 Navidad y Año Nuevo' },
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
  titulo.setAttribute('aria-live', 'polite');

  const btnPrev = crearBtnSlider('❮', 'Imagen anterior', 'slider__btn slider__btn--prev');
  btnPrev.addEventListener('click', () => moverSlider(-1));

  const btnNext = crearBtnSlider('❯', 'Imagen siguiente', 'slider__btn slider__btn--next');
  btnNext.addEventListener('click', () => moverSlider(1));

  const dotsWrapper = document.createElement('div');
  dotsWrapper.id        = 'slider-dots';
  dotsWrapper.className = 'slider__dots';
  dotsWrapper.setAttribute('role', 'tablist');
  dotsWrapper.setAttribute('aria-label', 'Seleccionar imagen');

  sliderImagenes.forEach((item, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider__dot' + (i === 0 ? ' slider__dot--active' : '');
    dot.setAttribute('aria-label', `Ir a imagen ${i + 1}: ${item.titulo}`);
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
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

  /* ── Soporte táctil / swipe ── */
  let touchStartX = 0;
  let touchStartY = 0;

  sliderWrapper.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
    detenerAutoplay();
  }, { passive: true });

  sliderWrapper.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      moverSlider(dx < 0 ? 1 : -1);
    }
    iniciarAutoplay();
  }, { passive: true });

  /* ── Teclado en el slider ── */
  sliderWrapper.setAttribute('tabindex', '0');
  sliderWrapper.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { moverSlider(-1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { moverSlider(1);  e.preventDefault(); }
  });
}

function crearBtnSlider(icono, label, className) {
  const btn = document.createElement('button');
  btn.innerHTML = icono;
  btn.className = className;
  btn.setAttribute('aria-label', label);
  /* Área mínima táctil de 44px */
  btn.style.minWidth  = '44px';
  btn.style.minHeight = '44px';
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
    d.setAttribute('aria-selected', i === index ? 'true' : 'false');
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
  if (sliderInterval) { clearInterval(sliderInterval); sliderInterval = null; }
}


/* ============================================================
   MENSAJES DINÁMICOS SEGÚN HORA E IDIOMA
   ============================================================ */

const mensajes = {
  es: {
    madrugada: ['🌙 ¡Buenas noches! En Brasil, el Carnaval no duerme... ¡y tú tampoco deberías!', '🌙 La madrugada en Río es mágica durante el Carnaval. ¡Bienvenido al Brasil nocturno!'],
    manana:    ['☀️ ¡Buenos días! Comienza tu día con la energía del Carnaval brasileño.', '☀️ ¡Buenos días! En Brasil, las Festas Juninas empiezan con el canto del gallo. ¡Arriba!'],
    tarde:     ['🌤️ ¡Buenas tardes! Es el momento perfecto para explorar las festividades de Brasil.', '🌤️ ¡Buenas tardes! El ritmo del forró suena mejor a esta hora. ¡Descubre las Festas Juninas!'],
    noche:     ['🌆 ¡Buenas noches! Las playas de Río se iluminan con el Año Nuevo. ¡Explora las tradiciones!', '🌆 ¡Buenas noches! El Círio de Nazaré ilumina la noche en Belém. ¡Conócelo!'],
  },
  en: {
    madrugada: ['🌙 Good night! In Brazil, Carnival never sleeps... and neither should you!', '🌙 The early hours in Rio are magical during Carnival. Welcome to nocturnal Brazil!'],
    manana:    ['☀️ Good morning! Start your day with the energy of Brazilian Carnival.', '☀️ Good morning! In Brazil, the June Festivals begin at dawn. Rise and shine!'],
    tarde:     ["🌤️ Good afternoon! The perfect time to explore Brazil's vibrant festivals.", '🌤️ Good afternoon! Forró rhythms sound best at this hour. Discover the June Festivals!'],
    noche:     ["🌆 Good evening! Rio's beaches light up for New Year. Explore the traditions!", '🌆 Good evening! The Círio de Nazaré illuminates the night in Belém. Discover it!'],
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
  banner.setAttribute('aria-atomic', 'true');

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


/* ============================================================
   FUNCIONES DEL SITIO
   ============================================================ */

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
  /* Cerrar menú móvil al navegar */
  if (typeof window._cerrarMenuMovil === 'function') window._cerrarMenuMovil();
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
  aplicarTraduccion(val);
  actualizarMensajeBanner();
}


/* ============================================================
   INICIALIZACIÓN
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  crearHamburger();
  crearMenuContacto();
  crearSlider();
  crearBannerMensaje();
});
