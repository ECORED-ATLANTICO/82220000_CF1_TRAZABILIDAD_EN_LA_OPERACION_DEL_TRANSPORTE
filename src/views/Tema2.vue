<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Características técnicas de la carga

    .row.justify-content-center.align-items-center.mb-4.z-2
      .d-none.d-lg-block.col-lg-3
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png" alt="Imagen decorativo")
      .col-lg-8
        p La trazabilidad efectiva depende críticamente de entender las características técnicas de la carga. Factores como el estado físico, la fragilidad, el peso, las dimensiones, y los requisitos de temperatura o humedad, influyen directamente en la selección de métodos de embalaje, manipulación y transporte. 
        .p-4.bg-decorado.bg-decorado--1.rounded-4.overflow-hidden
          p.mb-0 Estas propiedades determinan la tecnología de identificación más adecuada y la información esencial a registrar en cada etapa. Un manejo incorrecto basado en el desconocimiento de estas características puede comprometer la integridad del producto y la fiabilidad de los datos de trazabilidad.

    Separador
    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1 Tipos de carga, peso y volumen

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .d-none.d-lg-block.col-lg-2
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/2.png" alt="Imagen decorativo")
      .col-lg-9
        p.mb-0 Los tipos de carga se clasifican según su presentación, naturaleza y condiciones de transporte, aspectos que determinan el manejo logístico, los costos y la trazabilidad en la cadena de suministro. Cada categoría presenta características específicas que permiten optimizar la planificación, garantizar la seguridad y cumplir con los requisitos técnicos y normativos en la operación del transporte.

    div.slider-wrapper.z-2.mb-5
      .bg-fullwidth
      .tarjeta.tarjeta--blanca.p-4.pt-5.z-2.mt-5.mb-3
        SlyderA(tipo="b")
          .row.z-2.justify-content-center
            .col-lg-5
              h4.mb-4 Carga  general
              p.mb-3.mb-lg-0 Incluye mercancías embaladas en cajas, bultos, palets o contenedores. Su manipulación puede hacerse de manera individual o agrupada, lo que facilita la operación y reduce tiempos logísticos.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/3.png', alt='Persona moviendo bolsas de carga ')
          .row.z-2.justify-content-center
            .col-lg-5
              h4.mb-4 Carga a granel
              p.mb-3.mb-lg-0 Comprende productos que se transportan sin empaque y en grandes volúmenes, viajando directamente en bodegas, cisternas o tolvas. Su clasificación depende de si son sólidos, líquidos o gaseosos.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/4.png', alt='Camion para transportar líquidos')
          .row.z-2.justify-content-center
            .col-lg-5
              h4.mb-4 Carga perecedera
              p.mb-3.mb-lg-0 Corresponde a bienes con vida útil limitada, como alimentos frescos o flores, que requieren condiciones controladas de transporte para conservar su calidad.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/5.png', alt='Aguacates')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Carga peligrosa
              p.mb-3.mb-lg-0 Agrupa sustancias que representan riesgos para la salud, la seguridad o el ambiente, por lo que deben cumplir normas internacionales de clasificación y protocolos estrictos de manejo.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/6.png', alt='Contenedores')
          .row.z-2.justify-content-center.align-items-center
            .col-lg-5
              h4.mb-4 Carga especial o pesada
              p.mb-3.mb-lg-0 Son mercancías que superan las dimensiones o pesos habituales y requieren vehículos especializados, permisos y, en algunos casos, escolta para su transporte.
            .col-10.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/7.png', alt='Un grua cargando containers')

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--4.rounded-4.overflow-hidden
          .row.align-items-center
            .col-sm-11.col-lg-9.ms-auto
              p.mb-0 El peso y el volumen de la carga son variables esenciales en la planificación del transporte, ya que influyen en la selección del vehículo, la optimización del espacio, los costos de flete y la trazabilidad de la operación. Una gestión precisa de estas medidas garantiza eficiencia, seguridad y cumplimiento normativo en la cadena logística.
            .d-none.d-lg-block.col-lg-3
              .d-flex.justify-content-center
                img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/8.png" alt="Imagen decorativo")

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-md-8.col-xl-6.mb-4.mb-xl-0
        .p-4.bg-cuadros.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-3.col-lg-2
              img.mb-3(data-aos="fade-down")(src="@/assets/curso/temas/tema2/9.svg" alt="Imagen decorativo")
          h5.mb-4 Peso de la carga
          p.mb-5 El peso de la carga corresponde a la masa real de los bienes, medida en kilogramos o libras. Puede clasificarse en peso bruto, que incluye producto y embalaje, y peso neto, solo del producto. Las normativas imponen límites por vehículo o contenedor para garantizar seguridad. Además, el peso influye en las tarifas de transporte, pues se compara con el peso volumétrico. El valor más alto se convierte en el peso facturable, clave para calcular costos y garantizar trazabilidad.
      .col-md-8.col-xl-6
        .p-4.bg-cuadros.bg-cuadros--1.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-3.col-lg-2
              img.mb-3(data-aos="fade-down")(src="@/assets/curso/temas/tema2/10.svg" alt="Imagen decorativo")
          h5.mb-4 Volumen de la carga
          p.mb-2 El volumen de la carga corresponde al espacio ocupado por un envío, expresado en metros o pies cúbicos. Se calcula mediante el cubicaje, multiplicando largo, ancho y alto de las unidades. Este dato es esencial para optimizar espacio en vehículos o contenedores, reduciendo vacíos y costos. Asimismo, existen restricciones volumétricas que no pueden excederse. El peso volumétrico transforma volumen en un peso equivalente para facturación. Su control impacta directamente la trazabilidad, asegurando identificación correcta y cumplimiento normativo.

    .fullwidth-bg.fullwidth-bg--2
    Separador
    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2 Empaque y embalaje
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .d-none.d-lg-block.col-lg-2
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/11.png" alt="Imagen decorativo")
      .col-lg-10
        p.mb-0 El empaque y el embalaje cumplen funciones esenciales dentro de la cadena logística, ya que garantizan la protección, conservación y presentación adecuada de los productos desde su origen hasta el consumidor final. Mientras el empaque se centra en resguardar directamente el producto y facilitar su identificación, manipulación y comercialización, el embalaje está orientado a la agrupación, protección externa y transporte eficiente de varias unidades. Ambos constituyen elementos estratégicos para optimizar la distribución, reducir pérdidas y aportar valor agregado al mercado.

    TabsC.color-primario.z-2
      .py-3.py-md-4(titulo="Empaque")
        .row.align-items-center.justify-content-center
          .col-8.col-md-3
            figure
              img.mb-4.mb-md-0(src="@/assets/curso/temas/tema2/12.png", alt='Texto que describa la imagen')        
          .col-md-9
            h4 Empaque
            p La clasificación del empaque puede hacerse según su nivel y el material utilizado. 
            p Por nivel se clasifica en:
            ul
              li Empaque primario: protege directamente el producto.
              li Empaque secundario: agrupa varias unidades para facilitar su manipulación y transporte, aportando además información útil. 
            p Según el material: puede ser de plástico, vidrio, metal, papel o cartón, e incluso de compuestos que combinan diferentes capas, ofreciendo protección, conservación y presentación adecuada para cada tipo de producto.


      .py-3.py-md-4(titulo="Embalaje")
        .row.align-items-center.justify-content-center
          .col-8.col-md-3
            figure
              img.mb-4.mb-md-0(src="@/assets/curso/temas/tema2/13.png", alt='Texto que describa la imagen')        
          .col-md-9
            h4 Embalaje
            p El embalaje es el conjunto de materiales y procedimientos diseñados para proteger los productos durante su manipulación, almacenamiento y transporte. Su propósito principal es garantizar la seguridad e integridad de la carga, evitando daños físicos, pérdidas o alteraciones. 
            p Incluye elementos como cajas, palets, cintas adhesivas, plásticos protectores y sistemas de sujeción, que permiten organizar las mercancías de manera adecuada, optimizar el espacio y facilitar su traslado hasta el destino final en condiciones óptimas.




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
