<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Rendimiento y eficiencia

    p.mb-5 Las bases de datos no solo deben garantizar seguridad e integridad; también deben operar con #[b rapidez y eficiencia]. El rendimiento influye directamente en la productividad de los usuarios que consultan o actualizan información. Cuando las consultas tardan demasiado, los procesos se ralentizan, se generan retrasos y la experiencia del usuario se ve afectada. El nivel de rendimiento depende de diversos factores técnicos y estructurales, los cuales se sintetizan a continuación:

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema7/1.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Estructura de las tablas
        p.mb-0 Una organización adecuada de los datos facilita búsquedas y actualizaciones eficientes.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema7/2.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Diseño de los índices
        p.mb-0 Índices bien definidos reducen el tiempo de respuesta en las consultas.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema7/3.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Calidad de las consultas
        p.mb-0 Consultas optimizadas disminuyen el consumo de recursos y aceleran los resultados.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema7/4.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text  Capacidad del hardware
        p.mb-0.text-center Procesador, memoria y almacenamiento impactan directamente en la velocidad de operación.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema7/5.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Concurrencia
        p.mb-0.text-center El manejo adecuado de accesos simultáneos evita bloqueos y disminución del desempeño.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema7/6.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Volumen de datos
        p.mb-0.text-center A mayor cantidad de registros, mayor exigencia sobre la estructura y optimización del sistema.

    p.mb-5 Una base de datos correctamente diseñada y administrada puede mantener un rendimiento óptimo incluso cuando gestiona miles o millones de registros, asegurando así continuidad operativa y eficiencia en los procesos organizacionales.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 5.
      span Optimización de bases de datos
    figure(data-aos="zoom-in").mb-2
      img(src='@/assets/curso/tema7/7.png', alt='Infografía sobre optimización de bases de datos orientada al rendimiento y la eficiencia, que integra factores como diseño estructural, carga y concurrencia, infraestructura de hardware, estrategias de ejecución y escalabilidad, gestión de grandes volúmenes de datos y mecanismos técnicos como particionado, distribución y compresión.').m-auto
    figcaption(data-aos="zoom-in").mb-5 #[b Nota.] Google (2024), NotebookLM.
    
    p La infografía explica que el desempeño de una base de datos depende de varios factores interrelacionados. Destaca que el diseño estructural, especialmente la organización de tablas e índices, constituye la base del éxito. También señala que la carga de trabajo y la concurrencia influyen directamente en la velocidad del sistema, así como la infraestructura de hardware, cuya capacidad física sostiene procesos ágiles y estables.

    p.mb-0.espacio-sm Además, presenta estrategias para mantener la eficiencia y la escalabilidad, como la optimización de consultas, la reorganización de índices y la gestión de grandes volúmenes de información mediante particionado, distribución y compresión. Resalta que la optimización no es una acción puntual, sino un proceso continuo que integra diseño, gestión técnica e infraestructura para garantizar rendimiento, estabilidad y crecimiento sostenido.

    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Optimización de consultas

    p.mb-5 La optimización de consultas es el proceso mediante el cual el SGBD determina la forma más eficiente de ejecutar una instrucción. Para ello, selecciona índices adecuados, analiza estadísticas internas y define las rutas de acceso más convenientes. Las consultas mal diseñadas pueden consumir recursos excesivos, generar bloqueos o afectar el rendimiento general del sistema. Por esta razón, es fundamental aplicar buenas prácticas como las siguientes:

    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Evitar búsquedas innecesariamente amplias")
        .row.align-items-center
          .col-lg
            h4 Evitar búsquedas innecesariamente amplias
            p.mb-0.text-center Reduce el volumen de datos procesados.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema7/8.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Filtrar datos desde el inicio")
        .row.align-items-center
          .col-lg
            h4 Filtrar datos desde el inicio
            p.mb-0.text-center Limita los resultados a la información estrictamente necesaria.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema7/9.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Usar índices adecuados")
        .row.align-items-center
          .col-lg
            h4 Usar índices adecuados
            p.mb-0.text-center Acelera la localización de registros relevantes.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema7/10.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Redactar consultas claras y específicas")
        .row.align-items-center
          .col-lg
            h4 Redactar consultas claras y específicas
            p.mb-0.text-center Disminuye ambigüedades y mejora la eficiencia de ejecución.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema7/11.jpg", alt="" style="max-width: 350px").m-auto

    p.mb-0 Una adecuada optimización permite reducir tiempos de respuesta y mejorar el uso de los recursos del sistema.

    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Manejo de grandes volúmenes de información

    p.mb-5 A medida que una base de datos crece, su diseño debe adaptarse para soportar el aumento del volumen de información. Los SGBD incorporan mecanismos que permiten mantener el desempeño incluso en escenarios de alta demanda. Entre las estrategias más relevantes se encuentran:

    .row.align-items-center.m-0.caja_tema1-1.mb-5(data-aos="zoom-in")
      .col-xl-auto  
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema7/12.jpg", alt="" ).m-auto
      .col-xl
        ul.fa-ul.estilo___ul.mb-0
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | #[b Particionamiento de tablas]. Permite distribuir tablas muy grandes en diferentes unidades de almacenamiento o discos, facilitando su gestión.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | #[b Distribución de datos en múltiples nodos]. Posibilita administrar información en infraestructuras amplias, como centros de datos completos.
          li.mb-1
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | #[b Gestión eficiente de archivos]. Optimiza el almacenamiento y acceso a grandes conjuntos de información.
          li.mb-0
            span.fa-li
              i.fas.fa-arrow-alt-circle-right
            | #[b Compresión de datos]. Reduce el espacio utilizado sin comprometer la disponibilidad.
    
    p.mb-0 El manejo adecuado de grandes volúmenes garantiza que la base de datos continúe respondiendo de manera eficiente en aplicaciones con alta carga operativa.
    
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Tiempo de respuesta del sistema

    p.mb-5 El tiempo de respuesta mide cuánto tarda el sistema en ejecutar una consulta o realizar una operación. Un tiempo elevado puede generar inconvenientes operativos, afectar la experiencia del usuario y provocar interrupciones en los procesos. Para mantener tiempos adecuados, se recomienda aplicar prácticas como las siguientes:

    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema7/13.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/14.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Creación eficiente de índices
                p.mb-0.text-center Mejora la rapidez en la recuperación de información.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/15.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Mantenimiento de estadísticas internas
                p.mb-0.text-center Permite al motor tomar decisiones óptimas de ejecución.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/16.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Optimización continua del motor
                p.mb-0.text-center Incluye la gestión de actualizaciones, parches o nuevas versiones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/17.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Uso de hardware adecuado
                p.mb-0.text-center Asegura capacidad suficiente para soportar la carga del sistema.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/18.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Eliminación de consultas redundantes
                p.mb-0.text-center Reduce consumo innecesario de recursos.

        p.mb-0 Un control constante del tiempo de respuesta favorece la continuidad operativa y la satisfacción de los usuarios.
    
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Escalabilidad y mantenimiento

    p.mb-5 La escalabilidad permite que la base de datos crezca sin afectar su rendimiento. Puede lograrse mediante diversas estrategias técnicas:

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/19.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 
        ul.fa-ul.mb-0.estilo___ul_bloque
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Aumento de recursos]. Incrementa capacidad de procesamiento y almacenamiento.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Distribución de datos]. Reparte la carga en múltiples componentes del sistema.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Optimización de procesos]. Mejora la eficiencia en la ejecución de operaciones.
          br
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Reorganización de índices]. Mantiene estructuras eficientes a medida que crecen los datos.

    p.mb-0 El mantenimiento comprende tareas programadas orientadas a revisar la integridad, reorganizar tablas, depurar registros innecesarios y asegurar el correcto funcionamiento del sistema. Un mantenimiento adecuado previene fallos y garantiza la continuidad operativa en el tiempo.

</template>

<script>
export default {
  name: 'Tema7',
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
