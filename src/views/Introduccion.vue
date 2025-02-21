<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-8.order-2.order-lg-1
        .row
          .col-lg-10.font-text-cuadros.mb-2
              p Las pruebas que determinan la resistencia e integridad de las soldaduras son esenciales para garantizar la seguridad y funcionalidad de los productos fabricados mediante este procedimiento. Estas evaluaciones aseguran que los materiales y procesos cumplan con los estándares establecidos, proporcionando confianza en las estructuras metálicas utilizadas en diversas aplicaciones industriales. 
          .col-lg-2
            figure.d-none.d-lg-block
              img(src='@/assets/curso/intro/img1.svg', alt='Texto que describa la imagen', style="width:70px").m-auto
        .row.mb-4.ms-0.me-1
          .col-1.bg-c2.d-none.d-lg-block
          .col
            .row.h-100.align-items-center.bg-c1
              .col-auto
                .p-3.font-text-cuadros
                  p.mb-0.ps-4 A través de los ensayos destructivos y no destructivos, se identifican las condiciones de inspección necesarias para verificar el control de calidad y cumplir con los requerimientos técnicos. Este enfoque incluye la evaluación de los procedimientos, los equipos de inspección y los resultados obtenidos, asegurando que los materiales y las soldaduras sean adecuados para su propósito.
              .col.d-none.d-lg-block.img-flued.img-flout
                figure
                  img(src='@/assets/curso/intro/img2.svg', alt='Texto que describa la imagen', style="width: 90px")
        .row.me-1
          .col-xl-auto.pe-0.mb-2
            figure
              img(src='@/assets/curso/intro/img2.png', alt='Texto que describa la imagen', style="width: 250px").m-auto
          .col.bg-c3.align-items-center
            .row.h-100.align-items-center
              .col-12
                .p-3.font-text-cuadros
                  p.mb-0 Estos ensayos son realizados por personal capacitado y certificado, lo que otorga validez legal a los informes generados. Esto garantiza la trazabilidad y fiabilidad en los procesos de soldadura, promoviendo un uso seguro y eficiente de las estructuras metálicas en proyectos de alta exigencia técnica. 
      .col-lg-4.order-1.order-lg-2.mb-2
        figure
        img(src='@/assets/curso/intro/img1.png', alt='Texto que describa la imagen').m-auto    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
