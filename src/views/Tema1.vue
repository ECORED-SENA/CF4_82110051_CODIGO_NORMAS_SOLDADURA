<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Métodos de control de calidad según criterios de aceptación o rechazo en los códigos
    
    .row
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p.espacio Según el modelo de la norma ISO 9000, la calidad es el "grado en el que un conjunto de características inherentes cumple con los requisitos". Estos requisitos representan necesidades o expectativas generalmente implícitas u obligatorias. Una vez firmado el contrato, estos requisitos pasan a ser mandatorios para las partes involucradas.
          .row.bg-c4.mb-3.ms-0
            .col-auto.align-items-right.ps-0
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img1.svg', alt='' style="width: 130px").m-auto
            .col
              .p-3.h-100.align-items-center.pt-4
                p.mb-0 En el ámbito de la soldadura, los documentos normativos establecen requisitos específicos según el tipo de producto. Por ejemplo, las exigencias para fabricar un recipiente de contención de un reactor nuclear son muy diferentes a las de un edificio industrial destinado al almacenamiento.
      .col-lg-4.order-1.order-lg-2.mb-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='').m-auto   
    
    .row.ms-0.mb-0
      .col-lg-4.ps-0.mb-3(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema1/img2.png', alt='' style="width: 400px").m-auto
      .col-1.align-items-center(data-aos="fade-up")
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img2.svg', alt='', style="width:70px").m-auto   
      .col-lg-7(data-aos="fade-left")
        p Los contratistas o subcontratistas que trabajan con estructuras metálicas están obligados a garantizar que los diseños, cálculos, materiales y juntas soldadas cumplan con las expectativas del cliente. Para ello, se aplican diversas técnicas de aseguramiento de la calidad, tanto destructivas como no destructivas, realizadas por personal capacitado, certificado y entrenado. Esto asegura que los informes generados tengan validez legal en Colombia y que los procesos de soldadura sean trazables.                    
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Tipos de ensayos
    .row.mb-0.my-0
      .col-12
        p(data-aos="fade-right") En la industria de aseguramiento de la calidad para uniones soldadas, los ensayos se clasifican en dos tipos principales: los que no afectan de forma permanente la estructura o ensamblaje, denominados ensayos no destructivos, y aquellos que provocan alteraciones irreversibles en el material, conocidos como ensayos destructivos.
    
    .row.bg-c5
      .col-lg-12
        .p-5
          .container-svg.mb-4(data-aos="fade-right")
            .contanier-svg
              img(src="@/assets/curso/tema1/img3.svg")
            .cont-text 
              h3 Ensayos no destructivos 
          
          .row
            .col-lg-12.ps-0   
              p.mb-2.mt-4 Los ensayos no destructivos (<em>END</em>) son procedimientos que no alteran de forma permanente las propiedades físicas, químicas, mecánicas o dimensionales del material. Basados en fenómenos físicos como ondas electromagnéticas, acústicas y elásticas, así como en la emisión de partículas subatómicas y la capilaridad, estos ensayos buscan detectar discontinuidades sin dañar la pieza sometida a prueba.
            .my-0
              .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
                .bloque-texto-g__img(
                  :style="{'background-image': `url(${require('@/assets/curso/tema1/img4.png')})`}"
                )
                .bloque-texto-g__texto.p-4
                  p.mb-0 Los ensayos no destructivos (<em>END</em>) son procedimientos que no alteran de forma permanente las propiedades físicas, químicas, mecánicas o dimensionales del material. Basados en fenómenos físicos como ondas electromagnéticas, acústicas y elásticas, así como en la emisión de partículas subatómicas y la capilaridad, estos ensayos buscan detectar discontinuidades sin dañar la pieza sometida a prueba.
    
    .row.bg-c9.mb-5
      .col-12
        .p-5
          .tarjeta.bg-white(data-aos="fade-up")
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row
                  .col-lg-6.pe-5
                    p #[b Visual]
                    p.mb-0 Se utiliza la inspección visual de las uniones soldadas mediante galgas o calibres. El inspector debe tener agudeza visual 20-20 (natural o corregida) y no ser daltónico. Se realiza antes, durante y después de la soldadura.
                  .col-lg-6.bg-c10.px-5.py-3
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 1.] Visual
                    figure
                      img(src='@/assets/curso/tema1/img6.png', alt='Ilustraciones mostrando medición de ángulos y espesores con herramientas: una herramienta de medición se usa para verificar el ángulo en una soldadura y el espesor de un material al tope.' style="width: 400px").m-auto
                      figcaption.mt-2 #[b Nota. ] Visual (s.f.). [Imagen].
                .row
                  .col-lg-6.pe-5
                    p #[b Tintas penetrantes]
                    p Utiliza el principio de capilaridad para detectar discontinuidades superficiales. Las tintas penetrantes, visibles bajo luz normal o ultravioleta, se extraen con un revelador, formando una indicación visible.
                  .col-lg-6.bg-c10.px-5.py-3
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 2.] Tintas penetrantes
                    figure
                      img(src='@/assets/curso/tema1/img7.png', alt='Secuencia de pasos para inspección con líquido penetrante: aplicación del líquido penetrante, remoción del exceso y revelado para detectar grietas en la superficie del material.' style="width: 400px").m-auto
                      figcaption.mt-2 #[b Nota. ] Tintas penetrantes (s.f.). [Imagen].
                .row
                  .col-lg-6.pe-5
                    p #[b Partículas magnetizables]
                    p Consiste en magnetizar la pieza y aplicar partículas magnéticas (polvo fino de hierro). Las partículas se agrupan en puntos de discontinuidad, facilitando la detección de defectos.
                  .col-lg-6.bg-c10.px-5.py-4
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 3.] Partículas magnetizables
                    figure
                      img(src='@/assets/curso/tema1/img8.png', alt='Representación de flujo magnético en un material entre polos norte y sur, destacando una grieta central que altera el flujo magnético, ilustrando una técnica de detección.' style="width: 400px").m-auto
                      figcaption.mt-2 #[b Nota. ] Partículas magnetizables (s.f.). [Imagen].
                .row
                  .col-lg-6.pe-5
                    p #[b Ultrasonido]
                    p Emplea ondas de alta frecuencia que atraviesan el material y se reflejan en discontinuidades. Los ecos generados permiten localizar fallas internas y superficiales.
                  .col-lg-6.bg-c10.px-5.py-4
                    .titulo-sexto.color-acento-contenido.mb-3
                      p.mb-0 #[b Figura 4.] Ultrasonido
                    figure
                      img(src='@/assets/curso/tema1/img9.png', alt='Esquema de inspección ultrasónica, mostrando dos trayectorias ultrasónicas (TU I y TU II) que se cruzan en un material con referencia a la norma IRAM 764.' style="width: 400px").m-auto
                      figcaption.mt-2 #[b Nota. ] Ultrasonido (s.f.). [Imagen].
                .row
                  .col-lg-6.pe-5
                    p #[b Radiografía X]
                    p Usa radiación ionizante (rayos X o Gamma) para atravesar la pieza y detectar defectos internos. La variación de densidad en la película radiográfica revela discontinuidades.
                  .col-lg-6.bg-c10.px-5.py-4
                    figure
                      img(src='@/assets/curso/tema1/img10.png', alt='').m-auto
    
    .row
      .col-lg-5
        .container-svg.my-4(data-aos="fade-right")
          .contanier-svg
            img(src="@/assets/curso/tema1/img3.svg")
          .cont-text 
            h3 Ensayos destructivos 

      .row
        .col-12.ps-0   
          p.mb-5.mt-4 Los ensayos destructivos son pruebas que modifican de manera irreversible las propiedades del material. Estas pruebas son esenciales para evaluar la resistencia y calidad del material, así como las uniones soldadas.
  
    .row.mb-4
      .col-lg-6.col-lg-6.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta--boton.color-adicional-1
          .row.justify-content-center
            .col-7.bg-c11
              .row.d-flex.justify-content-center
                .col-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 5.] Doblado guiado
                  figure
                    img(src='@/assets/curso/tema1/img11.png', alt='Diagrama que ilustra el centro de soldadura de una pieza, indicando las dimensiones relativas con variables "D" y "T". Se destacan los rodillos laterales y las distancias específicas. ', style="width: 470px").m-auto
                    figcaption.mt-2 #[b Nota. ] Doblado guiado (s.f.). [Imagen].
          .row
            .col.px-5
              h4.text-right Doblado guiado
              p.text-small.mb-5 Se aplica una carga a la probeta hasta doblarla completamente en forma de "U" sobre una matriz central. Este ensayo analiza la maleabilidad del material y la habilidad del soldador.
      .col-lg-6.col-lg-6.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta--boton.color-adicional-1
          .row.justify-content-center
            .col-7.bg-c11
              .row.d-flex.justify-content-center
                .col-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 6.] Rotura Nick
                  figure
                    img(src='@/assets/curso/tema1/img12.png', alt='Representación del uso de un martillo para aplicar fuerza en una pieza con ranuras de sierra. ', style="width: 325px").m-auto
                    figcaption.mt-2 #[b Nota. ] Rotura Nick (s.f.). [Imagen].
          .row
            .col.px-5          
              h4.text-right Rotura Nick
              p.text-small.mb-5 Consiste en fracturar la probeta para exponer una superficie de al menos 19 mm. Permite inspeccionar la sanidad de la unión soldada, verificando penetración y fusión completas.
    .row
      .col-lg-6.col-lg-6.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta--boton.color-adicional-1
          .row.justify-content-center
            .col-7.bg-c11
              .row.d-flex.justify-content-center
                .col-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 7.] Tensión
                  figure
                    img(src='@/assets/curso/tema1/img13.png', alt='Tres ensamblajes roscados alineados verticalmente, con la medida de 2 1/2 pulgadas indicada en el ensamblaje inferior. El diseño muestra uniones perforadas y simétricas. ', style="width: 302px").m-auto
                    figcaption.mt-2 #[b Nota. ] Tensión (s.f.). [Imagen].
          .row
            .col.px-5
              h4.text-right Tensión
              p.text-small.mb-5 La probeta se somete a una fuerza axial que genera alargamiento y fractura. Este ensayo mide la resistencia estructural del material.
      .col-lg-6.col-lg-6.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta--boton.color-adicional-1
          .row.justify-content-center
            .col-7.bg-c11
              .row.d-flex.justify-content-center
                .col-12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 8.] Charpy V-Notch
                  figure
                    img(src='@/assets/curso/tema1/img14.png', alt='Diagrama que representa un ensayo de impacto tipo péndulo, con componentes como martillo, yunque, medidor y muestra. Las flechas indican el movimiento del martillo desde la posición inicial hasta el fin del balanceo. ', style="width: 260px").m-auto
                    figcaption.mt-2 #[b Nota. ] Charpy V-Notch (s.f.). [Imagen].
          .row
            .col.px-5          
              h4.text-right <em> Charpy V-Notch </em>
              p.text-small.mb-5 Mide el comportamiento del material ante impactos. La probeta se golpea con una masa conocida, evaluando su capacidad para soportar condiciones extremas.
    
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Tipos de hallazgos

    p.mb-5 Las discontinuidades detectadas durante los ensayos pueden clasificarse como defectos o como características aceptables según los códigos de soldadura.

    .row.justify-content-center.align-items-top
      .col-lg-9.mb-5.mb-md-0(data-aos="fade-right")
        LineaTiempoD.color-primario

          .row(numero="1" titulo="Grietas")
            .col-12
              p Separaciones en el metal causadas por tensiones residuales o mecánicas.
              .row
                .col-auto.bg-c12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 9.] Grietas
                  figure
                    img(src='@/assets/curso/tema1/img4.svg', alt='Diagrama con diversos tipos de grietas en soldaduras: longitudinal, transversal, en el metal de soldadura, en la raíz, en la zona afectada térmicamente (ZAT), y en la intercara de la soldadura. ', style="width: 490px").m-auto
                    figcaption.mt-2 #[b Nota. ] Grietas (s.f.). [Imagen].

          .row(numero="2" titulo="Poros")
            .col-12
              p Huecos globulares generados por gases liberados durante la solidificación del metal.
              .row
                .col-auto.bg-c12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 10.] Poros
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', alt='Imagen que representa un defecto en la soldadura, con indicación de áreas de porosidad en la parte superior y secciones perforadas en la parte inferior.', style="width: 400px").m-auto
                    figcaption.mt-2 #[b Nota. ] Poros (s.f.). [Imagen].

          .row(numero="3" titulo="Falta de fusión")
            .col-12
              p Ocurre cuando el metal base y el metal depositado no se fusionan completamente debido a factores como insuficiente potencia eléctrica.
            .col-12
              .row
                .col-auto.bg-c12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 11.] Falta de fusión
                  figure
                    img(src='@/assets/curso/tema1/img6.svg', alt='Imagen que representa un defecto en la soldadura, con indicación de áreas de porosidad en la parte superior y secciones perforadas en la parte inferior.', style="width: 540px").m-auto
                    figcaption.mt-2 #[b Nota. ] Falta de fusión (s.f.). [Imagen].

          .row(numero="4" titulo="Inclusiones sólidas")
            .col-12
              p Partículas o residuos atrapados dentro del metal soldado, como escoria o óxidos.
              .row
                .col-auto.bg-c12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 12.] Inclusiones solidas
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', alt='Imagen que muestra un diseño de soldadura en forma de esquina, con indicación de fisuras internas en la soldadura.', style="width: 500px").m-auto
                    figcaption.mt-2 #[b Nota. ] Inclusiones sốlicas (s.f.). [Imagen].

          .row(numero="5" titulo="Resistencia a tensión")
            .col-12
              p Mide las propiedades del material sometido a esfuerzos de tracción, evaluando su resistencia estructural.
              .row
                .col-auto.bg-c12
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 #[b Figura 13.] Resistencia a tensión
                  figure
                    img(src='@/assets/curso/tema1/img8.svg', alt='Gráfico que muestra la relación entre tensión (MPa) y deformación (%), destacando regiones como deformación elástica lineal, no lineal, límite elástico, cuello, deformación plástica y tensión de rotura.', style="width: 550px").m-auto
                    figcaption.mt-2 #[b Nota. ] Resistencia a tensión (s.f.). [Imagen].

          .row(numero="6" titulo="Tenacidad")
            .col-12
              p Determina la capacidad del material para absorber energía antes de fracturarse, lo que refleja el nivel de cohesión atómica.
              .row
                .col-auto.bg-c12
                  figure.py-4
                    img(src='@/assets/curso/tema1/img21.png', alt='', style="width: 500px")
                    
      .col-lg-3.mb-5.mb-md-0
        figure(data-aos="fade-left")
          img.d-none.d-lg-block(src="@/assets/curso/tema1/img15.png", alt='Imagen que representa un defecto en la soldadura, con indicación de áreas de porosidad en la parte superior y secciones perforadas en la parte inferior. ', style="width: 340px" )

 
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
