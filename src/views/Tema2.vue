<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tema 2
    //- div.slider-wrapper
    //-   .bg-orange
    //-   .tarjeta.tarjeta--blanca.p-4.pt-5.z-2.mt-5.mb-3
    //-     SlyderA(tipo="b")
    //-       .row.z-2.justify-content-center
    //-         .col-lg-5
    //-           h4.mb-4 Segmentación demográfica
    //-           p.mb-3.mb-lg-0 Agrupa al público según edad, género, ingresos o educación, lo que permite adaptar la estética, los referentes culturales y el lenguaje. Una muestra de esto es la campaña “<em>Share a Coke</em>” de Coca-Cola, que personalizó botellas con nombres populares de cada generación, apelando a la identidad individual.
    //-         .col-10.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema4/4.png', alt='Texto que describa la imagen')
    //-       .row.z-2.justify-content-center
    //-         .col-lg-5
    //-           h4.mb-4 Segmentación geográfica
    //-           p.mb-3.mb-lg-0 Considera ubicación, clima o contexto cultural, siendo clave para adaptar historias que resuenen localmente. Netflix, por ejemplo, adapta portadas de sus series según el país, priorizando personajes locales para captar atención.
    //-         .col-10.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema4/5.png', alt='Texto que describa la imagen')
    //-       .row.z-2.justify-content-center.align-items-center
    //-         .col-lg-5
    //-           h4.mb-4 Segmentación psicográfica
    //-           p.mb-3.mb-lg-0 Profundiza en intereses, valores y estilo de vida, lo cual resulta ideal para un <em>storytelling</em> emocional. Patagonia ilustra esta estrategia al destacar valores ecológicos en sus contenidos, conectando con audiencias ambientalistas
    //-         .col-10.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema4/6.png', alt='Texto que describa la imagen')
    //-       .row.z-2.justify-content-center.align-items-center
    //-         .col-lg-5
    //-           h4.mb-4 Segmentación conductual
    //-           p.mb-3.mb-lg-0 Se basa en el comportamiento del consumidor: frecuencia de compra, lealtad o forma de interactuar con el contenido. Spotify emplea <em>playlists</em> personalizadas como “<em>Wrapped</em>”, usando los hábitos del usuario como parte de la narrativa.
    //-         .col-10.col-lg-6
    //-           figure
    //-             img(src='@/assets/curso/temas/tema4/7.png', alt='Texto que describa la imagen')

    Separador
</template>

<script>
export default {
  name: 'Tema2',
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
