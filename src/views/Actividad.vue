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
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: '¡VUELVA A INTENTARLO!',
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
              texto: 'Garantizar el aspecto estético de las uniones soldadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Asegurar la resistencia e integridad de las soldaduras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir los costos de fabricación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Identificar los materiales más económicos.',
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
              texto: 'Tintas penetrantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ultrasonido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Partículas magnetizables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Radiografía.',
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
              texto: 'Utiliza ondas acústicas para analizar materiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No altera las propiedades del material inspeccionado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Produce alteraciones irreversibles en el material.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es menos costoso que los ensayos no destructivos.',
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
              texto: 'Tintas a base de agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tintas visibles con luz normal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tintas fluorescentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tintas magnetizadas.',
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
              texto: 'Inclusiones sólidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Poros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Grietas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Falta de fusión.',
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
              texto: 'Radiografía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Partículas magnetizables.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ultrasonido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tintas penetrantes.',
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
              texto: 'Rotura <em>Nick.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tensión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '<em>Charpy V-Notch.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Doblado guiado.',
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
              texto: 'Porosidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falta de fusión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inclusiones sólidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tensión residual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El ensayo de doblado guiado evalúa la maleabilidad del material y califica la habilidad del soldador.',
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
            'La radiografía es una técnica destructiva que utiliza rayos X para inspeccionar discontinuidades internas.',
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
              texto: 'Partículas magnetizables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tintas penetrantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ultrasonido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Radiografía.',
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
              texto: 'ASME IX.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ISO 14001.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'ISO 9000.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'AWS D1.1.',
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
              texto: 'Rotura <em>Nick.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Charpy V-Notch.</em>',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Doblado guiado.',
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
              texto: 'Poros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Grietas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Falta de fusión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inclusiones sólidas.',
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
              texto: 'Tintas penetrantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inspección visual.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ultrasonido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Radiografía.',
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
