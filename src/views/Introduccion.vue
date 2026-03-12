<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center
      .col-xl
        p.mb-3 La gestión de la información se ha convertido en una capacidad esencial para cualquier organización, sin importar su tamaño o sector. La disponibilidad de datos confiables, organizados y accesibles define la manera en que se toman decisiones, se optimizan procesos y se mantienen operaciones coherentes dentro de un entorno tecnológico en permanente evolución.
        .row.align-items-center.m-0.mb-3.caja_intro(data-aos="fade-right")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/1.jpg", alt="" ).m-auto
          .col-xl
            p.mb-0 Este componente formativo aborda los elementos fundamentales que permiten comprender qué es una base de datos, cómo se diferencia un dato de la información y del conocimiento, y por qué estos conceptos constituyen la base de cualquier sistema informático. A través de explicaciones claras, se introduce al aprendiz en los tipos de bases de datos, sus componentes y la relación directa que mantienen con los sistemas computacionales que utilizan estos datos para operar.
        p.mb-0 El propósito de esta sección es ofrecer una base conceptual que facilite la comprensión no solo de qué son las bases de datos, sino también de para qué se utilizan y cómo permiten mejorar la productividad y la administración de la información en contextos reales. Este bloque se desarrolla mediante ejemplos descriptivos, explicaciones progresivas y el uso de ilustraciones que fortalecen la comprensión de conceptos técnicos.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/intro/2.png", alt="" ).m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
