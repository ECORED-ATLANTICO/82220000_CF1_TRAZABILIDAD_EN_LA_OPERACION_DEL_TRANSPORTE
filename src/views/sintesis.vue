<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/sintesis/1.png" alt="Imagen decorativo")
      .col-lg-8.col-xl-7
        p.mb-0 El componente formativo “Estructura del sistema de trazabilidad” permite comprender los fundamentos del transporte de carga y la gestión de la trazabilidad, desde su conceptualización hasta su implementación práctica en la cadena logística. Se inicia con el estudio del transporte, así como sus tipos, características y la normativa nacional e internacional aplicable. Posteriormente, se profundiza en las características técnicas de la carga, tipo, peso, volumen, empaque y embalaje, lo que permite establecer su importancia en la protección e integridad del producto.
      .d-none.d-xl-block.col-xl-1
        figure
          img(data-aos="fade-up")(src="@/assets/curso/sintesis/2.svg" alt="Icono decorativa")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .p-4.bg-decorado.rounded-4.overflow-hidden
          p.mb-0 Asimismo, se analizan las variables de la operación del transporte, proporcionando herramientas para la planificación de rutas, la gestión de inventarios y la identificación de puntos críticos. Se presentan los tipos de trazabilidad que influyen en el control y seguimiento de los productos, así como las políticas obligatorias y voluntarias que respaldan su aplicación. La documentación aborda también los elementos técnicos de un sistema de trazabilidad efectivo .
      .d-none.d-lg-block.col-lg-3
        figure
          img(data-aos="fade-up")(src="@/assets/curso/sintesis/3.png" alt="Imagen decorativo")

    .row.justify-content-center.mb-5
      .col-auto
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
