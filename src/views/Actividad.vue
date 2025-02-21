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
      tema: 'Ensayos destructivos y no destructivos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conocimientos adquiridos sobre las técnicas, características y aplicaciones de los ensayos destructivos y no destructivos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de los ensayos destructivos y no destructivos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '<em>Garantizar el aspecto estético de las uniones soldadas.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '<em>Asegurar la resistencia e integridad de las soldaduras.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Reducir los costos de fabricación.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Identificar los materiales más económicos.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Según el documento, ¿qué técnica no destructiva utiliza ondas de alta frecuencia para detectar fallas internas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Tintas penetrantes.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Ultrasonido.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Partículas magnetizables.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Radiografía.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza a un ensayo destructivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '<em>Utiliza ondas acústicas para analizar materiales.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '<em>No altera las propiedades del material inspeccionado.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '<em>Produce alteraciones irreversibles en el material.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                '<em>Es menos costoso que los ensayos no destructivos.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de tinta penetrante requiere luz ultravioleta para la inspección?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Tintas a base de agua.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Tintas visibles con luz normal.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Tintas fluorescentes.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Tintas magnetizadas.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de hallazgo es causado por tensiones que exceden los esfuerzos mecánicos mínimos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Inclusiones sólidas.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Poros.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Grietas.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Falta de fusión.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué técnica no destructiva utiliza partículas de hierro para identificar discontinuidades?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Radiografía.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Partículas magnetizables.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Ultrasonido.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Tintas penetrantes.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué prueba destructiva evalúa la resistencia del material a esfuerzos de tracción?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Rotura Nick.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Tensión.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Charpy V-Notch.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Doblado guiado.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes es una discontinuidad que puede quedar atrapada en el metal fundido?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Porosidades.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Falta de fusión.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Inclusiones sólidas.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Tensión residual.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El ensayo de doblado guiado evalúa la maleabilidad del <em>material</em> y <em>califica</em> la habilidad del soldador.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La radiografía es una técnica destructiva que utiliza <em>rayos X</em> para inspeccionar discontinuidades internas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué técnica no destructiva emplea el principio de capilaridad para detectar discontinuidades?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Partículas magnetizables.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Tintas penetrantes.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Ultrasonido.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Radiografía.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué norma define la calidad como el grado en que un conjunto de características cumple con los requisitos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>ASME IX.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>ISO 14001.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>ISO 9000.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>AWS D1.1.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué ensayo destructivo utiliza una probeta con ranura y mide la resistencia al impacto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Rotura Nick.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Charpy V-Notch.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Tensión.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Doblado guiado.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de hallazgo ocurre cuando el metal base y el metal depositado no se fusionan completamente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Poros.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Grietas.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Falta de fusión.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Inclusiones sólidas.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué técnica no destructiva evalúa las uniones soldadas mediante galgas o calibres?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Tintas penetrantes.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Inspección visual.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Ultrasonido.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Radiografía.</em>',
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
