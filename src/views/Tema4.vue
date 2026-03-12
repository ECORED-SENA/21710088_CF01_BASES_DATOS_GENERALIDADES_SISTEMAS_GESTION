<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Características funcionales de una base de datos

    p.mb-5 Las bases de datos se caracterizan por ser sistemas que permiten #[b almacenar, organizar y gestionar datos de manera eficiente.] No es suficiente con disponer de información; esta debe estar estructurada conforme a las necesidades operativas de la organización y vinculada a los procesos que requieren consultarla o modificarla.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img.ajuste-color
        figure
          img(src="@/assets/curso/tema4/1.svg", alt="" style="max-width: 220px").m-auto
      .bloque-texto-g__texto.p-4
        p.mb-0 Las características funcionales permiten determinar cómo debe comportarse una base de datos para cumplir su propósito dentro de una aplicación o sistema. Comprenden aspectos técnicos relacionados con la estructura, el rendimiento, la seguridad y el acceso a la información. Estas características se clasifican en requisitos funcionales y no funcionales.

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Requisitos funcionales y no funcionales

    p.mb-5 Los requisitos funcionales describen lo que la base de datos debe hacer, mientras que los no funcionales establecen cómo debe comportarse para garantizar calidad y desempeño. A continuación, se presenta una comparación entre ambos tipos de requisitos:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Requisitos funcionales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/2.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Requisitos funcionales
            p.mb-0 Definen las funciones indispensables del sistema. Incluyen registrar datos de manera organizada, permitir consultas y reportes, actualizar registros según necesidades de la aplicación, relacionar entidades mediante claves primarias y foráneas y controlar la integridad referencial. Por ejemplo, en un sistema de biblioteca, determinan cómo se registran libros, usuarios y préstamos, y cómo se relacionan entre sí.

      .py-3.py-md-4(titulo="Requisitos no funcionales")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/3.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Requisitos no funcionales
            p.mb-0 Describen atributos de calidad del sistema, como tiempos de respuesta, disponibilidad, escalabilidad, rendimiento y seguridad. Por ejemplo, pueden establecer que las consultas se ejecuten en menos de dos segundos o que el sistema soporte cien usuarios simultáneos sin afectar el rendimiento.

    p.mb-0 La adecuada definición de estos requisitos garantiza que la base de datos no solo cumpla su función operativa, sino que también mantenga niveles adecuados de eficiencia, estabilidad y seguridad dentro del entorno organizacional.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Identificación de entidades y atributos
    
    .row.align-items-center.mb-5
      .col-xl
        p La identificación de entidades constituye una de las actividades principales en el diseño de una base de datos. Una entidad es un elemento significativo para la organización, como un cliente, un producto o un empleado. Cada entidad se compone de atributos, que describen sus características y permiten diferenciarla dentro del sistema.
        p.mb-0.espacio-sm Por ejemplo, en un sistema académico, la entidad #[b Estudiante] puede incluir atributos como nombre, identificación, correo electrónico y teléfono. De igual manera, la entidad #[b Curso] puede incorporar atributos como código, nombre y duración. Una adecuada identificación de entidades y atributos evita duplicidades, facilita la integración de procesos y permite construir modelos relacionales sólidos. Para comprender esta relación de forma estructurada, se presenta el siguiente ejemplo:
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema4/4.jpg", alt="" ).m-auto
    
    .bg-2
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Ejemplo de entidades y atributos
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Entidad
                    th.ajuste-border-tabla.texto-left Descripción
                    th.texto-left Atributos principales
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Estudiante]
                    td.ajuste-border-tabla.texto-left Persona matriculada en una institución
                    td.texto-left ID, nombre, correo, teléfono
                  tr
                    td.ajuste-border-tabla.texto-left #[b Curso]
                    td.ajuste-border-tabla.texto-left Actividad académica ofrecida
                    td.texto-left Código, nombre, duración
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Matrícula]
                    td.ajuste-border-tabla.texto-left Relación entre estudiante y curso
                    td.texto-left ID matrícula, ID estudiante, ID curso, fecha

        p.mb-0 Este esquema evidencia cómo las entidades representan elementos centrales del sistema, mientras que los atributos detallan sus propiedades y permiten establecer relaciones entre ellas.
          
        Separador
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Acceso eficiente a los datos (indexación, organización secuencial)

        p.mb-5 El acceso eficiente a los datos es esencial para garantizar que una base de datos funcione adecuadamente incluso cuando gestiona grandes volúmenes de información. Para lograrlo, se emplean técnicas como la indexación y la organización secuencial, las cuales optimizan el tiempo de respuesta y el rendimiento general del sistema. A continuación, se describen ambas técnicas:

        TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
          .tarjeta.color-acento-botones--borde.p-4(titulo="Indexación")
            h4 Indexación
            p.mb-0 Utiliza estructuras que permiten acceder rápidamente a los datos sin recorrer toda la tabla. Funciona de manera similar al índice de un libro, facilitando la localización de información específica. Puede aplicarse sobre claves primarias, claves foráneas o columnas utilizadas frecuentemente en consultas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Organización secuencial")
            h4 Organización secuencial
            p.mb-0 Consiste en almacenar los datos siguiendo un orden determinado, como fechas o identificadores numéricos. Este método agiliza las búsquedas cuando la información responde a un criterio lógico predefinido.

    p.mb-0 Ambas estrategias contribuyen significativamente a mejorar el rendimiento del sistema y permiten que los usuarios obtengan resultados en tiempos adecuados, incluso en entornos con alta demanda de consultas.

</template>

<script>
export default {
  name: 'Tema4',
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
