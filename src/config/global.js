export default {
  global: {
    Name: 'Estructura del sistema de trazabilidad',
    Description:
      'Este componente formativo se enfoca en la estructura del sistema de trazabilidad, donde busca identificar y comprender cada uno de sus elementos clave, desde la recolección inicial de datos hasta su almacenamiento y análisis. Se abordarán los diferentes tipos de trazabilidad; la interconexión de cada fase garantiza la visibilidad completa de un producto a lo largo de su cadena de suministro.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
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
        titulo: 'Transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normativas y políticas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Características técnicas de la carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de carga, peso y volumen',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Empaque y embalaje',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Operación del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto, tipos y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Variables y rutas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Inventarios y procedimientos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Puntos críticos de la operación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Trazabilidad de la operación del transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto e importancia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos y política',
            hash: 't_4_2',
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
        download: 'downloads/CFA1_82220000_DU.pdf',
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
      tema: 'Trazabilidad de la operación del transporte.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s. f.). <em>Tuteorica.com. Recuperado de https://www.tuteorica.com</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=PUOOkuzzSnM',
    },
    {
      tema: 'Operación del transporte.',
      referencia:
        'Ibáñez Neri, A. (s. f.). <em>Alberto Ibañez Neri [Canal de YouTube]. YouTube. Recuperado de https://www.youtube.com/@AlbertoIbanezNeri</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AMIamNCaUAo',
    },
    {
      tema: 'Trazabilidad de la operación del transporte.',
      referencia:
        'Rincón Ballesteros, D. L. (s. f.). <em>Conceptualización de la trazabilidad en la cadena de abastecimiento. Repositorio Institucional Universidad Distrital Francisco José de Caldas.</em>',
      tipo: 'Manual PDF',
      link:
        'https://repository.udistrital.edu.co/server/api/core/bitstreams/6a82fa29-7bfd-4551-9e56-648bdf517720/content',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
    {
      termino: 'Carga a granel',
      significado:
        'Productos que se transportan sin empaque y en grandes volúmenes, viajando directamente en bodegas, cisternas o tolvas. Su clasificación depende de si son sólidos, líquidos o gaseosos.',
    },

    {
      termino: 'Carga completa (FTL)',
      significado:
        'Modalidad de operación donde el vehículo transporta exclusivamente la carga de un solo cliente. Simplifica la trazabilidad al centrarse en el seguimiento directo del camión y su entrega única.',
    },

    {
      termino: 'Carga crítica',
      significado:
        'Mercancía que, por su naturaleza (perecedera, peligrosa o de alto valor), requiere un monitoreo y trazabilidad especialmente rigurosos para mantener su integridad y seguridad.',
    },

    {
      termino: 'Carga general',
      significado:
        'Mercancías embaladas en cajas, bultos, <em>palets</em> o contenedores. Su manipulación puede hacerse de manera individual o agrupada, lo que facilita la operación y reduce tiempos logísticos.',
    },

    {
      termino: 'Carga parcial (LTL)',
      significado:
        'Modalidad de operación donde se consolidan cargas de distintos clientes en un mismo vehículo. Requiere trazabilidad más detallada por paquete o bulto en cada punto de transbordo y consolidación.',
    },

    {
      termino: 'Embalaje',
      significado:
        'Material o estructura externa que protege el producto o conjunto de productos para su transporte y almacenamiento. Permite agrupar unidades y facilita la aplicación de identificadores de trazabilidad a nivel logístico.',
    },

    {
      termino: 'Empaque',
      significado:
        'Contenedor o envoltorio primario que está en contacto directo con el producto, diseñado para protegerlo y presentarlo. A menudo lleva la identificación para la trazabilidad a nivel de unidad de consumo.',
    },

    {
      termino: 'Procedimientos Operativos Estándar (POES)',
      significado:
        'Instrucciones documentadas que orientan cada tarea crítica en la operación de transporte, fortaleciendo la trazabilidad al garantizar consistencia en la captura de datos y reducir errores.',
    },

    {
      termino: 'Puntos Críticos de Control (PCC)',
      significado:
        'Puntos específicos en la cadena de suministro o en la operación donde es esencial aplicar un control para evitar, eliminar o reducir un riesgo a un nivel aceptable. Son nodos clave para la captura de datos de trazabilidad.',
    },

    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de reconstruir el historial, el recorrido y la ubicación de un producto o lote a lo largo de toda la cadena de suministro. Permite conocer su origen (trazabilidad hacia atrás) y su destino (trazabilidad hacia adelante).',
    },

    {
      termino: 'Trazabilidad bidireccional',
      significado:
        'Capacidad de seguir el rastro de un producto tanto hacia adelante (desde el origen hasta el consumidor) como hacia atrás (desde el consumidor hasta su origen), conectando todos los eslabones de la cadena de suministro.',
    },

    {
      termino: 'Transbordo',
      significado:
        'Punto crítico de la operación donde la carga cambia de vehículo o de modalidad de transporte. Implica un riesgo alto de pérdida o confusión y exige registros precisos de custodia y estado.',
    },

    {
      termino: 'Transporte',
      significado:
        'Proceso de movilizar personas, bienes o información, actuando como motor de conectividad y desarrollo. Constituye un pilar de la economía global y de la sociedad moderna.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ballou, R. H. (2004). <em>Logística: Administración de la cadena de suministro. Pearson Education.</em>',
      link: '',
    },
    {
      referencia:
        '<em>Bowersox, D. J., Closs, D. J., & Cooper, M. B. (2007). Administración y logística en la cadena de suministros. McGraw Hill.</em>',
      link: '',
    },
    {
      referencia:
        '<em>Calatayud, A., & Katz, R. (2019). Cadena de suministro 4.0: Mejores prácticas internacionales y hoja de ruta para América Latina. Banco Interamericano de Desarrollo..</em>',
      link: '',
    },
    {
      referencia:
        '<em>Colombia. Congreso de la República. (2002). Ley 769 de 2002: Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Diario Oficial No. 44.975.</em>',
      link: '',
    },
    {
      referencia:
        '<em>Colombia. Congreso de la República. (2012). Ley 1609 de 2012: Por la cual se dictan normas sobre el transporte de mercancías peligrosas por carretera y se dictan otras disposiciones. Diario Oficial No. 48.647.</em>',
      link: '',
    },
    {
      referencia:
        '<em>Colombia. Ministerio de Transporte. (2015). Decreto 1079 de 2015: Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. Diario Oficial No. 49.529.</em>',
      link: '',
    },
    {
      referencia:
        '<em>Maravi Cárdenas, A. J., Zevallos Aquije, A. J., & Palomino Salcedo, K. J. (2023). Gestión de la cadena de suministros. Enfoques y perspectivas modernas. Religación Press.</em>',
      link:
        'https://press.religacion.com/index.php/press/catalog/download/102/261/431?inline=1',
    },
    {
      referencia:
        '<em>Mora García, L. A. (2023). Logística del transporte y distribución de carga (2.ª ed.). Ecoe Ediciones.</em>',
      link:
        'https://www.ecoeediciones.com/product/logistica-del-transporte-y-distribucion-de-carga-2da-edicion-impreso/',
    },
    {
      referencia:
        '<em>Organización Marítima Internacional. (última edición vigente). Código Marítimo Internacional de Mercancías Peligrosas (IMDG).</em>',
      link: '',
    },
    {
      referencia:
        '<em>Naciones Unidas, Comisión Económica para Europa. (última edición vigente). Acuerdo Europeo relativo al Transporte Internacional de Mercancías Peligrosas por Carretera (ADR).</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yasmín Andreina Maldonado Escobar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
