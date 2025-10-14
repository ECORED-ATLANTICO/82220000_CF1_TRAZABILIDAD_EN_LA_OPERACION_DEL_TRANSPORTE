<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Transporte
 
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El transporte se reconoce como un factor estratégico que fomenta la especialización productiva, el intercambio comercial y la competitividad de los sectores productivos. Desde los primeros medios de desplazamiento hasta los actuales sistemas intermodales y globalizados, cada avance ha transformado la manera de interactuar en un mundo dinámico, donde la eficiencia y la trazabilidad en la movilidad resultan determinantes para garantizar la sostenibilidad y la confiabilidad de las operaciones logísticas.

    Separador
    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1 Concepto

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--4.rounded-4.overflow-hidden
          .row.align-items-center
            .col-sm-11.col-lg-9.ms-auto
              p.mb-0 El transporte desempeña un papel central en la movilidad y el desarrollo de las sociedades. Su estudio permite reconocer cómo este proceso dinamiza la economía, conecta territorios y facilita el acceso a bienes y servicios.
            .d-none.d-lg-block.col-lg-3
              .d-flex.justify-content-center
                img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/2.png" alt="Imagen decorativo")

    .row.justify-content-center.align-items-center.mb-4.z-2.slyder-con-background
      .col-xl-10
        .tarjeta.bg-slyder.p-4.pt-5
          SlyderA(tipo="b")
            .row.z-2.justify-content-center.align-items-center
              .col-10.col-sm-6.col-lg-3
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/3.png', alt='Imagen de acompañamiento')
              .col-lg-7
                p El transporte es el proceso de movilizar personas, bienes o información, actuando como motor de conectividad y desarrollo. Constituye un pilar de la economía global y de la sociedad moderna.
            .row.z-2.justify-content-center.align-items-center
              .col-10.col-sm-6.col-lg-3
                figure
                  img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/4.png', alt='Imagen de acompañamiento')
              .col-lg-7
                p Al facilitar el comercio, garantizar acceso a recursos y acortar distancias, el transporte impulsa crecimiento económico, integración social e innovación, siendo clave para la industria y la vida cotidiana.
    .fullwidth-bg.fullwidth-bg--1
    Separador
    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2	Tipos

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema1/5.png" alt="Imagen decorativo")
      .col-lg-8
        p Los tipos de transporte se clasifican según el medio y la infraestructura que utilizan, cada uno con características que responden a diferentes necesidades logísticas, territoriales y económicas. Comprender sus ventajas, limitaciones y aplicaciones permite seleccionar la alternativa más adecuada para garantizar eficiencia, seguridad y trazabilidad en la movilización de personas y mercancías.

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-xl-10
        TabsA.color-primario
          .tarjeta.p-4.p-lg-5.h-100.d-flex.align-items-center(titulo="Terrestre")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-xl-4
                p Carretero (camiones, vehículos ligeros, entre otros) y ferroviario (trenes de carga y pasajeros). Ofrece flexibilidad y alcance regional o nacional.
              .col-sm-6.col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/6.png', alt='tren')

          .tarjeta.p-4.h-100.d-flex.align-items-center(titulo="Marítimo")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-xl-4
                p Buques de carga (contenedores, graneleros o petroleros). Ideal para grandes volúmenes y largas distancias en el comercio internacional.
              .col-sm-6.col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/7.png', alt='barco')

          .tarjeta.p-4.h-100.d-flex.align-items-center(titulo="Aéreo")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-xl-4
                p Aviones de carga y pasajeros. Permite entregas rápidas y seguras, óptimo para bienes perecederos o de alto valor, aunque más costoso.
              .col-sm-6.col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/8.png', alt='avion')

          .tarjeta.p-4.h-100.d-flex.align-items-center(titulo="Fluvial / Lacustre")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-xl-4
                p Navegación por ríos y lagos. Es relevante en territorios con infraestructura hídrica, apoyando el comercio interno y regional.
              .col-sm-6.col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/9.png', alt='muelle')

          .tarjeta.p-4.h-100.d-flex.align-items-center(titulo="Multimodal / Intermodal")
            .row.align-items-center.justify-content-center
              .col-lg-5.col-xl-4
                p Combina estratégicamente dos o más modos de transporte para optimizar eficiencia y trazabilidad en cadenas logísticas internacionales.
              .col-sm-6.col-lg-7
                figure
                  img(src='@/assets/curso/temas/tema1/10.png', alt='camion')

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .titulo-sexto.color-primario.mb-4
          h5 Figura 1.
          span Tipos de transporte
        img.d-sm-none(data-aos="fade-up")(src='@/assets/curso/temas/tema1/11-mob.svg', alt='La figura presenta los principales tipos de transporte, marítimo, aéreo, terrestre y multimodal; destacando sus ventajas y limitaciones en términos de costos, velocidad, alcance, eficiencia y trazabilidad.')
        img.d-none.d-sm-block(data-aos="fade-up")(src='@/assets/curso/temas/tema1/11.svg', alt='La figura presenta los principales tipos de transporte, marítimo, aéreo, terrestre y multimodal; destacando sus ventajas y limitaciones en términos de costos, velocidad, alcance, eficiencia y trazabilidad.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    Separador
    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.3 Características

    .row.justify-content-center.align-items-center.mb-4.z-2
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-down")(src='@/assets/curso/temas/tema1/12.png', alt='Icono de características del transporte')
      .col-lg-11.col-xl-9
        p.mb-0 Las características del transporte constituyen criterios esenciales para seleccionar el modo más adecuado en función de la operación logística. Comprender estas variables permite optimizar recursos, minimizar riesgos y garantizar operaciones más competitivas y sostenibles dentro de la cadena de suministro.

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .d-none.d-xl-block.col-xl-3
        figure
          img(src='@/assets/curso/temas/tema1/13.png', alt='Imagen decorativa')(data-aos="fade-left")
      .col-xl-9.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/14.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Velocidad 
            p.mb-4 Tiempo de traslado. Clave en perecederos y urgencias; exige trazabilidad en tiempo real.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-3
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/15.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Capacidad	
            p.mb-4 Volumen o peso transportado. Varía entre modos; la trazabilidad se adapta a contenedores o paquetes.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/16.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Flexibilidad	
            p.mb-4 Adaptabilidad a rutas y cargas. Modos flexibles permiten desvíos; el sistema debe registrar cambios.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-3
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/17.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Costo	
            p.mb-4 Incluye fletes, seguros y recursos. La trazabilidad reduce pérdidas y optimiza gastos.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-3
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/18.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Seguridad	
            p.mb-4 Protección contra daños o robos. La trazabilidad monitorea ubicación, accesos y condiciones.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-3
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/19.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Fiabilidad	
            p.mb-4 Cumplimiento de tiempos y condiciones. La trazabilidad mide entregas puntuales.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-3
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema1/20.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Trazabilidad	
            p.mb-4 Nivel de monitoreo de la carga en tiempo real; varía según el modo de transporte.

    Separador
    #t_1_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.4	Normativas y políticas

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/21.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2.mb-5
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La trazabilidad en el transporte se encuentra regulada por un conjunto de normativas nacionales que buscan garantizar la seguridad vial, el cumplimiento de requisitos técnicos y legales, así como la eficiencia en la gestión logística. Estas normas establecen las bases para la operación segura, la responsabilidad de los actores del sector y la implementación de herramientas de control y seguimiento.

    .fullwidth-bg.fullwidth-bg--4
    .row.justify-content-center.mb-5.z-2.conectadas-horizontal
      .col-lg-10.position-relative
        .avatar.d-none.d-lg-block
          figure
            img(src="@/assets/curso/temas/tema1/32.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/30.svg", alt="alt").img100
            .col
              h5.mb-1 Ley 769 de 2002 Código Nacional de Tránsito
              p.mb-0 Normas de circulación, licencias, condiciones técnico-mecánicas, infracciones y sanciones.

        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/31.svg", alt="alt").img100
            .col
              h5.mb-1 Decretos y Resoluciones del Ministerio de Transporte 
              p.mb-0 Regulan peso y dimensiones, habilitación de empresas, permisos, registro de carga y tarifas.

        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/30.svg", alt="alt").img100
            .col
              h5.mb-1 Ley 1609 de 2012 y Decreto 1079 del 2015
              p.mb-0 Transporte de mercancías peligrosas: clasificación, embalaje, señalización, documentación y condiciones de vehículos.

        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/31.svg", alt="alt").img100
            .col
              h5.mb-1 Ley 336 de 1996 Estatuto Nacional de Transporte
              p.mb-0 Principios generales para el transporte público, seguridad y responsabilidad en mercancías peligrosas.

        .crd.crd--avatarHorizontal.crd--last.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/30.svg", alt="alt").img100
            .col
              h5.mb-1 Ley 2069 de 2020 Ley de Emprendimiento
              p.mb-0 Promueve la digitalización logística y adopción de trazabilidad tecnológica en la cadena de suministro.


    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .cajon.color-secundario.p-4
          p A nivel internacional, existen convenios y reglas que unifican criterios para el comercio y la movilidad transfronteriza. Paralelamente, las políticas sectoriales y empresariales orientan las prácticas hacia la sostenibilidad, la digitalización y la seguridad, consolidando la trazabilidad como una herramienta indispensable de gestión.

    .row.justify-content-center.z-2.align-items-center.mb-4
      .col-lg-4
        figure
          img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/22.png" alt="Imagen decorativo")
      .col-lg-6.slyder-con-background
        .tarjeta.bg-slyder.p-4.pt-5
          SlyderA(tipo="b")
            .row.z-2.justify-content-center.align-items-center
              .col-auto.col-lg-9
                h5.mb-1 Convenio  CMR (Transporte por carretera)	
                p Define responsabilidades del transportista, carta de porte y reclamaciones en operaciones internacionales.                
            .row.z-2.justify-content-center.align-items-center
              .col-auto.col-lg-9
                h5.mb-1 Convenio de Montreal (Transporte aéreo)
                p Regula responsabilidad por daños, retrasos y estandariza documentos como la guía aérea.  
            .row.z-2.justify-content-center.align-items-center
              .col-auto.col-lg-9
                h5.mb-1 Reglas de La Haya-Visby / Hamburgo (marítimo)
                p Establecen condiciones de responsabilidad y gestión documental en contratos marítimos.                
            .row.z-2.justify-content-center.align-items-center
              .col-auto.col-lg-9
                h5.mb-1 Incoterms (ICC)
                p Definen responsabilidades de comprador y vendedor, así como el punto de transferencia del riesgo y la trazabilidad.
            .row.z-2.justify-content-center.align-items-center
              .col-auto.col-lg-9
                h5.mb-1 Regulaciones aduaneras internacionales.
                p Establecen requisitos documentales y de información en procesos de importación y exportación.

    .row.align-items-center.justify-content-center.z-2.mb-4.mb-lg-5
      .d-none.d-xl-block.col-xl-1.p-0
        img.w-85(data-aos="fade-down")(src="@/assets/curso/temas/tema1/waves.svg" alt="Icono decorativo")
      .col-xl-9
        p.mb-0 Las políticas del sector transporte buscan orientar el desarrollo de la infraestructura, la operación y la regulación hacia un modelo más eficiente, seguro y sostenible. A través de planes nacionales, incentivos e iniciativas de digitalización, se establecen lineamientos que permiten modernizar el sistema, optimizar los recursos y garantizar que la trazabilidad se convierta en un eje transversal para el control y la toma de decisiones.

    .row.justify-content-center.align-items-stretch.mb-4.z-2.mb-lg-5
      .col-md-6.col-xl-4
        .p-3.bg-color-terciario-t10.rounded-4.overflow-hidden.mb-4
          .row.justify-content-center.align-items-center
            .d-none.d-lg-block.col-3.col-lg-2
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/23.svg" alt="Imagen decorativo")
            .col-lg-10
              h5.mb-1 Planes nacionales de desarrollo.	
              p.mb-0 Definen proyectos de infraestructura y promoción de la intermodalidad, mejorando eficiencia y rutas.

        .p-3.bg-color-terciario-t10.rounded-4.overflow-hidden.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .d-none.d-lg-block.col-3.col-lg-2
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/24.svg" alt="Imagen decorativo")
            .col-lg-10
              h5.mb-1 Incentivos para la sostenibilidad.	
              p.mb-0.mb-lg-4.mb-xl-0 Fomentan vehículos eléctricos, reducción de emisiones y monitoreo de huella ambiental.

      .d-none.d-xl-block.col-xl-2
        figure
          img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/27.png" alt="Imagen decorativo")

      .col-md-6.col-xl-4
        .p-3.bg-color-terciario-t10.rounded-4.overflow-hidden.mb-4
          .row.justify-content-center.align-items-center
            .d-none.d-lg-block.col-3.col-lg-2
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/25.svg" alt="Imagen decorativo")
            .col-lg-10
              h5.mb-1 Regulaciones de seguridad vial.	
              p.mb-0 Impulsan el monitoreo de flotas y conductores para reducir riesgos en la operación.

        .p-3.bg-color-terciario-t10.rounded-4.overflow-hidden
          .row.justify-content-center.align-items-center
            .d-none.d-lg-block.col-3.col-lg-2
              img(data-aos="fade-down")(src="@/assets/curso/temas/tema1/26.svg" alt="Imagen decorativo")
            .col-lg-10
              h5.mb-1 Normativas de digitalización.	
              p.mb-0 Promueven plataformas electrónicas, documentos digitales y uso de <em>Big Data</em> en trazabilidad.

    .bloque-texto-g.bloque-texto-g--transparent.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las políticas empresariales complementan el marco sectorial al traducirse en estrategias internas de gestión y control dentro de cada organización. Estas decisiones incluyen la manera en que se administran las flotas, se capacita al personal, se adoptan nuevas tecnologías y se implementan sistemas de calidad. Su propósito es fortalecer la eficiencia y la seguridad de las operaciones, asegurando que la trazabilidad no solo cumpla con la normativa, sino que se convierta en un valor agregado para la competitividad y la confianza del cliente.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .titulo-sexto.color-primario.mb-4
          h5 Figura 2.
          span Tipos de transporte
        img.d-sm-none(data-aos="fade-down")(src='@/assets/curso/temas/tema1/29-mob.svg', alt='La figura presenta las principales políticas empresariales aplicadas a la trazabilidad: estrategias de gestión de flotas, formación del personal en tecnologías y procedimientos, adopción de sistemas tecnológicos como GPS y RFID, y políticas de calidad y seguridad orientadas a certificaciones e integridad de la cadena de suministro.')
        img.d-none.d-sm-block(data-aos="fade-down")(src='@/assets/curso/temas/tema1/29.svg', alt='La figura presenta las principales políticas empresariales aplicadas a la trazabilidad: estrategias de gestión de flotas, formación del personal en tecnologías y procedimientos, adopción de sistemas tecnológicos como GPS y RFID, y políticas de calidad y seguridad orientadas a certificaciones e integridad de la cadena de suministro.')
        figcaption <strong>Fuente:</strong> SENA, 2025.
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
