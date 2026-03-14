<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Bases de datos y sistemas de información

    p.mb-5 Comprender las bases de datos implica entender que no existen de manera aislada. Se integran dentro de los sistemas de información, definidos como conjuntos organizados de elementos que permiten #[b recopilar, almacenar, procesar y distribuir información] en una organización. Estos sistemas incluyen <i>hardware</i>, <i>software</i>, procedimientos, personas y datos.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este marco, las bases de datos constituyen el #[b elemento central del almacenamiento] dentro de los sistemas de información. Sin una base de datos, un sistema de información no podría registrar eventos, procesar operaciones ni generar resultados útiles. Por esta razón, las bases de datos son un componente fundamental en el funcionamiento de las aplicaciones informáticas.

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Tipos de bases de datos

    p.mb-5 Las bases de datos pueden clasificarse según su estructura y finalidad. Esta clasificación permite comprender cómo se organizan los datos y en qué contextos resulta más pertinente cada tipo. A continuación, se presentan las características esenciales de cada categoría:

    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Estructuradas
                p.mb-0 Organizan los datos en tablas compuestas por filas y columnas. Su estructura fija permite realizar consultas precisas, garantizar la integridad de los datos y mantener relaciones entre entidades. Son ampliamente utilizadas en entornos empresariales debido a su estabilidad y facilidad de administración.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/3.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 No estructuradas
                p.mb-0 Almacenan información sin una estructura rígida. Incluyen imágenes, videos, audios, textos extensos y archivos de diversos formatos. Se emplean en contextos donde la variedad de los datos es amplia y no se requiere una organización tabular estricta.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/4.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Relacionales
                p.mb-0 Organizan la información en tablas relacionadas entre sí mediante claves primarias y foráneas. Su modelo se basa en principios matemáticos y permite realizar consultas complejas con lenguajes estructurados. Son las más comunes en aplicaciones empresariales y se caracterizan por su seguridad e integridad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/6.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Documentales
                p.mb-0 Administran documentos completos en formatos como JSON o XML. Son útiles para aplicaciones que manejan gran cantidad de datos semiestructurados.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/5.png', alt='' style="max-width: 500px").m-auto

    p.mb-0 Esta clasificación evidencia cómo los diferentes tipos de bases de datos se adaptan a las necesidades de distintas soluciones tecnológicas, según la naturaleza y organización de la información que gestionan.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Componentes de una base de datos

    p.mb-5 Una base de datos se compone de diversos elementos que trabajan de manera articulada para #[b almacenar y gestionar información]. Cada componente cumple una función específica dentro de la estructura general del sistema. A continuación, se describen los componentes más comunes:

    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema2/7.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Tablas
                p.mb-0 Almacenan los datos de manera estructurada, organizándolos para su gestión.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Campos
                p.mb-0 Representan atributos individuales dentro de una tabla.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Registros
                p.mb-0 Agrupan los campos correspondientes a una entidad específica.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Índices
                p.mb-0 Mejoran la velocidad de búsqueda y recuperación de la información.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/12.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Vistas
                p.mb-0 Presentan datos filtrados según necesidades específicas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/13.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Consultas
                p.mb-0 Permiten recuperar información aplicando criterios particulares.

        p.mb-5 Estos componentes interactúan entre sí para garantizar que la información pueda almacenarse, organizarse y recuperarse de forma eficiente dentro de la base de datos. A continuación, se presenta un esquema que integra los principales componentes de una base de datos y su interacción dentro del proceso de almacenamiento y recuperación de información.

    .bg-2
      .px-5

        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 2.
          span Componentes de una base de datos
        figure(data-aos="zoom-in").mb-5
          img(src='@/assets/curso/tema2/15.png', alt='Diagrama conceptual sobre estructura y funcionamiento de bases de datos relacionales que integra tablas con campos y registros, índices para búsqueda rápida, consultas SQL para extracción de información y vistas para presentación personalizada de datos. ').m-auto

        p.mb-0 Estos elementos #[b funcionan de forma coordinada] y permiten que los usuarios accedan a los datos de forma eficiente y organizada.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Relación entre base de datos y sistema computacional
    
    p.mb-5 Las bases de datos no operan de manera independiente; requieren un entorno computacional conformado por sistemas operativos, aplicaciones, redes y dispositivos de almacenamiento. La relación entre base de datos y sistema computacional es de #[b total dependencia], ya que ambos elementos se necesitan mutuamente para garantizar el funcionamiento adecuado de las aplicaciones. En este contexto, los sistemas computacionales utilizan las bases de datos para cumplir diversas funciones esenciales:

    .bg-carrusel
      .px-5

        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/16.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Registro de operaciones en tiempo real
            p.mb-0 Permite almacenar eventos y transacciones a medida que ocurren.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/17.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Procesamiento automático de información
            p.mb-0 Facilita la ejecución de tareas sin intervención manual constante.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/18.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Acceso a datos históricos
            p.mb-0 Posibilita la consulta de información almacenada previamente.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/19.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Generación de informes y reportes
            p.mb-0 Permite organizar y presentar resultados derivados de los datos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/20.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Automatización de flujos de trabajo
            p.mb-0 Integra procesos que dependen de información almacenada.

        p.mb-0 A su vez, las bases de datos requieren los servicios del sistema computacional para operar con #[b estabilidad, seguridad y eficiencia], lo que confirma la interdependencia entre ambos componentes dentro de cualquier solución tecnológica.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
