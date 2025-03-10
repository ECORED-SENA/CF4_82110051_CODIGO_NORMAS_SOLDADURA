export default {
  global: {
    Name: 'Ensayos destructivos y no destructivos',
    Description:
      'Los ensayos destructivos y no destructivos evalúan la resistencia y calidad de soldaduras, garantizando seguridad y funcionalidad. Los no destructivos identifican discontinuidades sin dañar la pieza, mientras que los destructivos alteran el material para analizar propiedades mecánicas. Se aplican métodos como radiografía, ultrasonido, doblado y tensión, detectando grietas, poros y falta de fusión según normas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Métodos de control de calidad según criterios de aceptación o rechazo en los códigos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de ensayos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de hallazgos',
            hash: 't_1_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/82110051_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Métodos de control de calidad según criterios de aceptación o rechazo en los códigos',
      referencia:
        'Estewan Comas. (2024).  <i>TÉCNICAS UTILIZADAS PARA EL CONTROL DE CALIDAD EN SOLDADURA</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=VAfQKQMOMEU&ab_channel=EstewanComas',
    },
    {
      tema: 'Tipos de ensayos',
      referencia:
        'SENA. (2005). <i>Ensayos Destructivos ED y Ensayos no Destructivos</i>.',
      tipo: 'Documento',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      tema: 'Tipos de hallazgos',
      referencia:
        'PUCP (2020).  <i>Ensayos y Técnicas de Inspección</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zQchaZgMWZk&ab_channel=PUCP',
    },
  ],
  glosario: [
    {
      termino: '<strom>Doblado guiado',
      significado:
        'ensayo destructivo que mide la maleabilidad del material mediante el doblado de probetas.',
    },
    {
      termino: '<strom>Fluencia',
      significado:
        'fenómeno metalúrgico en la transición entre deformaciones elásticas y plásticas.',
    },
    {
      termino: '<strom>Grietas',
      significado:
        'separaciones en el metal debido a tensiones excesivas durante el proceso de soldadura.',
    },
    {
      termino: '<strom>Inclusiones sólidas',
      significado:
        'residuos metálicos o no metálicos atrapados en el metal fundido durante la soldadura.',
    },
    {
      termino: '<strom>Mandatorio',
      significado:
        'actividad que debe realizarse obligatoriamente según instrucciones específicas.',
    },
    {
      termino: '<strom>Material base',
      significado:
        'aleación de hierro diseñada para ser soldada, compuesta por hierro y otros elementos.',
    },
    {
      termino: '<strom>Poros',
      significado:
        'huecos globulares en el cordón de soldadura causados por gases atrapados.',
    },
    {
      termino: '<strom>Tenacidad',
      significado:
        'capacidad de un material para absorber energía antes de fracturarse.',
    },
    {
      termino: '<strom>Tensión',
      significado:
        'ensayo que evalúa la resistencia del material al esfuerzo de tracción.',
    },
    {
      termino: '<strom>Tintas penetrantes',
      significado:
        'técnica que utiliza capilaridad para detectar discontinuidades en la superficie del metal.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Welding Society. (2013). <i>Norma para la certificación de inspectores de soldaduras de la AWS</i>. ',
      link: '',
    },
    {
      referencia:
        'American Petroleum Institute. (2015). <i>Norma API 1104</i>. ',
      link: '',
    },
    {
      referencia:
        'Asociación Americana de Soldadura. (2015). <i>Formato Interactivo - WPQR</i>. ',
      link: '',
    },
    {
      referencia:
        'Asociación Americana de Soldadura. (2015). <i>Formato Interactivo - WPS; PQR</i>. ',
      link: '',
    },
    {
      referencia:
        'ISOTEC S.A.S. (2010). <i>Inspección y Diagnóstico Técnico - Partículas Magnéticas</i>. ',
      link: '',
    },
    {
      referencia:
        'Sociedad Americana de Ingenieros Mecánicos. (2015). <i>Código ASME Sección IX - Soldadura: Desarrollo y calificación de Procedimientos y Soldadores</i>. ',
      link: '',
    },
    {
      referencia:
        'Solano Montaña, E. (2007). <i>Calificación y Procedimiento de Platina y Tubería según ASME</i>. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hivo Alfonso Patarroyo Pulido',
          cargo: 'Experto temático',
          centro: 'Centro de Materiales y Ensayos - Regional Distrito Capital ',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador Fullstack Junior',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
