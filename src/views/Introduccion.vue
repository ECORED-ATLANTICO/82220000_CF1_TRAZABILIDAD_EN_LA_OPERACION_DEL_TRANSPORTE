<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-9
        p El componente formativo <strong>“Estructura del sistema de trazabilidad”</strong> ofrece al aprendiz herramientas técnicas y prácticas para abordar la gestión de la información y el control de procesos en las operaciones de transporte, garantizando el cumplimiento de requisitos técnicos y normativos. A partir del conocimiento de los elementos que integran un sistema de trazabilidad, se fortalecen las capacidades para identificar, organizar y verificar el flujo de datos asociados a la movilidad de bienes y servicios, con el fin de asegurar transparencia, seguridad y confiabilidad en la cadena logística.
        .row.justify-content-center
          .col-sm-8.col-lg-3
            figure
              img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro/1.png" alt="Imagen decorativa")
          .col-lg-9.mb-4.mb-lg-0
            p.mb-0 Este componente también enfatiza en la aplicación de políticas, procedimientos y estándares nacionales e internacionales, con un enfoque en la eficiencia operativa y la sostenibilidad del transporte. Además, promueve el desarrollo de competencias analíticas y el uso de recursos tecnológicos para la toma de decisiones. Así, se contribuye a la formación de profesionales integrales capaces de coordinar operaciones de transporte con visión estratégica.
      .d-none.d-lg-block.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/intro/2.png" alt="Icono decorativa")

    .video.mb-2
      iframe(width="560" height="315" src="https://www.youtube.com/embed/0YAXjTBhUCg" title="Público Objetivo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
    figcaption <strong>Video:</strong> Público Objetivo.
    
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
