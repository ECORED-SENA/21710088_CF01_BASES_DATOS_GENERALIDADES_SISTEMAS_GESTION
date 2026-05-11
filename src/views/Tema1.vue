<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Bases de datos: conceptos fundamentales

    .row.align-items-center.mb-5
      .col-xl
        .caja_tema1(data-aos="fade-right")
          p.mb-0 Las bases de datos están presentes en múltiples actividades del entorno digital. Cada vez que una persona consulta su historia médica, realiza una compra en línea, revisa el saldo de una cuenta bancaria o verifica la disponibilidad de un producto, interactúa con una base de datos.
      .col-xl-auto(data-aos="zoom-in")   
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/1.jpg", alt="" ).m-auto
      .col-xl.espacio-sm
        figure.d-none.d-xl-block.mb-2(data-aos="fade-left")
          img(src="@/assets/curso/tema1/2.svg", alt='' style="max-width: 70px")
        p.mb-0 Para comprender su funcionamiento, es necesario dominar los conceptos que constituyen sus fundamentos: #[b datos, información y registros]. Estos elementos se articulan para que las organizaciones transformen insumos básicos en recursos útiles que respaldan la operación y la toma de decisiones.

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto de información, datos y registros

    p.mb-5 Antes de profundizar en el funcionamiento de una base de datos, resulta indispensable diferenciar con precisión los conceptos de dato, información y registro, ya que constituyen la estructura lógica sobre la cual se organiza cualquier sistema de almacenamiento. A continuación, se presentan sus características esenciales de manera comparativa:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/3.svg', alt="" style="max-width: 100px").m-auto
          h3.text-center Dato
          p.mb-0 Representación simbólica de un valor, hecho o característica. Carece de significado completo hasta que se ubica en un contexto. Puede ser un número, palabra, imagen u otro elemento básico. Ejemplo: “25”.
      .col-lg-4.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/4.svg', alt="" style="max-width: 100px").m-auto
          h3.text-center Información
          p.mb-0 Resultado de organizar y procesar datos, otorgándoles estructura, significado y propósito. Permite comprender situaciones y apoyar decisiones. Ejemplo: “25 °C” indica la temperatura de un lugar.
      .col-lg-4.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/5.svg', alt="" style="max-width: 100px").m-auto
          h3.text-center Registro
          p.mb-0 Conjunto coherente de datos relacionados que describen una entidad específica. Cada elemento individual constituye un campo, y el conjunto integrado conforma el registro.
    
    p.mb-5 Esta diferenciación permite comprender cómo los sistemas digitales estructuran los contenidos y garantizan coherencia en el almacenamiento. En una base de datos de clientes, por ejemplo, el nombre, número de identificación, dirección y teléfono corresponden a #[b datos individuales]. Cuando estos se integran en una sola ficha que describe a una persona determinada, constituyen un #[b registro].

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/6.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En un sistema de matrícula educativa, el número de documento del estudiante funciona como dato; el historial académico corresponde a información organizada; y la ficha completa del estudiante representa el registro consolidado. En consecuencia, las bases de datos no solo almacenan datos aislados, sino que estructuran información significativa mediante registros organizados que permiten gestionar conocimiento dentro de las organizaciones.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Diferencia entre dato, información y conocimiento

    p.mb-5 La distinción entre #[b dato, información y conocimiento] permite comprender con mayor profundidad el propósito de las bases de datos dentro de las organizaciones. Estos tres niveles representan un proceso progresivo de transformación que va desde elementos aislados hasta la toma de decisiones fundamentadas. A continuación, se sintetiza su diferencia conceptual:

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .tarjeta_tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/7.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Dato
            p.mb-0 Materia prima sin interpretar. Es un valor aislado que carece de significado completo hasta que se contextualiza.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/8.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Información
            p.mb-0 Resultado de organizar y contextualizar un conjunto de datos. Posee significado y permite describir una situación específica.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/9.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Conocimiento
            p.mb-0 Surge cuando la información es analizada, comprendida y aplicada para generar decisiones, conclusiones o acciones estratégicas.
    
    p.mb-5 Esta progresión evidencia que las bases de datos no solo almacenan datos, sino que posibilitan la construcción de información y el desarrollo de conocimiento organizacional. Un ejemplo sencillo permite comprender esta relación de manera integrada:

    .bg-1
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-10
            .row.justify-content-center
              .col-xl-4.col-md-9(data-aos="zoom-in")
                .tarjeta_tema1-1.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="fade-right")
                        img(src='@/assets/curso/tema1/11.svg', alt="" style="max-width: 90px").m-auto
                    h4.text-center Dato
                    ul.fa-ul.estilo-ul.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | 87.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | Valor sin contexto.
              .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
                .tarjeta_tema1-1.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="zoom-in")
                        img(src='@/assets/curso/tema1/12.svg', alt="" style="max-width: 90px").m-auto
                    h4.text-center Información
                    ul.fa-ul.estilo-ul.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | 87 estudiantes inscritos en el curso del mes actual.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | Datos procesados con significado.
              .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
                .tarjeta_tema1-1.h-100
                  .row.justify-content-center.mb-3
                    .col-7
                      figure.mb-4(data-aos="fade-left")
                        img(src='@/assets/curso/tema1/13.svg', alt="" style="max-width: 90px").m-auto
                    h4.text-center Conocimiento
                    ul.fa-ul.estilo-ul.mb-0
                      li.mb-1
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | La inscripción aumentó un 15 % respecto al mes anterior, lo que indica un mayor interés en la oferta formativa.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-arrow-alt-circle-right
                        | Comprensión aplicada y patrones.

        p.mb-0 Las #[b bases de datos permiten administrar datos] para #[b generar información], pero el #[b conocimiento depende] de quién interpreta esos resultados y cómo los usa.

        Separador
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Información como activo estratégico en las empresas

    p.mb-5 En los entornos organizacionales, la #[b información] se reconoce como un #[b activo estratégico], ya que constituye un recurso intangible que impacta directamente la competitividad, la eficiencia operativa y la sostenibilidad empresarial. A diferencia de otros recursos, su valor aumenta cuando se gestiona adecuadamente mediante sistemas estructurados, como las bases de datos. La información estratégica permite a las empresas:

    .row.justify-content-center.mb-5
      .col-xl-2.col-md-9(data-aos="zoom-in")
        .tarjeta_tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/14.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 Tomar decisiones basadas en evidencia, reduciendo la incertidumbre.
      .col-xl-2.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/14.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 Identificar tendencias y comportamientos, tanto del mercado como de los clientes.
      .col-xl-2.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/14.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 Evaluar el desempeño de procesos, mediante indicadores y métricas.
      .col-xl-2.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/14.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 Anticipar problemas y oportunidades, fortaleciendo la capacidad de respuesta.
      .col-xl-2.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/14.svg', alt="" style="max-width: 100px").m-auto
            p.mb-0 Optimizar recursos, al asignarlos con mayor precisión.

    p.mb-5 La siguiente figura sintetiza cómo la #[b información], cuando es gestionada estratégicamente, se convierte en el eje que impulsa la innovación, la eficiencia, la toma de decisiones y, en consecuencia, el crecimiento y la ventaja competitiva de las organizaciones.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 1.
      span Información: activo estratégico de las empresas
    figure(data-aos="zoom-in").mb-5
      img(src='@/assets/curso/tema1/15.png', alt='Ilustración conceptual sobre gestión estratégica de la información que integra recopilación y análisis de datos, innovación, eficiencia operativa y toma de decisiones como impulsores de ventaja competitiva, crecimiento y éxito organizacional.').m-auto

    p.mb-5 Cuando la información se encuentra organizada en bases de datos, se optimizan las consultas, se automatizan procesos y se minimizan errores derivados de registros manuales o documentos dispersos. Esta organización estructurada garantiza coherencia, integridad y disponibilidad de los datos.

    .row.align-items-center.m-0.caja_tema1-1(data-aos="zoom-in")
      .col-xl-auto  
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/16.jpg", alt="" ).m-auto
      .col-xl
        p.mb-0 Una empresa que dispone de información actualizada puede planificar con mayor precisión sus compras, calcular inventarios necesarios, ofrecer un servicio más eficiente y fortalecer la experiencia del cliente. En consecuencia, la administración de bases de datos se convierte en una función crítica dentro de cualquier unidad organizacional que dependa de la tecnología para su operación y crecimiento sostenible.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
