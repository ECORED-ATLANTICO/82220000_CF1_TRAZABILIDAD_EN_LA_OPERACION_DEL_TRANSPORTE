<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Trazabilidad en la operación del transporte

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La trazabilidad aplicada al transporte es un pilar esencial de la logística moderna, pues permite seguir el recorrido, estado y transformaciones de la carga desde su origen hasta el destino final. Gracias a ella, las organizaciones no solo garantizan eficiencia y cumplimiento normativo, sino también confianza, seguridad y capacidad de respuesta ante imprevistos.
    
    .fullwidth-bg.fullwidth-bg--1
    Separador
    #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.1	Concepto e importancia

    .row.justify-content-center.align-items-center.mb-4.z-2
      .d-none.d-lg-block.col-lg-2
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/2.png" alt="Imagen decorativo")
      .col-lg-8
        .p-4.bg-decorado.bg-decorado--1.rounded-4.overflow-hidden
          p.mb-0 La trazabilidad en la operación del transporte constituye una herramienta esencial para garantizar control, seguridad y eficiencia en la cadena de suministro. Su comprensión inicia con el concepto básico de qué significa trazar un producto y se complementa con la importancia de su aplicación en el ámbito logístico, estratégico y normativo.

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-md-8.col-xl-6.mb-4.mb-xl-0
        .p-4.bg-cuadros.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-3.col-lg-2
              img.mb-3(data-aos="fade-down")(src="@/assets/curso/temas/tema4/3.svg" alt="Imagen decorativo")
          h5.mb-4 Trazabilidad  en transporte
          p.mb-5 Es la capacidad de reconstruir el historial, el recorrido y la ubicación de un producto o lote a lo largo de toda la cadena de suministro. Permite conocer tanto su origen (trazabilidad hacia atrás) como su ubicación y destino (trazabilidad hacia adelante), asegurando confianza, seguridad y eficiencia en la operación.
      .col-md-8.col-xl-6
        .p-4.bg-cuadros.bg-cuadros--1.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-3.col-lg-2
              img.mb-3(data-aos="fade-down")(src="@/assets/curso/temas/tema4/4.svg" alt="Imagen decorativo")
          h5.mb-4 Importancia del sistema de trazabilidad
          p.mb-2 Un sistema de trazabilidad garantiza operaciones eficientes, confianza del cliente y cumplimiento normativo. Sus beneficios se reflejan en tres dimensiones:
          ul
            li <strong>Estratégicos</strong>: fortalecen la reputación y competitividad.
            li <strong>Operativos</strong>: mejoran rutas, reducen pérdidas y optimizan inventarios.
            li <strong>Legales y de seguridad</strong>: aseguran cumplimiento regulatorio y protegen la salud pública.

    Separador
    #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.2	Tipos y política

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--2.rounded-4.overflow-hidden
          .row.align-items-center
            .d-none.d-lg-block.col-lg-3
              .d-flex.justify-content-center
                img.w-140(data-aos="fade-up")(src="@/assets/curso/temas/tema4/5.png" alt="Imagen decorativo")
            .col-sm-11.col-lg-9.ms-auto
              p.mb-0 La trazabilidad en el transporte se puede clasificar según la dirección en la que fluye la información dentro de la cadena de suministro. Cada tipo cumple un papel específico en el control y la gestión eficiente de los productos.

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-xl-10
        TabsA.color-primario
          .tarjeta.p-4.h-100.d-flex.align-items-center(titulo="Hacia atrás (<em>upstream</em>)")
            p.mb-4.mb-lg-0 Conoce el origen de productos y componentes: proveedores, lotes y fechas de recepción. Importante para el control de calidad en la entrada y reacción rápida ante problemas con proveedores.

          .tarjeta.p-4.h-100.d-flex.align-items-center(titulo="Interna (proceso)")
            p.mb-4.mb-lg-0 Registra transformaciones, movimientos, embalajes, consolidaciones o desconsolidaciones. Mantiene historial preciso del producto bajo custodia e identifica lotes y mezclas.

          .tarjeta.p-4.h-100.d-flex.align-items-center(titulo="Hacia adelante (<em>downstream</em>)")
            p.mb-4.mb-lg-0 Rastrea el destino de los productos al salir de la empresa. Fundamental para servicio al cliente, gestión de entregas y localización rápida ante problemas.

    .row.justify-content-center.mb-4.z-2.mb-xl-5
      .col-xl-10
        .cajon.color-secundario.p-4
          p La implementación de la trazabilidad se guía por políticas que pueden ser de carácter obligatorio o voluntario, dependiendo de la normativa vigente o de las decisiones estratégicas de la empresa.

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-md-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .p-4.bg-cuadros.bg-cuadros--3.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-3.col-md-4
              img.mb-5(data-aos="fade-down")(src="@/assets/curso/temas/tema4/6.svg" alt="Imagen decorativo")
          h5.mb-0 Obligatorias (regulaciones legales)
          p.mb-0 Establecidas por gobiernos o entidades internacionales para proteger la salud, la seguridad, el medio ambiente y prevenir fraudes.
      .col-md-6.col-lg-4.col-xl-3.mb-4.mb-lg-0
        .p-4.bg-cuadros.bg-cuadros--3.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-3.col-md-4
              img.mb-5(data-aos="fade-down")(src="@/assets/curso/temas/tema4/7.svg" alt="Imagen decorativo")
          h5.mb-0 Voluntarias (buenas prácticas)	
          p.mb-0 Adoptadas por empresas o consorcios para mejorar eficiencia, reputación, confianza del consumidor y sostenibilidad.
      .col-md-6.col-lg-4
        figure
          img(data-aos="fade-left")(src="@/assets/curso/temas/tema4/8.png" alt="Imagen decorativo")
      






</template>

<script>
export default {
  name: 'Tema4',
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
