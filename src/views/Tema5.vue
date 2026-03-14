<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Seguridad de la base de datos
    
    p.mb-5 La seguridad constituye uno de los pilares fundamentales en la administración de bases de datos. Los datos representan uno de los activos más valiosos de cualquier organización y, por ello, deben protegerse frente a accesos no autorizados, modificaciones indebidas, pérdidas de información o daños ocasionados por fallos de hardware y software. La seguridad no se limita al bloqueo de accesos; comprende un conjunto de mecanismos orientados a garantizar la #[b confidencialidad, integridad y disponibilidad] de la información.

    .row.align-items-center.m-0.caja_tema1-1.mb-5(data-aos="zoom-in")
      .col-xl-auto  
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema5/1.jpg", alt="" ).m-auto
      .col-xl
        p.mb-0 La protección debe abordarse desde múltiples dimensiones: quién accede a los datos, cómo accede, qué acciones puede realizar y bajo qué reglas opera el sistema para prevenir riesgos. Una política adecuada de seguridad define niveles de permisos, perfiles de usuario y estrategias que reduzcan la posibilidad de violaciones o manipulaciones indebidas.

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Control de acceso y permisos

    p.mb-5 El control de acceso determina quién puede ingresar a la base de datos y cuáles son las acciones permitidas para cada usuario. No todas las personas requieren los mismos privilegios, por lo que los SGBD permiten establecer roles y permisos diferenciados. A continuación, se presentan los tipos de permisos más comunes:

    .bg-1
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema5/2.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Lectura
                p.mb-0.text-center Permite consultar información sin modificarla.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema5/3.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Escritura
                p.mb-0.text-center Autoriza agregar o actualizar datos.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema5/4.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Ejecución
                p.mb-0.text-center Permite realizar operaciones específicas o ejecutar procedimientos almacenados.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema5/5.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Administración
                p.mb-0.text-center Otorga control total sobre la estructura y configuración del sistema.

        p.mb-0 Los roles agrupan estos permisos y se asignan según las responsabilidades de cada usuario. Esta organización evita que se realicen operaciones no autorizadas y disminuye el riesgo de errores. Una práctica recomendada es aplicar el #[b principio de mínimo privilegio], según el cual cada usuario debe contar únicamente con los permisos estrictamente necesarios para cumplir sus funciones.

        Separador
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Protección de la información

    p.mb-5 La protección de la información implica establecer medidas que prevengan su pérdida, manipulación o deterioro. Estas medidas pueden ser tecnológicas, administrativas o procedimentales, y actúan de manera complementaria para asegurar la continuidad operativa. Entre las prácticas más frecuentes se encuentran las siguientes:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/6.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Cifrado de datos
            p.mb-0 Protege la información mediante algoritmos que impiden su interpretación por personas no autorizadas.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/7.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Copias de seguridad
            p.mb-0 Permiten restaurar la base de datos ante fallos, errores humanos o desastres.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/8.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Auditorías
            p.mb-0 Registran actividades realizadas sobre la información e identifican acciones sospechosas.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/9.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Restricciones de modificación
            p.mb-0 Evitan el almacenamiento de valores inválidos o inconsistentes.

    p.mb-0 La implementación de estas prácticas reduce significativamente el riesgo de que la información se vea comprometida, incluso ante situaciones imprevistas.

    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Confidencialidad y disponibilidad de los datos

    p Dos principios esenciales en la seguridad de bases de datos son la confidencialidad y la disponibilidad. Ambos garantizan que la información esté protegida y, al mismo tiempo, accesible cuando sea necesario.
    p.mb-5.espacio-sm La siguiente tabla resume estos principios:

    .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema5/10.svg', alt='' style="max-width: 100px")
          .col
            h2 Confidencialidad
        p.mb-0 Asegura que solo personas autorizadas puedan acceder o manipular la información. Se logra mediante autenticación con contraseñas, certificados o claves, cifrado de comunicaciones, separación de funciones y políticas de acceso basadas en roles.
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.espacio-sm
        .row.d-flex.align-items-end.mb-4
          .col-auto(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema5/11.svg', alt='' style="max-width: 100px")
          .col
            h2 Disponibilidad
        p.mb-0 Garantiza que la información esté accesible cuando se requiera. Implica redundancia en los sistemas, configuraciones de alta disponibilidad, tolerancia a fallos, planes de contingencia y monitoreo permanente.
    
    p.mb-0 Una base de datos segura no solo protege los datos frente a amenazas, sino que también garantiza que los usuarios autorizados puedan acceder a ellos de manera oportuna y confiable.

</template>

<script>
export default {
  name: 'Tema5',
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
