<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Integridad de la información
    
    p.mb-5 La integridad de la información garantiza que los datos almacenados sean #[b correctos, coherentes y confiables]. Cuando se pierde la integridad, pueden generarse errores en cálculos, informes inexactos, duplicidad de registros o fallas operativas que afectan el funcionamiento general de la organización.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img
        figure
          img(src="@/assets/curso/tema6/1.svg", alt="" style="max-width: 220px").m-auto
      .bloque-texto-g__texto.p-4
        p.mb-0 El SGBD implementa reglas automáticas que aseguran el cumplimiento de condiciones específicas definidas en la estructura de la base de datos. Estas reglas previenen inconsistencias y mantienen la coherencia entre los datos almacenados.

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Integridad de entidad

    p.mb-5 La integridad de entidad asegura que cada registro dentro de una tabla pueda identificarse de manera única. Para lograrlo, se utiliza una #[b clave primaria], la cual debe cumplir ciertas condiciones fundamentales:

    .bg-1
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema6/2.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Unicidad
                p.mb-0 Cada valor debe ser único dentro de la tabla.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema6/3.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center No duplicidad
                p.mb-0 No puede repetirse en diferentes registros.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema6/4.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center No nulidad
                p.mb-0 No admite valores nulos.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema6/5.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Identificación estable
                p.mb-0 Debe representar una identificación permanente de la entidad.

        p.mb-5 Por ejemplo, en una tabla de estudiantes, el número de documento puede funcionar como clave primaria, ya que identifica a cada persona sin ambigüedad y permite diferenciar un registro de otro dentro del sistema. Cuando estas condiciones no se cumplen, se presentan problemas de integridad como los siguientes: 

    .bg--img_03.mb-0
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema6/6.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Sin integridad").ajuste-cajaAcordion
              p.mb-3 Cuando la clave primaria no cumple las condiciones de unicidad y nulidad, se generan inconsistencias que impiden identificar correctamente cada registro.
              .row.align-items-center.ajuste-espacio
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Tabla 2.
                    span Registros sin integridad de entidad
                  .tabla-a
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Nombre
                          th.texto-left Email
                      tbody
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left 101
                          td.texto-left 102
                        tr
                          td.ajuste-border-tabla.texto-left 102
                          td.texto-left 102
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left 102
                          td.texto-left -
                        tr
                          td.ajuste-border-tabla.texto-left Null
                          td.texto-left -
                .col-xl-6.espacio-sm.mb-3
                  ul.fa-ul.estilo___ul-1.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Clave duplicada (102).
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Valor nulo (NULL).
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Registro no identificable.
            .row(titulo="Con integridad").ajuste-cajaAcordion
              p.mb-3 Cuando la clave primaria cumple las condiciones establecidas, cada registro puede identificarse de manera única y estable dentro del sistema.
              .row.align-items-center.ajuste-espacio
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Tabla 3.
                    span Registros con integridad de entidad
                  .tabla-a
                    table
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Nombre
                          th.texto-left Email
                      tbody
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left 101
                          td.texto-left 102
                        tr
                          td.ajuste-border-tabla.texto-left 102 
                          td.texto-left 103
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left 105
                          td.texto-left 104
                .col-xl-6.espacio-sm.mb-3
                  ul.fa-ul.estilo___ul-1.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Clave única.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Sin duplicados.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Sin nulos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-arrow-alt-circle-right
                      | Identificación estable.

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Integridad referencial

    p.mb-5 La integridad referencial garantiza que las relaciones entre tablas se mantengan correctas y coherentes. Esto implica que un dato registrado en una tabla dependiente debe existir previamente en la tabla principal a la cual hace referencia. Este principio se implementa mediante el uso de #[b claves foráneas], las cuales cumplen las siguientes funciones:

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img.ajuste-color-1
        figure
          img(src="@/assets/curso/tema6/7.svg", alt="" style="max-width: 220px").m-auto
      .bloque-texto-g__texto.p-5
        ul.fa-ul.mb-0.estilo___ul_bloque
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Conectar tablas relacionadas]. Establece el vínculo entre una tabla principal y una dependiente.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Evitar registros huérfanos]. Impide que existan datos asociados a elementos inexistentes.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Garantizar coherencia]. Mantiene consistencia entre entidades relacionadas.

    p.mb-0 #[b Por ejemplo], la tabla #[b Matrícula] no debería contener un registro que haga referencia a un ID de #[b Estudiante] inexistente en la tabla correspondiente. Esta regla asegura que todas las relaciones definidas en la base de datos sean válidas y verificables.

    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Reglas de validación de datos

    p.mb-5 Las reglas de validación permiten asegurar que únicamente se almacenen valores válidos dentro de la base de datos. Estas restricciones se configuran según los requerimientos del sistema y contribuyen a mantener la calidad de la información. Las principales formas de validación incluyen:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/8.svg', alt="" style="max-width: 100px").m-auto
          h3.text-center Rangos permitidos
          p.mb-0 Limitan los valores dentro de intervalos definidos.
      .col-lg-3.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/9.svg', alt="" style="max-width: 100px").m-auto
          h3.text-center Formatos específicos
          p.mb-0 Exigen que los datos cumplan una estructura determinada.
      .col-lg-3.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/10.svg', alt="" style="max-width: 100px").m-auto
          h3.text-center Valores obligatorios
          p.mb-0 Impiden que ciertos campos queden vacíos.
      .col-lg-3.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema6/11.svg', alt="" style="max-width: 100px").m-auto
          h3.text-center Restricciones de dominio
          p.mb-0 Definen conjuntos específicos de valores aceptados.
    
    p.mb-0 #[b Por ejemplo], un campo “Fecha de nacimiento” no debe admitir fechas futuras, y un campo “Correo electrónico” debe ajustarse a una estructura válida. Estas reglas previenen errores, mejoran la calidad de los datos y reducen el riesgo operativo dentro de la organización.

</template>

<script>
export default {
  name: 'Tema6',
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
