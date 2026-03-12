<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Fundamentos y conceptos para le gestión técnica y estratégica de los datos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión inicial del aprendiz respecto a los conceptos fundamentales de datos, información, bases de datos, sistemas de información, SGBD, integridad, seguridad y eficiencia de la gestión de bases de datos en las organizaciones.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: 'Un dato se define como:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto organizado de información procesada',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una representación simbólica sin interpretar',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un resumen gráfico para análisis',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una base para generar conocimiento',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'La diferencia entre información y conocimiento radica en que el conocimiento:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un dato sin procesar',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es siempre almacenado en tablas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Surge de analizar y comprender la información',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No se relaciona con los datos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Un sistema de información se caracteriza por:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Integrar datos, personas, procesos y tecnología',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Usar bases de datos no estructuradas únicamente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Funcionar sin interacción humana',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exigir siempre modelos documentales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Las bases de datos estructuradas se caracterizan por:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitir solo almacenamiento de imágenes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No permitir relaciones entre datos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar formatos exclusivamente XML',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar los datos en tablas con filas y columnas',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'La optimización de consultas busca:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar usuarios duplicados',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la seguridad del sistema',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la eficiencia en la ejecución de consultas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar el uso de índices',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Un requisito no funcional de una base de datos es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar datos nuevos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener tiempos de respuesta adecuados',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Definir claves primarias',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear relaciones entre tablas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Un índice en una tabla permite:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el tamaño total de la base',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ocultar datos vulnerables',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acceder más rápido a la información',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar registros automáticamente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'La integridad referencial asegura que:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los registros puedan duplicarse libremente',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los índices se creen automáticamente',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las relaciones entre tablas sean consistentes',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las vistas nunca se editen',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'Un SGBD tiene como función principal:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear hardware para servidores',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administrar, almacenar y recuperar datos de manera estructurada',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Convertir datos en imágenes',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Generar reportes gráficos automáticamente',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Un componente fundamental de una base de datos es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El firewall del servidor',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El sistema operativo',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La tabla',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La red local',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
