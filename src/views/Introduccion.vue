<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-8(data-aos="fade-right")
        .row
          .col-lg-10.mb-3
              p Las pruebas que determinan la resistencia e integridad de las soldaduras son esenciales para garantizar la seguridad y funcionalidad de los productos fabricados mediante este procedimiento. Estas evaluaciones aseguran que los materiales y procesos cumplan con los estándares establecidos, proporcionando confianza en las estructuras metálicas utilizadas en diversas aplicaciones industriales. 
          .col-lg-2
            figure.d-none.d-lg-block
              img(src='@/assets/curso/intro/img1.svg', alt='', style="width:70px").m-auto
        .row.mb-5.ms-0.me-1
          .col-1.bg-c2.d-none.d-lg-block
          .col
            .row.h-100.align-items-center.bg-c1
              .col-auto
                .p-3
                  p.mb-0.ps-4 A través de los ensayos destructivos y no destructivos, se identifican las condiciones de inspección necesarias para verificar el control de calidad y cumplir con los requerimientos técnicos. Este enfoque incluye la evaluación de los procedimientos, los equipos de inspección y los resultados obtenidos, asegurando que los materiales y las soldaduras sean adecuados para su propósito.
              .col
                figure.d-none.d-lg-block
                  img.svg-fluot(src='@/assets/curso/intro/img2.svg', alt='', style="width: 90px")
        .row.me-1
          .col-xl-auto.pe-0
            figure
              img(src='@/assets/curso/intro/img2.png', alt='', style="width: 250px").m-auto
          .col.bg-c3.align-items-center
            .row
              .col
                .p-2
                  p.mb-0 Estos ensayos son realizados por personal capacitado y certificado, lo que otorga validez legal a los informes generados. Esto garantiza la trazabilidad y fiabilidad en los procesos de soldadura, promoviendo un uso seguro y eficiente de las estructuras metálicas en proyectos de alta exigencia técnica. 
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='').m-auto    
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
