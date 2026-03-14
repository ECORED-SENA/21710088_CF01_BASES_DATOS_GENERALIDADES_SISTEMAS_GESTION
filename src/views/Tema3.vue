<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de Gestión de Bases de Datos (SGBD)

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema3/1.png", alt="" ).m-auto
      .col-xl
        p.mb-3 Los Sistemas de Gestión de Bases de Datos, conocidos como #[b SGBD], constituyen el núcleo del manejo de información en cualquier entorno tecnológico. Sin un SGBD, las bases de datos no podrían administrarse de forma eficiente, segura ni estructurada, ya que estas plataformas permiten #[b crear, modificar, consultar y proteger los datos] que requieren las aplicaciones y los usuarios.
        .row.align-items-center.mb-3.espacio-sm
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/2.svg", alt="" ).m-auto
          .col-xl
            p.mb-0 A medida que las organizaciones crecen, también aumenta la cantidad de información que deben gestionar. En este contexto, contar con un SGBD adecuado facilita mantener el orden, disminuir errores, garantizar la integridad de los datos y asegurar un acceso oportuno a la información.
        p.mb-0.espacio-sm Los SGBD se caracterizan por operar mediante una arquitectura interna diseñada para gestionar múltiples operaciones simultáneamente, atender solicitudes de diferentes usuarios y garantizar que cada transacción se ejecute de manera correcta. Esta capacidad permite sostener entornos donde la información circula de manera constante y requiere altos niveles de confiabilidad.

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 ¿Qué es un SGBD?

    p.mb-5 Un Sistema de gestión de bases de datos es un <i>software</i> especializado que permite administrar la información almacenada en una o varias bases de datos. Actúa como intermediario entre los usuarios, las aplicaciones y los datos, garantizando que cada operación se realice conforme a reglas predefinidas. Entre sus funciones principales se encuentran las siguientes:

    .bg-carrusel
      .px-5

        SlyderF(columnas="col-lg-6 col-xl-4").mb-5(data-aos="zoom-in")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/3.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Creación de bases de datos
            p.mb-0 Permite generar nuevas bases de datos según las necesidades del sistema.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/4.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Definición de tablas y estructuras internas
            p.mb-0 Establece la organización de los datos y sus características.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Almacenamiento de datos
            p.mb-0 Gestiona el registro y conservación de la información.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/6.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Actualización y modificación de registros
            p.mb-0 Facilita cambios en los datos cuando sea necesario.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Organización de relaciones entre tablas
            p.mb-0 Administra los vínculos estructurales entre diferentes conjuntos de datos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/8.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Recuperación de información mediante consultas
            p.mb-0 Permite obtener datos específicos según criterios definidos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/9.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Protección de datos mediante mecanismos de seguridad
            p.mb-0 Implementa controles para restringir accesos no autorizados.

        p.mb-0 Su propósito es asegurar que los datos se mantengan #[b organizados, accesibles y coherentes], independientemente del volumen o la complejidad de la información gestionada.

        Separador
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Funciones principales de un gestor de base de datos
    
    p.mb-5 A continuación, se presenta un pódcast sobre las funciones principales de un gestor de base de datos, abordando sus componentes esenciales y su importancia en la administración eficiente y segura de la información.

    .row.align-items-center.m-0
      .col-xl
        .row.align-items-center.caja-tema3(data-aos="zoom-in")
          .col-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/tema3/10.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Funciones principales de un gestor de base de datos"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/11.jpg" ).m-auto

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Arquitectura general de un motor de base de datos
    
    p.mb-5 Aunque existen diferencias entre los SGBD, todos comparten una arquitectura semejante basada en módulos internos que interactúan para procesar solicitudes, proteger la información y gestionar los recursos del sistema. Esta estructura modular permite atender múltiples operaciones de manera organizada y confiable. A continuación, se sintetizan los componentes principales de una arquitectura general:

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema3/12.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Procesador de consultas").ajuste-cajaAcordion
              p.mb-3 Interpreta las consultas enviadas por usuarios o aplicaciones y las convierte en un plan de ejecución. Es la puerta de entrada al SGBD. Interpreta SQL, valida la sintaxis, optimiza y genera el plan de ejecución. Aquí ocurren el <i>parsing</i>, la optimización y la ejecución lógica.
            .row(titulo="Administrador de almacenamiento").ajuste-cajaAcordion
              p.mb-3 Define cómo se guardan los datos en el disco, cómo se asigna el espacio y cómo se organizan físicamente. Incluye archivos de datos, índices, buffers en memoria, páginas y bloques.
            .row(titulo="Mecanismo de transacciones").ajuste-cajaAcordion
              p.mb-3 Garantiza que cada operación se ejecute de forma completa. Si alguna parte falla, revierte el proceso. Asegura las propiedades ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad), que garantizan la fiabilidad de las transacciones. Coordina la recuperación ante fallos.
            .row(titulo="Controlador de concurrencia").ajuste-cajaAcordion
              p.mb-3  Gestiona accesos simultáneos y evita conflictos cuando múltiples usuarios modifican información al mismo tiempo. Implementa bloqueos (#[i locks]), versiones (MVCC) o #[i timestamps]. Asegura consistencia sin sacrificar rendimiento.
            .row(titulo="Módulo de seguridad").ajuste-cajaAcordion
              p.mb-3 Administra usuarios, roles y políticas de acceso. Controla autenticación, permisos y define quién puede leer, escribir o modificar objetos. Aplica políticas de auditoría y protección de datos.

    p.mb-5 En conjunto, estos módulos permiten que el motor de base de datos funcione con <b>estabilidad, integridad y eficiencia</b>, incluso en entornos donde múltiples usuarios realizan operaciones de manera simultánea. A continuación, se presenta un esquema simplificado de la arquitectura general de un motor de base de datos, en el que se identifican los módulos principales y su organización funcional dentro del SGBD.

    .bg-2
      .px-5

        .row.justify-content-center
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Arquitectura lógica simplificada de un SGBD
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.svg', alt='Diagrama conceptual sobre la arquitectura interna de un sistema de gestión de bases de datos que integra procesador de consultas, administrador de transacciones, control de concurrencia, administrador de almacenamiento y gestor de seguridad y acceso. ').m-auto

        Separador
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Ejemplos de SGBD utilizados en el sector productivo

        p.mb-5 A continuación, se presenta un video sobre los Sistemas de gestión de bases de datos y su aplicación en el sector productivo, con el propósito de analizar sus características, ventajas y criterios de selección en distintos entornos organizacionales.

    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]: sistemas de Gestión de Bases de Datos (SGBD).

    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Ventajas del uso de bases de datos

    p.mb-5 Las bases de datos ofrecen múltiples beneficios en el ámbito empresarial y tecnológico. Permiten #[b organizar grandes volúmenes de información], automatizar procesos, mejorar la precisión de los datos y facilitar la toma de decisiones. A continuación, se desarrollan las principales ventajas que sustentan su adopción en distintos entornos organizacionales.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema3/19.svg" style="max-width: 60px").m-auto
      .col
        h3 Seguridad y control de la información

    p.mb-5 Una de las ventajas más relevantes es la seguridad. Los SGBD permiten aplicar reglas de acceso que determinan quién puede leer, modificar o eliminar la información. Para ello, incorporan diversos mecanismos de protección:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/20.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Cifrado de datos
            p.mb-0 Protege la información mediante técnicas que impiden su lectura no autorizada.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/21.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Auditorías
            p.mb-0 Permiten realizar seguimiento a las acciones efectuadas sobre la base de datos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/22.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Registros de actividad
            p.mb-0 Conservan evidencia de accesos y modificaciones realizadas por los usuarios. 

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema3/23.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Autenticación de usuarios
            p.mb-0 Verifica la identidad de quienes intentan acceder al sistema.

    p.mb-5 Estos mecanismos garantizan que la información permanezca protegida frente a accesos indebidos o acciones malintencionadas.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema3/19.svg" style="max-width: 60px").m-auto
      .col
        h3 Integridad y consistencia de los datos

    p.mb-5 La integridad se refiere a la exactitud y coherencia de la información almacenada. Las bases de datos aplican reglas que impiden situaciones como las siguientes:

    .bg-1
      .px-5

        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema3/24.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Duplicidad de información
                p.mb-0 Evitar registros repetidos que generen inconsistencias.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="zoom-in")
                    img(src='@/assets/curso/tema3/25.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Valores incorrectos
                p.mb-0 Garantizar que los datos cumplan condiciones previamente definidas.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema3/26.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Relaciones inconsistentes
                p.mb-0 Mantener coherencia entre tablas vinculadas.
          .col-xl-3.col-md-9(data-aos="zoom-in").espacio-sm
            .tarjeta_tema1-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema3/27.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Registros incompletos
                p.mb-0 Asegurar que los datos esenciales estén presentes.

        p.mb-5 La consistencia se logra mediante el uso de claves primarias, claves foráneas y reglas de validación que aseguran que los datos estén correctamente vinculados entre sí.

        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema3/19.svg" style="max-width: 60px").m-auto
          .col
            h3 Acceso concurrente y optimización de consultas

    p.mb-5 En cualquier organización, múltiples usuarios necesitan acceder o modificar información de manera simultánea. Las bases de datos permiten este acceso concurrente mediante mecanismos que cumplen las siguientes funciones:

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9(data-aos="zoom-in")
        .tarjeta_tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema3/28.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Sincronización de operaciones
            p.mb-0 Coordina accesos simultáneos sin generar inconsistencias.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/29.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Prevención de conflictos
            p.mb-0 Evita que dos procesos modifiquen la misma información de manera incompatible.
      .col-xl-4.col-md-9(data-aos="zoom-in").espacio-sm
        .tarjeta_tema1.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema3/30.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Garantía de integridad
            p.mb-0 Mantiene la coherencia de los datos durante operaciones simultáneas.

    p.mb-0 Adicionalmente, la optimización de consultas permite recuperar información con mayor rapidez mediante el uso de índices y planes de ejecución que reducen la carga del sistema y mejoran el rendimiento general.

    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Impacto de las bases de datos en las organizaciones

    p.mb-5 Las bases de datos constituyen un eje fundamental en el funcionamiento de los procesos organizacionales, ya que permiten #[b administrar y controlar grandes volúmenes de información] de manera estructurada y eficiente. Su implementación influye directamente en la forma como las entidades gestionan sus recursos informativos y toman decisiones. A continuación, se presenta una representación conceptual que sintetiza cómo la gestión adecuada de los datos transforma el desorden informativo en un activo estratégico para las organizaciones.

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
      h5 Figura 4.
      span El poder de los datos
    figure(data-aos="zoom-in").mb-2
      img(src='@/assets/curso/tema3/31.png', alt='Infografía  sobre la transformación de datos desde el caos organizacional hacia un activo estratégico, que integra problemas de gestión deficiente, pilares de implementación como estructura, calidad e integración, y beneficios como toma de decisiones basada en análisis, optimización operativa, seguridad y crecimiento empresarial. ').m-auto
    figcaption(data-aos="zoom-in").mb-5 #[b Nota.] Google (2024), NotebookLM.

    p.mb-3 La figura explica, de manera integral, cómo la gestión adecuada de los datos transforma la información desorganizada en un recurso estratégico para las organizaciones. El mensaje central es que los datos, por sí solos, no generan valor. Cuando se administran sin control, producen desorden, errores, riesgos de seguridad y decisiones poco fundamentadas. Sin embargo, cuando existe una estructura clara, políticas definidas y herramientas tecnológicas adecuadas, los datos se convierten en un activo estratégico que impulsa el crecimiento empresarial.

    p.mb-5 La propuesta global de la infografía plantea un proceso de transformación: pasar del caos informativo a una gestión organizada basada en reglas, validaciones, seguridad y análisis. Este cambio permite mejorar la calidad de la información, optimizar procesos, fortalecer la seguridad y respaldar la toma de decisiones con evidencia confiable.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema3/19.svg" style="max-width: 60px").m-auto
      .col
        h3 Competitividad y productividad organizacional

    p.mb-5 La competitividad de una organización se relaciona directamente con su capacidad para utilizar información pertinente, precisa y oportuna. En este contexto, las bases de datos fortalecen la productividad al optimizar el acceso, la gestión y el análisis de la información dentro de los procesos empresariales. A continuación, se sintetizan los principales aportes de las bases de datos a la productividad organizacional:

    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Recuperación rápida de información")
        .row.align-items-center
          .col-lg
            h4 Recuperación rápida de información
            p.mb-0 Permite acceder a datos en segundos, agilizando la toma de decisiones.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/32.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Automatización de procesos")
        .row.align-items-center
          .col-lg
            h4 Automatización de procesos
            p.mb-0 Sustituye tareas manuales repetitivas, reduciendo tiempos y esfuerzo operativo.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/33.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Integración de datos de distintas áreas")
        .row.align-items-center
          .col-lg
            h4 Integración de datos de distintas áreas
            p.mb-0 Facilita una gestión unificada de la información organizacional.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/34.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Reducción de errores manuales")
        .row.align-items-center
          .col-lg
            h4 Reducción de errores manuales
            p.mb-0 Disminuye fallos derivados de la transcripción o manipulación manual de datos.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/35.jpg", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Análisis de tendencias y patrones")
        .row.align-items-center
          .col-lg
            h4 Análisis de tendencias y patrones
            p.mb-0 Permite identificar comportamientos que apoyan decisiones estratégicas.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/36.jpg", alt="" style="max-width: 350px").m-auto

    p.mb-5 Cuando los datos se encuentran organizados, la empresa puede responder con mayor rapidez a los cambios del entorno, ajustar estrategias, mejorar la atención al cliente y optimizar el uso de sus recursos. Por ejemplo, un sistema de inventario basado en una base de datos relacional permite controlar existencias, prever faltantes y programar pedidos de manera eficiente, evitando interrupciones en la cadena de suministro y fortaleciendo la operación general.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/37.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Asimismo, los sistemas automatizados sustentados en bases de datos permiten que las actividades repetitivas se ejecuten con mayor agilidad, liberando tiempo para que las personas se concentren en tareas estratégicas. Todo ello se traduce en #[b mayor eficiencia operativa y fortalecimiento de la capacidad competitiva] de la organización.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema3/19.svg" style="max-width: 60px").m-auto
      .col
        h3 Toma de decisiones basada en información
    
    .row.align-items-center
      .col-xl
        .row.align-items-center.m-0.mb-3.caja_tema3(data-aos="fade-right")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/38.jpg", alt="" ).m-auto
          .col-xl
            p.mb-0 La toma de decisiones constituye uno de los procesos más relevantes dentro de cualquier organización. Cuando no se dispone de datos confiables, las decisiones se sustentan en intuiciones o información incompleta, lo que incrementa el riesgo de error.
        p.mb-0 En este contexto, las bases de datos permiten fundamentar las decisiones al concentrar información histórica, actual y procesada que facilita el análisis de situaciones con mayor claridad. Los analistas, coordinadores o directivos pueden consultar información en tiempo real para evaluar comportamientos, detectar tendencias o proyectar escenarios. Algunos ejemplos de aplicación son los siguientes:
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema3/39.png", alt="" ).m-auto
    
    .row.align-items-center.mb-5
      .col-xl
        .caja_tema3-1(data-aos="fade-right")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Un sistema de ventas puede mostrar qué productos tienen mayor rotación.
            li.mb-1
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Un sistema académico puede identificar tasas de deserción.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Un sistema de salud puede determinar el número de pacientes atendidos por día.
      .col-xl-auto(data-aos="zoom-in")   
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema3/40.jpg", alt="" ).m-auto
      .col-xl.espacio-sm
        figure.d-none.d-xl-block.mb-2(data-aos="fade-left")
          img(src="@/assets/curso/tema3/41.svg", alt='' style="max-width: 70px")
        p.mb-0 Estas consultas, construidas sobre bases de datos robustas, permiten adoptar decisiones precisas y oportunas. La posibilidad de acceder a información confiable en el momento requerido reduce riesgos y fortalece la planeación organizacional, contribuyendo a una gestión más estratégica y eficiente.

    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema3/19.svg" style="max-width: 60px").m-auto
      .col
        h3 Introducción a la normatividad sobre datos
    
    p.mb-5 Las organizaciones deben gestionar la información conforme a normas técnicas, administrativas y legales que garanticen la #[b protección, integridad y uso adecuado de los datos]. La normatividad establece criterios que orientan la forma en que la información debe almacenarse, procesarse y resguardarse dentro de la entidad. A continuación, se presentan los principales tipos de disposiciones que pueden regular la gestión de datos:

    .row.justify-content-center.mb-5
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Lineamientos internos de organización de la información").ajuste-cajaAcordion
            .col-xl-8
            p.mb-0 Definen criterios institucionales para clasificar, almacenar y administrar datos.
            .col-xl-3.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/42.svg', alt='').m-auto 
          .row(titulo="Leyes de protección de datos personales").ajuste-cajaAcordion
            .col-xl-8
            p.mb-0 Regulan el tratamiento de información personal y garantizan derechos de los titulares.
            .col-xl-4.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/43.svg', alt='').m-auto 
          .row(titulo="Estándares de calidad para documentación").ajuste-cajaAcordion
            .col-xl-8
            p.mb-0 Aseguran coherencia, trazabilidad y control en los procesos documentales.
            .col-xl-4.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/44.svg', alt='').m-auto 
          .row(titulo="Normas técnicas internacionales").ajuste-cajaAcordion
            .col-xl-8
            p.mb-0 Establecen buenas prácticas reconocidas globalmente para la gestión de información.
            .col-xl-4.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/45.svg', alt='').m-auto  
          .row(titulo="Políticas de retención y seguridad").ajuste-cajaAcordion
            .col-xl-8
            p.mb-0 Determinan tiempos de conservación y mecanismos de protección de los datos.
            .col-xl-4.mb-3
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema3/46.svg', alt='').m-auto 

    p.mb-0 El cumplimiento normativo garantiza que la información se administre de manera responsable y previene vulneraciones que puedan afectar la operación o la reputación de la organización. Por esta razón, las bases de datos no deben diseñarse únicamente con criterios de funcionalidad, sino también considerando la observancia de reglas y políticas institucionales que respalden una gestión segura y ética de la información.

</template>

<script>
export default {
  name: 'Tema3',
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
