export default {
  global: {
    Name:
      'Fundamentos de bases de datos y gestión de la información organizacional',
    Description:
      'Este componente formativo introduce los conceptos esenciales relacionados con datos, información y conocimiento, así como la forma en que las bases de datos permiten gestionar estos elementos dentro de una organización. También presenta los tipos de bases de datos, sus componentes, su integración con los sistemas computacionales y su relevancia para la administración eficiente de la información empresarial.',
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
        titulo: 'Bases de datos: conceptos fundamentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de información, datos y registros',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Diferencia entre dato, información y conocimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Información como activo estratégico en las empresas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bases de datos y sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de bases de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes de una base de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relación entre base de datos y sistema computacional',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de Gestión de Bases de Datos (SGBD)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Qué es un SGBD?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Funciones principales de un gestor de base de datos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Arquitectura general de un motor de base de datos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ejemplos de SGBD utilizados en el sector productivo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Ventajas del uso de bases de datos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Impacto de las bases de datos en las organizaciones',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Características funcionales de una base de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Requisitos funcionales y no funcionales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación de entidades y atributos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Acceso eficiente a los datos (indexación, organización secuencial)',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguridad de la base de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Control de acceso y permisos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Protección de la información',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Confidencialidad y disponibilidad de los datos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Integridad de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Integridad de entidad',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Integridad referencial',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Reglas de validación de datos',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Rendimiento y eficiencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Optimización de consultas',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Manejo de grandes volúmenes de información',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Tiempo de respuesta del sistema',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: ' Escalabilidad y mantenimiento',
            hash: 't_7_4',
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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
