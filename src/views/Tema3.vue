<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Operación del transporte

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema3/1.png" alt="Imagen decorativo")
      .col-lg-8
        p La operación del transporte constituye el eje central de la logística, pues conecta los procesos de producción, almacenamiento y distribución con los destinos finales. Involucra un conjunto de actividades coordinadas que permiten el desplazamiento eficiente y seguro de las mercancías, asegurando tanto su integridad como el cumplimiento de los tiempos pactados. En este contexto, la trazabilidad juega un papel estratégico al proporcionar visibilidad en cada etapa del trayecto, permitiendo anticipar incidentes, optimizar recursos y garantizar la confiabilidad del servicio.

    Separador
    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1	Concepto, tipos y características

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La operación del transporte es el núcleo que define cómo se movilizan las mercancías en la cadena logística. Comprende tanto la manera en que se planifican los envíos como la ejecución práctica de los traslados. Su estudio permite comprender las modalidades de operación, los niveles de control que exige cada una y los atributos que determinan la eficiencia y confiabilidad de los procesos.

    .row.justify-content-center.align-items-center.mb-4.z-2
      .d-none.d-lg-block.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema3/3.png" alt="Imagen decorativo")
      .col-lg-9
        p La operación del transporte es el conjunto de procesos interconectados que abarcan desde la planificación inicial de un envío hasta la entrega final al destinatario. Incluye la selección de rutas, la asignación de vehículos y conductores, las labores de carga y descarga, el monitoreo en tránsito y la gestión de incidencias.
        .row.align-items-center
          .d-none.d-xl-block.col-xl-1.p-0
            img(data-aos="fade-down")(src="@/assets/curso/temas/tema3/waves.svg" alt="Icono decorativo")
          .col-xl-11
            p.mb-0 La operación del transporte puede desarrollarse de diferentes formas, dependiendo del tipo de carga y de las condiciones del servicio. Cada modalidad define cómo se organiza el traslado, qué nivel de trazabilidad requiere y qué tan complejo resulta el seguimiento de la mercancía. Por ello, comprender los tipos de operación permite anticipar los retos asociados a la eficiencia, la coordinación y el cumplimiento de las entregas dentro de la cadena logística.

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-3
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/4.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Carga  completa (FTL).
            p.mb-4 El vehículo transporta exclusivamente la carga de un solo cliente. Simplifica la trazabilidad al centrarse en el seguimiento directo del camión y su entrega única.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-3
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/5.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Carga parcial (LTL).	
            p.mb-4 Se consolidan cargas de distintos clientes en un mismo vehículo. Requiere trazabilidad más detallada por paquete o bulto en cada punto de transbordo y consolidación.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-3
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/6.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Distribución urbana / última milla.
            p.mb-4 Etapa final de entrega en zonas urbanas, con alta densidad de destinos. Exige precisión y coordinación con los clientes.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-3
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/7.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Servicios de paquetería y mensajería.
            p.mb-4 Manejan un alto volumen de envíos pequeños. Demandan registro en tiempo real con múltiples puntos de control.
            
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema3/8.png', alt='Imagen decorativa')(data-aos="fade-up")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--2.rounded-4.overflow-hidden
          .row.align-items-center
            .d-none.d-lg-block.col-lg-3
              .d-flex.justify-content-center
                img.w-140(data-aos="fade-up")(src="@/assets/curso/temas/tema3/9.png" alt="Imagen decorativo")
            .col-sm-11.col-lg-9.ms-auto
              p.mb-0 Las características de la operación determinan el nivel de desempeño logístico y la necesidad de contar con sistemas de trazabilidad robustos. Estas permiten evaluar la efectividad de los procesos y facilitan la toma de decisiones estratégicas.

    .row.justify-content-center.mb-5.z-2.conectadas-horizontal
      .col-lg-10.position-relative
        .avatar.d-none.d-lg-block
          figure
            img(src="@/assets/curso/temas/tema3/37.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/35.svg", alt="alt").img100
            .col
              h5.mb-1 Eficiencia
              p.mb-0 Uso óptimo de recursos como tiempo, combustible y capacidad vehicular, detectando cuellos de botella y mejoras.

        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/36.svg", alt="alt").img100
            .col
              h5.mb-1 Flexibilidad
              p.mb-0 Capacidad de adaptación a cambios imprevistos en rutas, horarios o tipos de carga.

        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/35.svg", alt="alt").img100
            .col
              h5.mb-1 Tiempo de ciclo
              p.mb-0 Periodo desde la recolección de la carga hasta su entrega final. Es un indicador clave de desempeño.

        .crd.crd--avatarHorizontal.py-3.crd-bg-primario
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/36.svg", alt="alt").img100
            .col
              h5.mb-1 Confiabilidad
              p.mb-0 Cumplimiento constante de los compromisos de entrega y preservación de las condiciones de la carga.

        .crd.crd--avatarHorizontal.crd--last.py-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/35.svg", alt="alt").img100
            .col
              h5.mb-1 Adaptabilidad
              p.mb-0 Respuesta ante factores externos como clima, normativas o interrupciones en la cadena de suministro.


    Separador
    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2	Variables y rutas

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .d-none.d-lg-block.col-lg-2
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/10.png" alt="Imagen decorativo")
      .col-lg-10
        p Las operaciones logísticas están sujetas a múltiples factores que afectan su rendimiento, continuidad y seguridad. Estos factores, tanto internos como externos, deben gestionarse de forma proactiva mediante sistemas de trazabilidad, que permiten anticipar riesgos, ajustar decisiones en tiempo real y garantizar la confiabilidad en la entrega.
        p <strong>Las variables que impactan la operación, son los elementos que determinan la necesidad de un monitoreo constante y la capacidad de respuesta ante imprevistos:</strong>

    .fullwidth-bg.fullwidth-bg--3
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cuadros.bg-cuadros--6.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-6
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/11.png' alt='Ilustacion de acompañamiento')
            h4.mb-1.text-center Condiciones climáticas 
            p.text-center Factores como lluvia, nieve, calor extremo o neblina afectan la visibilidad, velocidad y seguridad, requiriendo monitoreo en tiempo real.

          .tarjeta.bg-cuadros.bg-cuadros--6.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-6
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/12.png' alt='Ilustacion de acompañamiento')
            h4.mb-1.text-center Tráfico y congestión vial  
            p.text-center Los retrasos en rutas urbanas o interurbanas obligan a la reprogramación dinámica de trayectos y entregas.

          .tarjeta.bg-cuadros.bg-cuadros--6.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-6
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/13.png' alt='Ilustacion de acompañamiento')
            h4.mb-1.text-center Disponibilidad y estado de la flota
            p.text-center Fallas mecánicas, mantenimientos programados o baja disponibilidad alteran la planificación y el cumplimiento del servicio.

          .tarjeta.bg-cuadros.bg-cuadros--6.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-6
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/14.png' alt='Ilustacion de acompañamiento')
            h4.mb-1.text-center Disponibilidad de conductores
            p.text-center Horas de servicio, descansos obligatorios y nivel de capacitación inciden en la continuidad y legalidad de la operación.

          .tarjeta.bg-cuadros.bg-cuadros--6.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-6
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/15.png' alt='Ilustacion de acompañamiento')
            h4.mb-1.text-center Normativas locales
            p.text-center Restricciones de horario y acceso vehicular en zonas urbanas o de carga/descarga deben integrarse a la planificación y monitoreo para evitar infracciones.

          .tarjeta.bg-cuadros.bg-cuadros--6.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-center.mb-3
              .col-6
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/16.png' alt='Ilustacion de acompañamiento')
            h4.mb-1.text-center Tipo y sensibilidad de la carga
            p.text-center Mercancías perecederas, frágiles o sensibles requieren trazabilidad específica mediante sensores de temperatura, humedad o impactos.
    

      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema3/34.png', alt='Imagen decorativa')(data-aos="fade-up")
    
    Separador
    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.3	Inventarios y procedimientos

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/17.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El control de inventarios en tránsito y la aplicación de procedimientos estandarizados son elementos clave para la eficiencia del sistema de trazabilidad. Estos permiten garantizar que la mercancía, aun estando fuera del almacén, conserve su valor, seguridad y seguimiento continuo. 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .d-none.d-lg-block.col-lg-1
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/18.svg" alt="Icono decorativo")
      .col-lg-11
        p Asimismo, los procedimientos operativos estándar (POES) aseguran uniformidad y confiabilidad en la recolección y validación de datos, fortaleciendo la calidad de la información y el cumplimiento normativo.
        p.mb-0 Los inventarios en tránsito se refieren a los productos que ya salieron del almacén de origen, pero aún no han llegado a su destino final, lo que permite controlar: 

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-md-6.col-lg-4.mb-4.mb-xl-0
        .p-4.bg-cuadros.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-4.col-xl-3
              img.mb-4(data-aos="fade-down")(src="@/assets/curso/temas/tema3/19.svg" alt="Imagen decorativo")
          h5.mb-1 Visibilidad  en tiempo real	
          p.mb-3 Permite conocer ubicación y estado de la mercancía durante todo el recorrido.	
      .col-md-6.col-lg-4.mb-4.mb-xl-0
        .p-4.bg-cuadros.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-4.col-xl-3
              img.mb-4(data-aos="fade-down")(src="@/assets/curso/temas/tema3/20.svg" alt="Imagen decorativo")
          h5.mb-1 Control de <em>stock</em>	
          p.mb-3 Gestiona y contabiliza inventario fuera de bodega como activo empresarial.

      .col-md-6.col-lg-4.mb-4.mb-xl-0
        .p-4.bg-cuadros.rounded-4.overflow-hidden.h-100
          .row.justify-content-end
            .col-4.col-xl-3
              img.mb-4(data-aos="fade-down")(src="@/assets/curso/temas/tema3/21.svg" alt="Imagen decorativo")
          h5.mb-1 Reducción de riesgos
          p.mb-3 Disminuye pérdidas, robos o daños mediante alertas y monitoreo continuo.

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .p-4.py-lg-0.bg-cuadros.bg-cuadros--2.rounded-4.overflow-hidden
          .row.align-items-center
            .d-none.d-lg-block.col-lg-3
              .d-flex.justify-content-center
                img.w-140(data-aos="fade-up")(src="@/assets/curso/temas/tema3/22.png" alt="Imagen decorativo")
            .col-sm-11.col-lg-9.ms-auto
              p.mb-0 En cuanto a los Procedimientos Operativos Estándar (POES), son instrucciones documentadas que orientan cada tarea crítica en la operación de transporte, fortaleciendo la trazabilidad.

    .row.justify-content-center.align-items-stretch.mb-4.z-2
      .col-xl-8
        .p-3.rounded-4.bg-primario-p5.overflow-hidden.mb-3
          .row.align-items-center
            .d-none.d-lg-block.col-lg-1
              figure
                img.w-45(data-aos="fade-down")(src="@/assets/curso/temas/tema3/23.svg" alt="Icono decorativo")
            .col-lg-10
              h5.mb-1 Consistencia  en la captura de datos
              p.mb-0 Garantiza registros uniformes y confiables, sin importar quién ejecute la tarea.
        .p-3.rounded-4.bg-primario-p5.overflow-hidden.mb-3
          .row.align-items-center
            .d-none.d-lg-block.col-lg-1
              figure
                img.w-45(data-aos="fade-down")(src="@/assets/curso/temas/tema3/24.svg" alt="Icono decorativo")
            .col-lg-10
              h5.mb-1 Reducción de errores humanos
              p.mb-0 Minimiza fallos en la manipulación o registro de información sensible.
        .p-3.rounded-4.bg-primario-p5.overflow-hidden.mb-3
          .row.align-items-center
            .d-none.d-lg-block.col-lg-1
              figure
                img.w-45(data-aos="fade-down")(src="@/assets/curso/temas/tema3/25.svg" alt="Icono decorativo")
            .col-lg-10
              h5.mb-1 Facilitación de auditorías
              p.mb-0 Establece un marco estandarizado que asegura cumplimiento normativo interno y externo.
      .d-none.d-xl-block.col-xl-3
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/26.png" alt="Icono decorativo")

    Separador
    #t_3_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.4 Puntos críticos en la operación

    .bloque-texto-g.bloque-texto-g--transparent.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Son aquellos momentos o lugares de la cadena logística en los que la trazabilidad se vuelve más vulnerable, ya sea por riesgos de pérdida, manipulación o retraso; o donde la captura de información es indispensable para garantizar el control, la seguridad y la continuidad de la operación. Implementar mecanismos de registro confiables en estos puntos permite asegurar la integridad de los datos, fortalecer la transparencia y cumplir con normativas nacionales e internacionales.

    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-5
      .col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/28.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Transbordos
            p.mb-4 La carga cambia de vehículo o de modalidad de transporte. Riesgo alto de pérdida o confusión; exige registros de custodia y estado.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/29.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Aduanas y controles fronterizos
            p.mb-4 Momentos de inspección oficial. Requieren información precisa para agilizar trámites, evitar sanciones y mantener legalidad.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/30.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Cambios de custodia
            p.mb-4 Transferencia de responsabilidad legal entre actores (proveedor, transportista, distribuidor y cliente). Necesita registros claros de tiempo y estado.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/31.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Carga y descarga
            p.mb-4 Alta manipulación de mercancía. Deben registrarse entradas, salidas, cantidades y posibles daños en tiempo real.

          .tarjeta.bg-cuadros.bg-cuadros--5.px-4.pt-5.factores-slider__tarjeta
            .row.justify-content-end.mb-2
              .col-4
                img.factores-slider__icon.mb-4(src='@/assets/curso/temas/tema3/32.svg' alt='Ilustacion de acompañamiento')
            h4.mb-1 Almacenes de consolidación / desconsolidación
            p.mb-4 Agrupación o separación de cargas. Requiere control individualizado para no perder trazabilidad por unidad de envío.
            
      .d-none.d-xl-block.col-xl-4
        figure
          img(src='@/assets/curso/temas/tema3/33.png', alt='Imagen decorativa')(data-aos="fade-left")

</template>

<script>
export default {
  name: 'Tema3',
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
